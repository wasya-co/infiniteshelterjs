

import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState, } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import styled from 'styled-components'

import {
  BottomDrawer,
} from '$components/application'
import {
  AppProvider,
  C,
  logg,
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

// @TODO: stop exporting, move to AppProvider, along with BottomDrawer and ToastContainer.
export const Root = styled.div`
  padding: var(--ion-small-padding);
`;



/**
 * WrappedApp
 *
 * The preferred AppWrapper. The previous one was obsoleted by next_js _vp_ 2022-09-09
 * Now, AppProvider has all the providers, and this wrapper is empty. _vp_ 2022-09-18
 *
 *
 * @Test: has toast container
 * @Test: has bottomDrawer
 *
 * @DONE: unlockModal cannot be here, it must be inside react-router.
 *
**/
const WrappedApp = (props) => {
  // logg(props, 'WrappedApp')
  const {} = props

  return (<AppProvider >

    <Root className='Root' >
      <AppRouter />
    </Root>

    <BottomDrawer />
    <ToastContainer position="bottom-left" />

  </AppProvider>)
}
WrappedApp.propTypes = {} // none
export default WrappedApp
