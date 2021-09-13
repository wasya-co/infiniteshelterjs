import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useEffect, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"
import "./locations.scss"

const Left = styled.div`
  // border: 1px solid blue;

  flex: 50%;
  overflow: scroll;
  height: auto;
`

const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

const Map2 = (props) => {
  const { location } = props

  return (<div>
    <img src={location.img_path} />
  </div>)
}

const Markers = styled.div``
const Right = styled.div`
  // border: 1px solid green;

  flex: 50%;
  overflow: scroll;
  height: calc(100vh - 20px);
`
const Row = styled.div`
  display: flex;
`

const LocationsShow = (props) => {
  const { match } = props;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("jwt_token");
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      setLoading(false)
      setLocation(res.data.map)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
      setLoading(false)
    })
  }, []);

  return (<Row>
    <Left>
      { loading && <i>Loading Left...</i> }
      { location && <Map2 location={location} /> }
    </Left>
    <Right>
      { loading && <i>Loading Right...</i> }
      { location && <F>
        <Markers>markers ({ location.markers.length })</Markers>
        <Description item={location} />
        { location.newsitems && <Newsitems newsitems={location.newsitems} /> }
      </F> }
    </Right>
  </Row>)
}

export default LocationsShow;