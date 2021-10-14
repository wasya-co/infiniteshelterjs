import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Breadcrumbs, MapNoZoom, MarkersList, } from "./"
import {
  C, Collapsible, CollapsibleContext,
  logg, request, S, TwofoldContext,
  useWindowSize,
  ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

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

const Div1 = styled.div`
  // border: 2px solid brown;

  text-align: center;
  display: block;

  position: relative; /* required for mobile, so that zoomCtrl, etc are inside the collapsible div */

  overflow: scroll;
  max-height: 80vh; // @TODO: huh?
`;

const Root = styled.div`
  // border: 1px solid yellow;

  margin-top: 2em;
`;

const LocationsShowMobile = (props) => {
  logg(props, 'LocationsShowMobile')

  const { match } = props

  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)

  const mountedRef = useRef('init')

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("jwt_token");
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (!mountedRef.current) { return null }

      setLocation(res.data.map)
      logg(res.data.map, 'setLocation')

      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
    })

    return () => {
      // mountedRef.current = false;
    }
  }, [ match.params.slug ])

  // @TODO: this can probably be much improved. Take either markers of location.map, or location itself.
  const markers = location ? location.markers.length ? location.markers : location.map.markers : null

  return (<Root className='Root' >

    { loading && <i>Loading...</i> }
    { location && <Breadcrumbs {...location} /> }
    { location && <CollapsibleNoMargins slug="map-sec" label={location.labels.map} className="CollapsibleNoMargins" >
      { location && <MapNoZoom map={location.map || location} /> }
    </CollapsibleNoMargins> }
    { /* @TODO: recursively render map (not location) as appropriate all around in these collapsibles. */ }
    { markers && markers.length && <Collapsible slug="markers-sec" label={location.labels.marker} >
      <MarkersList markers={markers} />
    </Collapsible> || null }
    { location && location.description && <Collapsible config={location.config.description} slug={C.collapsible.descr} label={location.labels.description} >
      <Description item={location} />
    </Collapsible> || null }
    { location && location.newsitems.length && <Collapsible slug="news-sec" label={location.labels.newsitems} >
      <Newsitems newsitems={location.newsitems} />
    </Collapsible> || null }

  </Root>)
}

export default LocationsShowMobile









/* This is now in file MapPanel.jsx */
/* const Map2 = (props) => {
  logg(props, 'Map2')
  const { location } = props

  const { zoom, setZoom } = useContext(TwofoldContext)

  const div1Ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    div1Ref.current.scrollIntoView({ block: 'end' })
  }, [])

  const markers = []
  props.location.markers.map((m, idx) => {
    const out = <div
      key={idx}
      onClick={() => history.push(`/en/locations/show/${m.slug}`) }
      style={{
        position: 'absolute',
        top: m.y/zoom,
        left: m.x/zoom,
      }} ><img src={m.img_path} style={{
        display: 'block',
        maxWidth: `${m.w/zoom}px`,
        maxHeight: `${m.h/zoom}px`,
        width: 'auto', height: 'auto',
      }} /></div>
    markers.push(out)
  })

  return (<MapWrapper className="MapWrapper" >
    <ZoomCtrl />
    <Div1 ref={div1Ref} >
      <Div3 style={{
          // border: '2px solid cyan',

          display: 'inline-block',
          position: 'relative',
          width: `${location.w/zoom}px`,
          height: `${location.h/zoom}px`,
      }} >
        <img
          src={location.img_path}
          style={{
            width: `${location.w/zoom}px`,
            height: `${location.h/zoom}px`,
          }}
        />
        { markers }
      </Div3>
    </Div1>
  </MapWrapper>)
} */
