import { IonPage, IonLoading, IonContent } from '@ionic/react'
import React, { Fragment as F, useEffect, useState } from "react"
import styled from 'styled-components'

import config from "config"
import { Api, Debug, logg, request } from "$shared"
import { Newsitems } from "$components/newsitems"
import "./sites.scss"

const Container = styled.div`
  overflow: scroll;
`

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
  logg(props, 'SitesShow')

  let [newsitems, setNewsitems] = useState([])
  let [showLoading, setShowLoading] = useState(false)

  useEffect(() => {
    setShowLoading(true)
    Api.getSite(config.domain).then(data => {
      logg(data, 'data')
      setNewsitems(data.newsitems)
    }).catch(e => {
      logg(e, 'e1')
    }).finally(() => {
      setShowLoading(false)
    })
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
