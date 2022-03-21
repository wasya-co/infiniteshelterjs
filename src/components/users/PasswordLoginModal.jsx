
/*
 * components / users / PasswordLoginModal
 */
import { Plugins } from '@capacitor/core'
import { FacebookLoginResponse } from '@capacitor-community/facebook-login'
import React, { Fragment as F, useContext, useState, } from 'react'
import Modal from "react-modal"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from 'styled-components'

import config from 'config'

import {
  Btn,
  C,
  FlexCol,
  logg,
  request,
  TwofoldContext,
   useApi,
} from "$shared"


const PasswordLoginModal = (props) => {
  // logg(props, 'PasswordLoginModal')

  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  // logg(useContext(TwofoldContext), 'PasswordLoginModalUsedContext')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const api = useApi()

  const doPasswordLogin = async (email, password) => {
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

  return <Modal isOpen={loginModalOpen} >
    <FlexCol>
      <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } /><br />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
        onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
      />
      <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
    </FlexCol>
  </Modal>
}

export default PasswordLoginModal
