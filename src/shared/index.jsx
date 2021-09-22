/*
 *  $shared / index
 */
import _Box from '@material-ui/core/Box'
import React, { useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'

export { default as useApi } from "./Api"

// logged in
export const AppMock = (props) => {

  const { currentUser, setCurrentUser } = props
  if (!currentUser) {
    const defaultCurrentUser = { email: 'test@gmail.com' }
    const [ currentUser, setCurrentUser ] = useState(defaultCurrentUser)
  }

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

export { default as AppRouter } from "./AppRouter"

export const Box = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  // cursor: pointer;

  display: flex;
  flex-direction: column;
`;

export const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 5px;

  padding: .3em 1em;
  cursor: pointer;
`;

export const C = {
  jwt_token: 'jwt_token',
  current_user: 'current_user',

  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
}

export { default as Collapsible } from "./Collapsible"
export const CollapsibleContext = React.createContext({})

export const Debug = styled.div`
`;

/**
 * Usage: logg(someObject, 'label')
 *
 * This development-grade logger can be used instead of console.log() with some advantages:
 * * It encourages consistent labeling of logs. By labeling each log line, you can have dozens of log lines
 * written per action, and still know which log line comes from where.
 * The recommended label is the component name, or function name.
 * * If the label is present, the logged object is placed in the window, allowing you to inspect it in the console. The
 * label becomes the name of the object (stripped to [0-9a-zA-Z\-_] chars). If you're logging a function, you can execute it.
 * If you log more than one thing, they can interact, allowing you to validate control flow.
 * * the logger can be turned off by making this function simply return.
 */
const logg = (a, b="", c=null) => {
  c = "string" === typeof c ? c : b.replace(/\W/g, "");
  if (c.length > 0) {
    window[c] = a;
  }

  console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
};

export { logg };

export { default as request } from "./request";

export const S = {
  borderWidth: 10,
  bottomDrawerHeight: 100,
}

export const TwofoldContext = React.createContext({})

export const ZoomContext = React.createContext({})

export const Wrapper = styled.div`
  height: 100vh;
`;
