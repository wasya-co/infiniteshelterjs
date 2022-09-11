
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
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
};
RatedRestrictionModal.propTypes = {
  // ratedConfirmation, setRatedConfirmation - but maybe from a context instead?
};
export default RatedRestrictionModal
