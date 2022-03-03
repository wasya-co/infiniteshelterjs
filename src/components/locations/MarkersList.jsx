
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import Modal from "react-modal"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'

import {
  C,
  logg, S, TwofoldContext,
  PurchasedIcon,
  WBordered, WBorderedItem,
} from "$shared"
import { Metaline } from "$components/application"
import { Newsitems } from "$components/newsitems"

/* M */
const _Marker = styled.div`
  margin: 10px;
  max-width: 20vw;
  min-width: 120px;
`;
const Marker = ({ children, variant, ...props }) => {
  if (variant===C.variants.bordered) {
    return <WBorderedItem {...props} >{children}</WBorderedItem>
  } else {
    return <_Marker {...props} >{children}</_Marker>
  }
}

/* W */
const _W = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const W = ({ children, variant, ...props }) => {
  if (variant===C.variants.bordered) {
    return <WBordered {...props}>{children}</WBordered>
  } else {
    return <_W {...props}>{children}</_W>
  }
}

/**
 * Default
 */
const MarkersList = (props) => {
  // logg(props, 'MarkersList')
  const { variant } = props

  const history = useHistory()
  const {
    itemToUnlock, setItemToUnlock,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const goto = (m) => {
    if (m.premium_tier && !m.is_purchased) {
      setItemToUnlock({ ...m })
    } else {
      if (m.url) {
        setShowUrl(m.url)
      }
      else {
        history.push(`/en/locations/show/${m.slug}`)
      }
    }
  }

  const out = []
  props.markers.map((m, idx) => {
    out.push(<Marker className="Marker" key={idx} variant={variant}
      onClick={() => goto(m) }
    >
      <img src={m.title_img_path} /><br />
      { m.is_purchased && <PurchasedIcon /> }
      {m.name}
    </Marker>)
  })

  return <W className="MarkersList" >
    {out}
  </W>
}

MarkersList.propTypes = {
  variant: PropTypes.string,
}
export default MarkersList
