
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import {
  Switch,
  Redirect, Route, BrowserRouter as Router,
} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import config from "config"

import { CitiesList, CitiesShow } from "$components/cities"
import {
  GalleriesShow,
} from "$components/galleries"
import {
  LocationsShowAsync,
  LocationsShowMobile3d,
} from "$components/locations"
import { ReportsShow } from "$components/reports"
import {
  Account,
} from "$components/users"
import {
  C,
  logg,
} from "$shared"

/**
 * appPaths
 *
 * names should not end in "path", that's cruft.
 *
**/
export const appPaths = {
  cityVenuesPath: (slug) => `/en/cities/travel-to/${slug}/venues`,
  cityPath: (slug) => `/en/cities/travel-to/${slug}`,

  viewGallery: ({ location_slug, slug }) => {
    return `/en/locations/show/${location_slug}/galleries/show/${slug}`
  },

  locationPath: (slug) => `/en/locations/show/${slug}`,
}

/**
 * AppRouter - obsoletes AppMobile and AppDesktop
 * _vp_ 2022-09-06
 *
 * @TODO: remove mentions of layout from router, yes? _vp_ 2022-09-10
 *
**/
const AppRouter = (props) => {
  // logg(props, 'AppRouter')

  return <Router>
    <Switch main >

      <Redirect exact from="/" to={config.homePath} />

      <Route exact path="/en/account" component={Account} />

      <Route exact path="/en/cities"                 component={CitiesList} />
      <Route       path="/en/cities/travel-to/:name" component={CitiesShow} />

      <Route exact path="/en/galleries/show/:slug" component={GalleriesShow} />

      <Route exact path="/en/locations/show/:slug" component={LocationsShowAsync} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show/:slug/:item_type/show/:item_slug" component={LocationsShowAsync} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show2/:slug" component={LocationsShowAsync} layout={C.layout_mapui} />
      <Route exact path="/en/locations/show3d/:slug" component={LocationsShowMobile3d} layout={C.layout_mapui} />

      { /* @TODO: Remove, this appears obsolete _vp_ 2022-09-10 */ }
      <Route exact path="/en/reports/show/:slug" component={ReportsShow} />

    </Switch>
  </Router>
}

export default AppRouter
