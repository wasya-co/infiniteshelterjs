import React, { useEffect, useState } from "react";
import { IonPage, IonLoading, IonContent, IonIcon } from '@ionic/react';
import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons';
import { Link } from "react-router-dom";

import { Api, AppRouter, logg, } from "$shared";
import "./cities.scss";

const Cities = (props) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    Api.getCities().then(res => {
      setShowLoading(false);
      setFilteredCities(res);
      setCities(res);
    });
  }, []);


  function filterHandler(ev) {
    let filteredCities = cities.filter(city => {
      return city.name.toLowerCase().indexOf(ev.target.value.trim().toLowerCase()) > -1;
    });
    setFilteredCities(filteredCities);
  }

  function navigateToCity(slug) {
    props.history.push();
  }

  function navigate(path) {
    logg(path, 'navigating');
    props.history.push(path);
  };

  return <React.Fragment>
    <div className="wrapper cities">
      <h1 className="heading" >Cities</h1>

      <Link to={"/en/account"} >Account</Link>

      <div className="filter-section">
        <input className="filter-input" onChange={filterHandler} />
        <IonIcon className="filter-icon" icon={funnel}></IonIcon>
      </div>

      <div className="bookmark-section">
        <label className="switch">
          <input type="checkbox" onChange={() => { }} checked />
          <span className="slider round"></span>
        </label>
        <span className="bookmark-text">Show only bookmarked</span>
      </div>

      <div className="container">
        { filteredCities.map((city, i) =>

              <div key={i} className="cities" >
                <div className="img-section">
                  <span className="bookmark" >
                    <IonIcon className="bookmark-icon" icon={bookmark}></IonIcon>
                  </span>
                  <img className="city-img" src={city.photo} />
                  <Link to={AppRouter.cityPath(city.slug)} >
                    <span className="city-title">{city.name}</span>
                  </Link>
                </div>
                <div className="content-section">
                  <div className="content-item">
                    <IonIcon className="icon" icon={newspaperOutline}></IonIcon>
                    <span className="count">{city.n_reports}</span>
                  </div>
                  <div className="content-item">
                    <IonIcon className="icon" icon={image}></IonIcon>
                    <span className="count">{city.n_galleries}</span>
                  </div>
                  <div className="content-item">
                    <IonIcon className="icon" icon={videocam}></IonIcon>
                    <span className="count">{city.n_videos}</span>
                  </div>
                </div>
              </div>

        ) }
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

export default Cities;
