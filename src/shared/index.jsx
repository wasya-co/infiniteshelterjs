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
export { default as AppMock } from "./AppMock"
export { default as AppRouter } from "./AppRouter"

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

export const C = {
  current_user: 'current_user',
  jwt_token: 'jwt_token',

  item_types: {
    gallery: 'Gallery',
    report: 'Report',
    video: 'Video',
  },

  layout_onecol: 'onecol',
  layout_mapui: 'mapui',
}

export { default as Collapsible } from "./Collapsible"
export const CollapsibleContext = React.createContext({})

export const Debug = styled.div`
`;

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
  borderWidth: '10px',
  bottomDrawerHeight: '100px',
  breadcrumbsHeight: '30px',
}

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

export const ZoomContext = React.createContext({})

export const Wrapper = styled.div`
  height: 100vh;
`;
