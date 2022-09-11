

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

/**
 * Renders either MapPanel (W0 really, a simple wrapper), MapPanel, or ThreePanelV1
 * or some other MapPanel.
 *
**/
const WrappedMapPanel = React.forwardRef((props, ref) => {
  logg(props, 'WrappedMapPanel')
  // const { map } = props

  switch (props.map.config.map_panel_type) {

    case C.map_panel_types.Equirectangular:
      return <W0 ref={ref} className="Equirectangular4" ><Equirectangular4 {...props} /></W0>

    case C.map_panel_types.MapPanel:
      return <W0 ref={ref} className="WrappedMapPanel" ><MapPanel withZoom={false} {...props} /></W0>

    case C.map_panel_types.ThreePanelV1:
      switch (props.slug) {

        // legacy, remove all three: _vp_ 2022-08-13
        case 'threev1':
          return <W0><ThreePanelV1 {...props} /></W0>
        case 'threev2':
          return <W0><ThreePanelV2 {...props} /></W0>
        case 'threev3':
          return <W0><ThreePanelV3 {...props} /></W0>

        default:
          return <W0><ThreePanelDesktop {...props} /></W0>
      }

    case C.map_panel_types.TabiversePlanet: // markers are objects
      return <W0><TabiversePlanet {...props} /></W0>

    case C.map_panel_types.ThreePanelV4: // markers are objects
      return <W0><ThreePanelV4 {...props} /></W0>

    case C.map_panel_types.GoogleMaps:
      return <W0><GoogleMaps {...props} /></W0>

    default:
      logg(null, `This map_panel_type is not implemented! ${props.map.config.map_panel_type}`)
      return <W0 ref={ref} className="WrappedMapPanel" ><MapPanel {...props} /></W0>
  }
})
export default WrappedMapPanel

