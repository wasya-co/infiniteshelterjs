import { IonPage, IonLoading, IonContent } from '@ionic/react'
import React, { Fragment as F, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { C, logg, useApi, } from "$shared"
import { Features } from "./"
import {
  MainHeader,
} from "$components/application"
import { Newsitems } from "$components/newsitems"

const _Hero = styled.div`
  height: 370px;
  text-align: center;

  img {
    max-width: 100%;
  }
`
const Hero = () => <_Hero><img className="image" src="/assets/hero.png" /></_Hero>

const Root = styled.div`
  margin: 0;
  padding-bottom: 1em;
`

const SitesShow = (props) => {
  // logg(props, 'SitesShow')

  let [ site, setSite ] = useState({ features: [], newsitems: [] })
  let [ loading, setLoading ] = useState(false)

  const api = useApi()
  const mountedRef = useRef('init')

  useEffect(() => {
    api.applicationHome().then(data => {
      if (!mountedRef.current) { return null }
      setSite(data)
      setLoading(false)
    })
    return () => { mountedRef.current = false }
  }, [])

  return <F>
    <Root>
      { /* <Hero /> */ }
      <MainHeader />

      <Features features={site.features} />
      <Newsitems newsitems={site.newsitems} />
    </Root>
    <IonLoading
      isOpen={loading}
      onDidDismiss={() => setLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />
  </F>
}

export default SitesShow
