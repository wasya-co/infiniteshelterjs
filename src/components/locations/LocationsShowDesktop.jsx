
import { Toast } from "@capacitor/toast"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import config from 'config'

import {
  Breadcrumbs,
  UnlockModal,
} from "$components/application"
import { CitiesList } from "$components/cities"
import { Newsitems } from "$components/newsitems"
import { LongLine } from "$components/TwofoldLayout"
import {
  MarkersList,
  MarkerModal, MarkerContext, MarkerContextProvider,
} from '$resources/markers'
import {
  ReportForm,
} from '$resources/reports'
import {
  C, Card, ChevronLeft, ChevronRight, Collapsible,
  FlexCol, FlexRow,
  inflector,
  Loading, logg,
  MenuIcon,
  request,
  TwofoldContext,
  useApi, useWindowSize,
} from "$shared"
import {
  ItemModal,
  MapPanel, MapPanelNoZoom,
  RatedRestrictionModal,
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
 *
 * @TODO: re-introduce MenuIcon in Handle. _vp_ 2022-09-01
**/
const LocationsShowDesktop = (props) => {
  logg(props, 'LocationsShowDesktop')
  const {
    location: _location,
    match,
  } = props

  const {
    bottomDrawerOpen,
    editorMode,
    folded, setFolded,
    itemToUnlock, setItemToUnlock,
    location, setLocation,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    ratedConfirmation, setRatedConfirmation,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  // @TODO: the TwofoldContext is absent from next_js, re-add it.
  // if (_location) setLocation(_location) // next_js

  const api = useApi()
  const [ windowWidth, windowHeight ] = useWindowSize()

  const [ loading, setLoading ] = useState(false)
  const [ markers, setMarkers ] = useState([])

  const mountedRef = useRef(C.ref.init)
  const showItemRef = useRef(C.ref.init)
  const mapPanelRef = useRef(null)

  // next_js, testing @TODO: remove
  let testNames = []
  if (_location) {
    logg(_location, 'ze _location')
    _location.newsitems.map((n, idx) => {
      testNames.push(n.name)
    })
  }

  // Set Markers and ?ItemToUnlock
  useEffect(() => {
    if (location) {
      // logg(location, 'LocationsShowDesktop.location')

      document.title = `${location.name} - ${config.siteTitle}`

      setMarkers(location.markers)

      if (location.is_premium && !location.is_purchased) {
        setItemToUnlock({ closable: false, item_type: 'Location', ...location })
      }
    }
  }, [ location ])

  // Load the map
  // @TODO: What if I'm accessing a gallery I haven't bought access to?
  useEffect(() => {

    api.getLocation({ slug: match.params.slug }).then(r => {
      setLocation(r)

      // @TODO: test-drive
      // @TODO: this is absent in next_js
      if (r.rated === C.rated.nc17 && !ratedConfirmation) {
        setRatedConfirmation(false)
      }

      mountedRef.current = match.params.slug
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])

  // Set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  // load showItem if any
  // @TODO: this makes too many calls, improve performance
  // @TODO: move to api
  // @TODO: this is duplicated between LocationsShowDesktop,Mobile - consolidate!
  useEffect(() => {
    if (!match.params.item_type) { return }

    const itemType = inflector.classify(match.params.item_type)
    switch (itemType) {
      case C.item_types.gallery:
        api.getGallery(match.params.item_slug).then(setShowItem)
        break
      case C.item_types.report:
        api.getReport(match.params.item_slug).then(setShowItem)
        break
      default:
        logg(itemType, 'cannot get this item type')
    }
  }, [ match.params.item_slug, match.params.item_type ])

  const foldedLeft = folded === C.foldedLeft
  const foldedRight = folded === C.foldedRight

  return <Row><MarkerContextProvider >

    <div className='testNames'>{testNames}</div>

    { !foldedLeft && <Left className='Left'
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

        { /* Markers */ }
        { markers && markers.length && <Collapsible
            config={{ collapsible: false }}
            slug={C.collapsible.markers}
            variant={C.variants.transparent}
        >
          <MarkersList markers={markers}
            variant={C.variants.bordered}
          />
        </Collapsible> || null }

        { /* Features? */ }

        { /* Tags */ }
        {/* { location && <FlexRow className='Tags' style={{ marginBottom: '1em', flexWrap: 'wrap' }} >
          { location.tags.map((tag) => <Card >{tag.name}</Card> )}
        </FlexRow> } */}

        { /* Actions */ }
        { editorMode && <FlexRow className='Actions' style={{ marginBottom: '1em' }} >
          <Card onClick={() => setShowItem({ action: C.actions.new, item_type: C.item_types.report }) } >
            + Report
          </Card>
          <Card>
            + Photo
          </Card>
          <Card>
            + Gallery
          </Card>
          <Card>
            + File
          </Card>
          {/* <Card> + Spreadsheet </Card> */}
          <Card> + Marker </Card>
        </FlexRow> }

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
        { location.newsitems && location.newsitems.length && <Newsitems
            variant={C.variants.bordered} newsitems={location.newsitems}
        /> || null }

      </F> || null }
    </Right>

    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading && <Loading /> }
    { !ratedConfirmation && <RatedRestrictionModal {...{ ratedConfirmation, setRatedConfirmation, }} /> }
    { <MarkerModal /> }

    <UnlockModal />

  </MarkerContextProvider></Row>
}

export default LocationsShowDesktop
