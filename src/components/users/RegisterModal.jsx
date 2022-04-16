
import { IonPage, IonContent } from "@ionic/react"
import { Container, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { Fragment as F, useContext, useEffect, useState } from "react"
import Modal from 'react-modal'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'

import {
  FbLogin,
  Logout,
  PasswordLogin,
} from "./"
import {
  Btn,
  C,
  FlexCol, FlexRow,
  logg,
  TwofoldContext,
  useApi,
} from "$shared"

/**
 * @deprecated, moved to ishlibjs
**/
const RegisterModal = (props) => {
  // logg(props, 'RegisterModal')

  const {
    currentUser, setCurrentUser,
    registerModalOpen, setRegisterModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'registerModalUsedContext')

  const api = useApi()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ password2, setPassword2 ] = useState('')

  const doRegister = async (email, password, password2) => {
    if (password !== password2) {
      return toast('Passwords do not match')
    }
    api.doRegister({ email, password }).then((r) => {
      logg(r, 'registered')
      localStorage.setItem(C.jwt_token, r.jwt_token)
      localStorage.setItem(C.current_user, JSON.stringify(r))
      setCurrentUser(r)
      setRegisterModalOpen(false)
    }).catch((e) => {
      logg(e, 'e322')
      toast("Registration failed")
    })
  }

  return <Modal style={{ zIndex: 3 }} isOpen={registerModalOpen} >
    <div onClick={() => setRegisterModalOpen(false)}>[x]</div>
    <FlexCol>
      <label for='email'>Email</label>
      <input type='email'    name='email'     value={email}    onChange={(e) => setEmail(e.target.value)    } />

      <label for='password'>Password</label>
      <input type='password' name='password'  value={password} onChange={(e) => setPassword(e.target.value) } />

      <label for='password2'>Confirm Password</label>
      <input type='password' name='password2' value={password2} onChange={(e) => setPassword2(e.target.value) } />

      <FlexRow>
        <Btn onClick={() => doRegister(email, password, password2) }>Register</Btn>
        <Btn onClick={() => setRegisterModalOpen(false) }>Cancel</Btn>
      </FlexRow>
    </FlexCol>
  </Modal>
}

export default RegisterModal
