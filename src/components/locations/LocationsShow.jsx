import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { Breadcrumbs, ItemModal, MapPanel, MapPanelNoZoom, MarkersList } from "./"
import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"


const _Description = styled.div`
  // border: 1px solid red;

  padding: 10px;
`;
const Description = ({ item }) => {
  return <_Description dangerouslySetInnerHTML={{ __html: item.description }} />
}

const IframeModal = (props) => {
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

  return (<Modal ariaHideApp={false} isOpen={!!showUrl} >
    <span onClick={() => {  setShowUrl(false) }} >[x]</span>

    <iframe height="100%" style={{ width: "100%", height: "100%" }} scrolling={"yes"} src={props.src}
      frameBorder="no" allowtransparency="true" allowFullScreen={true} >
    </iframe>
  </Modal>)
}

const Left = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid blue;

  background: #dedede;
  flex: 50%;
  overflow: scroll;

  height: calc(100vh -
    ${p => p.bottomDrawerOpen ? `calc(${p.bottomDrawerHeight}+3*${p.borderWidth})` : `calc(4*${p.borderWidth})` });
`;

const Right = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid green;

  background: #dedede;

  padding: 1em;
  flex: 50%;
  overflow: scroll;
  height: calc(100vh -
    ${p => p.bottomDrawerOpen ? `calc(${p.bottomDrawerHeight}+3*${p.borderWidth})` : `calc(4*${p.borderWidth})` });
`;

const Row = styled.div`
  display: flex;
  position: relative;
`;

const LocationsShow = (props) => {
  logg(props, 'LocationsShow')
  const { match } = props;

  const [ loading, setLoading ] = useState(false)
  const [ location, setLocation ] = useState(null)
  const {
    showItem, setShowItem,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const mountedRef = useRef('init')

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("jwt_token")
    request.get(`/api/maps/view/${match.params.slug}`, { params: { jwt_token: token } }).then(res => {
      if (mountedRef.current === match.params.slug) return null;
      setLocation(res.data.map)
      setLoading(false)
      // @TODO: setFlash here?! If I"m accessing a gallery I haven't bought access to?
    }).finally(() => {
    })

    return () => {
      mountedRef.current = match.params.slug
    }
  }, [ match.params.slug ])

  const { bottomDrawerOpen } = useContext(TwofoldContext)

  return (<Row>
    <Left className='Left' {...{ bottomDrawerOpen }} {...S} debug={config.debug} >
      { loading && <i>Loading Left...</i> }
      { location && <Breadcrumbs {...location} /> }
      { /* location && <MapPanelNoZoom map={location.map ? location.map : location} /> */ }
      { location && <MapPanel map={location.map ? location.map : location} /> }
    </Left>
    <Right className='Right' {...{ bottomDrawerOpen }} {...S} debug={config.debug} >
      { loading && <i>Loading Right...</i> }
      { location && <F>
        <MarkersList markers={location.map ? location.map.markers : location.markers} />
        <Description item={location} />
        { location.newsitems && location.newsitems.length && <Newsitems newsitems={location.newsitems} /> || null }
      </F> }
    </Right>
    { showUrl && <IframeModal src={showUrl} /> }
    { showItem && <ItemModal item={showItem} /> }
  </Row>)
}

export default LocationsShow
