
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'

import { C, logg, request, TwofoldContext } from "$shared"
import { Metaline } from "$components/application"
import "./galleries.scss"

const GalleriesShow = (props) => {
  logg(props, 'GalleriesShow')
  const { match } = props

  const [showLoading, setShowLoading] = useState(false) // @TODO: hmm could it be moved to TwofoldContext ?
  const [gallery, setGallery] = useState({})

  const {
    currentUser, setCurrentUser,
    itemToUnlock, setItemToUnlock,
    loginModalOpen, setLoginModalOpen,
  } = useContext(TwofoldContext)
  const mountedRef = useRef('init')

  const getGallery = async () => {
    setShowLoading(true)
    logg(mountedRef.current, 'keeps happening 444')

    const token = localStorage.getItem(C.jwt_token)
    await request.get(`/api/galleries/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      logg(mountedRef, 'ze mountedRef')

      if (!mountedRef.current) { return }
      logg(mountedRef.current, 'keeps happening 555')

      const gallery = res.data.gallery
      if (gallery.is_premium && !gallery.is_purchased) {
        setItemToUnlock(gallery)
      } else {
        setGallery(res.data.gallery)
      }
      setShowLoading(false)
    })
    logg('done not done')
  }

  logg([gallery.id, itemToUnlock.id], 'what are these?')

  useEffect(() => {
    getGallery()
    return () => mountedRef.current = null
  }, [gallery.id, itemToUnlock.id] )

  return (<F>

    { <div className="gallery-show">
      <div className='narrow'>
        <h1 className="heading">
          <img src="/assets/newsfeed/photos_icon.png" />
          <span className="title">{gallery.name}</span>
        </h1>
        <Metaline item={gallery} />

        <div className="thumbs">
          { gallery.photos && gallery.photos.map((ph, i) =>
            <div className='card' key={i}>
              <div className='card-inner'>
                <IonImg src={ph.thumb_url}></IonImg>
              </div>
            </div>
          ) }
        </div>
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