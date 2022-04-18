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
import {
  Btn,
  C,
  FlexCol,
  logg, request, TwofoldContext, useApi,
} from "$shared"

/* A */
export { default as Account } from "./Account"


/* F */
// @deprecated below, use ishlibjs
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
export const FbLogin2 = (props) => {
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
  return <Btn onClick={doFbLogin}>Login or Register with Facebook</Btn>
}
// ^ @deprecated above



/* L */
export { default as LoginModal } from './LoginModal'

const BuyBtn = styled.span`
  border: 1px solid ${p => p.theme.colors.text};

  padding: 5px;
  cursor: pointer;
`;

export const Logout = () => {
  const { currentUser, setCurrentUser } = useContext(TwofoldContext)
  const doLogout = () => {
    localStorage.removeItem(C.jwt_token)
    localStorage.removeItem(C.current_user)
    setCurrentUser({})
  }
  return <BuyBtn onClick={doLogout}>X</BuyBtn>
}

const _W = styled.div`
  display: flex;

  > * {
    // margin: auto .4em;
  }
`;

/* M */
export { default as MyAccountWidget } from "./MyAccountWidget"

/* P */


/* R */

