
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState, } from 'react'
import { ToastContainer } from 'react-toastify'

import config from 'config'
import {
  AuthContext,
  AuthContextProvider,
  LoginModal,
  RegisterModal,
} from 'ishlibjs'

import {
  BottomDrawer,
} from '$components/application'
import {
  LocationsShow,
  LocationsShowAsync,
} from "$components/locations"
import {
  CollapsibleProvider,
  TwofoldContextProvider,
} from "$components/TwofoldLayout"
import {
  C,
  logg,
  NavigationProvider,
  request,
  SsrProvider,
  ThemeProvider,
  useApi,
} from "$shared"
import AppRouter from '$src/AppRouter'
import AppWrapper2, { Root, WLoginModal } from '$src/AppWrapper2'

/**
 * Page
 * en / locations / show / :slug
 *
 * @TODO: Fix mobile it looks terrible. _vp_ 2022-09-09
 *
**/
const Page = (props) => {
  console.log('+++ +++ Page:', props)
  const {
    item: location,
  } = props

  if (!location) {
    return <h1>Wow, this location is missing?!</h1>
  }
  if (location.is_premium) {
    return <h1>This location cannot be accessed right now, please try again later.</h1>
  }

  return <>
    <Head>
      <title>{location.name} - {config.siteTitle} v2</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <NavigationProvider {...{ useHistory: useRouter, }} >
      <ThemeProvider >
        <AuthContextProvider {...{ useApi, }} >
          <TwofoldContextProvider >
            <CollapsibleProvider >

              <Root className='Root' >

                <LocationsShow location={location} match={{ params: { slug: location.slug } }} />

              </Root>
              <ToastContainer position="bottom-left" />
              <WLoginModal />
              <RegisterModal />
              <BottomDrawer />

            </CollapsibleProvider>
          </TwofoldContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </NavigationProvider>

  </>
  return <>
    <Head>
      <title>{location.name} - {config.siteTitle} v2</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AppWrapper2 {...{ location }} />
  </>
}
export default Page







/**
 * getStaticProps
 *
 * This function gets called at build time
 * By returning { props: { posts } }, the component will receive `posts` as a prop at build time
 *
  params contains the route parameters for pages using dynamic routes.
    For example, if the page name is [id].js , then params will look like { id: ... }.
  preview is true if the page is in the Preview Mode and undefined otherwise.
  previewData contains the preview data set by setPreviewData.
  locale contains the active locale (if enabled).
  locales contains all supported locales (if enabled).
  defaultLocale contains the configured default locale (if enabled).
**/
export async function getStaticProps(match) {
  console.log('+++ +++ getStaticProps:', match)
  const { params: { slug } } = match

  let apiOrigin
  // apiOrigin = 'http://localhost:3001'
  apiOrigin = 'https://manager.piousbox.com'
  // const location = await api.getLocation({ slug, })

  const item = await request.get(`${apiOrigin}/api/maps/view/${slug}`).then(r => r.data).then(r => {
      return r.map
    }).catch((err) => {
      return err
    })

  // console.log("+++ +++ item:", item)
  return { props: { item } }
}



/**
 * getStaticPaths
 *
 * This function gets called at build time
 * { fallback: false } means other routes should 404.
**/
export async function getStaticPaths() {
  let paths = []

  // paths.push({ params: { slug: '3d' }})
  // paths.push({ params: { slug: 'art-gallery' }})
  // paths.push({ params: { slug: 'chicago' }})
  // paths.push({ params: { slug: 'root' }})
  // paths.push({ params: { slug: 'trading' }})
  // paths.push({ params: { slug: 'world' }})
  // paths.push({ params: { slug: 'yola91' }})

  console.log('+++ +++ getStaticPaths:', paths)

  return { paths, fallback: true }
}



