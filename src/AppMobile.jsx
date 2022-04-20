import { Container as _Container, Grid, GridList } from '@material-ui/core'

import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import Modal from "react-modal"
import {
  Switch, BrowserRouter as Router, Redirect, Route as _Route,
} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'

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

import config from "config"
import {
  LoginModal,
  RegisterModal,
} from 'ishlibjs'


import { BottomDrawer, Menu, MenuBottom, MenuLeft, UnlockModal } from "$components/application"
import { MapuiMobileLayout } from "$components/application"
import { CitiesList, CitiesShow } from "$components/cities"
import { GalleriesShow } from "$components/galleries"
import { LocationsShowMobile } from "$components/locations"
import { ReportsShow } from "$resources/reports"
import { SitesShow } from '$components/sites'
import {
  Account,
} from "$components/users"
import { Videos } from "$components/videos"
import { Galleries, MyGalleries } from "$components/galleries"
import {
  C, CollapsibleContextProvider,
  logg,
  TwofoldContext, TwofoldContextProvider,
  useApi,
} from "$shared"

const Root = styled.div`
  background: ${p => p.theme.colors.background};
  height: 100vh;
  overflow: auto;
`;

const __Container = styled(_Container)`
  padding: 0;
  height: 100vh;
  overflow: scroll;
`;

/**
 * AppMobile
 */
const AppMobile = (props) => {
  // logg(props, 'AppMobile')

  const [ layout, setLayout ] = useState(C.layout_onecol)
  // const [ bottomDrawerOpen, setBottomDrawerOpen ] = React.useState(false)
  // const [ itemToUnlock, setItemToUnlock ] = React.useState(false)
  // const [ zoom, setZoom ] = useState(1)
  // const api = useApi()
  const theme = useTheme()

  // @TODO: move into its own component!
  const Container = ({ children, ...props }) => {
    // logg(props, 'Container')

    const {
      bottomDrawerOpen,
    } = useContext(TwofoldContext)

    const style = {
      paddingBottom: bottomDrawerOpen ? theme.bottomDrawerOpenHeight : null
    }

    switch(layout) {
      case C.layout_onecol:
        return <__Container style={style} maxWidth="md" {...props} >{ children }</__Container>
      case C.layout_mapui:
        // This is true right now (2021-10-20) for mobile even when it's one column
        return <MapuiMobileLayout style={style} {...props} >{ children }</MapuiMobileLayout>
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

  // const doUnlock = async () => {
  //   // @TODO: check how many unlocks I have, and offer to purchase more if not enough.
  //   const path = api.doUnlock({ kind: 'Report', id: itemToUnlock.report_id })
  //   const result = await request.post(`${config.apiOrigin}${path}`)
  //   logg(result, 'result of unlocking')
  // }

  return (<Router>
    <TwofoldContextProvider {...props} {...{ layout, setLayout }} >
      <CollapsibleContextProvider >
        { layout === C.layout_onecol && <MenuLeft variant={C.variants.floating} /> }
        <Root className="Root" >

          <Container className="Container" >
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

              <Route exact path="/en/locations/show/:slug" component={LocationsShowMobile} layout={C.layout_mapui} />
              <Route exact path="/en/locations/show/:slug/:item_type/show/:item_slug" component={LocationsShowMobile} layout={C.layout_mapui} />

            </Switch>
          </Container>

        </Root>

        <BottomDrawer />
        <UnlockModal />
        <LoginModal />
        <RegisterModal />
        <ToastContainer />

      </CollapsibleContextProvider>
    </TwofoldContextProvider>
  </Router>)
}

export default AppMobile
