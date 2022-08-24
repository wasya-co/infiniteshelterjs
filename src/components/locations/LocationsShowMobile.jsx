import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  Breadcrumbs,
  Metaline,
} from "$components/application"
import { Newsitems } from "$components/newsitems"
import {
  ItemModal,
  MapPanel, MapPanelNoZoom,
  WrappedMapPanel,
} from "./"
import {
  MarkersList,
} from '$resources/markers'
import {
  C, Collapsible, CollapsibleContext,
  inflector,
  Loading, logg,
  request,
  S,
  TwofoldContext,
  useApi, useWindowSize,
  ZoomContext,
} from "$shared"

const Div1 = styled.div`
  // border: 2px solid brown;

  text-align: center;
  display: block;

  position: relative; /* required for mobile, so that zoomCtrl, etc are inside the collapsible div */

  overflow: scroll;
  max-height: 80vh; // @TODO: huh?
`;

const CollapsibleNoMargins = styled(Collapsible)`
  margin: 0;
  padding: 0;
`;

const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`;
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

const MapWrapper = styled.div`
  // border: 1px solid red;

  position: relative;
`;


/* W */

const W = styled.div`
  // border: 1px solid yellow;
`;

/* Z */

const ZoomCtrlRoot = styled.div`
  // border: 1px solid orange;

  position: absolute;
  top: 0;
  left: calc(100vw - 80px);
  background: white;
  padding: 5px;

  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const ZoomCtrl = (props) => {
  const { zoom, setZoom } = useContext(TwofoldContext)

  const zoomIn = () => {
    setZoom(zoom/2)
  }
  const zoomOut = () => {
    setZoom(zoom*2)
  }
  const zoomReset = () => {
    setZoom(1)
  }

  return <ZoomCtrlRoot >
    <span onClick={zoomIn} >[+]</span>
    <span onClick={zoomOut} >[-]</span>
    <span onClick={zoomReset} >[1]</span>
  </ZoomCtrlRoot>
}

/**
 * LocationsShowMobile
 *
 */
const LocationsShowMobile = (props) => {
  logg(props, 'LocationsShowMobile')
  const {
    match,
  } = props

  const {
    bottomDrawerOpen,
    folded, setFolded,
    location, setLocation,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  const [ windowWidth, windowHeight ] = useWindowSize()

  const [loading, setLoading] = useState(false)
  const api = useApi()

  const mountedRef = useRef('init')
  const mapPanelRef = useRef(null)
  const history = useHistory()

  // Get the location data
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt_token")
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) return null

      if (!res.data.map) {
        setLoading(false)
        showToast('could not get Location')
        return null
      }

      setLocation(res.data.map)
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).catch((e) => {
      logg(e, 'e13')
      history.push('/')
    }).finally(() => {
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])


  // @TODO: this can probably be much improved. Take either markers of location.map, or location itself.
  // @TODO: why is this a redirect to /null ?!
  let markers = []
  if (location) {
    markers = location.markers // location ? location.markers.length ? location.markers : location.map.markers : null
  }

  // set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  // This is to not have MapPanel, only MapPanelNoZoom on mobile _vp_ 2022-03-16
  let map
  if (location) {
    map = location.map || location
    map = { ...map, config: { ...map.config, map_panel_type: C.map_panel_types.MapPanelNoZoom } }
  }

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

  return (<W className='LocationsShowMobile' >

    { loading && <i>Loading...</i> }

    { location && <Breadcrumbs {...location} /> }
    { location && <Collapsible
        label={location.labels.map}
        slug={C.collapsible.map}
    ><WrappedMapPanel
        map={map}
        ref={mapPanelRef}
        slug={match.params.slug}
        withZoom={false}
      />
    </Collapsible> }

    { /* Right-hand side */ }

    { /* @TODO: recursively render map (not location) as appropriate all around in these collapsibles. */ }
    { markers && markers.length && <Collapsible
        label={location.labels.markers}
        slug={C.collapsible.markers}
    ><MarkersList markers={markers} />
    </Collapsible> || null }

    { location && location.description && <Collapsible
        config={location.config.description}
        label={location.labels.description}
        slug={C.collapsible.description}
    ><Description item={location} />
    </Collapsible> || null }

    { location && location.newsitems.length && <Collapsible
        label={location.labels.newsitems}
        slug="news-sec"
    ><Newsitems newsitems={location.newsitems} />
    </Collapsible> || null }

    { showUrl  && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
    { loading  && <Loading /> }

  </W>)
}

export default LocationsShowMobile
