
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState, } from 'react'
import ReactDOM from 'react-dom'
import {
  Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import config from 'config'
import {
  AuthContextProvider,
} from 'ishlibjs'

import { LocationsShow } from '$components/locations'
import { TwofoldContext, TwofoldContextProvider } from '$components/TwofoldLayout'
import {
  C, CollapsibleContextProvider,
  logg,
  request,
  S,
  useApi,
} from "$shared"

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

/**
 * LocationsShow
**/
const Page = (props) => {
  // console.log(props, 'Page')

  const router = useRouter()

  if (props.location.is_premium) {
    return <h1>We apologize, this premium content is not currently available.</h1>
  }

  const childProps = {
    ...props,
    match: { params: { slug: router.query.slug } }
  }

  return <>

    { /* @TODO: abstract and move this _vp_ 2022-09-06 */ }
    <Head>
      <title>{props.location.name} - {config.siteTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <ThemeProvider theme={ S.lightTheme} >
      <AuthContextProvider {...{ useApi, }} >
        <TwofoldContextProvider {...props} >
          <CollapsibleContextProvider >

            <LocationsShow { ...childProps } /> }
            <ToastContainer position="bottom-left" />

          </CollapsibleContextProvider>
        </TwofoldContextProvider>
      </AuthContextProvider>
    </ThemeProvider>

  </>
}

/**
 *  getStaticProps
 *

  Context parameter
  The context parameter is an object containing the following keys:

    params contains the route parameters for pages using dynamic routes.
      For example, if the page name is [id].js , then params will look like { id: ... }.
    preview is true if the page is in the Preview Mode and undefined otherwise.
    previewData contains the preview data set by setPreviewData.
    locale contains the active locale (if enabled).
    locales contains all supported locales (if enabled).
    defaultLocale contains the configured default locale (if enabled).

  // This function gets called at build time
  // By returning { props: { posts } }, the component
  // will receive `posts` as a prop at build time

*/
export async function getStaticProps(match) {
  console.log(match, 'getStaticProps')
  const { params: { slug } } = match

  // const api = useApi()
  // const location = await api.getLocation({ slug: match.params.slug })

  // @TODO: this is from useApi(), refactor it back somewhere.
  const domain = 'http://localhost:3001'
  const location = await request.get(`${domain}/api/maps/view/${slug}`).then(r => r.data).then(r => {
      return r.map
    }).catch((err) => {
      return err
    })

  console.log('location112:', location)
  return { props: { location } }
}

/**
 * getStaticPaths
**/
export async function getStaticPaths() {
  let paths = []
  paths.push({ params: { slug: 'chicago' }})
  paths.push({ params: { slug: 'root' }})
  paths.push({ params: { slug: 'trading' }})

  return { paths, fallback: false }
}
// // This function gets called at build time
// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('https://.../posts')
//   const posts = await res.json()
//
//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => ({
//     params: { id: post.id },
//   }))
//
//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

export default Page
