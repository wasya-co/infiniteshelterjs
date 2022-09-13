
import { Device } from '@capacitor/device'
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState, } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import {
  AuthContext,
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'

import {
  BottomDrawer,
} from '$components/application'
import {
  CollapsibleProvider,
  TwofoldContextProvider,
} from "$components/TwofoldLayout"
import {
  C,
  logg,
  SsrProvider,
  ThemeProvider,
  useApi,
} from "$shared"
import AppRouter from '$src/AppRouter'



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

// @TODO: stop exporting
export const Root = styled.div`
  padding: 10px;
`;

/**
 * links AuthContext to LoginModal
 * @TODO: stop exporting this.
**/
export const WLoginModal = (props) => {
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
export const AppProvider = ({ children, ...props }) => {
  return <AppContext.Provider value={{ ...props }} >
    { children }
  </AppContext.Provider>
}

/**
 * AppWrapper2
 * _vp_ 2022-09-09
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js
 *
 *
 * @TODO: test: has toast container
 * @TODO: os / mobile detection?
 *
 * @TODO: test: provides theme
 * @TODO: test: provides auth
 * @TODO: test: provides twofold
 * @TODO: test: provides collapsible
 *
 * @TODO: test: has bottomDrawer
 * @TODO: test: has loginModal and WLoginModal ?
 * @TODO: test: has registerModal
 *
 * @DONE: unlockModal cannot be here, it must be inside react-router.
 *
**/
const AppWrapper2 = (props) => {
  // logg(props, 'AppWrapper2')
  const {} = props

  // @TODO: test-drive _vp_ 2022-09-13
  const [ os, setOs ] = useState(null)
  const fn = async () => {
    let info = await Device.getInfo() // info.operatingSystem === 'ios' || 'android'
    setOs(info.operatingSystem)
  }
  fn()

  return (
    <AppProvider {...{ os }} >
      <ThemeProvider >
        <AuthContextProvider {...{ useApi, }} >
          <TwofoldContextProvider >
            <CollapsibleProvider >

              <Root className='Root' >

                <AppRouter />

              </Root>
              <ToastContainer position="bottom-left" />
              <WLoginModal />
              <RegisterModal />
              <BottomDrawer />

            </CollapsibleProvider>
          </TwofoldContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </AppProvider>
  )
}
AppWrapper2.propTypes = {} // none
export default AppWrapper2
