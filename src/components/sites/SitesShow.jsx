import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent } from '@ionic/react';
import NewsItems from "../../components/newsitems";

import getNewsitems from "$components/newsitems/getNewsitems";

import "./sites.scss";

const SitesShow = (props) => {

  let [newsItems, setNewsItems] = useState([]);
  let [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    getNewsitems().then(res => {
      setShowLoading(false);
      setNewsItems(res.data.newsitems);
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
