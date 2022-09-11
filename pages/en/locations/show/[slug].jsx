
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState, } from 'react'
// import ReactDOM from 'react-dom'
// import { ToastContainer } from 'react-toastify'

import config from 'config'
import {
  AuthContextProvider,
} from 'ishlibjs'

import { LocationsShow } from '$components/locations'
import {
  CollapsibleProvider,
  TwofoldContextProvider,
} from '$components/TwofoldLayout'
import {
  request,
  C,
  logg,
  Root,
  ThemeProvider,
  useApi,
} from "$shared"
import AppWrapper2 from '$src/AppWrapper2'

/**
 * Page
 * en / locations / show / :slug
 *
 * @TODO: Fix mobile it looks terrible. _vp_ 2022-09-09
 *
**/
const Page = (props) => {
  console.log(props, 'Page')
  const {
    location,
  } = props

  // const router = useRouter()

  if (location.is_premium) {
    return <h1>This location cannot be accessed right now, please try again later</h1>
  }

  // @TODO: this is missing showItem _vp_ 2022-09-11
  const childProps = {
    location,
    match: { params: { slug: location.slug } }
  }

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
  // console.log(match, 'getStaticProps')
  const { params: { slug } } = match

  const api = useApi()

  const location = await api.getLocation({ slug, })
  logg(location, 'got Location?')

  return { props: { location } }
}



/**
 * getStaticPaths
 *
 * This function gets called at build time
 * { fallback: false } means other routes should 404.
**/
export async function getStaticPaths() {
  let paths = []
  paths.push({ params: { slug: '3d' }})
  paths.push({ params: { slug: 'art-gallery' }})
  paths.push({ params: { slug: 'chicago' }})
  paths.push({ params: { slug: 'root' }})
  paths.push({ params: { slug: 'trading' }})
  paths.push({ params: { slug: 'world' }})
  paths.push({ params: { slug: 'yola91' }})
  return { paths, fallback: true }
}



