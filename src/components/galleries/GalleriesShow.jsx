
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Metaline } from "$components/application"
import { TwofoldContext } from "$components/TwofoldLayout"
import {
  BackBtn,
  C,
  logg,
  useApi,
} from "$shared"

import styles from "./Galleries.module.scss"

const W0 = styled.div`
  // border: 1px solid blue;
  height: auto;
`;

/**
 * GalleriesShow
 *
**/
const GalleriesShow = (props) => {
  // logg(props, 'GalleriesShow')
  const { match } = props

  const [gallery, setGallery] = useState({})

  const mountedRef = useRef('init')

  const {
    itemToUnlock, setItemToUnlock,
  } = useContext(TwofoldContext)

  const api = useApi()

  useEffect(() => {
    api.getGallery(match.params.slug).then(_gallery => {
      if (!mountedRef.current) { return }
      logg(_gallery, '_gallery')

      if (_gallery.is_premium && !_gallery.is_purchased) {
        setItemToUnlock(_gallery)
      } else {
        setGallery(_gallery)
      }
    })
    return () => {
      mountedRef.current = null
    }
  }, [gallery.id, itemToUnlock.id] )

  return <W0 className={styles.GalleriesShow} >

    <div className={styles.narrow} >
      <h1 className={styles.heading} >
        <BackBtn />
        <span className={styles.title} >{gallery.name}</span>
      </h1>
      <Metaline {...gallery} />

      <div className={styles.thumbs} >
        { gallery.photos && gallery.photos.map((ph, i) =>
          <div className={styles.card} key={i}>
            <div>
              <IonImg src={ph.thumb_url}></IonImg>
            </div>
          </div>
        ) }
      </div>

      <div dangerouslySetInnerHTML={{ __html: gallery.description }}></div>

    </div>
    <div className={styles.full_img_section} >

      { gallery.photos && gallery.photos.map((ph, i) =>
        <div className={styles.item} key={i}>
          <img src={ph.large_url} />
        </div>
      ) }

    </div>

  </W0>
}

export default GalleriesShow