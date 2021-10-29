import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import styled from 'styled-components'

import config from 'config'
import { Breadcrumbs, ItemModal, MapPanel, MapPanelNoZoom, MarkersList } from "./"
import { ThreePanelV1 } from "$components/locations3"
import {
  C, logg, request, S, TwofoldContext,
  useWindowSize,
  ZoomContext,
} from "$shared"
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

  box-sizing: content-box;
  -moz-box-sizing: content-box;
  -webkit-box-sizing: content-box;

  background: ${p => p.theme.colors.background};
  flex: 50%;
  overflow: auto;

  display: flex;
  flex-direction: column;

  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;

const Right = styled.div`
  border: ${p=>p.debug?'1':'0'}px solid green;

  background: ${p => p.theme.colors.background};

  padding: 1em;
  flex: 50%;
  overflow-x: hidden;
  overflox-y: auto;
  height: calc(100vh - ${p => `calc(2*${p.theme.borderWidth})`}
    - ${p => p.bottomDrawerOpen ? p.theme.bottomDrawerOpenHeight : p.theme.bottomDrawerClosedHeight });
`;

const Row = styled.div`
  // border: 1px solid magenta;

  display: flex;
  position: relative;
`;

const W = styled.div`
  overflow: hidden;

  flex-grow: 1;
`;
const WrappedMapPanel = React.forwardRef((props, ref) => {
  switch (props.map.config.map_panel_type) {
    case C.map_panel_types.MapPanelNoZoom:
      return <W ref={ref} className="WrappedMapPanel" ><MapPanelNoZoom withZoom={false} {...props} /></W>
    case C.map_panel_types.ThreePanelV1:
      return <W><ThreePanelV1 {...props} /></W>
    default:
      return <W><MapPanel {...props} /></W>
  }
})

const LocationsShowDesktop = (props) => {
  // logg(props, 'LocationsShowDesktop')
  const { match } = props

  const [ windowWidth, windowHeight ] = useWindowSize()

  const [ loading, setLoading ] = useState(false)
  const [ location, setLocation ] = useState(null)
  const {
    bottomDrawerOpen,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    showItem, setShowItem,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const mountedRef = useRef('init')
  const mapPanelRef = useRef(null)

  useEffect(() => {
    setLoading(true)
    const token = localStorage.getItem("jwt_token")

    // Load the map
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

  // set mapPanel sizes
  useEffect(() => {
    if (mapPanelRef.current) {
      setMapPanelWidth(mapPanelRef.current.offsetWidth)
      setMapPanelHeight(mapPanelRef.current.offsetHeight)
    }
  }, [mapPanelRef.current, windowWidth, windowHeight])
  /*
   * @TODO: add arbitrary panel resizing
   */

  /*
   * @TODO: store resize config in localstorage
   */

  return (<Row>
    <Left className='Left' {...{ bottomDrawerOpen }} debug={config.debug} >
      { location && <Breadcrumbs {...location} /> }
      { location && <WrappedMapPanel
        map={location.map ? location.map : location}
        ref={mapPanelRef}
      /> }
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
