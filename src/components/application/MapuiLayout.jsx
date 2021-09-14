
import React from 'react'
import styled from 'styled-components'

const borderWidth = 20
const bottomDrawerHeight = 100
const MapuiContainer = styled.div`
  background: yellow;

  overflow: hidden;
  margin: 10px;
  height: calc(100vh - ${p => p.borderWidth*2}px - ${p => p.bottomDrawerOpen ? `${p.bottomDrawerHeight - p.borderWidth/2}px` : '0px' });
`

export {
  MapuiContainer,
}

const MapuiLayout = (props) => {
  return <MapuiContainer {...props} {...{ bottomDrawerHeight, borderWidth }} />
}

export default MapuiLayout
