
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
  logg(props, 'AppMock')
  let {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    purchaseModalIsOpen, setPurchaseModalIsOpen,
    zoom, setZoom,
  } = props
  const history = createMemoryHistory()
  history.push("/en/cities/travel-to/chicago") // @TODO: move where appropriate

  const [ localItemToUnlock, setLocalItemToUnlock ] = useState({})
  const [ localCurrentUser, setLocalCurrentUser ] = useState(C.anonUser)
  const [ localPurchaseModalIsOpen, setLocalPurchaseModalIsOpen ] = useState(false)
  const [ localZoom, setLocalZoom ] = useState(1)
  if (!currentUser) {
    logg('no local CU in mock?!')

    currentUser = localCurrentUser
    setCurrentUser = setLocalCurrentUser
  }
  if (!itemToUnlock) {
    itemToUnlock = localItemToUnlock
    setItemToUnlock = setLocalItemToUnlock
  }
  if (!purchaseModalIsOpen) {
    purchaseModalIsOpen = localPurchaseModalIsOpen
    setPurchaseModalIsOpen = setLocalPurchaseModalIsOpen
  }
  if (!zoom) {
    zoom = localZoom
    setZoom = setLocalZoom
  }

  logg(currentUser, 'mock CU')

  return <ThemeProvider theme={S.lightTheme}>
    <Router history={history} >
      <TwofoldContextProvider {...{
        // bottomDrawerOpen, setBottomDrawerOpen,
        currentUser, setCurrentUser,
        itemToUnlock, setItemToUnlock,
        // layout, setLayout,
        purchaseModalIsOpen, setPurchaseModalIsOpen,
        // showUrl, setShowUrl,
        zoom, setZoom,
      }} >
        { props.children }
        <LoginModal />
      </TwofoldContextProvider>
    </Router>
  </ThemeProvider>
}

export default AppMock
