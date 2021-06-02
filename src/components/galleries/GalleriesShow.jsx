import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Route, useLocation, useHistory, Switch } from 'react-router-dom';

import { logg, request } from "$shared";
import { Metaline } from "$components/application";
import "./galleries.scss";

const GalleriesShow = (props) => {
  logg(props, 'GalleriesShow')
  const { match } = props;

  const [showLoading, setShowLoading] = useState(false);
  const [gallery, setGallery] = useState(null);

  useEffect(() => {
    setShowLoading(true);
    const token = localStorage.getItem("jwtToken");
    request.get(`/api/galleries/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      setShowLoading(false);
      setGallery(res.data.gallery);
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    })
  }, []);

  return (
    <IonPage>
      <IonContent>

        { gallery &&  <div className="gallery-show">
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

      </IonContent>
    </IonPage>
  );
}

export default GalleriesShow;