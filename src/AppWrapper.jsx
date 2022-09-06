
import { Container as _Container, Grid, GridList } from '@material-ui/core'
import React, { useEffect, useState, } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import config from 'config'
import {
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'

import {
  BottomDrawer,
  SideMenu,
  UnlockModal,
} from '$components/application'
import { TwofoldContextProvider } from '$components/TwofoldLayout'
import {
  C, CollapsibleContextProvider,
  logg,
  S,
  useApi,
} from "$shared"
import AppRouter from './AppRouter'

// import '@ionic/react/css/core.css'
// import '@ionic/react/css/normalize.css'
// import '@ionic/react/css/structure.css'
// import '@ionic/react/css/typography.css'
// import '@ionic/react/css/padding.css'
// import '@ionic/react/css/float-elements.css'
// import '@ionic/react/css/text-alignment.css'
// import '@ionic/react/css/text-transformation.css'
// import '@ionic/react/css/flex-utils.css'
// import '@ionic/react/css/display.css'

// const Root = styled.div`
//   background: ${p => p.theme.colors.background};
//   height: 100vh;
//   overflow: auto;
// `;

// const __Container = styled(_Container)`
//   padding: 0;
//   height: 100vh;
//   overflow: scroll;
// `;

/**
 * AppWrapper
 *
**/
const AppWrapper = (props) => {
  // logg(props, 'AppWrapper')
  // const {} = props

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


  // <Root className="Root" >
  // <Container className="Container" >

  return <ThemeProvider theme={theme == C.themes.light ? S.lightTheme: S.darkTheme} >
    <AuthContextProvider {...{ useApi, }} >
      <TwofoldContextProvider >
        <CollapsibleContextProvider >

          { <SideMenu variant={C.variants.floating} /> }


          <AppRouter {...childProps} />

          <BottomDrawer />
          <UnlockModal />
          <LoginModal />
          <RegisterModal />
          <ToastContainer position="bottom-left" />

          </CollapsibleContextProvider>
      </TwofoldContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
}

export default AppWrapper
