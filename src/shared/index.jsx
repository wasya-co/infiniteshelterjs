/*
 *  $shared / index
 */
import _Box from '@material-ui/core/Box'
import React, { useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'
import { IonIcon } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

import C from "./C"

/* A */
export { default as useApi } from "./Api"
export { default as AppMock } from "./AppMock"
export { default as AppRouter } from "./AppRouter"

/* B */

export const Box = styled(_Box)`
  margin-bottom: 1em;
  padding: 1em;
  background: white;
  cursor: ${p => p.cursor ? p.cursor : 'auto'};

  display: flex;
  flex-direction: column;
`;

/**
 * Just your regular shadowed box. Pointer cursor. TDD
 */
export const Btn = styled.div`
  border: 1px solid gray;
  border-radius: 5px;

  padding: .3em 1em;
  cursor: pointer;
`;

/* C */
export { C }
export { default as Collapsible } from "./Collapsible"
export const CollapsibleContext = React.createContext({})
export const CollapsibleContextProvider = ({ children, ...props }) => {
  logg(props, 'CollapsibleContextProvider')

  const [ collapsibles, setCollapsibles ] = useState({
    [C.collapsible.descr]: true,
  })

  return <CollapsibleContext.Provider value={{
    collapsibles, setCollapsibles,
  }} >{ children }</CollapsibleContext.Provider>
}

/* D */
/* I */

/**
 * Like the rails inflector, has methods:
 * tableize()
 */
export const inflector = {
  tableize: (m) => {
    switch(m) {
      case 'Gallery':
        return 'galleries'
      default:
      return `${m.toLowerCase()}s`
    }
  },
}

/* L */

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
// optimized for Android (e.g. it inspects and doesn't use window)
const logg2 = (a, b="", c=null) => {
  console.log(`+++ ${b}:`, a.inspect); // eslint-disable-line no-console
};
export { logg, logg2 };

/* R */

export { default as request } from "./request"

/* S */
export { default as S } from "./S"

/* T */

export const TwofoldContext = React.createContext({})
export const TwofoldContextProvider = ({ children, ...props }) => {
  logg(props, 'TwofoldContextProvider')
  const {
    currentUser, setCurrentUser,
    layout, setLayout,
    loginModalOpen, setLoginModalOpen,
  } = props

  const [ bottomDrawerOpen, setBottomDrawerOpen ] = useState(false)
  const [ itemToUnlock, _setItemToUnlock ] = useState({})
  const setItemToUnlock = (item) => {
    if (itemToUnlock.id !== item.id && !loginModalOpen) {
      _setItemToUnlock(item)
    }
  }

  const [ showItem, setShowItem ] = useState(false)
  const [ showUrl, setShowUrl ] = useState(false)
  const [ zoom, setZoom ] = useState(1)

  return <TwofoldContext.Provider value={{
    bottomDrawerOpen, setBottomDrawerOpen,
    currentUser, setCurrentUser, // @TODO: move this to an AppWrapper context
    itemToUnlock, setItemToUnlock,
    layout, setLayout,
    loginModalOpen, setLoginModalOpen,
    showItem, setShowItem,
    showUrl, setShowUrl,
    zoom, setZoom,
  }} >{ children }</TwofoldContext.Provider>
}

/* U */
export { default as useWindowSize } from './useWindowSize'

/* W */

export const Wrapper = styled.div`
  height: 100vh;
`;

/* Z */

export const ZoomContext = React.createContext({})

/* pretty print date */
export const pp_date = (d) => (d || "" ).substring(0, 10)

/* Back Button */
const BackIcon = styled(IonIcon)`
margin-right: 5px;
cursor: pointer;
`;
export const BackBtn = () => {
  const history = useHistory()
  return <BackIcon onClick={history.goBack} icon={arrowBack}></BackIcon>
}
