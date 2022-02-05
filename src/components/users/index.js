/*
 * components / users / index
 */
import { Plugins } from '@capacitor/core'
import { FacebookLoginResponse } from '@capacitor-community/facebook-login'
import React, { Fragment as F, useContext, useState, } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import config from 'config'
import { Btn, C, logg, request, TwofoldContext, useApi, } from "$shared"

export { default as Account } from "./Account"

const { FacebookLogin } = Plugins


const FACEBOOK_PERMISSIONS = ['email']

export const FbLogin = (props) => {
  const api = useApi()
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)

  const doFbLogin = async () => {
    const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result.accessToken) {
      request.post(`${config.apiOrigin}${api.longTermTokenPath}`, { accessToken: result.accessToken.token }).then((resp) => {
        localStorage.setItem(C.jwt_token, resp.data.jwt_token)
        localStorage.setItem(C.current_user, JSON.stringify(resp.data) )
        setCurrentUser(resp.data)
      }).catch((err) => {
        logg(err, `Could not post request to ${config.apiOrigin}${api.longTermTokenPath}`)
      })
    } else {
      // Canceled by user.
      logg('canceled')
    }
  }
  return <Btn onClick={doFbLogin}>FB Login</Btn>
}

export { default as LoginModal } from "./LoginModal"

export const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const doLogout = () => {
    localStorage.removeItem(C.jwt_token)
    localStorage.removeItem(C.current_user)
    setCurrentUser({})
  }
  return <Btn onClick={doLogout}>Logout</Btn>
}

const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

export const PasswordLogin = (props) => {
  const api = useApi()
  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const doPasswordLogin = async (email, password) => {
    request.post(`${config.apiOrigin}${api.loginPath}`, { email, password }).then((r) => r.data).then((resp) => {
      setCurrentUser(resp)
      localStorage.setItem('jwt_token', resp.jwt_token)
      localStorage.setItem('current_user', JSON.stringify(resp))
      setLoginModalOpen(false)
    }).catch((e) => {
      logg(e, 'e322')
      toast("Login failed")
      setCurrentUser(null)
    })
  }

  return <_W>
    <input type='email' value={email} onChange={(e) => setEmail(e.target.value) } /><br />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => {
        if (e.key === 'Enter') { doPasswordLogin(email, password) }
      }}
    />
    <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
  </_W>
}


export { default as MyAccountWidget } from "./MyAccountWidget";
