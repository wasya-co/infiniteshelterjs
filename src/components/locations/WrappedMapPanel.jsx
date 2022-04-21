

import { CircularProgress as _CircularProgress } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Menu as MenuIcon, } from '@material-ui/icons'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import {
  // GoogleMaps,
  MapPanel, MapPanelNoZoom,
} from "./"
import GoogleMaps from './GoogleMaps2'
import {
  Equirectangular, Equirectangular2, Equirectangular4,
  TabiversePlanet, ThreePanelV1, ThreePanelV2, ThreePanelV3, ThreePanelV4,
} from "$components/3d_locations"
import {
  C, Collapsible,
  logg,
  request,
  TwofoldContext,
  useWindowSize,
} from "$shared"

/* W */
const W0 = styled.div`
  overflow: hidden;

  flex-grow: 1;

  // max-height: 100vh;
  // min-height: 50vh;

`;

/**
 * Renders either MapPanel (W really, a simple wrapper), MapPanelNoZoom, or ThreePanelV1
 * or some other MapPanel.
 */
const WrappedMapPanel = React.forwardRef((props, ref) => {
  // logg(props.map, 'WrappedMapPanel')

  switch (props.map.config.map_panel_type) {

    case C.map_panel_types.Equirectangular:
      // return <W0 ref={ref} className="Equirectangular" ><Equirectangular {...props} /></W0>
      // return <W0 ref={ref} className="Equirectangular2" ><Equirectangular2 {...props} /></W0>
      return <W0 ref={ref} className="Equirectangular4" ><Equirectangular4 {...props} /></W0>

    case C.map_panel_types.MapPanelNoZoom:
      return <W0 ref={ref} className="WrappedMapPanel" ><MapPanelNoZoom withZoom={false} {...props} /></W0>

    case C.map_panel_types.ThreePanelV1:
      switch (props.slug) {
        case 'threev1':
          return <W0><ThreePanelV1 {...props} /></W0>
        case 'threev2':
          return <W0><ThreePanelV2 {...props} /></W0>
          case 'threev3':
            return <W0><ThreePanelV3 {...props} /></W0>

        default:
          logg(props.slug, `ttr - this 3d panel is not implemented`)
          return <W0 ref={ref} className="WrappedMapPanel" ><MapPanel {...props} /></W0>
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

