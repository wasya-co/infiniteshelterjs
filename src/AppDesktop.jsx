

import { Container as _Container, Grid, GridList } from '@material-ui/core'
import React, { Fragment as F, useEffect, useRef, useState } from 'react'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import styled from 'styled-components'

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

import './theme/variables.css'
import 'react-toastify/dist/ReactToastify.css'

import config from "config"
import {
  BottomDrawer,
  MainHeader, Menu, MenuBottom, MenuLeft,
  UnlockModal
} from "$components/application"
import MapuiLayout from "$components/application/MapuiLayout"
import { CitiesList, CitiesShow } from "$components/cities"
// @TODO: MyGalleries doesn't look right...
import { GalleriesShow, MyGalleries } from "$components/galleries"
import { LocationsShowDesktop } from "$components/locations"
import Three from "$components/locations3/ThreePanelV1"
import { ReportsShow } from "$components/reports"
// import { SitesShow } from '$components/sites'
import SitesShow from '$components/sites/SitesShow1'
import { Account, LoginModal } from "$components/users"
import { Videos } from "$components/videos"
import {
  C, CollapsibleContext, CollapsibleContextProvider,
  Debug, logg, request, TwofoldContext, TwofoldContextProvider , useApi,
} from "$shared"

const Root = styled.div`
  // border: 1px solid #741741;

  background: #dedede;
  height: 100vh;
  overflow: auto;
`;


const AppDesktop = (props) => {
  // logg(props, 'AppDesktop')
  const {
    currentUser, setCurrentUser,
    loginModalOpen, setLoginModalOpen,
  } = props

  const api = useApi()

  const [ layout, setLayout ] = useState(C.layout_onecol)

  const Container = (props) => {
    switch(layout) {
      case C.layout_onecol:
        // main case
        return <_Container maxWidth="md" {...props} />
      case C.layout_mapui:
        return <MapuiLayout {...props} />
    }
  }

  const Route = (props) => {
    useEffect(() => {
      if (props.layout) {
        setLayout(props.layout)
      } else {
        setLayout(C.layout_onecol)
      }
    }, [props.layout])

    return <_Route {...props} />
  }

  return (<Router>


    <TwofoldContextProvider {...props} {...{ layout, setLayout }} >
      <CollapsibleContextProvider >
        <Root>

          { /* This no more, if I want it to look like Financial Times */ }
          { /* layout === C.layout_onecol && <MenuLeft variant={C.variants.floating} /> */ }
          { /* <MainHeader /> */ }

          <Container >
            <Switch id="main" main >

              <Redirect exact from="/" to={config.homeLocation} />
              <Route exact path="/en" ><SitesShow /></Route>

              <Route exact path="/en/account" component={Account} />
              <Route exact path="/en/account/my/videos" component={Videos} />
              <Route exact path="/en/account/my/galleries" component={MyGalleries} />

              <Route exact path="/en/cities"                 component={CitiesList} />
              <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

              <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

              <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

              <Route exact path="/en/locations/show/:slug" component={LocationsShowDesktop} layout={C.layout_mapui} />

            </Switch>
          </Container>
        </Root>

        <BottomDrawer />
        <UnlockModal />
        <LoginModal />
        <ToastContainer />

      </CollapsibleContextProvider>
    </TwofoldContextProvider>
  </Router>)
}

export default AppDesktop
