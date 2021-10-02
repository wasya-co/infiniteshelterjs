import React, { useEffect, useState } from "react";
import { IonIcon } from "@ionic/react";
import { starOutline, starHalf, star } from 'ionicons/icons';
import "./application.scss";

const Rating = (props) => {

  let rate = props.rate;
  let [rating, setRating] = useState([]);

  let iconMapping = {
    0: starOutline,
    1: starHalf,
    2: star
  };

  useEffect(() => {

    let rating = (new Array(5)).fill(0);
    let i = 0;
    while (rate > 0) {
      if (rate < 1) {
        rating[i] = 1;
      } else {
        rating[i] = 2;
      }
      rate--;
      i++;
    }

    setRating(rating);

  }, []);

  return (
    <div className="rating">
      { rating.map((r, i) => <IonIcon key={i} className="stars" icon={iconMapping[r]} ></IonIcon>) }
    </div>
  )

}

export default Rating;