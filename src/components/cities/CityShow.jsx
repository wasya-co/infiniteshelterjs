import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonIcon, IonLoading } from '@ionic/react';
import { pin, newspaperOutline, image, videocam } from 'ionicons/icons';
import { Route, useLocation, useHistory, Switch } from 'react-router-dom';
import { Newsitems } from "$components/newsitems";
import Venues from "../../components/venues";

import getCity from "./getCity";
import "./cities.scss";

const CityShow = (props) => {
  let location = useLocation();
  const history = useHistory();
  const { match } = props;
  const [city, setCity] = useState(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true)
    getCity(match.params.name).then(res => {
      setCity(res.data.city);
      setShowLoading(false);
    })
  }, [match.params.name]);

  function changeMenuHandler(menu) {
    history.push(`${match.url}/${menu}`);
  }

  return (
    <IonPage>
      <IonContent>
        { city && <div className='wrapper'>
          <div className='city-show'>

            <header style={{ backgroundImage: `url(${city.hero_img}}`, backgroundSize: "contain" }}></header>

            <section className="section-one">
              <IonIcon icon={pin} className="location"></IonIcon>
              <h1 className="city-name">{city.name}</h1>
              <div className="status">
                <div className="status-grid">
                  <IonIcon className="info-icon" icon={newspaperOutline}></IonIcon>
                  <span className="numbers">{city.n_reports}</span>
                </div>
                <div className="status-grid">
                  <IonIcon className="info-icon" icon={image}></IonIcon>
                  <span className="numbers">{city.n_galleries}</span>
                </div>
                <div className="status-grid mid">
                  <IonIcon className="info-icon" icon={videocam}></IonIcon>
                  <span className="numbers ">{city.n_videos}</span>
                </div>
              </div>
            </section>

            { city.tags && <section className="tags-section">
              <span className="btn delete-btn" >
                <IonIcon name="close"> </IonIcon> deselect all
              </span>
              { city.tags.map((tag, i) => <span className="btn" key={i} >{tag.name}</span>) }
            </section> }

            <section className="section-three">

              <div className="menu-option" onClick={() => changeMenuHandler('newsfeed')}>
                <img src="/assets/newsfeed-icon.svg" alt="Newsfeed" />
                <p className={`${location.pathname.includes("newsfeed") ? "selected" : ""} menu-item`}>Newsfeed</p>
              </div>

              <div className="menu-option" onClick={() => changeMenuHandler('venues')}>
                <img src="/assets/venue-icon.svg" alt="Venues" />
                <p className={`${location.pathname.includes("venues") ? "selected" : ""} menu-item`}>Venues</p>
              </div>

            </section>

            <section>
              <Switch>
                <Route exact path={`${match.url}/venues`} render={() => <Venues data={city.venues} />} />
                <Route exact path={`${match.url}/newsfeed`} render={() => <Newsitems data={city.newsitems} />} />
              </Switch>
            </section>

          </div>
        </div>}
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

export default CityShow;
