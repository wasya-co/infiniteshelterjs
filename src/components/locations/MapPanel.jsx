
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  MarkerContext,
} from '$components/markers'
import {
  C, Card,
  logg,
  useWindowSize,
} from "$shared"

const Actions = styled.div`
  border: 1px solid red;

  position: absolute;
  top: 0;
  right: 0;

  z-index: 2;
`;

// W
const W0 = styled.div`
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};
  background: ${p => p.theme.colors.background};

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const W1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  height: 100%;
`;


/**
 * MapPanel
 *
 * _vp_ 2021-09 @TODO: merge this into MapPanel, have zoom={false} as a prop
 * But I couldn't do it in 10 mins... It's a bit complicated?
 *
 * _vp_ 2021-10-29 But actually this component is getting more work than the zoom one right now...
**/
const MapPanel = (props) => {
  // logg(props, 'MapPanel')
  const { map } = props

  const {
    bottomDrawerOpen,
    editorMode,
    mapPanelWidth, mapPanelHeight,
    zoom, setZoom,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'MapPanelUsedContext')

  const {
    markerModalOpen, setMarkerModalOpen,
  } = useContext(MarkerContext)

  const history = useHistory()
  const [ windowWidth, windowHeight ] = useWindowSize()
  // logg(useWindowSize(), 'usedWindowSize')


  /*
   * Sets the zoom (in panelNoZoom) to full-panel _vp_ 2021-10-29
   * w: 1184 h: 819
   */
  useEffect(() => {
    // logg([windowWidth, windowHeight, map.w, map.h], 'MapPanel setting zoom')
    if (windowWidth === 0) { return; }

    let nextZoomByWidth = windowWidth/map.w // .3 mobile // 1.94 desktop
    let nextZoomByHeight = windowHeight/map.h // .9 mobile // .82 desktop
    // logg4([nextZoomByWidth, nextZoomByHeight], 'nextZoomOptions')

    let nextZoom = Math.min(nextZoomByWidth, nextZoomByHeight)
    const slack = 0.01 // image should not overlap with the border... 1% slack added.
    nextZoom = nextZoom + slack

    setZoom(nextZoom)
  }, [
    mapPanelWidth, mapPanelHeight, map.id,
    windowWidth, windowHeight,
  ])


  const markers = []
  props.map.markers.map((m, idx) => {
    const out = <div
      key={idx}
      onClick={() => history.push(`/en/locations/show/${m.slug}`) }
      style={{
        position: 'absolute',
        top: m.y*zoom,
        left: m.x*zoom,
        zIndex: 2,
      }} ><img src={m.img_path} style={{
        display: 'block',
        maxWidth: `${m.w*zoom}px`,
        maxHeight: `${m.h*zoom}px`,
        width: 'auto', height: 'auto',
      }} /></div>
    markers.push(out)
  })

  /*
   * @TODO: need to get the ACL from api, and use it to determine what to display or not.
  **/

  return <W0 className="W0 MapPanel" >

    { editorMode && <Actions>
      <Card onClick={() => setMarkerModalOpen(true)} >
        + Marker
      </Card>
    </Actions> }

    <W1 className="W1" >
      <img
        src={map.img_path}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',

          position: 'relative',
          zIndex: 0,
        }}
      />
      { markers }
    </W1>
  </W0>
}

export default MapPanel
