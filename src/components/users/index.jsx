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

export { default as LoginModal } from "./LoginModal"

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

export const PasswordLogin = (props) => {
  // logg(props, 'PasswordLogin')

  const api = useApi()
  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

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

  return <_W>
    <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } /><br />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
    />
    <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
  </_W>
}

export const PasswordRegisterMobile = (props) => {
  // logg(props, 'PasswordRegisterMobile')

  const api = useApi()
  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
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
  return <FlexCol>
    <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) } />
    <input type='password' value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value) } />
    <Btn onClick={() => doPasswordRegister(email, password, passwordConfirm)}>Register</Btn>
  </FlexCol>
}

export const PasswordLoginMobile = (props) => {
  // logg(props, 'PasswordLoginMobile')

  const api = useApi()
  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

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

  return <FlexCol>
    <input type='email'    value={email}    onChange={(e) => setEmail(e.target.value)    } /><br />
    <input type='password' value={password} onChange={(e) => setPassword(e.target.value) }
      onKeyDown={(e) => { if (e.key === 'Enter') { doPasswordLogin(email, password) } }}
    />
    <Btn onClick={() => doPasswordLogin(email, password)}>Password Login</Btn>
  </FlexCol>
}

export { default as RegisterModal } from './RegisterModal'

export { default as MyAccountWidget } from "./MyAccountWidget"
