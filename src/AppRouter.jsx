
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import {
  Switch, BrowserRouter as Router, Redirect, Route as _Route,
} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'


import config from "config"
import {
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'


import { BottomDrawer,
  Menu, MenuBottom, MapuiMobileLayout,
  SideMenu,
  UnlockModal } from "$components/application"
import { CitiesList, CitiesShow } from "$components/cities"
import {
  GalleriesShow, Galleries, MyGalleries,
} from "$components/galleries"
import {
  LocationsShowMobile, LocationsShowMobile3d,
} from "$components/locations"
import { ReportsShow } from "$resources/reports"
import { SitesShow } from '$components/sites'
import { TwofoldContext, TwofoldContextProvider, } from "$components/TwofoldLayout"
import {
  Account,
} from "$components/users"
import { Videos } from "$components/videos"
import {
  C, CollapsibleContextProvider,
  logg,
  useApi,
} from "$shared"



/**
 * AppRouter
 * 2022-09-06 obsoletes AppMobile and AppDesktop
 *
**/
const AppRouter = (props) => {
  // logg(props, 'AppRouter')

  const [ layout, setLayout ] = useState(C.layout_onecol)
  // const [ bottomDrawerOpen, setBottomDrawerOpen ] = React.useState(false)
  // const [ itemToUnlock, setItemToUnlock ] = React.useState(false)
  // const [ zoom, setZoom ] = useState(1)
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

  return <Router>
    <Switch main >

      <Redirect exact from="/" to={config.homePath} />
      <Route exact path="/en" ><SitesShow /></Route>

      <Route exact path="/en/account" component={Account} />
      <Route exact path="/en/account/my/videos" component={Videos} />
      <Route exact path="/en/account/my/galleries" component={MyGalleries} />

      <Route exact path="/en/cities"                 component={CitiesList} />
      <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

      <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

      <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

      <Route exact path="/en/locations/show3d/:slug" component={LocationsShowMobile3d} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show/:slug" component={LocationsShowMobile} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show/:slug/:item_type/show/:item_slug" component={LocationsShowMobile} layout={C.layout_mapui} />

    </Switch>
  </Router>
}

export default AppRouter
