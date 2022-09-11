
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState, } from 'react'
// import ReactDOM from 'react-dom'
// import {
//   Link, Switch, BrowserRouter as Router, Redirect, Route as _Route, useHistory, withRouter,
// } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify'

import config from 'config'
import {
  AuthContextProvider,
} from 'ishlibjs'

import { ThemeProvider } from '$components/application'
import { LocationsShow } from '$components/locations'
import { TwofoldContextProvider } from '$components/TwofoldLayout'
import {
  request,
  C,
  logg,
  Root,
  useApi,
} from "$shared"
import AppWrapper2 from "$src/AppWrapper2"

/**
 * LocationsShowDesktop
 * en / locations / SHOW2 / :slug , # don't forget that it's a different path!
 *
 * @TODO: Fix mobile it looks terrible. _vp_ 2022-09-09
 *
**/
const Page = (props) => {
  console.log(props, 'Page')
  const {
    item: location,
  } = props

  const router = useRouter()

  if (location.is_premium) {
    return <h1>This location cannot be accessed right now, please try again later</h1>
  }

  const childProps = {
    item: location,
    match: { params: { slug: router.query.slug } }
  }

  return (<>
    <Head>
      <title>{location.name} - {config.siteTitle}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <AuthContextProvider {...{ useApi, }} >
      <ThemeProvider >
        <TwofoldContextProvider >

          <Root>

            <LocationsShow { ...childProps } />

          </Root>

        </TwofoldContextProvider>
      </ThemeProvider>
    </AuthContextProvider>
  </>);
}
export default Page







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

**/
export async function getStaticProps(match) {
  // console.log(match, 'getStaticProps')
  const { params: { slug } } = match

  // const api = useApi()
  // const location = await api.getLocation({ slug: match.params.slug })

  // @TODO: this is from useApi(), refactor it back somewhere.
  const domain = 'http://localhost:3001'
  const item = await request.get(`${domain}/api/maps/view/${slug}`).then(r => r.data).then(r => {
      return r.map
    }).catch((err) => {
      return err
    })

  return { props: { item } }
}

/**
 * getStaticPaths
 *
 * This function gets called at build time
**/
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
//
export async function getStaticPaths() {
  let paths = []
  paths.push({ params: { slug: 'root' }})
  paths.push({ params: { slug: 'chicago' }})
  return { paths, fallback: false }
}




