import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Breadcrumbs } from "./"
import {
  Collapsible, CollapsibleContext,
  logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}


const W1 = styled.div`
  position: relative;
`
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
  max-height: 80vh;
`
const Div3 = styled.div``
const Map2 = (props) => {
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

  return (<W1>
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
  </W1>)
}

const Marker = styled.div`
  margin: 10px;
  width: 20vw;
`;

const Markers = (props) => {
  logg(props, 'Markers')
  const history = useHistory()

  const out = []
  props.markers.map((m, idx) => {
    out.push(<Marker key={idx}
      onClick={() => m.url ? window.location.href=m.url : history.push(`/en/locations/show/${m.slug}`) }
    >
      <img src={m.title_img_path} /><br />
      {m.name}
    </Marker>)
  })
  return <div style={{ display: 'flex', flexWrap: 'wrap' }} >{out}</div>
}

const Row = styled.div`
  // border: 2px solid cyan;

  display: flex;
  flex-direction: column;

  overflow: scroll;
  height: calc(100vh - 40px); /* @TODO: why 40px?! */
`;


const LocationsShow = (props) => {
  logg(props, 'LocationsShow')

  const { match } = props;

  const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(null)

  const mountedRef = useRef('init')

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("jwt_token");
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (!mountedRef.current) return null;
      setLocation(res.data.map)
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
    })

    return () => {
      // mountedRef.current = false;
    }
  }, [ match.params.slug ])

  return (<Row>

    { loading && <i>Loading...</i> }
    { location && <Breadcrumbs {...location} /> }
    { /* <Collapsible slug="map-sec" label="Map" >
      { location && <Map2 location={location} /> }
    </Collapsible> */ }
    <Collapsible slug="descr-sec" label="Description" >
      { location && <Description item={location} /> }
    </Collapsible>
    { location && location.markers.length && <Collapsible slug="markers-sec" label="Markers">
      <Markers markers={location.markers} />
    </Collapsible> || null }
    { location && location.newsitems.length && <Collapsible slug="news-sec" label="Newsitems">
      <Newsitems newsitems={location.newsitems} />
    </Collapsible> || null }

  </Row>)
}

export default LocationsShow;