
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import {
  Switch,
  Redirect, Route, BrowserRouter as Router,
} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'


import config from "config"

import { CitiesList, CitiesShow } from "$components/cities"
import {
  GalleriesShow, MyGalleries,
} from "$components/galleries"
import {
  LocationsShow, LocationsShowMobile3d,
} from "$components/locations"
import { ReportsShow } from "$resources/reports"
import { SitesShow } from '$components/sites'
import {
  Account,
} from "$components/users"
import { Videos } from "$components/videos"
import {
  C,
  logg,
} from "$shared"


/**
 * AppRouter - obsoletes AppMobile and AppDesktop
 * _vp_ 2022-09-06
 *
**/
const AppRouter = (props) => {
  logg(props, 'AppRouter')

  return <Router>
    <Switch id="main" main >

      <Redirect exact from="/" to={config.homePath} />
      <Route exact path="/en" ><SitesShow /></Route>

      <Route exact path="/en/account" component={Account} />
      <Route exact path="/en/account/my/videos" component={Videos} />
      <Route exact path="/en/account/my/galleries" component={MyGalleries} />

      <Route exact path="/en/cities"                 component={CitiesList} />
      <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

      <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

      <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

      <Route exact path="/en/locations/show/:slug" component={LocationsShow} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show/:slug/:item_type/show/:item_slug" component={LocationsShow} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show2/:slug" component={LocationsShow} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show3d/:slug" component={LocationsShowMobile3d} layout={C.layout_mapui} />

    </Switch>
  </Router>
}

export default AppRouter

