
import { Container as _Container, } from '@material-ui/core' // @TODO: I can remove this, it only adds padding to body, it seems.
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import {
  Switch, BrowserRouter as Router, Redirect, Route as _Route,
  useRouteMatch,
} from 'react-router-dom'
import styled from 'styled-components'

import config from "config"
import {
  AuthContextProvider,
} from 'ishlibjs'

import {
  BottomDrawer,
  UnlockModal,
} from "$components/application"
import MapuiLayout from "$components/application/MapuiLayout"
import { CitiesList, CitiesShow } from "$components/cities"
// @TODO: MyGalleries doesn't look right...
import { GalleriesShow, MyGalleries } from "$components/galleries"
import { LocationsShowDesktop } from "$components/locations"
import { TwofoldContext, TwofoldContextProvider } from "$components/TwofoldLayout"
import { ReportsShow } from "$components/reports"
import {
  Account,
} from "$components/users"
import { Videos } from "$components/videos"
import {
  C, CollapsibleContextProvider,
  logg,
  useApi,
} from "$shared"

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


const Root = styled.div`
  // border: 1px solid #741741;

  background: ${p => p.theme.colors.background};
  height: 100vh;
  overflow: auto;
`;


/**
 * AppDesktop
**/
const AppDesktop = (props) => {
  // logg(props, 'AppDesktop')
  // const {} = props

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

  return <Router>
    { /* @TODO: move AuthContext up to AppWrapper. _vp_ 2022-09-04 */ }
    <AuthContextProvider {...{ useApi, }} >
      <TwofoldContextProvider {...props} {...{ layout, setLayout }} >
        <CollapsibleContextProvider >
          <Root>
            <Container >
              <Switch id="main" main >

                <Redirect exact from="/" to={config.homePath} />

                <Route exact path="/en/account" component={Account} />
                <Route exact path="/en/account/my/videos" component={Videos} />
                <Route exact path="/en/account/my/galleries" component={MyGalleries} />

                <Route exact path="/en/cities"                 component={CitiesList} />
                <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

                <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

                <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

                <Route exact path="/en/locations/show/:slug" component={LocationsShowDesktop} layout={C.layout_mapui} />
                <Route exact path="/en/locations/show/:slug/:item_type/show/:item_slug" component={LocationsShowDesktop} layout={C.layout_mapui} />

              </Switch>
            </Container>
          </Root>

          <BottomDrawer />

        </CollapsibleContextProvider>
      </TwofoldContextProvider>
    </AuthContextProvider>
  </Router>
}

export default AppDesktop
