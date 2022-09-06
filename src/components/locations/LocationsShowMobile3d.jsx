import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  ThreePanelMobile,
} from "$components/3d_locations"
import {
  Breadcrumbs,
  Metaline,
} from "$components/application"
import { Newsitems } from "$components/newsitems"
import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  MarkersList,
} from '$resources/markers'
import {
  C, Collapsible, CollapsibleContext,
  inflector,
  Loading, logg,
  request,
  useApi, useWindowSize,
  ZoomContext,
} from "$shared"


const _Description = styled.div`
  // border: 1px solid red;
  padding: 10px;
`;
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

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
    match,
  } = props

  const {
    bottomDrawerOpen,
    folded, setFolded,
    location, setLocation,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  const [ windowWidth, windowHeight ] = useWindowSize()

  const [loading, setLoading] = useState(false)
  const api = useApi()

  const mountedRef = useRef('init')
  const mapPanelRef = useRef(null)
  const history = useHistory()

  // Get the location data
  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt_token")
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) return null
      if (!res.data.map) {
        setLoading(false)
        showToast('could not get Location')
        return null
      }
      setLocation(res.data.map)
      setLoading(false)
    }).catch((e) => {
      logg(e, 'e14')
      history.push('/')
    }).finally(() => {
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])

  // set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [bottomDrawerOpen, folded, mapPanelRef.current, twofoldPercent, windowWidth, windowHeight])

  return (<W className='LocationsShowMobile3d' >

    { location && <ThreePanelMobile
      map={location.map || location}
      ref={mapPanelRef}
      slug={match.params.slug}
    />}

    { loading  && <Loading /> }

  </W>)
}

export default LocationsShowMobile3d

