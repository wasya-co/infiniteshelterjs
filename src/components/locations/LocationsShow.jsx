import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

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

const B = styled.div`
  padding: 0.5em;
`
// the divider
const B1 = styled.div`
  padding: 0.5em 0;
`
const Breadcrumbs = (props) => {
  logg(props, 'Breakcrumbs')

  const history = useHistory()

  const out = []
  props.breadcrumbs.map((b, idx) => {
    if (idx+1 === props.breadcrumbs.length) {
      // last one
      out.push(<B>{b.name}</B>)
    } else {
      out.push(<B
        style={{ textDecoration: 'underline' }}
        onClick={() => history.push(`/en/locations/show/${b.slug}`) }
      >{b.name}</B>)
      out.push(<B1>&gt;</B1>)
    }
  })
  return <div style={{
    zIndex: 200,
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'white',

    display: 'flex',
  }} >{out}</div>
}
const W1 = styled.div`
  // position: relative;
`
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

  return <div style={{
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 20px)',
    zIndex: 200,
    background: 'white',
    padding: '5px',

    display: 'flex',
    flexDirection: 'column',
  }} >
    <span onClick={zoomIn} >[+]</span>
    <span onClick={zoomOut} >[-]</span>
    <span onClick={zoomReset} >[1]</span>
  </div>
}
const Div1 = styled.div`
  // border: 3px solid green;

  text-align: center;
  display: block;

  position: relative;
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
    <Breadcrumbs {...props.location} />
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

              // maxWidth: `${location.w/zoom}px`,
              // maxHeight: `${location.h/zoom}px`,
              // width: 'auto', height: 'auto',

              width: `${location.w/zoom}px`,
              height: `${location.h/zoom}px`,
            }}
          />
          { markers }
        </Div3>
      </Div1>

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
    const token = localStorage.getItem("jwt_token")
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) return null;
      setLocation(res.data.map)
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])

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