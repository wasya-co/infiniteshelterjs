
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
  inflector,
  logg,
} from "$shared"

/**
 * appPaths
 *
 * names should not end in "path", that's cruft.
 *
 * @TODO: test-drive: (1) when providing location_slug, (2) when providing location, (3) when neither. _vp_ 2022-09-12
 *
**/
export const appPaths = {
  cityVenuesPath: (slug) => `/en/cities/travel-to/${slug}/venues`,
  cityPath: (slug) => `/en/cities/travel-to/${slug}`,

  viewGallery: ({ location, location_slug, slug }) => {
    if (location_slug) {
      return `/en/locations/show/${location_slug}/galleries/show/${slug}`
    }
    if (location) {
      return `/en/locations/show/${location.slug}/galleries/show/${slug}`
    } else {
      // return `/en/${inflector.tableize(item_type)}/show/${slug}`
      return `/en/galleries/show/${slug}`
    }
  },

  viewItem: ({ item, location }) => {
    const { item_type, slug } = item

    if (location) {
      return `/en/locations/show/${location.slug}/${inflector.tableize(item_type)}/show/${slug}`
    } else {
      return `/en/${inflector.tableize(item_type)}/show/${slug}`
    }
  },

  location: ({ slug, newsitems_page }) => {
    const newsitems_page_str = newsitems_page ?
      `newsitems_page=${newsitems_page}` : null

    return `/en/locations/show/${slug}?${newsitems_page_str}`
  },
}

/**
 * AppRouter - obsoletes AppMobile and AppDesktop
 * _vp_ 2022-09-06
 *
 * @TODO: remove mentions of layout from router, yes? _vp_ 2022-09-10
 *
**/
const AppRouter = (props) => {
  logg(props, 'AppRouter')

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
