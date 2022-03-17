
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { C, logg, request, S, TwofoldContext, ZoomContext } from "$shared"

const MapuiContainer = styled.div`
  // border: 1px solid cyan;
  // background: white;

  overflow-y: auto;

  height: calc(100vh
    - ${p => p.bottomDrawerOpen ? p.bottomDrawerOpenHeight : p.bottomDrawerClosedHeight });
`;

export {
  MapuiContainer,
}

const MapuiMobileLayout = (props) => {
  const { bottomDrawerOpen } = useContext(TwofoldContext)
  return <MapuiContainer {...props} {...{ bottomDrawerOpen }} {...S} />
}

export default MapuiMobileLayout
