
import { arrowBack } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { CircularProgress as _CircularProgress } from '@material-ui/core'
import _Box from '@material-ui/core/Box'
import { ChevronLeft as _ChevronLeft, ChevronRight as _ChevronRight, Menu as _MenuIcon, } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import {
  C,
  logg,
  request,
  useApi,
} from "$shared"

/**
 * ishjs has an older version of this - discard it. _vp_ 2022-03-05, 2022-09-12
*/
const TwofoldContext = React.createContext({})
const TwofoldContextProvider = ({ children, ...props }) => {
  // logg(props, 'TwofoldContextProvider')
  let {
    currentUser: _currentUser, setCurrentUser: _setCurrentUser, // for testing only. _vp_ 2022-03-18
    itemToUnlock, setItemToUnlock,
    layout, setLayout,
    showItem: _showItem, setShowItem: _setShowItem,
    theme, toggleTheme,
    zoom=1, setZoom, // it's a prop for testing only. _vp_ 2022-03-18
  } = props


  const api = useApi()

  /* B */

  // bottomDrawerOpen, localStorage OK
  let _bdo
  const [ bottomDrawerOpen, _setBottomDrawerOpen ] = useState(_bdo)
  try {
    _bro = JSON.parse(localStorage.getItem(C.bottomDrawerOpen))
  } catch (e) {} // no window
  const setBottomDrawerOpen = (m) => {
    try {
      localStorage.setItem(C.bottomDrawerOpen, JSON.stringify(m))
    } catch (e) {}
    _setBottomDrawerOpen(m)
  }


  // let [ currentUser, setCurrentUser ] = useState(C.anonUser)
  // if (_setCurrentUser) {
  //   [ currentUser, setCurrentUser ] = [ _currentUser, _setCurrentUser ]
  // }
  // /* Get the current_user on load */
  // const mountedRef = useRef('init')
  // useEffect(() => {
  //   if (!mountedRef.current) { return } // @TODO: hmmm do I need this?
  //   const fn = async () => {
  //     const r = await api.getMyAccount()
  //     setCurrentUser(r)
  //   }
  //   fn()
  //   return () => mountedRef.current = null
  // }, [currentUser])
  // // Refresh current_user if is_purchasing
  // useEffect(() => {
  //   let closure = setTimeout(() => {
  //     const fn = async () => {
  //       const r = await api.getMyAccount()
  //       setCurrentUser(r)
  //     }
  //     fn()
  //   }, 1 * 1000)
  //   return () => clearTimeout(closure)
  // }, [currentUser.is_purchasing])


  /* E */
  // const [ editorMode, _setEditorMode ] = useState(JSON.parse(localStorage.getItem(C.names.editorMode)))
  // const setEditorMode = (t) => {
  //   localStorage.setItem(C.names.editorMode, t)
  //   _setEditorMode(t)
  // }
  const [ editorMode, setEditorMode ] = useState(false)

  /* F */
  const [ folded, setFolded ] = useState()
  const foldedLeft = folded === C.foldedLeft
  const foldedRight = folded === C.foldedRight

  /* I */
  const [ _itemToUnlock, _setItemToUnlock ] = useState({})
  if (!itemToUnlock) {
    itemToUnlock = _itemToUnlock
    setItemToUnlock = _setItemToUnlock
  }

  /* L */
  // const [ loginModalOpen, setLoginModalOpen ] = useState(false)

  /* M */
  const [ mapPanelWidth, setMapPanelWidth ] = useState(null)
  const [ mapPanelHeight, setMapPanelHeight ] = useState(null)

  /* P */
  const [ purchaseModalOpen, setPurchaseModalOpen ] = useState(false)

  /* R */

  // const [ ratedConfirmation, _setRatedConfirmation ] = useState(JSON.parse(localStorage.getItem(C.ratedConfirmation)))
  // const setRatedConfirmation = (which) => {
  //   localStorage.setItem(C.ratedConfirmation, JSON.stringify(which))
  //   _setRatedConfirmation(which)
  // }
  const [ ratedConfirmation, setRatedConfirmation ] = useState(true)

  // const [ registerModalOpen, setRegisterModalOpen ] = useState(false)

  /* S */
  let [ showItem, setShowItem ] = useState(false)
  if (!!_setShowItem) { setShowItem = _setShowItem }
  if (!!_showItem) { showItem = _showItem }

  const [ showUrl, setShowUrl ] = useState(false)

  /* T */

  // twofoldPercent
  // @TODO: fix, this makes no sense. _vp_ 2022-09-12
  let _tfp
  try {
    _tfp = JSON.parse(localStorage.getItem(C.twofoldPercent))
  } catch (e) {
  }
  const [ twofoldPercent, _setTwofoldPercent ] = useState(_tfp||0.5)
  const setTwofoldPercent = (p) => {
    try {
      localStorage.setItem(C.twofoldPercent, JSON.stringify(p))
    } catch (e) {}
    _setTwofoldPercent(p)
  }

  /* Z */
  const [ _zoom, _setZoom ] = useState(1)
  if (!setZoom) {
    [ zoom, setZoom ] = [ _zoom, _setZoom ]
  }

  return <TwofoldContext.Provider value={{
    bottomDrawerOpen, setBottomDrawerOpen,

    editorMode, setEditorMode,

    folded, setFolded, foldedLeft, foldedRight,

    itemToUnlock, setItemToUnlock,

    layout, setLayout,

    mapPanelHeight, setMapPanelHeight,
    mapPanelWidth, setMapPanelWidth,

    purchaseModalOpen, setPurchaseModalOpen,

    ratedConfirmation, setRatedConfirmation,

    showItem, setShowItem,
    showUrl, setShowUrl,

    twofoldPercent, setTwofoldPercent,

    zoom, setZoom,

    theme, toggleTheme,
  }} >{ children }</TwofoldContext.Provider>
}

export default TwofoldContext
export {
  TwofoldContextProvider,
}
