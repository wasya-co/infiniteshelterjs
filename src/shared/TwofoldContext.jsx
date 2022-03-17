
import { arrowBack } from 'ionicons/icons'
import { IonIcon } from '@ionic/react'
import { CircularProgress as _CircularProgress } from '@material-ui/core'
import _Box from '@material-ui/core/Box'
import { ChevronLeft as _ChevronLeft, ChevronRight as _ChevronRight, Menu as _MenuIcon, } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import C from "./C"
import useApi from "./Api"

/**
 * ishjs has a newer version of this. _vp_ 2022-03-05
*/
const TwofoldContext = React.createContext({})
const TwofoldContextProvider = ({ children, ...props }) => {
  // logg(props, 'TwofoldContextProvider')
  const {
    currentUser, setCurrentUser,
    layout, setLayout,
    loginModalOpen, setLoginModalOpen,
    theme, toggleTheme,
  } = props

  const api = useApi()

  // Refresh current_user if is_purchasing
  useEffect(() => {
    let closure = setTimeout(async () => {
      const result = await api.getMyAccount()
      setCurrentUser(result)
    }, 1 * 1000)
    return () => clearTimeout(closure)
  }, [currentUser.is_purchasing])

  /* B */
  // @TODO: does localStorage work like this on mobile?
  // @TODO: try and catch
  const [ bottomDrawerOpen, _setBottomDrawerOpen ] = useState(JSON.parse(localStorage.getItem(C.bottomDrawerOpen)))
  const setBottomDrawerOpen = (m) => {
    localStorage.setItem(C.bottomDrawerOpen, JSON.stringify(m))
    _setBottomDrawerOpen(m)
  }

  /* F */
  const [ folded, setFolded ] = useState()

  /* I */
  const [ itemToUnlock, _setItemToUnlock ] = useState({})
  const setItemToUnlock = (item) => {
    if (itemToUnlock.id !== item.id && !loginModalOpen) {
      _setItemToUnlock(item)
    }
  }

  /* L */
  const [ location, setLocation ] = useState(null)

  /* M */
  const [ mapPanelWidth, setMapPanelWidth ] = useState(null)
  const [ mapPanelHeight, setMapPanelHeight ] = useState(null)

  /* P */
  const [ purchaseModalIsOpen, setPurchaseModalIsOpen ] = useState(false)

  /* R */

  const [ ratedConfirmation, _setRatedConfirmation ] = useState(JSON.parse(localStorage.getItem(C.ratedConfirmation)))
  const setRatedConfirmation = (which) => {
    localStorage.setItem(C.ratedConfirmation, JSON.stringify(which))
    _setRatedConfirmation(which)
  }

  const [ registerModalIsOpen, setRegisterModalIsOpen ] = useState(false)

  /* S */
  const [ showItem, setShowItem ] = useState(false)
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
  const [ zoom, setZoom ] = useState(1)

  return <TwofoldContext.Provider value={{
    bottomDrawerOpen, setBottomDrawerOpen,

    currentUser, setCurrentUser, // @TODO: move this to an AppWrapper context

    folded, setFolded,

    itemToUnlock, setItemToUnlock,

    layout, setLayout,
    location, setLocation,
    loginModalOpen, setLoginModalOpen,

    mapPanelHeight, setMapPanelHeight,
    mapPanelWidth, setMapPanelWidth,

    purchaseModalIsOpen, setPurchaseModalIsOpen,

    ratedConfirmation, setRatedConfirmation,
    registerModalIsOpen, setRegisterModalIsOpen,

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
