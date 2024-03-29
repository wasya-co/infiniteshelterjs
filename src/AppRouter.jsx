
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import {
  Switch,
  Redirect, Route, BrowserRouter as Router,
} from 'react-router-dom'
import styled, { useTheme } from 'styled-components'

import config from "config"


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
 * @TODO: test-drive: (1) when providing location_slug, (2) when providing location, (3) when neither. _vp_ 2022-09-12
 * @TODO: for Photo, can show full-screen pic. _vp_ 2022-04-17
 *
**/
export const appPaths = {
  item: (props) => {
    // logg(props, 'appPaths.item')

    let item, location
    if (props.item_type) {
      item = props
    } else {
      ({ item, location } = props)
    }
    let { item_type, slug } = item
    if (!slug) { // for Photo only
      slug = item.id
    }

    if (item_type === C.item_types.location) {
      return `/en/locations/show/${slug}`
    }

    if (location) {
      return `/en/locations/show/${location.slug}/${inflector.tableize(item_type)}/show/${slug}`
    } else {
      return `/en/${inflector.tableize(item_type)}/show/${slug}`
    }
  },

  gallery: ({ location, location_slug, slug }) => {
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

  location: ({ slug, newsitems_page }) => {
    const newsitems_page_str = newsitems_page ?
      `newsitems_page=${newsitems_page}` : ''

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
  // logg(props, 'AppRouter')

  return <Router>
    <Switch main >

      <Redirect exact from="/" to={config.homePath} />

      <Route exact path="/en/account" component={Account} />

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
