import { IonPage, IonLoading, IonContent, IonIcon } from '@ionic/react';
import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons';
import React, { Fragment as F, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'

import { useApi, AppRouter, logg, Wrapper } from "$shared"
import "./cities.scss"


const Cities = (props) => {
  const [cities, setCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const api = useApi()
  const history = useHistory()

  useEffect(() => {
    setShowLoading(true);
    api.getCities().then(res => {
      setShowLoading(false);
      setFilteredCities(res);
      setCities(res);
    });
  }, [])

  const filterHandler = (ev) => {
    let filteredCities = cities.filter(city => {
      return city.name.toLowerCase().indexOf(ev.target.value.trim().toLowerCase()) > -1;
    });
    setFilteredCities(filteredCities);
  }

  return <F>
    <Wrapper className='cities' >
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
        { filteredCities.map((city, i) => <div key={i} className="cities" onClick={() => history.push(AppRouter.cityPath(city.slug)) } >
            <div className="img-section">
              <span className="bookmark" >
                <IonIcon className="bookmark-icon" icon={bookmark}></IonIcon>
              </span>
              <img className="city-img" src={city.photo} />
              <span className="city-title">{city.name}</span>
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
      &nbsp;
    </Wrapper>

    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />

  </F>
}

export default Cities;
