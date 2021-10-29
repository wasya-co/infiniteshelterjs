import { IonPage, IonLoading, IonContent, IonIcon as _IonIcon } from '@ionic/react';
import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons';
import React, { Fragment as F, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from 'styled-components'

import { useApi, AppRouter,
  logg, // eslint-disable-line no-unused-vars
  Wrapper } from "$shared"
import "./cities.scss"

const Counts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1em 0px;
`;

const Count = styled.div`
  // border: 1px solid red;

  display: flex;
  justify-content: center;

  width: 50%;
  text-align: center;
  position: relative;
  padding: 0.1em;
`;

const IonIcon = styled(_IonIcon)`
  font-size: 2em;
  color: ${p=>p.theme.darkGrey};
`;

const Number = styled.div`
  // border: 1px solid green;

  padding: 0.5em;

  color: ${p=>p.theme.lightGrey};
  font-size: 0.9em;
  font-weight: 600;
`;

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

      <div className="filter-section">
        <input className="filter-input" onChange={filterHandler} />
        <IonIcon className="filter-icon" icon={funnel}></IonIcon>
      </div>

      { /* @TODO: re-add! */ }
      { /* <div className="bookmark-section">
        <label className="switch">
          <input type="checkbox" onChange={() => { }} checked />
          <span className="slider round"></span>
        </label>
        <span className="bookmark-text">Show only bookmarked</span>
      </div> */ }

      <div className="container">
        { filteredCities.map((city, i) => <div key={i} className="cities" onClick={() => history.push(AppRouter.cityPath(city.slug)) } >
            <div className="img-section">
              <span className="bookmark" >
                <IonIcon className="bookmark-icon" icon={bookmark}></IonIcon>
              </span>
              <img className="city-img" src={city.photo} />
              <span className="city-title">{city.name}</span>
            </div>
            <Counts>
              <Count>
                { /* @TODO: wire in theme provider */ }
                <Number >{city.n_reports}</Number>
                <IonIcon icon={newspaperOutline}></IonIcon>

              </Count>
              <Count>

                <Number >{city.n_galleries}</Number>
                <IonIcon icon={image}></IonIcon>
              </Count>
              <Count>

                <Number >{city.n_videos}</Number>
                <IonIcon icon={videocam}></IonIcon>
              </Count>
            </Counts>
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
