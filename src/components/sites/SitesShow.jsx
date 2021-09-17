import { IonPage, IonLoading, IonContent } from '@ionic/react'
import React, { Fragment as F, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import { useApi, Debug, logg, request } from "$shared"
import { Newsitems } from "$components/newsitems"
import "./sites.scss"

const _Hero = styled.div`
  height: 370px;
  text-align: center;

  img {
    max-width: 100%;
  }
`
const Hero = () => <_Hero><img className="image" src="/assets/hero.png" /></_Hero>

const Root = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
`

const SitesShow = (props) => {
  // logg(props, 'SitesShow')

  let [newsitems, setNewsitems] = useState([])
  let [showLoading, setShowLoading] = useState(false)

  const api = useApi()
  const mountedRef = useRef('init')

  useEffect(() => {
    // setShowLoading(true)
    api.applicationHome().then(data => {
      if (!mountedRef.current) return null;
      setNewsitems(data.newsitems)
      setShowLoading(false)
    })

    return () => { mountedRef.current = false }
  }, [])

  return <F>
    <Root>
      <Hero />
      <Newsitems newsitems={newsitems} />
      &nbsp;
    </Root>
    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />
  </F>
}

export default SitesShow
