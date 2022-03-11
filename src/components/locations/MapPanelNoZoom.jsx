import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  C,
  logg,
  TwofoldContext,
  useWindowSize,
} from "$shared"


// W
const W0 = styled.div`
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};
  background: ${p => p.theme.colors.background};

  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const W1 = styled.div`
  display: inline-block;
  position: relative;
`;


/*
 * _vp_ 2021-09 @TODO: merge this into MapPanel, have zoom={false} as a prop
 * But I couldn't do it in 10 mins... It's a bit complicated?
 *
 * _vp_ 2021-10-29 But actually this component is getting more work than the zoom one right now...
 */
const MapPanelNoZoom = (props) => {
  // logg(props, 'MapPanelNoZoom')
  const { map } = props

  const {
    bottomDrawerOpen,
    mapPanelWidth, mapPanelHeight,
    zoom, setZoom,
  } = useContext(TwofoldContext)
  logg(useContext(TwofoldContext), 'MapPanelNoZoomUsedContext')

  const history = useHistory()
  const [ windowWidth, windowHeight ] = useWindowSize()

  /*
   * Sets the zoom (in panelNoZoom) to full-panel _vp_ 2021-10-29
   * w: 1184 h: 819
   */
  // useEffect(() => {
  //   let nextZoomByWidth = mapPanelWidth/map.w
  //   let nextZoomByHeight = mapPanelHeight/map.h
  //   let nextZoom = Math.min(nextZoomByWidth, nextZoomByHeight)
  //   nextZoom = nextZoom + 0.0 // image should not overlap with the border... 1% slack added.
  //   setZoom(nextZoom)
  // }, [ mapPanelWidth, mapPanelHeight, map.id ])
  useEffect(() => {
    let nextZoomByWidth = windowWidth/map.w // .3
    let nextZoomByHeight = windowHeight/map.h // .9
    let nextZoom = Math.min(nextZoomByWidth, nextZoomByHeight)
    const slack = 0.01 // image should not overlap with the border... 1% slack added.
    nextZoom = nextZoom + slack
    setZoom(nextZoom)
  }, [ mapPanelWidth, mapPanelHeight, map.id ])



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

  return <W0 className="MapPanelNoZoom W0" >
    <W1 className="W1" >
      <img
        src={map.img_path}
        style={{
          width: `${map.w*zoom}px`,
          height: `${map.h*zoom}px`,

          position: 'relative',
          zIndex: 1,
        }}
      />
      { markers }
    </W1>
  </W0>
}

export default MapPanelNoZoom
