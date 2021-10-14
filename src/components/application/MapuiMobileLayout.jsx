
import React from 'react'
import styled from 'styled-components'

const MapuiContainer = styled.div`
  background: white;

  overflow: hidden;
  // margin: 10px;
  height: calc(100vh - ${p => p.borderWidth*2}px - ${p => p.bottomDrawerOpen ? `${p.bottomDrawerHeight - p.borderWidth/2}px` : '0px' });
`

export {
  MapuiContainer,
}

const MapuiMobileLayout = (props) => {
  return <MapuiContainer {...props} />
}

export default MapuiMobileLayout
