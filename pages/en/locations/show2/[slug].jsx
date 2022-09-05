
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

// @TODO: refactor
import {
  request,
} from "$shared"

import {
  C, CollapsibleContextProvider,
  logg,
  S,
  TwofoldContextProvider,
  useApi,
} from "$shared"
import { LocationsShowDesktop } from '$components/locations'

/**
 * Page
**/
const Page = (props) => {
  console.log(props, 'Page')

  const router = useRouter()

  const [theme, setTheme] = useState(C.themes.light)
  const toggleTheme = (e) => {
    if ('undefined' === typeof window) { return }

    if (theme === C.themes.light) {
      window.localStorage.setItem(C.theme, C.themes.dark)
      setTheme(C.themes.dark)
    } else {
      window.localStorage.setItem(C.theme, C.themes.light)
      setTheme(C.themes.light)
    }
  }
  if ('undefined' !== typeof window) {
    const tmp = window.localStorage.getItem(C.theme)
    if (tmp && tmp !== theme) {
      // logg(tmp, 'setting theme')
      setTheme(tmp)
    }
  }

  const [ layout, setLayout ] = useState(C.layout_onecol)

  const childProps = {
    ...props,
    theme, toggleTheme,
    match: { params: { slug: router.query.slug } }
  }

  return <ThemeProvider theme={theme == C.themes.light ? S.lightTheme: S.darkTheme} >
    <AuthContextProvider {...{ useApi, }} >
      <TwofoldContextProvider {...props} {...{ layout, setLayout }} >
        <CollapsibleContextProvider >

          <LocationsShowDesktop { ...childProps } /> }
          <ToastContainer position="bottom-left" />

        </CollapsibleContextProvider>
      </TwofoldContextProvider>
    </AuthContextProvider>
  </ThemeProvider>
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
  paths.push({ params: { slug: 'root' }})
  paths.push({ params: { slug: 'chicago' }})
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
