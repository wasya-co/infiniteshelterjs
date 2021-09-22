
/*
 *  $shared / AppMock
 */
import _Box from '@material-ui/core/Box'
import React, { useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { logg, TwofoldContext } from "$shared"

const AppMock = (props) => {
  logg(props, 'AppMock')
  const { currentUser, setCurrentUser } = props

  return <Router>
    <TwofoldContext.Provider value={{
      // bottomDrawerOpen, setBottomDrawerOpen,
      currentUser, setCurrentUser,
      // itemToUnlock, setItemToUnlock,
      // layout, setLayout,
      // showUrl, setShowUrl,
      // zoom, setZoom,
    }} >
      { props.children }
    </TwofoldContext.Provider>
  </Router>
}

export default AppMock
