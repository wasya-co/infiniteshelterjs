import { funnel, bookmark, newspaperOutline, image, videocam } from 'ionicons/icons'
import { IonPage, IonContent, IonButton, IonImg, IonIcon } from "@ionic/react"
import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react"
import styled from 'styled-components'

import { logg } from "$shared"
import Rating from "./Rating"

import "./Venues.module.scss"

const Address = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${p => p.theme.darkGrey };
  font-size: 14px;
`;

const Col = styled.div``;

// right arrow container
const _Ra = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const RightArrow = () => <_Ra><img className="forward-arrow" src="/assets/16x16/arrow-right.png" /></_Ra>

const Row = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 1.5em;
`;

const Venue = styled.div`
  width: 100vw;
  padding: 1em;
  margin-bottom: 0.5em;
  border-bottom: 1px solid #e3d3d3;
  box-shadow: 0px 1px 5px 1px #b3aeae;
  background-color: white;
  position: relative;

  display: flex;
  justify-content: space-between;

  img.thumb {
    border-radius: 10px;
  }

  > div {
    // border: 1px solid red;
  }
`;

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

        { filteredVenues.map((venue, idx) => <Venue key={idx} >
          <Row>
            <Col><img style={{ paddingRight: '1em' }} className='thumb' src={venue.photo} /></Col>
            <Col>
              <Title>{venue.name}</Title>
              <div className="rating-section">
                <Rating rate={defaultRating}></Rating>
                <span className="reviews">5 reviews</span>
              </div>
              <div className="tags-section">
                { venue.tags.map((tag, idx) => <span key={idx} className="tags">{tag.name}</span> )}
              </div>
              <p className="description" dangerouslySetInnerHTML={{ __html: venue.subhead }}></p>
              { venue.address && <Address>{venue.address}</Address> }
            </Col>

          </Row>
          <RightArrow />
        </Venue> )}

      </div>
    </div>
  )
}

Venues.propTypes = {
  venues: PropTypes.array.isRequired,
}
export default Venues
