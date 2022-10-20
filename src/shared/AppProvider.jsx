
import { Device } from '@capacitor/device'
import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import * as ReactRouterDOM from 'react-router-dom'
import { toast } from 'react-toastify'
import * as THREE from "three"
import { Octree } from 'three/examples/jsm/math/Octree'

import {
  AuthContext,
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'

import {
  CollapsibleProvider,
  TwofoldContextProvider,
} from "$components/TwofoldLayout"
import {
  C,
  logg,
  ThemeProvider,
  useApi,
} from "$shared"

/**
 * links AuthContext to LoginModal
**/
const WLoginModal = (props) => {
  // logg(props, 'WLoginModal')

  const {
    setCurrentUser,
  } = useContext(AuthContext)

  const onError = (inn) => {
    logg(inn, 'cannot login!')
    toast('cannot login!')
  }
  const onSuccess = (inn) => {
    logg('Logged in successfully.')
    setCurrentUser(inn)
  }

  return <LoginModal {...{ onError, onSuccess }} />
}

export const AppContext = React.createContext({})

/**
 * AppProvider: os, useHistory, theme, AuthContext (current_user, useApi), TwofoldContext, CollapsibleContext
 *
 * @TODO: move ToastContainer in here?
 *
 * @Test: os / mobile detection?
 * @Test: provides theme
 * @Test: provides auth
 * @Test: provides twofold
 * @Test: provides collapsible
 * @Test: has loginModal and WLoginModal ?
 * @Test: has registerModal
 *
**/
const AppProvider = ({ children, ...props }) => {
  // logg(props, 'AppProvider')
  const {
    useHistory = ReactRouterDOM.useHistory,
  } = props

  // @TODO: test-drive _vp_ 2022-09-13
  // @TODO: this probably doesn't accommodate next_js, and raises a jest warning. _vp_ 2022-09-23
  const [ os, setOs ] = useState(null)
  const fn = async () => {
    let info = await Device.getInfo() // info.operatingSystem === 'ios' || 'android'
    setOs(info.operatingSystem)
  }
  fn()

  const [ scene, setScene ] = useState(new THREE.Scene())
  const [ tracked, setTracked ] = useState([])
  const [ pickingObjects, setPickingObjects ] = useState([])
  const [ markers2destinationSlugs, setMarkers2destinationSlugs ] = useState({})
  const [ worldOctree, setWorldOctree ] = useState(new Octree())

  return <AppContext.Provider value={{
    os,
    useHistory,
    scene,
    tracked, setTracked,
    worldOctree, setWorldOctree,
    pickingObjects, setPickingObjects,
    markers2destinationSlugs, setMarkers2destinationSlugs,
  }} >
    <ThemeProvider >
      <AuthContextProvider {...{ useApi, }} >
        <TwofoldContextProvider >
          <CollapsibleProvider >

            { children }

            <WLoginModal />
            <RegisterModal />

          </CollapsibleProvider>
        </TwofoldContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  </AppContext.Provider>
}
AppProvider.propTypes = {}
export default AppProvider
