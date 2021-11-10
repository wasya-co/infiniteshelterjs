
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'

import { C, logg, request, TwofoldContext, BackBtn } from "$shared"
import { Metaline } from "$components/application"
import "./galleries.scss"

const GalleriesShow = (props) => {
  logg(props, 'GalleriesShow')
  const { match } = props

  const [showLoading, setShowLoading] = useState(false) // @TODO: hmm could it be moved to TwofoldContext ?
  const [gallery, setGallery] = useState({})

  const mountedRef = useRef('init')

  const {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)

  const getGallery = async () => {
    const token = localStorage.getItem(C.jwt_token)
    await request.get(`/api/galleries/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (!mountedRef.current) { return }
      const gallery = res.data.gallery
      if (gallery.is_premium && !gallery.is_purchased) {
        setItemToUnlock(gallery)
      } else {
        setGallery(res.data.gallery)
      }
    })
  }

  useEffect(() => {
    getGallery()
    return () => {
      mountedRef.current = null
    }
  }, [gallery.id, itemToUnlock.id] )

  return (<F>

    { <div className="gallery-show">
      <div className='narrow'>
        <h1 className="heading">
          <BackBtn />
          <img src="/assets/newsfeed/photos_icon.png" />
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
    </div>}

  </F>)
}

export default GalleriesShow