
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

/* M */
const Marker = styled.div`
  margin: 10px;
  max-width: 20vw;
`;

/* W */
const W = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/**
 * Default
 * @TODO: test-driven
 */
const MarkersList = (props) => {
  // logg(props, 'MarkersList')

  const history = useHistory()
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

  const goto = (m) => {
    if (m.url) {
      setShowUrl(m.url)
    }
    else {
      history.push(`/en/locations/show/${m.slug}`)
    }
  }

  const out = []
  props.markers.map((m, idx) => {
    out.push(<Marker key={idx}
      onClick={() => goto(m) }
    >
      <img src={m.title_img_path} /><br />
      {m.name}
    </Marker>)
  })
  return <W >
    {out}
  </W>
}

export default MarkersList
