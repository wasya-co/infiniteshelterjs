
import { Device } from '@capacitor/device'
import React, { useEffect, useState, } from 'react'
import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import config from 'config'
import {
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'

import {
  C,
  logg,
  ThemeProvider,
  useApi,
} from "$shared"
import AppRouter from './AppRouter'

import {
  BottomDrawer,
} from '$components/application'
import {
  CollapsibleProvider,
  TwofoldContextProvider,
} from "$components/TwofoldLayout"

// I'm using this. _vp_ 2022-09-10
import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

const Root = styled.div`
  padding: 10px;
`;

/**
 * AppWrapper2
 * _vp_ 2022-09-09
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js
 *
 *
 * @TODO: test: has toast container
 *
 * @TODO: test: provides theme
 * @TODO: test: provides auth
 * @TODO: test: provides twofold
 * @TODO: test: provides collapsible
 *
 * @TODO: test: has bottomDrawer
 * @TODO: test: has loginModal
 * @TODO: test: has registerModal
 *
 * @DONE: unlockModal cannot be here, it must be inside react-router.
 *
**/
const AppWrapper2 = (props) => {
  logg(props, 'AppWrapper2')

  // @TODO: this is currently unused. _vp_ 2022-09-10
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
        <CollapsibleProvider >

          <Root className='Root' >

            <AppRouter />

          </Root>
          <ToastContainer position="bottom-left" />
          <LoginModal />
          <RegisterModal />
          <BottomDrawer />

        </CollapsibleProvider>
      </TwofoldContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
}

export default AppWrapper2
