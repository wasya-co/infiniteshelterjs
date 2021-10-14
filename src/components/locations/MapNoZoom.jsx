import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Breadcrumbs } from "./"
import {
  C, Collapsible, CollapsibleContext,
  logg, request, S, TwofoldContext,
  useWindowSize,
  ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"


const Div3 = styled.div``;

/* @TOO: merge this into MapPanel, have zoom={false} as a prop */
const MapWrapperNoZoom = styled.div`
  // border: 1px solid green;

  scroll: none;
`;

const MapNoZoom = (props) => {
  logg(props, 'Map2')
  const { map } = props

  const history = useHistory()
  const [windowWidth, windowHeight] = useWindowSize()

  const ref = useRef(null)

  const { zoom, setZoom } = useContext(TwofoldContext)

  useEffect(() => {
    // console.log('width', ref.current ? ref.current.offsetWidth : 0);
    if (ref.current) {
      setZoom(map.w/ref.current.offsetWidth)
    }
  }, [ref.current, windowWidth])


  const markers = []
  props.map.markers.map((m, idx) => {
    const out = <div
      key={idx}
      onClick={() => history.push(`/en/locations/show/${m.slug}`) }
      style={{
        position: 'absolute',
        top: m.y/zoom,
        left: m.x/zoom,
      }} ><img src={m.img_path} style={{
        display: 'block',
        maxWidth: `${m.w/zoom}px`,
        maxHeight: `${m.h/zoom}px`,
        width: 'auto', height: 'auto',
      }} /></div>
    markers.push(out)
  })

  return (<MapWrapperNoZoom className="MapWrapperNoZoom" ref={ref} >

      <Div3 style={{
          // border: '2px solid cyan',

          display: 'inline-block',
          position: 'relative',
      }} >
        <img
          src={map.img_path}
          style={{
            width: `${map.w/zoom}px`,
            height: `${map.h/zoom}px`,
          }}
        />
        { markers }
      </Div3>

  </MapWrapperNoZoom>)
}

export default MapNoZoom
