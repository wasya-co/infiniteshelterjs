
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
import { logg, TwofoldContext } from "$shared"

const AppMock = (props) => {
  let { currentUser, setCurrentUser } = props
  const history = createMemoryHistory()
  history.push("/en/cities/travel-to/chicago") // @TODO: move where appropriate

  const [ localCurrentUser, setLocalCurrentUser ] = useState(false)
  if (!currentUser) {
    currentUser = localCurrentUser
    setCurrentUser = setLocalCurrentUser
  }

  return <Router history={history} >
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
