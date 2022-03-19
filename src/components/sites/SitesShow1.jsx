import { IonPage, IonLoading, IonContent } from '@ionic/react'
import React, { Fragment as F, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { C, logg, useApi, } from "$shared"
import { Features } from "./"
import {
  BottomDrawer,
  MainHeader, Menu, MenuBottom, MenuLeft,
  UnlockModal
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

// Currently a homepage, like a wp page.
const SitesShow1 = (props) => {
  // logg(props, 'SitesShow1')

  let [ site, setSite ] = useState({ features: [], newsitems: [] })
  let [ artTag, setArtTag ] = useState({ features: [] })
  let [ homeRow1Tag, setHomeRow1Tag ] = useState({ features: [] })
  let [ interestingLocationsTag, setInterestingLocationsTag ] = useState({ features: [] })
  let [ loading, setLoading ] = useState(false)


  const api = useApi()
  const mountedRef = useRef('init')

  // loads all data
  useEffect(() => {
    // setLoading(true)

    api.applicationHome().then(data => {
      if (!mountedRef.current) { return null }
      logg(data, 'setSite')
      setSite(data)
      // setLoading(false)
    })

    api.getTag({ slug: 'interesting-locations' }).then(data => {
      if (!mountedRef.current) { return null }
      logg(data, 'setInterestingLocations')
      setInterestingLocationsTag(data)
      // setLoading(false)
    })

    api.getTag({ slug: 'home-row-1' }).then(data => {
      if (!mountedRef.current) { return null }
      setHomeRow1Tag(data)
    })

    api.getTag({ slug: 'art' }).then(data => {
      if (!mountedRef.current) { return null }
      setArtTag(data)
    })

    return () => { mountedRef.current = false }
  }, [])

  return <F>
    <Root>

      <MainHeader />
      { /* <Hero /> */ }

      <Features features={interestingLocationsTag.features} label="Interesting Locations" />
      <Features features={homeRow1Tag.features} label="Interesting Tags" />
      <Features features={artTag.features} label="art" />
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

export default SitesShow1
