

import { CircularProgress as _CircularProgress } from '@material-ui/core'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import {
  MapPanel,
} from "./"
import GoogleMaps from './GoogleMaps'
import {
  Equirectangular4,
  TabiversePlanet, ThreePanelV1, ThreePanelV2, ThreePanelV3, ThreePanelV4, ThreePanelDesktop,
} from "$components/locations3d"
import {
  C,
  logg,
} from "$shared"

/* W */
const W0 = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

// full-width
const FW = styled.div`
  // border: 1px solid red;
  // position: absolute;
  // top: 0;
  // right: 0;
  // left: 0;
  // bottom: 10px;
`;

/**
 * Renders either MapPanel (W0 really, a simple wrapper), or ThreePanelV1, etc.
 * @TODO: on on MapPanel2D, markers don't scale well but should. Also, re-review z-index of markers. _vp_ 2022-09-13
 *
**/
const WrappedMapPanel = React.forwardRef((props, ref) => {
  logg(props, 'WrappedMapPanel')
  // const { map } = props

  if (!props.map) { return null }

  // // Testing overrides
  // switch (props.slug) {
  //   case 'root':
  //     return <FW ref={ref} ><ThreePanelDesktop {...props} /></FW>
  // }

  switch (props.map.config?.map_panel_type) {

    case C.map_panel_types.Equirectangular:
      return <W0 ref={ref} className="Equirectangular4" ><Equirectangular4 {...props} /></W0>

    case C.map_panel_types.MapPanel:
      return <W0 ref={ref} className="WrappedMapPanel" ><MapPanel withZoom={false} {...props} /></W0>

    case C.map_panel_types.ThreePanelV1:
      return <ThreePanelDesktop {...props} />

    case C.map_panel_types.ThreePanelV1Fullscreen:
      return <FW ref={ref} className='FW' ><ThreePanelDesktop {...props} /></FW>

    case C.map_panel_types.TabiversePlanet: // markers are objects
      return <W0><TabiversePlanet {...props} /></W0>

    case C.map_panel_types.ThreePanelV4: // markers are objects
      return <W0><ThreePanelV4 {...props} /></W0>

    case C.map_panel_types.GoogleMaps:
      return <W0><GoogleMaps {...props} /></W0>

    default:
      return <W0 ref={ref} className="WrappedMapPanel" ><MapPanel {...props} /></W0>
  }
})
export default WrappedMapPanel

