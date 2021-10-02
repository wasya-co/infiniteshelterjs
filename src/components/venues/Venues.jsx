
import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"
import { IonPage, IonContent, IonButton, IonImg, IonIcon } from "@ionic/react"
import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons'
import { Rating } from "$components/application"

import { logg } from "$shared"
import "./venues.scss"

const Venues = (props) => {
  logg(props, 'Venues')

  const defaultRating = 3.5
  const [filteredVenues, setFilteredVenues] = useState(props.venues)

  function filterHandler(ev) {
    let venues = props.venues.filter(venue => {
      return venue.name.toLowerCase().includes(ev.target.value.toLowerCase())
    })
    setFilteredVenues(venues)
  }

  return (
    <div className="venues-section">
      <div>
        <div className="filter-section">
          <input className="filter-input" onChange={filterHandler} />
          <IonIcon className="filter-icon" icon={funnel}></IonIcon>
        </div>
      </div>
      <div className="container">

        { filteredVenues.map((venue, idx) =>  <div key={idx} className="venues">
          <div className="image-section">
            <img src={venue.photo} />
          </div>
          <div className="info-section">
            <h4 className="title">{venue.name}</h4>
            <div className="rating-section">
              <Rating rate={defaultRating}></Rating>
              <span className="reviews">5 reviews</span>
            </div>
            <div className="tags-section">
              {
                venue.tags.map((tag, idx) => {
                  return (
                    <span key={idx} className="tags">{tag.name}</span>
                  )
                })
              }
            </div>
            <p className="description" dangerouslySetInnerHTML={{ __html: venue.subhead }}></p>
            { venue.address && <p className="address">{venue.address}</p> }
          </div>
          { /* @TODO: re-add!
          <img className="forward-arrow" src="/assets/16x16/arrow-right.png" /> */ }
        </div> )}

      </div>
    </div>
  )
}

Venues.propTypes = {
  venues: PropTypes.array.isRequired,
}
export default Venues
