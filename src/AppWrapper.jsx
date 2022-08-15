
import { Device } from '@capacitor/device'
import React, { useContext, useEffect, useRef, useState, } from 'react'
import { ThemeProvider } from 'styled-components'

import config from 'config'
// import 'ishlibjs/dist/index.css' // @TODO: re-add! Important! HEREHERE

import { C, logg, request, S, useApi } from "$shared"
import AppDesktop from './AppDesktop'
import AppMobile from './AppMobile'


/**
 * Choses mobile vs desktop
 */
const AppWrapper = (props) => {
  // logg(props, 'AppWrapper')

  const [ os, setOs ] = useState(null)
  // info.operatingSystem === 'ios' || 'android'
  const fn = async () => {
    let info = await Device.getInfo()
    setOs(info.operatingSystem)
  }
  fn()

  const [theme, setTheme] = useState(window.localStorage.getItem(C.theme) || C.themes.light)
  const toggleTheme = (e) => {
    if (theme === C.themes.light) {
      window.localStorage.setItem(C.theme, C.themes.dark)
      setTheme(C.themes.dark)
    } else {
      window.localStorage.setItem(C.theme, C.themes.light)
      setTheme(C.themes.light)
    }
  }

  const childProps = {
    theme, toggleTheme,
  }

  if (!os) { return null }
  return <ThemeProvider theme={theme == C.themes.light ? S.lightTheme: S.darkTheme} >
    { "ios android".includes(os) ?
      <AppMobile {...childProps} />
      : <AppDesktop {...childProps} /> }
  </ThemeProvider>
}

export default AppWrapper
