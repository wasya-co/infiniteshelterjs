
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import {
  TwofoldContext,
} from "$components/TwofoldLayout"
import {
  AppContext,
  C,
  logg,
  PurchasedIcon,
  WBordered,
} from "$shared"
import {
  appPaths,
} from "$src/AppRouter"


/**
 * Wrapper Bordered Item. It is padded, margined.
**/
const _W0 = styled.a`
  border: 2px solid var(--ion-border-color);
  border-radius: ${p => p.theme.thinBorderRadius};
  background: ${p => p.theme.colors.cardBackground};
  color: ${p => p.theme.colors.text};

  display: block;
  text-decoration: none;

  margin: 0 .5em .5em 0;
  padding: .5em;

  text-align: center;

  width: 18%;
  max-width: 140px;
  min-width: 120px;

  // &:empty {
  //   height: 0;
  //   border: none;
  //   padding: 0;
  //   margin-top: 0;
  //   margin-bottom: 0;
  // };

`;
export const MarkerEmpty = styled.div`
  width: 18%;
  max-width: 140px;
  min-width: 120px;

  height: 0;
  border: none;
  padding: 0;
  margin: 0 .5em 0 0;
`;
const W0 = ({children, ..._props}) => {
 const { className='', ...props } = _props
 return <_W0 className={`WBorderedItem ${className}`} {...props}>{children}</_W0>
}


/**
 * Marker
**/
const Marker = ({ children, ...props }) => {
  // logg(props, 'Marker')
  const {
    marker,
  } = props

  const {
    useHistory,
  } = useContext(AppContext)

  const {
    itemToUnlock, setItemToUnlock,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const history = useHistory()

  const href = appPaths.locationPath(marker.destination_slug)

  const goto = (e) => {
    e.preventDefault()

    if (marker.premium_tier && !marker.is_purchased) {
      setItemToUnlock(marker)
    } else {
      if (marker.url) {
        setShowUrl(marker.url) // @TODO: this should be encoded in the (server-side) router eventually. _vp_ 2022-09-11
      }
      else {
        history.push(href)
      }
    }
  }

  return <W0
    onClick={goto}
    {...{ href, ...props }}
  >{children}</W0>
}
Marker.propTypes = {
  marker: PropTypes.object.isRequired,
}
export default Marker
