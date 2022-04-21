
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  MarkerContext,
} from '$resources/markers'
import {
  C, Card,
  logg, logg4,
  TwofoldContext,
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

const Marker = (options) => {
  const [marker, setMarker] = React.useState();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);
  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);
  return null;
};

const MyMap = (props) => {
  const {
    center, zoom,
  } = props

  const ref = useRef()
  const [map, setMap] = React.useState()

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );
      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center, zoom, }));
    }
  }, [ref, map]);

  return <div ref={ref} id="GoogleMaps" />
}

const Spinner = () => <h1>Loading...</h1>
const ErrorComponent = () => <h1>No luck loading GoogleMaps</h1>
const render = (status) => {
  switch (status) {
    case Status.LOADING:
      return <Spinner />;
    case Status.FAILURE:
      return <ErrorComponent />;
    case Status.SUCCESS:
      return <MyMap />;
  }
};

/**
 * GoogleMaps
 *
**/
const GoogleMaps = (props) => {
  // logg(props, 'GoogleMaps')
  const { map } = props

  const {
    bottomDrawerOpen,
    editorMode,
    mapPanelWidth, mapPanelHeight,
    zoom, setZoom,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'GoogleMapsUsedContext')

  const {
    markerModalOpen, setMarkerModalOpen,
  } = useContext(MarkerContext)

  const history = useHistory()
  const [ windowWidth, windowHeight ] = useWindowSize()
  // logg(useWindowSize(), 'usedWindowSize')


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

  return <W0 className="GoogleMaps" >

    { editorMode && <Actions>
      <Card onClick={() => setMarkerModalOpen(true)} >
        + Marker
      </Card>
    </Actions> }

    <Wrapper apiKey={"AIzaSyDTM7RYKAlUS84jN1pCmydwEKxUTAMAn6c"} render={render} >

    </Wrapper>
  </W0>
}

export default GoogleMaps
