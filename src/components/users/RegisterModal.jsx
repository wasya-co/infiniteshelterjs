
import { IonPage, IonContent } from "@ionic/react"
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import {
  FbLogin,
  Logout,
  PasswordLogin,
} from "./"
import {
  Btn,
  C,
  FlexCol,
  logg,
  TwofoldContext,
  useApi,
} from "$shared"

const RegisterModal = (props) => {
  logg(props, 'RegisterModal')

  const {
    currentUser, setCurrentUser,
    registerModalOpen, setRegisterModalOpen,
  } = useContext(TwofoldContext)

  const api = useApi()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')

  const doPasswordRegister = async (email, password, passwordConfirm) => {
    request.post(`${config.apiOrigin}${api.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
      localStorage.setItem(C.jwt_token, resp.jwt_token)
      localStorage.setItem(C.current_user, JSON.stringify(resp))
      setCurrentUser(resp) // must be done *after* setting C.jwt_token
      setLoginModalOpen(false)
    }).catch((e) => {
      logg(e, 'e322')
      toast("Login failed")
      setCurrentUser(C.anonUser)
    })
  }

  return <Modal style={{ zIndex: 3 }} isOpen={registerModalOpen} >
    <FlexCol>
      <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value) } />
      <input type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value) } />
      <Btn onClick={() => doPasswordRegister(email, password, passwordConfirm)}>Register</Btn>
    </FlexCol>
  </Modal>
}

export default RegisterModal
