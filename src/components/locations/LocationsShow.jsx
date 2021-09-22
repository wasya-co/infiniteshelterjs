import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { Breadcrumbs, MapPanel, } from "./"
import { logg, request, S, TwofoldContext, ZoomContext } from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

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

const B = styled.div`
  padding: 0.5em;
`
// the divider
const B1 = styled.div`
  padding: 0.5em 0;
`


const Markers = (props) => {
  logg(props, 'Markers')

  const history = useHistory()
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

  const goto = (m) => {
    if (m.url) {
      setShowUrl(m.url);
    }
    else {
      history.push(`/en/locations/show/${m.slug}`)
    }
  }

  const out = []
  props.markers.map((m, idx) => {
    out.push(<div
        key={idx}
        style={{ margin: '10px' }}
        onClick={() => goto(m)} >
      <img src={m.title_img_path} /><br />
      {m.name}
    </div>)
  })
  return <div style={{ display: 'flex' }} >{out}</div>
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

const Right = styled.div`
  border: 1px solid green;

  padding: 1em;

  flex: 50%;
  overflow: scroll;
  height: calc(100vh - ${p => p.bottomDrawerOpen ? p.bottomDrawerHeight : p.borderWidth}px - ${p => 3*p.borderWidth}px);
`
const Row = styled.div`
  display: flex;
  position: relative;
`

const LocationsShow = (props) => {
  logg(props, 'LocationsShow')
  const { match } = props;

  const [ loading, setLoading ] = useState(false)
  const [ location, setLocation ] = useState(null)
  const { showUrl, setShowUrl } = useContext(TwofoldContext)

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

  const { borderWidth, bottomDrawerHeight } = S
  const { bottomDrawerOpen } = useContext(TwofoldContext)

  return (<Row>
    <Left {...{ borderWidth, bottomDrawerOpen, bottomDrawerHeight }} >

      { loading && <i>Loading Left...</i> }
      { location && <Breadcrumbs {...location} /> }
      { location && <MapPanel map={location.map ? location.map : location} /> }
    </Left>
    <Right {...{ borderWidth, bottomDrawerOpen, bottomDrawerHeight }} >
      { loading && <i>Loading Right...</i> }
      { location && <F>
        <Markers markers={location.markers} />
        <Description item={location} />
        { location.newsitems && <Newsitems newsitems={location.newsitems} /> }
      </F> }
    </Right>
    { showUrl && <IframeModal src={showUrl} /> }
  </Row>)
}

export default LocationsShow;