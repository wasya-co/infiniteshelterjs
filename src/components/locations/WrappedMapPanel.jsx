

import { CircularProgress as _CircularProgress } from '@material-ui/core'
import { ChevronLeft, ChevronRight, Menu as MenuIcon, } from '@material-ui/icons'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import {
  Breadcrumbs,
  ItemModal,
  MapPanel, MapPanelNoZoom, MarkersList,
} from "./"
import {
  Equirectangular, Equirectangular2,
  ThreePanelV1, ThreePanelV2, ThreePanelV3, ThreePanelV4,
} from "$components/locations3"
import { Newsitems } from "$components/newsitems"
import { LongLine } from "$components/TwofoldLayout"
import {
  C, Collapsible,
  logg,
  request,
  TwofoldContext,
  useWindowSize,
} from "$shared"

/* W */
const W = styled.div`
  overflow: hidden;

  flex-grow: 1;
`;

/**
 * Renders either MapPanel (W really, a simple wrapper), MapPanelNoZoom, or ThreePanelV1
 * or some other MapPanel.
 */
const WrappedMapPanel = React.forwardRef((props, ref) => {
  // logg(props.map, 'WrappedMapPanel')

  switch (props.map.config.map_panel_type) {

    case C.map_panel_types.Equirectangular:
      // return <W ref={ref} className="Equirectangular" ><Equirectangular {...props} /></W>
      return <W ref={ref} className="Equirectangular2" ><Equirectangular2 {...props} /></W>

    case C.map_panel_types.MapPanelNoZoom:
      return <W ref={ref} className="WrappedMapPanel" ><MapPanelNoZoom withZoom={false} {...props} /></W>

    case C.map_panel_types.ThreePanelV1:
      switch (props.slug) {
        case 'threev1':
          return <W><ThreePanelV1 {...props} /></W>
        case 'threev2':
          return <W><ThreePanelV2 {...props} /></W>
          case 'threev3':
            return <W><ThreePanelV3 {...props} /></W>

        default:
          logg(props.slug, `this 3d panel is not implemented`)
          return <W ref={ref} className="WrappedMapPanel" ><MapPanel {...props} /></W>
      }

    case C.map_panel_types.ThreePanelV4: // markers are objects
      return <W><ThreePanelV4 {...props} /></W>

    default:
      return <W ref={ref} className="WrappedMapPanel" ><MapPanel {...props} /></W>
  }
})
export default WrappedMapPanel

