
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { C, logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { GalleriesShow } from "$components/galleries"
import { ReportsShow } from "$components/reports"
import { Newsitems } from "$components/newsitems"

/*
 * RatedRestrictionModal
 */
const RatedRestrictionModal = (props) => {
  // logg(props, 'RatedRestrictionModal')
  const { ratedConfirmation, setRatedConfirmation } = props

  return <Modal isOpen={!ratedConfirmation} >
    <p>You must be 18 years of age or older to view this content.</p>
    <button onClick={() => setRatedConfirmation(true) } >I am over 18</button>
    &nbsp; &nbsp;
    <button onClick={() => window.location = 'https://disney.com' } >I am NOT over 18</button>
  </Modal>
}

export default RatedRestrictionModal
