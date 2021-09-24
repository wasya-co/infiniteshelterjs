import React, { useContext, useEffect, useRef } from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, TwofoldContext } from "$shared"

const Div1 = styled.div`
  // border: 3px solid green;

  text-align: center;
  display: block;

  position: relative;
`;

const Div3 = styled.div`
`;

const W1 = styled.div`
  // position: relative;
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

  return <div style={{
    position: 'absolute',
    top: 0,
    left: 'calc(50% - 20px)',
    zIndex: 1,
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

const MapPanel = (props) => {
  // logg(props, 'MapPanel')
  const { map } = props

  const {
    showUrl, setShowUrl,
    zoom, setZoom,
  } = useContext(TwofoldContext)

  const div1Ref = useRef(null)
  const history = useHistory()

  useEffect(() => {
    div1Ref.current.scrollIntoView({ block: 'end' })
  }, [])

  const markers = []
  map.markers.map((m, idx) => {
    const out = <div
      key={idx}
      onClick={() => m.url ? setShowUrl(m.url) : history.push(`/en/locations/show/${m.slug}`) }
      style={{
        position: 'absolute',
        top: zoom > 1 ? ((m.y- m.centerOffsetY )/zoom) : ((m.y )/zoom- m.centerOffsetY),
        left: zoom > 1 ? ((m.x- m.centerOffsetX )/zoom) : ((m.x )/zoom- m.centerOffsetX),
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
            width: `${map.w/zoom}px`,
            height: `${map.h/zoom}px`,
        }} >
          <img
            src={map.img_path}
            style={{
              width: `${map.w/zoom}px`,
              height: `${map.h/zoom}px`,
            }}
          />
          { markers }
        </Div3>
      </Div1>

  </W1>)
}

export default MapPanel
