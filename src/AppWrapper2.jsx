
import { Device } from '@capacitor/device'
import React, { useEffect, useState, } from 'react'
import { ToastContainer } from 'react-toastify'

import config from 'config'
import {
  AuthContextProvider,
} from 'ishlibjs'

import {
  C, CollapsibleContextProvider,
  logg,
  useApi,
} from "$shared"
import AppRouter from './AppRouter'

import ThemeProvider from '$components/application/ThemeProvider'
import { TwofoldContextProvider } from "$components/TwofoldLayout"

/**
 * AppWrapper2
 * _vp_ 2022-09-09
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js
**/
const AppWrapper2 = (props) => {
  logg(props, 'AppWrapper2')

  const [ os, setOs ] = useState(null)
  const fn = async () => {
    let info = await Device.getInfo() // info.operatingSystem === 'ios' || 'android'
    setOs(info.operatingSystem)
  }
  fn()
  if (!os) { return null }

  return <ThemeProvider >
    <AuthContextProvider {...{ useApi, }} >
      <TwofoldContextProvider >
        <CollapsibleContextProvider >

          <AppRouter />
          <ToastContainer position="bottom-left" />

        </CollapsibleContextProvider>
      </TwofoldContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
}

export default AppWrapper2
