import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import {
  ThreePanelMobile,
} from "$components/locations3d"
import {
  Breadcrumbs,
  Metaline,
} from "$components/application"
import { Newsitems } from "$components/newsitems"
import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  MarkersList,
} from '$components/markers'
import {
  C,
  Loading, logg,
  request,
  useApi, useWindowSize,
} from "$shared"


const W = styled.div`
  // border: 1px solid yellow;
`;


/**
 * LocationsShowMobile3d
 * Simplified, full-screen, cannot scroll outside canvas
 * _vp_ 2022-09-02
 *
 */
const LocationsShowMobile3d = (props) => {
  logg(props, 'LocationsShowMobile3d')
  const {
    location,
    match,
  } = props

  const mapPanelRef = useRef(null)

  return (<W className='LocationsShowMobile3d' >

    { location && <ThreePanelMobile
      map={location.map || location}
      ref={mapPanelRef}
      slug={match.params.slug}
    />}

  </W>)
}

export default LocationsShowMobile3d

