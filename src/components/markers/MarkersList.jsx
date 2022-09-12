
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import styled from 'styled-components'

import {
  TwofoldContext,
} from "$components/TwofoldLayout"
import {
  C,
  logg,
  NavigationContext,
  PurchasedIcon,
  WBordered,
} from "$shared"
import {
  appPaths,
} from "$src/AppRouter"


/**
 * Wrapper Bordered Item. It is padded, margined.
**/
const _WBorderedItem = styled.a`
  border: ${p => p.theme.thinBorder};
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

  &:empty {
    height: 0;
    border: none;
    padding: 0;
  };
`;
const WBorderedItem = ({children, ..._props}) => {
 const { className, ...props } = _props
 return <_WBorderedItem className={`WBorderedItem ${className}`} {...props}>{children}</_WBorderedItem>
}


/**
 * Marker
**/
const _Marker = styled.div`
  color: ${p => p.theme.colors.text};
  margin: 0 auto 10px auto;
  width: 120px;
  text-align: center;
`;
const Marker = ({ children, ...props }) => {
  // logg(props, 'Marker')
  const {
    marker,
  } = props

  const {
    useHistory,
  } = useContext(NavigationContext)

  const {
    itemToUnlock, setItemToUnlock,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const history = useHistory()

  const goto = (e) => {
    e.preventDefault()

    if (marker.premium_tier && !marker.is_purchased) {
      setItemToUnlock(marker)
    } else {
      if (marker.url) {
        setShowUrl(marker.url) // @TODO: this should be encoded in the (server-side) router eventually. _vp_ 2022-09-11
      }
      else {
        history.push(`/en/locations/show/${marker.slug}`)
      }
    }
  }

  return <WBorderedItem
    onClick={goto}
    {...{ href: appPaths.locationPath(marker.slug), ...props }}
  >{children}</WBorderedItem>
}
Marker.propTypes = {
  marker: PropTypes.object.isRequired,
}

/* W */
const _W0 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const W0 = ({ children, variant, ...props }) => {
  if (variant===C.variants.bordered) {
    return <WBordered {...props}>{children}</WBordered>
  } else {
    return <_W0 {...props}>{children}</_W0>
  }
}

/**
 * MarkersList
 * @TODO: review variant, it's currently always bordered. _vp_ 2022-09-11
 *
**/
const MarkersList = (props) => {
  // logg(props, 'MarkersList')
  const { variant } = props

  // @TODO: re-add variant. It was there for ParagonAustin, WasyaCo, locations like that. _vp_ 2022-09-11

  const markers = props.markers.map((m, idx) => <Marker key={idx}
    marker={m}
  >
    <img src={m.title_img_path} /><br />
    { m.is_purchased && <PurchasedIcon /> }
    { m.name }
  </Marker>)

  // Zero-height placeholders for the last row.
  const times = 12 - markers.length % 12
  for (let i = 0; i < times; i++) {
    markers.push(<Marker key={`padded-${i}`} marker={{}} />)
  }

  return <W0 className="MarkersList" >{ markers }</W0>
}
MarkersList.propTypes = {
  variant: PropTypes.string,
}
export default MarkersList
