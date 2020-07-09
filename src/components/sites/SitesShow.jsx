import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent } from '@ionic/react';

import { logg } from "$shared";
import { getNewsitems, Newsitems } from "$components/newsitems";

import "./sites.scss";

const SitesShow = (props) => {

  let [newsitems, setNewsitems] = useState([]);
  let [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    getNewsitems().then(res => {
      logg(res, 'res')
      logg(res.data.newsitems, 'got newsitems')

      setShowLoading(false);
      setNewsitems(res.data.newsitems);
    })
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="home wrapper">
          <div className="image-container">
            <img className="image" src="/assets/hero.png" />
          </div>
          <div className="container">
            <Newsitems newsitems={newsitems} />
          </div>
        </div>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Please wait...'}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  )
}

export default SitesShow;
