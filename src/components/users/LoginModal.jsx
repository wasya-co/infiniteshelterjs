
import { IonPage, IonContent } from "@ionic/react"
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { FbLogin, Logout, PasswordLogin } from "./"
import { C, logg, TwofoldContext } from "$shared"


const LoginModal = (props) => {
  // logg(props, 'LoginModal')
  const { loginModalOpen, setLoginModalOpen } = useContext(TwofoldContext)

  return <Modal style={{ zIndex: 3 }} isOpen={loginModalOpen} >

    <h1>
      Please Login
      <button onClick={() => setLoginModalOpen(false)} >[x]</button>
    </h1>
    <FbLogin />
    <PasswordLogin />
  </Modal>
}

export default LoginModal
