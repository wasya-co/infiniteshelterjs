import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"
import "./locations.scss"

const Left = styled.div`
  // border: 1px solid blue;

  background: #cecece;
  flex: 50%;
  overflow: scroll;
  height: calc(100vh - 40px - ${p => p.bottomDrawerOpen ? `${p.bottomDrawerHeight-p.borderWidth}px` : '0px' });
`

const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

const W1 = styled.div`
  // position: relative;
`
const ZoomCtrl = (props) => {
  const { zoom, setZoom } = useContext(ZoomContext)

  const zoomIn = () => {
    setZoom(zoom/2)
  }
  const zoomOut = () => {
    setZoom(zoom*2)
  }

  return <div style={{
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 80px)',
    zIndex: 200,
    background: 'white',
    padding: '5px',
  }} >
    <span onClick={zoomIn} >[+]</span>
    <span onClick={zoomOut} >[-]</span>
    <span>[reset]</span>
  </div>
}
const Div1 = styled.div`
  text-align: center;
  position: relative;
`
const Map2 = (props) => {
  logg(props, 'Map2')

  const { location } = props
  const [ zoom, setZoom ] = useState(1)

  const w = 2000;
  const h = 2000; // @TODO: soft-code

  const markers = []
  props.location.markers.map((m, idx) => {
    const out = <div
      key={idx}
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
    <ZoomContext.Provider value={{ setZoom, zoom }} >
      <ZoomCtrl />
      <Div1>
        <img
          src={location.img_path}
          style={{ display: 'block',
            maxWidth: `${w/zoom}px`,
            maxHeight: `${h/zoom}px`,
            width: 'auto', height: 'auto',
            position: 'asbolute', top: 0, left: 0,
          }}
        />
        { markers }
      </Div1>
    </ZoomContext.Provider>
  </W1>)
}

const Markers = (props) => {
  logg(props, 'Markers')

  const out = []
  props.markers.map((m, idx) => {
    out.push(<div key={idx} style={{ margin: '10px' }} >
      <img src={m.title_img_path} /><br />
      {m.name}
    </div>)
  })
  return <div style={{ display: 'flex' }} >{out}</div>
}

const Right = styled.div`
  border: 1px solid green;

  padding: 1em;

  flex: 50%;
  overflow: scroll;
  height: calc(100vh - ${p => p.bottomDrawerOpen ? p.bottomDrawerHeight : p.borderWidth}px - ${p => 3*p.borderWidth}px);
`
const Row = styled.div`
  display: flex;
  position: relative;
`

const LocationsShow = (props) => {
  logg(props, 'LocationsShow')

  const { match } = props;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

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
      mountedRef.current = false;
    }
  }, [])

  const { borderWidth, bottomDrawerHeight } = S
  const { bottomDrawerOpen } = useContext(TwofoldContext)

  return (<Row>
    <Left {...{ borderWidth, bottomDrawerOpen, bottomDrawerHeight }} >

      { loading && <i>Loading Left...</i> }
      { location && <Map2 location={location} /> }
    </Left>
    <Right {...{ borderWidth, bottomDrawerOpen, bottomDrawerHeight }} >
      { loading && <i>Loading Right...</i> }
      { location && <F>
        <Markers markers={location.markers} />
        <Description item={location} />
        { location.newsitems && <Newsitems newsitems={location.newsitems} /> }
      </F> }
    </Right>
  </Row>)
}

export default LocationsShow;