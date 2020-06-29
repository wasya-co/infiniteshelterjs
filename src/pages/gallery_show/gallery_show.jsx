import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react";

import MetaLine from "../../components/metaline";

import getGallery from "../../services/getGallery";
import "./gallery_show.scss";


const GalleryShow = (props) => {

  const [gallery, setGallery] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  const { match } = props;

  useEffect(() => {
    setShowLoading(true);
    getGallery(match.params.name).then(res => {
      setShowLoading(false);
      setGallery(res.data.gallery);
    })
  }, []);

  function purchase() {

  }

  return (
    <IonPage>
      <IonContent>

        {
          gallery ?
            <div className="gallery-show">

              <div className='narrow'>
                <h1 className="heading">
                  <img src="/assets/newsfeed/photos_icon.png" />
                  <span className="title">{gallery.name}</span>
                </h1>
                <MetaLine
                  created_at={gallery.created_at}
                  username={gallery.username}
                  city={gallery.city || {}}
                  tags={gallery.tags}>
                </MetaLine>
                {
                  gallery.is_premium && !gallery.is_purchased ?
                    <IonButton onClick={purchase}> Purchase </IonButton> : null
                }

                <div className="thumbs">
                  {
                    gallery.photos.map((ph, i) => {
                      return (
                        <div className='card' key={i}>
                          <div className='card-inner'>
                            <IonImg src={ph.thumb_url}></IonImg>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>

              <div className="full-img-section">
                {
                  gallery.photos.map((ph, i) => {
                    return (
                      <div className='item' key={i}>
                        <img src={ph.large_url} />
                      </div>)
                  })
                }
              </div>


            </div> : null}
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Please wait...'}
          duration={5000}
        />

      </IonContent>
    </IonPage>
  );
}

export default GalleryShow;