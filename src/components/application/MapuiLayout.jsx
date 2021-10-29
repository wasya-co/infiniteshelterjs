
import React from 'react'
import styled from 'styled-components'

const MapuiContainer = styled.div`
  // border: 1px solid purple;

  background: white;

  overflow: hidden;
  margin: 10px;
  height: calc(100vh - ${p => p.borderWidth*2}px - ${p => p.bottomDrawerOpen ? `${p.bottomDrawerHeight - p.borderWidth/2}px` : '0px' });
`

export {
  MapuiContainer,
}

const MapuiLayout = (props) => {
  return <MapuiContainer {...props} />
}

export default MapuiLayout
