
import { Toast } from "@capacitor/toast"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import {
  Breadcrumbs,
  ItemModal,
  MapPanel, MapPanelNoZoom, MarkersList,
  RatedRestrictionModal,
  WrappedMapPanel,
} from "./"
import { CitiesList } from "$components/cities"
import { Newsitems } from "$components/newsitems"
import { LongLine } from "$components/TwofoldLayout"
import {
  C, ChevronLeft, ChevronRight, Collapsible,
  Loading, logg,
  MenuIcon,
  request,
  TwofoldContext,
  useWindowSize,
} from "$shared"

/* C */

/* D */

// @TODO: move into shared
const _D = styled.div`
  // border: 1px solid red;

  padding: 10px;
`;
const Description = ({ item={} }) => {
  if (!item.description) { return }

  return <_D dangerouslySetInnerHTML={{ __html: item.description }} />
}

/* H */
const WH = styled.div`
  // border: 1px solid cyan;

  position: fixed;
  top: 5px;
  left: ${p => p.foldedLeft
    ? '10px'
    : p.foldedRight
    ? '98%'
    : `calc(${p.twofoldPercent*100}% - 10px)` };

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 30px;
  height: 95%; /* @TODO: this needs to account for bottom being open */
`;
const Handle = (props) => {
  const [ w ] = useWindowSize()

  const [ offsetX, setOffsetX ] = useState()
  const [ dragging, setDragging ] = useState(false)

  const foldLeft = () => {
    if (folded === C.foldedRight) {
      setFolded(C.foldedCenter)
    } else {
      setFolded(C.foldedLeft)
    }
  }

  const foldRight = () => {
    if (folded === C.foldedLeft) {
      setFolded(C.foldedCenter)
    } else {
      setFolded(C.foldedRight)
    }
  }

  const {
    folded, setFolded,
    twofoldPercent, setTwofoldPercent,
  } = useContext(TwofoldContext)

  const onMouseDown = (e) => {
    setDragging(true)
    setOffsetX(e.pageX)
  }

  const onMouseMove = (e) => {
    if (!dragging) { return }
    if (e.clientX === 0) { return }
    const movedBy = e.clientX - offsetX
    if (movedBy === 0) { return }
    const movedByPercent = movedBy/w
    setTwofoldPercent(prev => prev + movedByPercent)
  }

  const onMouseUp = (e) => {
    setDragging(false)
    // document.removeEventListener('mousemove', onMouseMove)
    // document.removeEventListener('mousedown', onMouseDown)
  }

  const foldedLeft = folded === C.foldedLeft
  const foldedRight = folded === C.foldedRight

  // draggable="true"
  return <WH className="Handle" {...{ foldedLeft, foldedRight, twofoldPercent }}
    onMouseMove={onMouseMove}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseUp}
    onMouseUp={onMouseUp}
    style={{
      pointer: 'cursor',
    }}
  >
    <MenuIcon />
    <ChevronLeft onClick={foldLeft} />
    <ChevronRight onClick={foldRight} />
    { [C.foldedRight, C.foldedLeft].indexOf(folded) !== -1  && <LongLine orientation={C.vertical} /> }
  </WH>
}

/* I */
const IframeModal = (props) => {
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

  return (<Modal ariaHideApp={false} isOpen={!!showUrl} >
    <span onClick={() => {  setShowUrl(false) }} >[x]</span>

    <iframe height="100%" style={{ width: "100%", height: "100%" }} scrolling={"yes"} src={props.src}
      frameBorder="no" allowtransparency="true" allowFullScreen={true} >
    </iframe>
  </Modal>)
}

/* L */
const Left = styled.div`
  background: ${p => p.theme.colors.background};
  flex: ${p => p.foldedRight ? '99%' : `${p.twofoldPercent*100}%` };
  overflow: hidden;

  display: flex;
  flex-direction: column;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;


/* R */

const Right = styled.div`
  background: ${p => p.theme.colors.background};
  position: relative;

  padding: 0 0 0 1em;
  flex: ${p => p.foldedRight ? '2%' : `${(1-p.twofoldPercent)*100}%` };
  overflow-x: hidden;
  overflox-y: auto;
  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;

const Row = styled.div`
  // border: 1px solid magenta;

  display: flex;
  position: relative;
`;


/**
 * LocationsShowDesktop
 */
const LocationsShowDesktop = (props) => {
  // logg(props, 'LocationsShowDesktop')
  const { match } = props

  const [ windowWidth, windowHeight ] = useWindowSize()

  const [ loading, setLoading ] = useState(false)
  const [ location, setLocation ] = useState(null)
  const [ markers, setMarkers ] = useState([])

  const mountedRef = useRef('init')
  const mapPanelRef = useRef(null)

  const {
    bottomDrawerOpen,
    folded, setFolded,
    itemToUnlock, setItemToUnlock,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    ratedConfirmation, setRatedConfirmation,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  useEffect(() => {
    if (location) {
      setMarkers(location.markers)

      if (location.is_premium && !location.is_purchased) {
        setItemToUnlock({ closable: false, item_type: 'Location', ...location })
      }
    }
  }, [ location ])

  const showToast = async (msg) => await Toast.show({ text: msg })

  // Load the map
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt_token")

    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) { return null }
      if (!res.data.map) {
        setLoading(false)
        showToast('could not get Location')
        logg('smth fuxed')
        return null
      }

      setLocation(res.data.map)
      if (res.data.map.rated === C.rated.nc17 && !ratedConfirmation) { // @TODO: not test-driven, bad!
        setRatedConfirmation(false)
      }
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])

  // set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  const foldedLeft = folded === C.foldedLeft
  const foldedRight = folded === C.foldedRight

  return <Row>
    { !foldedLeft && <Left
        className='Left'
        {...{ bottomDrawerOpen,
          folded, foldedLeft, foldedRight,
          twofoldPercent,
        } }
    >
      { <Breadcrumbs {...location} /> }
      { location && <WrappedMapPanel
        map={location.map ? location.map : location}
        ref={mapPanelRef}
        slug={match.params.slug}
      /> }
    </Left> }

    <Right
        className='Right'
        {...{
          bottomDrawerOpen,
          folded, foldedLeft, foldedRight,
          twofoldPercent,
        } }
    >
      <Handle />
      { location && !foldedRight && <F>

        { markers && markers.length && <Collapsible
            config={{ collapsible: false }}
            slug={C.collapsible.markers}
            variant={C.variants.transparent}
        >
          <MarkersList markers={markers}
            variant={C.variants.bordered}
          />
        </Collapsible> || null }

        { location.description && <Collapsible
            label={location.labels.description}
            slug={C.collapsible.description}
            variant={C.variants.bordered}
        >
          <Description item={location} />
        </Collapsible> || null }

        { location.newsitems && location.newsitems.length && <Newsitems
            variant={C.variants.bordered} newsitems={location.newsitems}
        /> || null }

      </F> || null }
    </Right>

    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading && <Loading /> }
    { !ratedConfirmation && <RatedRestrictionModal {...{ ratedConfirmation, setRatedConfirmation, }} /> }

  </Row>
}

export default LocationsShowDesktop
