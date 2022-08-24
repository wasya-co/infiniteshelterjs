
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
 * ishjs has a newer version of this. _vp_ 2022-03-05
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
    zoom, setZoom, // it's a prop for testing only. _vp_ 2022-03-18
  } = props

  const api = useApi()

  /* B */

  // @TODO: does localStorage work like this on mobile?
  // @TODO: try and catch
  const [ bottomDrawerOpen, _setBottomDrawerOpen ] = useState(JSON.parse(localStorage.getItem(C.bottomDrawerOpen)))
  const setBottomDrawerOpen = (m) => {
    localStorage.setItem(C.bottomDrawerOpen, JSON.stringify(m))
    _setBottomDrawerOpen(m)
  }


  /* C */
  const [ currentUser, setCurrentUser ] = useState(C.anonUser)
  if (_setCurrentUser) {
    [ currentUser, setCurrentUser ] = [ _currentUser, _setCurrentUser ]
  }

  /* Get the current_user on load */
  const mountedRef = useRef('init')
  useEffect(() => {
    if (!mountedRef.current) { return } // @TODO: hmmm do I need this?

    const fn = async () => {
      const r = await api.getMyAccount()
      setCurrentUser(r)
    }
    fn()

    return () => mountedRef.current = null
  }, [currentUser])

  // Refresh current_user if is_purchasing
  useEffect(() => {
    let closure = setTimeout(() => {

      const fn = async () => {
        const r = await api.getMyAccount()
        setCurrentUser(r)
      }
      fn()

    }, 1 * 1000)
    return () => clearTimeout(closure)
  }, [currentUser.is_purchasing])

  /* E */
  const [ editorMode, _setEditorMode ] = useState(JSON.parse(localStorage.getItem(C.names.editorMode)))
  const setEditorMode = (t) => {
    localStorage.setItem(C.names.editorMode, t)
    _setEditorMode(t)
  }

  /* F */
  const [ folded, setFolded ] = useState()

  /* I */
  const [ _itemToUnlock, _setItemToUnlock ] = useState({})
  if (!itemToUnlock) {
    itemToUnlock = _itemToUnlock
    setItemToUnlock = _setItemToUnlock
  }
  /* why is this here? remove. _vp_ 2022-03-18 */
  // const setItemToUnlock = (item) => {
  //   if (itemToUnlock.id !== item.id && !loginModalOpen) {
  //     _setItemToUnlock(item)
  //   }
  // }

  /* L */
  const [ location, setLocation ] = useState(null)
  const [ loginModalOpen, setLoginModalOpen ] = useState(false)

  /* M */
  const [ mapPanelWidth, setMapPanelWidth ] = useState(null)
  const [ mapPanelHeight, setMapPanelHeight ] = useState(null)

  /* P */
  const [ purchaseModalOpen, setPurchaseModalOpen ] = useState(false)

  /* R */

  const [ ratedConfirmation, _setRatedConfirmation ] = useState(JSON.parse(localStorage.getItem(C.ratedConfirmation)))
  const setRatedConfirmation = (which) => {
    localStorage.setItem(C.ratedConfirmation, JSON.stringify(which))
    _setRatedConfirmation(which)
  }

  const [ registerModalOpen, setRegisterModalOpen ] = useState(false)

  /* S */
  let [ showItem, setShowItem ] = useState(false)
  if (!!_setShowItem) { setShowItem = _setShowItem }
  if (!!_showItem) { showItem = _showItem }

  const [ showUrl, setShowUrl ] = useState(false)

  /* T */
  let tmp, defaultTwofoldPercent = 0.5
  if (tmp = localStorage.getItem(C.twofoldPercent)) {
    try {
      defaultTwofoldPercent = JSON.parse(tmp)
    } catch (err) {
      logg(err, 'cannot get twofoldPercent from localStorage')
    }
  }
  const [ twofoldPercent, setTwofoldPercent ] = useState(0.5)

  /* Z */
  const [ localZoom, setLocalZoom ] = useState(1)
  if (!zoom) {
    zoom = localZoom
    setZoom = setLocalZoom
  }

  return <TwofoldContext.Provider value={{
    bottomDrawerOpen, setBottomDrawerOpen,

    currentUser, setCurrentUser,

    editorMode, setEditorMode,

    folded, setFolded,

    itemToUnlock, setItemToUnlock,

    layout, setLayout,
    location, setLocation,
    loginModalOpen, setLoginModalOpen,

    mapPanelHeight, setMapPanelHeight,
    mapPanelWidth, setMapPanelWidth,

    purchaseModalOpen, setPurchaseModalOpen,

    ratedConfirmation, setRatedConfirmation,
    registerModalOpen, setRegisterModalOpen,

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
