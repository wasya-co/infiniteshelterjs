import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent } from '@ionic/react';

import config from "config";

import { logg, request } from "$shared";
import { getNewsitems, Newsitems } from "$components/newsitems";

import "./sites.scss";

const SitesShow = (props) => {

  let [newsitems, setNewsitems] = useState([]);
  let [showLoading, setShowLoading] = useState(false);

  const currentUser = JSON.parse(localStorage.getItem("current_user")) || {};
  const withToken = currentUser.jwt_token ? `jwt_token=${currentUser.jwt_token}` : '';

  request.get(`${config.apiOrigin}/api/sites/view/${config.domain}?${withToken}`).then(res => {
    logg(res, 'res')
    logg(res.data.newsitems, 'got newsitems')
    setNewsitems(res.data.newsitems);
  }).catch(e => {
    logg(e, 'e1');
  });

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
