
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import {
  Breadcrumbs,
  RatedRestrictionModal,
  UnlockModal,
} from "$components/application"
import { Newsitems } from "$components/newsitems"
import {
  MarkersList,
} from '$components/markers'
import {
  Collapsible,
  LongLine,
  TwofoldContext,
} from "$components/TwofoldLayout"
import {
  C, Card, ChevronLeft, ChevronRight,
  FlexCol, FlexRow,
  inflector,
  Loading,
  logg,
  MenuIcon,
  useApi, useWindowSize,
} from "$shared"
import {
  ItemModal,
  MapPanel, MapPanelNoZoom,
  WrappedMapPanel,
} from "./"

/* C */

/* D */

// @TODO: move Description into shared ?
const _D = styled.div`
`;
const Description = ({ item={} }) => {
  if (!item.description) { return }

  return <_D className="Description" dangerouslySetInnerHTML={{ __html: item.description }} />
}

/* H */
const _Handle = styled.div`
  // border: 1px solid cyan;

  position: fixed;
  top: 5px;
  left: ${p => p.foldedLeft
    ? '10px'
    : p.foldedRight
    ? '98%'
    : `calc(${p.twofoldPercent*100}% - 0.5ex)` };

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
  return <_Handle className="Handle" {...{ foldedLeft, foldedRight, twofoldPercent }}
    onMouseMove={onMouseMove}
    onMouseDown={onMouseDown}
    onMouseLeave={onMouseUp}
    onMouseUp={onMouseUp}
    style={{
      pointer: 'cursor',
    }}
  >
    {/* <MenuIcon /> */}
    <ChevronLeft onClick={foldLeft} />
    <ChevronRight onClick={foldRight} />
    { [C.foldedRight, C.foldedLeft].indexOf(folded) !== -1  && <LongLine orientation={C.vertical} /> }
  </_Handle>
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
const _Left = styled.div`
  background: ${p => p.theme.colors.background};
  flex: ${p => p.foldedRight ? '99%' : `${p.twofoldPercent*100}%` };
  overflow: hidden;

  display: flex;
  flex-direction: column;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;
const Left = ({ children, ...props }) => {
  const {
    bottomDrawerOpen,
    folded, foldedLeft, foldedRight,
    twofoldPercent,
  } = useContext(TwofoldContext)
  if (foldedLeft) { return null }
  return <_Left className='Left' {...{ bottomDrawerOpen, foldedRight, twofoldPercent }} >
    { children }
  </_Left>
}


/* R */
const _Right = styled.div`
  background: ${p => p.theme.colors.background};
  position: relative;

  padding: 0 0 0 1em;
  flex: ${p => p.foldedRight ? '2%' : `${(1-p.twofoldPercent)*100}%` };
  overflow-x: hidden;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;
const Right = ({ children, ...props }) => {
  const {
    bottomDrawerOpen,
    folded, foldedLeft, foldedRight,
    twofoldPercent,
  } = useContext(TwofoldContext)
  return <_Right className='Right' {...{ bottomDrawerOpen, foldedRight, twofoldPercent }} >
    <Handle />
    { children }
  </_Right>
}

const Row = styled.div`
  // border: 1px solid magenta;

  display: flex;
  position: relative;
`;


/**
 * LocationsShow Static
 * _vp_ 2022-09-06
 *
 * @TODO: re-introduce MenuIcon in Handle. _vp_ 2022-09-01
 * @TODO: can this be shared across desktop and mobile? _vp_ 2022-09-06
 * @TODO: location.is_purchased doesn't look right... _vp_ 2022-09-06
**/
const LocationsShow = (props) => {
  // logg(props, 'LocationsShow')
  const {
    location,
    match,
  } = props
  if (!location) { return null }

  const {
    bottomDrawerOpen,
    editorMode,
    folded, setFolded, foldedLeft, foldedRight,
    itemToUnlock, setItemToUnlock,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    ratedConfirmation, setRatedConfirmation, // @TODO: move out of this context?
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'LocationsShowUsedTwofoldContext')

  const api = useApi()
  const [ windowWidth, windowHeight ] = useWindowSize()
  const [ loading, setLoading ] = useState(false)

  const mountedRef = useRef(C.ref.init)
  const showItemRef = useRef(C.ref.init)
  const mapPanelRef = useRef(null)

  // Set ?ItemToUnlock
  useEffect(() => {
    if (location) {
      // logg(location, 'LocationsShow.location')

      if (location.is_premium && !location.is_purchased) {
        setItemToUnlock({ closable: false, item_type: 'Location', ...location })
      }
    }
  }, [ location ])

  // Set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  return <Row>

    <Left >
      <Breadcrumbs {...location} />
      <WrappedMapPanel
        map={location.map ? location.map : location}
        ref={mapPanelRef}
        slug={match.params.slug}
      />
    </Left>

    <Right >

      { /* Markers */ }
      { location.markers.length && <Collapsible
          config={{ collapsible: false }}
          slug={C.collapsible.markers}
          variant={C.variants.transparent}
      >
        <MarkersList markers={location.markers}
          variant={C.variants.bordered}
        />
      </Collapsible> || null }

      { /* Description */ }
      { location.description && <Collapsible
          className='Description'
          label={location.labels.description}
          slug={C.collapsible.description}
          variant={C.variants.bordered}
      >
        <Description item={location} />
      </Collapsible> || null }

      { /* Newsitems */ }
      { location.newsitems.length && <Newsitems
          variant={C.variants.bordered} newsitems={location.newsitems}
      /> || null }

    </Right>

    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading && <Loading /> }

    <UnlockModal />

  </Row>
}
LocationsShow.propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
}

export default LocationsShow
