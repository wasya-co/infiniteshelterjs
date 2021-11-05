import PropTypes from 'prop-types'
import React, { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { logg, TwofoldContext } from "$shared"

const Div1 = styled.div`
  // border: 3px solid green;

  text-align: center;
  display: block;

  position: relative;
  overflow: auto;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.theme.breadcrumbsHeight}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });

`;

/* Same size as the map image.
 * What scrolls is this div, not the image inside it.
 */
const Img = styled.div`
  // border: 2px solid cyan;
  display: inline-block;
  position: relative;
`;

const Root = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid red;

  position: relative;
  overflow: auto;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.theme.breadcrumbsHeight}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });

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
    right: 0,
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
  const { map, withZoom=true } = props

  const {
    bottomDrawerOpen, setBottomDrawerOpen,
    showUrl, setShowUrl,
    zoom, setZoom,
  } = useContext(TwofoldContext)

  const div1Ref = useRef(null)

  const history = useHistory()

  useEffect(() => {
    // div1Ref.current.scrollIntoView({ block: 'end', inline: 'center' })
    div1Ref.current.scroll({
      top: 200,
      left: 200,
      behavior: 'smooth',
     })
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

  return <Root {...{ bottomDrawerOpen }} debug={config.debug} className='MapPanel' >
    { withZoom && <ZoomCtrl /> }

    <Div1 {...{ bottomDrawerOpen }} >
      <Img ref={div1Ref} style={{
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
      </Img>
    </Div1>

  </Root>
}

MapPanel.propTypes = {
  map: PropTypes.object.isRequired,
  withZoom: PropTypes.bool, // @TODO: I don't like it, I'd like it to be inside a config obj.
}
export default MapPanel


