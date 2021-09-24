
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"


const MarkersList = (props) => {
  logg(props, 'Markers')

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
    out.push(<div
        key={idx}
        style={{ margin: '10px' }}
        onClick={() => goto(m)} >
      <img src={m.title_img_path} /><br />
      {m.name}
    </div>)
  })
  return <div style={{ display: 'flex' }} >{out}</div>
}

export default MarkersList
