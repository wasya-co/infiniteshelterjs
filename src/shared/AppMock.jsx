
/*
 *  $shared / AppMock
 */

import { createMemoryHistory } from 'history'
import _Box from '@material-ui/core/Box'
import React, { useState } from 'react'
import {
  Link, Switch, Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'

import {
  C,
  logg,
  S,
  TwofoldContext, TwofoldContextProvider,
} from "$shared"
import { LoginModal } from "$components/users"

const AppMock = (props) => {
  // logg(props, 'AppMock')
  let {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    loginModalOpen, setLoginModalOpen,
    purchaseModalOpen, setPurchaseModalOpen,
    zoom, setZoom,
  } = props
  const history = createMemoryHistory()
  history.push("/en/cities/travel-to/chicago") // @TODO: move where appropriate

  const [ localItemToUnlock, setLocalItemToUnlock ] = useState({})
  const [ localCurrentUser, setLocalCurrentUser ] = useState(C.anonUser)
  const [ localLoginModalOpen, setLocalLoginModalOpen ] = useState(false)
  const [ localPurchaseModalOpen, setLocalPurchaseModalOpen ] = useState(false)
  const [ localZoom, setLocalZoom ] = useState(1)
  if (!currentUser) {
    currentUser = localCurrentUser
    setCurrentUser = setLocalCurrentUser
  }
  if (!itemToUnlock) {
    itemToUnlock = localItemToUnlock
    setItemToUnlock = setLocalItemToUnlock
  }
  if ('undefined' === typeof loginModalOpen) {
    logg('it was undefined')
    loginModalOpen = localLoginModalOpen
    setLoginModalOpen = setLocalLoginModalOpen
  }
  if ('undefined' === typeof purchaseModalOpen) {
    purchaseModalOpen = localPurchaseModalOpen
    setPurchaseModalOpen = setLocalPurchaseModalOpen
  }
  if ('undefined' === typeof zoom) {
    // logg('no props.zoom?!')
    zoom = localZoom
    setZoom = setLocalZoom
  }

  return <ThemeProvider theme={S.lightTheme}>
    <Router history={history} >
      <TwofoldContextProvider {...{
        // bottomDrawerOpen, setBottomDrawerOpen,
        currentUser, setCurrentUser,
        itemToUnlock, setItemToUnlock,
        // layout, setLayout,
        loginModalOpen, setLoginModalOpen,
        purchaseModalOpen, setPurchaseModalOpen,
        // showUrl, setShowUrl,
        zoom, setZoom,
      }} >
        { props.children }
        {/* <LoginModal /> */}
      </TwofoldContextProvider>
    </Router>
  </ThemeProvider>
}

export default AppMock
