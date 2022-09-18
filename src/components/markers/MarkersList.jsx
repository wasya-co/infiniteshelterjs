
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
import { Marker } from './'

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
  logg(props, 'MarkersList')
  const { variant } = props

  // @TODO: re-add variant. It was there for ParagonAustin, WasyaCo, locations like that. _vp_ 2022-09-11

  const markers = props.markers.map((m, idx) => <Marker key={idx}
    marker={m}
  >
    <img src={m.title_img_path} /><br />
    { m.is_purchased && <PurchasedIcon /> }
    { m.name }
  </Marker>)

  // Zero-height padding for the last row.
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
