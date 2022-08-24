
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Metaline } from "$components/application"
import {
  C, logg, request, TwofoldContext, BackBtn,
} from "$shared"

import "./Galleries.module.scss"

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
  const { match } = props // @TODO: this doesnt look like a prop, remove

  const [showLoading, setShowLoading] = useState(false) // @TODO: hmm could it be moved to TwofoldContext ?
  const [gallery, setGallery] = useState({})

  const mountedRef = useRef('init')

  const {
    itemToUnlock, setItemToUnlock,
  } = useContext(TwofoldContext)

  // @TODO: move this into api
  let getGallery = async () => {
    const token = localStorage.getItem(C.jwt_token)
    await request.get(`/api/galleries/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (!mountedRef.current) { return }
      const gallery = res.data.gallery
      if (gallery.is_premium && !gallery.is_purchased) {
        setItemToUnlock(gallery)
      } else {
        setGallery(res.data.gallery)
      }
    }).catch((err) => {
      logg(err, 'e65')
    })
  }

  useEffect(() => {
    getGallery()
    return () => {
      mountedRef.current = null
    }
  }, [gallery.id, itemToUnlock.id] )

  return <W0 className="GalleriesShow">

    <div className='narrow'>
      <h1 className="heading">
        <BackBtn />
        <span className="title">{gallery.name}</span>
      </h1>
      <Metaline {...gallery} />

      <div className="thumbs">
        { gallery.photos && gallery.photos.map((ph, i) =>
          <div className='card' key={i}>
            <div className='card-inner'>
              <IonImg src={ph.thumb_url}></IonImg>
            </div>
          </div>
        ) }
      </div>

      <div dangerouslySetInnerHTML={{ __html: gallery.description }}></div>

    </div>
    <div className="full-img-section">

      { gallery.photos && gallery.photos.map((ph, i) =>
        <div className='item' key={i}>
          <img src={ph.large_url} />
        </div>
      ) }

    </div>

  </W0>
}

export default GalleriesShow