import React, { useEffect, useState } from "react";
import { IonPage, IonContent, IonButton, IonImg, IonIcon } from "@ionic/react";
import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons';
import { Rating } from "$components/application";

import "./venues.scss";

const Venues = (props) => {

  const defaultRating = 3.5;
  const [filteredVenues, setFilteredVenues] = useState(JSON.parse(JSON.stringify(props.data || [])));

  function filterHandler(ev) {
    let venues = props.data.filter(venue => {
      return venue.name.toLowerCase().includes(ev.target.value.toLowerCase());
    })
    setFilteredVenues(venues);
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

        {
          filteredVenues.map((venue, i) => {
            return (
              <div key={i} className="venues">
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
                      venue.tags.map((tag, i) => {
                        return (
                          <span key={i} className="tags">{tag.name}</span>
                        )
                      })
                    }
                  </div>
                  <p className="description" dangerouslySetInnerHTML={{ __html: venue.subhead }}></p>
                  <p className="address">111 N Main St., New York, NY 11223</p>
                </div>
                <img className="forward-arrow" src="/assets/16x16/arrow-right.png" />
              </div>
            )
          })
        }

      </div>
    </div>
  );
}

export default Venues;