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
import { C, CollapsibleContext, Debug, logg, request, TwofoldContext, useApi, } from "$shared"
import { BottomDrawer, Menu, MenuBottom, MenuLeft, UnlockModal } from "$components/application"
import MapuiLayout from "$components/application/MapuiLayout"
import { CitiesList, CitiesShow } from "$components/cities"
// @TODO: MyGalleries doesn't look right...
import { GalleriesShow, MyGalleries } from "$components/galleries"
import { LocationsShow as LocationsShow } from "$components/locations"
import { ReportsShow } from "$components/reports"
import { SitesShow } from '$components/sites'
import { Account, LoginModal } from "$components/users"
import { Videos } from "$components/videos"

const Root = styled.div`
  background: #dedede;
  height: 100vh;
  overflow: auto;
`;

const __Container = styled(_Container)`
  height: 100vh;
  overflow: scroll;
`;

const App = () => {
  const [ bottomDrawerOpen, setBottomDrawerOpen ] = useState(false)
  const [ currentUser, setCurrentUser ] = useState(false) // localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user')) : null)
  const [ itemToUnlock, setItemToUnlock ] = useState(false)
  const [ layout, setLayout ] = useState(C.layout_onecol)
  const [ loginModalOpen, setLoginModalOpen ] = useState(false)
  const [ showItem, setShowItem ] = useState(false)
  const [ showUrl, setShowUrl ] = useState(false)
  const [ zoom, setZoom ] = useState(1)
  const api = useApi()

  // const mountedRef = useRef('init')
  useEffect(() => {
    const fn = async () => {
      // check jwt
      const jwtToken = localStorage.getItem('jwt_token')
      await request.get(`${config.apiOrigin}${api.myAccount()}?jwt_token=${jwtToken}`).then((r) => {
        setCurrentUser(r.data)
      }).catch((e) => {
        logg(e, 'e12')
        if (e.message === "Request failed with status code 401") {
          setLoginModalOpen(true)
        }
      })
    }
    fn()
  }, [])

  const Container = (props) => {
    switch(layout) {
      case C.layout_onecol:
        // main case
        return <__Container maxWidth="md" {...props}/>
      case C.layout_mapui:
        return <MapuiLayout {...props} {...{ bottomDrawerOpen, setBottomDrawerOpen }} />
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
    <ToastContainer />
    <TwofoldContext.Provider value={{
        bottomDrawerOpen, setBottomDrawerOpen,
        currentUser, setCurrentUser,
        itemToUnlock, setItemToUnlock,
        layout, setLayout,
        loginModalOpen, setLoginModalOpen,
        showItem, setShowItem,
        showUrl, setShowUrl,
        zoom, setZoom,
    }} >

      <MenuLeft />
      <Root>
        <Container >
          <Switch id="main" main >

            <Redirect exact from="/" to="/en" />
            <Route exact path="/en" ><SitesShow /></Route>

            <Route exact path="/en/account" component={Account} />
            <Route exact path="/en/account/my/videos" component={Videos} />
            <Route exact path="/en/account/my/galleries" component={MyGalleries} />

            <Route exact path="/en/cities"                 component={CitiesList} />
            <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

            <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

            <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

            <Route exact path="/en/locations/show/:slug" component={LocationsShow} layout={C.layout_mapui} />

          </Switch>
        </Container>
      </Root>
      <BottomDrawer />
      <UnlockModal />
      <LoginModal />

    </TwofoldContext.Provider>
  </Router>)
}

export default App
