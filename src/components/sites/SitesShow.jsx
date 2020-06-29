import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent } from '@ionic/react';

import { getNewsitems, NewsitemsList } from "components/newsitems";

import "./sites.scss";

const SitesShow = (props) => {

  let [newsitems, setNewsitems] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getNewsitems().then(res => {
      setNewsitems(res.data.newsitems);
      setIsLoading(false);
    })
  }, []);

  return (
    <IonPage>
      <IonContent>
        <div className="home wrapper">
          <div className="image-container">
            <img className="image" src="/assets/hero.png" alt='' />
          </div>
          <div className="container">
            <NewsItems data={newsItems} />
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
