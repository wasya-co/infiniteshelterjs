
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { TwofoldContext } from "$components/TwofoldLayout"
import {
  C, logg, ZoomContext
} from "$shared"

const MapuiContainer = styled.div`
  // border: 1px solid cyan;
  // background: white;

  overflow-y: auto;

  height: calc(100vh
    - ${p => p.theme.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;

export {
  MapuiContainer,
}

const MapuiMobileLayout = (props) => {
  const { bottomDrawerOpen } = useContext(TwofoldContext)
  return <MapuiContainer {...props} {...{ bottomDrawerOpen }} />
}

export default MapuiMobileLayout
