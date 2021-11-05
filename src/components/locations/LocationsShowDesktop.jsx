
import { CircularProgress as _CircularProgress } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Menu as MenuIcon, } from '@material-ui/icons'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import { CitiesList } from "$components/cities"
import { Breadcrumbs, ItemModal, MapPanel, MapPanelNoZoom, MarkersList } from "./"
import {
  ThreePanelV1, ThreePanelV2,
} from "$components/locations3"
import { Newsitems } from "$components/newsitems"
import { LongLine } from "$components/TwofoldLayout"
import {
  C, Collapsible,
  logg,
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
  logg(dragging, 'dragging')

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

// From: https://codepen.io/charlyarg/pen/GByKja
const _Circle = styled.div`
  position: fixed;
  z-index: 999;
  overflow: show;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 50px;
  height: 50px;
`;
const Loading = (p) => <_Circle><_CircularProgress /></_Circle>

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

/* W */

const W = styled.div`
  overflow: hidden;

  flex-grow: 1;
`;
const WrappedMapPanel = React.forwardRef((props, ref) => {
  switch (props.map.config.map_panel_type) {
    case C.map_panel_types.MapPanelNoZoom:
      return <W ref={ref} className="WrappedMapPanel" ><MapPanelNoZoom withZoom={false} {...props} /></W>
    case C.map_panel_types.ThreePanelV1:
      switch (props.slug) {
        case 'threev1':
          return <W><ThreePanelV1 {...props} /></W>
        case 'threev2':
          return <W><ThreePanelV2 {...props} /></W>
        default:
          throw 'this 3d panel is not implemented'
      }
    default:
      return <W ref={ref} className="WrapperMapPanel" ><MapPanel {...props} /></W>
  }
})

/**
 * Default
 */
const LocationsShowDesktop = (props) => {
  // logg(props, 'LocationsShowDesktop')
  const { match } = props

  const [ windowWidth, windowHeight ] = useWindowSize()

  const [ loading, setLoading ] = useState(false)
  const [ location, setLocation ] = useState(null)
  let markers
  if (location) {
    /*
     * @TODO: test-drive this.
     * * if map is different from location, the location's markers still show, not the (parent) map's
     */
    // markers = location.map ? location.map.markers : location.markers
    markers = location.markers
  }

  const {
    bottomDrawerOpen,
    folded, setFolded,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  const mountedRef = useRef('init')
  const mapPanelRef = useRef(null)

  // Load the map
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt_token")

    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) return null;
      setLocation(res.data.map)
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
  /*
   * @TODO: add arbitrary panel resizing
   */
  /*
   * @TODO: store resize config in localstorage
   */

  const foldedLeft = folded === C.foldedLeft
  const foldedRight = folded === C.foldedRight

  logg(match.params.slug, 'match')

  return <Row>
    { !foldedLeft && <Left
        className='Left'
        {...{ bottomDrawerOpen,
          folded, foldedLeft, foldedRight,
          twofoldPercent,
        } }
    >
      { location && <Breadcrumbs {...location} /> }
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

        { match.params.slug === C.locations.earth && <Collapsible
            label={"Cities"}
            slug={C.collapsible.extra1}
            variant={C.variants.transparent}
        >
          <CitiesList />
        </Collapsible> }

        { location.newsitems && location.newsitems.length && <Newsitems variant={C.variants.bordered} newsitems={location.newsitems} /> || null }

      </F> || null }
    </Right>

    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading && <Loading /> }

  </Row>
}

export default LocationsShowDesktop
