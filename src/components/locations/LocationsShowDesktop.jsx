import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'
import { Breadcrumbs, ItemModal, MapPanel, MapPanelNoZoom, MarkersList } from "./"
import { ThreePanelV1 } from "$components/locations3"
import { C, logg, request, S, TwofoldContext, ZoomContext } from "$shared"
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

  background: ${p => p.background};
  flex: 50%;
  overflow: auto;

  height: calc(100vh - ${p => `calc(2*${p.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.bottomDrawerOpenHeight : p.bottomDrawerClosedHeight });
`;

const Right = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid green;

  background: ${p => p.background};

  padding: 1em;
  flex: 50%;
  overflow-x: hidden;
  overflox-y: auto;
  height: calc(100vh - ${p => `calc(2*${p.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.bottomDrawerOpenHeight : p.bottomDrawerClosedHeight });
`;

const Row = styled.div`
  display: flex;
  position: relative;
`;

const WrappedMapPanel = (props) => {
  switch (props.map.config.map_panel_type) {
    case C.map_panel_types.MapPanelNoZoom:
      return <MapPanelNoZoom {...props} />
    case C.map_panel_types.ThreePanelV1:
      return <ThreePanelV1 {...props} />
    default:
      return <MapPanel {...props} />
  }
}

const LocationsShowDesktop = (props) => {
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
      { location && <WrappedMapPanel map={location.map ? location.map : location} /> }
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

export default LocationsShowDesktop
