
import { pin, newspaperOutline, image, videocam } from 'ionicons/icons'
import { IonPage, IonContent, IonIcon, IonLoading } from '@ionic/react'
import React, { useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { paths } from '$src/AppRouter'
import { useApi, logg } from "$shared"
import { Newsitems } from "$components/newsitems"
import { Venues } from "$components/venues"
import "./Cities.module.scss"

const W0 = styled.div`
  height: 100vh;
`;

/**
 * CitiesShow
 * @TODO: this won't work with next_js, so a rewrite is in order.
**/
const CitiesShow = (props) => {
  // logg(props, 'CitiesShow')
  const { match } = props

  const api = useApi()
  const history = useHistory()
  const thisPath = paths.cityPath(match.params.name)

  const location = useLocation()

  const [city, setCity] = useState(null)
  const [showLoading, setShowLoading] = useState(false)

  const mountedRef = useRef('init')
  useEffect(() => {
    setShowLoading(true)
    api.getCity(match.params.name).then(res => {
      if (mountedRef.current) {
        setCity(res.data.city)
        setShowLoading(false)
      }
    })
    return () => mountedRef.current = false
  }, [match.params.name])

  return <W0>

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

        { /* @TODO: re-add tags here! */ }
        { /* city.tags && <section className="tags-section">
          <span className="btn delete-btn" >
            <IonIcon name="close"> </IonIcon> deselect all
          </span>
          { city.tags.map((tag, i) => <span className="btn" key={i} >{tag.name}</span>) }
        </section> */ }

        <section className="section-three">
          <div className="menu-option" onClick={() => history.push(paths.cityPath(match.params.name))} >
            <img src="/assets/newsfeed-icon.svg" alt="Newsfeed" />
            <p className={`${location.pathname == thisPath ? "selected" : ""} menu-item`}>Newsfeed</p>
          </div>
          <div className="menu-option" onClick={() => history.push(paths.cityVenuesPath(match.params.name))} >
            <img src="/assets/venue-icon.svg" alt="Venues" />
            <p className={`${location.pathname.includes("venues") ? "selected" : ""} menu-item`}>Venues</p>
          </div>
        </section>


        <Switch>
          <Route exact path={`${match.url}/venues`} render={() => <Venues    venues={city.venues} />} />
          <Route exact path={match.url}             render={() => <Newsitems newsitems={city.newsitems} /> } />
        </Switch>


      </div>
    </div>}
    <IonLoading
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Please wait...'}
      duration={5000}
    />

  </W0>
}

export default CitiesShow
