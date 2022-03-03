
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

import { logg, S, TwofoldContext } from "$shared"
import { LoginModal } from "$components/users"

const AppMock = (props) => {
  let {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    purchaseModalIsOpen, setPurchaseModalIsOpen,
  } = props
  const history = createMemoryHistory()
  history.push("/en/cities/travel-to/chicago") // @TODO: move where appropriate

  const [ localItemToUnlock, setLocalItemToUnlock ] = useState({})
  const [ localCurrentUser, setLocalCurrentUser ] = useState(false)
  const [ localPurchaseModalIsOpen, setLocalPurchaseModalIsOpen ] = useState(false)
  if (!currentUser) {
    currentUser = localCurrentUser
    setCurrentUser = setLocalCurrentUser
  }
  if (!itemToUnlock) {
    itemToUnlock = localItemToUnlock
    setItemToUnlock = setLocalItemToUnlock
  }
  if (!purchaseModalIsOpen) {
    purchaseModalIsOpen = localPurchasesModalIsOpen
    setPurchaseModalIsOpen = setLocalPurchasesModalIsOpen
  }

  return <ThemeProvider theme={S.lightTheme}>
    <Router history={history} >
      <TwofoldContext.Provider value={{
        // bottomDrawerOpen, setBottomDrawerOpen,
        currentUser, setCurrentUser,
        itemToUnlock, setItemToUnlock,

        // layout, setLayout,
        purchaseModalIsOpen, setPurchaseModalIsOpen,
        // showUrl, setShowUrl,
        // zoom, setZoom,
      }} >
        { props.children }
        <LoginModal />
      </TwofoldContext.Provider>
    </Router>
  </ThemeProvider>
}

export default AppMock
