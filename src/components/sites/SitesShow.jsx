import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent } from '@ionic/react';

import config from "config";

import { Api, logg, request } from "$shared";
import { Newsitems } from "$components/newsitems";

import "./sites.scss";

const SitesShow = (props) => {
  logg(props, 'SitesShow')

  let [newsitems, setNewsitems] = useState([]);
  let [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    Api.getSite(config.domain).then(data => {
      setNewsitems(data.newsitems);
    }).catch(e => {
      logg(e, 'e1');
    });
  }, []);



  return <React.Fragment>
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
  </React.Fragment>;
}

export default SitesShow;
