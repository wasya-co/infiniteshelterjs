
import { Device } from '@capacitor/device'
import React, { useContext, useEffect, useRef, useState, } from 'react'

import config from 'config'
import { C, logg, request, TwofoldContext, useApi } from "$shared"
import AppDesktop from './AppDesktop'
import AppMobile from './AppMobile'

/**
 * Choses mobile vs desktop
 */
const AppWrapper = (props) => {
  logg(props, 'AppWrapper')
  const api = useApi()


  const [ currentUser, setCurrentUser ] = useState(false)
  const [ loginModalOpen, setLoginModalOpen ] = useState(false)
  const mountedRef = useRef('init')
  useEffect(() => {
    const fn = async () => {
      const jwtToken = localStorage.getItem(C.jwt_token)
      await request.get(`${config.apiOrigin}${api.myAccount()}?jwt_token=${jwtToken}`).then((r) => {
        if (!mountedRef.current) { return }
        setCurrentUser(r.data)
      }).catch((e) => {
        logg(e, 'e12')
        if (e.message === "Request failed with status code 401") {
          if (config.requireLogin || typeof config.requireLogin === 'undefined') {
            setLoginModalOpen(true)
          }
        }
      })
    }
    fn()
    return () => mountedRef.current = null
  }, [currentUser]) // @TODO: currentUser here is appropriate?


  const [ os, setOs ] = useState(null)
  // info.operatingSystem === 'ios' || 'android'
  const fn = async () => {
    let info = await Device.getInfo()
    setOs(info.operatingSystem)
  }
  fn()


  const childProps = {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  }
  if (!os) { return null }
  return ("ios android".includes(os) ?
    <AppMobile {...childProps} />
    : <AppDesktop {...childProps} />)
}

export default AppWrapper
