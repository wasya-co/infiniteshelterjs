import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { logg, request, S, TwofoldContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"
import "./locations.scss"

const Left = styled.div`
  // border: 1px solid blue;

  background: #cecece;
  flex: 50%;
  overflow: scroll;
  height: calc(100vh - 40px - ${p => p.bottomDrawerOpen ? `${p.bottomDrawerHeight-p.borderWidth}px` : '0px' });
`

const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

const Div1 = styled.div`
  text-align: center;

`
const Map2 = (props) => {
  const { location } = props

  return (<Div1>
    <img src={location.img_path} />
  </Div1>)
}

const Markers = styled.div``
const Right = styled.div`
  border: 1px solid green;

  flex: 50%;
  overflow: scroll;
  height: calc(100vh - 20px);
`
const Row = styled.div`
  display: flex;
`

const LocationsShow = (props) => {
  logg(props, 'LocationsShow')

  const { match } = props;

  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState(null);

  const mountedRef = useRef('init')

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("jwt_token");
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (!mountedRef.current) return null;
      setLocation(res.data.map)
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
    })

    return () => {
      mountedRef.current = false;
    }
  }, [])

  const { borderWidth, bottomDrawerHeight } = S
  const { bottomDrawerOpen } = useContext(TwofoldContext)

  return (<Row>
    <Left {...{ borderWidth, bottomDrawerOpen, bottomDrawerHeight }} >

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