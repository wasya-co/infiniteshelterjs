
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { useHistory, } from 'react-router-dom'
import styled from 'styled-components'

import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  C,
  logg,
  PurchasedIcon,
  WBordered, WBorderedItem,
} from "$shared"

/* M */

/**
 * Marker
 * @TODO: move somewhere to share it?
**/
const _Marker = styled.div`
  color: ${p => p.theme.colors.text};
  margin: 0 auto 10px auto;
  width: 120px;
  text-align: center;
`;
const Marker = ({ children, ...props }) => {
  logg(props, 'Marker')
  const { variant, marker } = props

  if (variant===C.variants.bordered) {
    // HEREHERE
    // @TODO: of course, change! Easy, I need two routers, internal and external. _vp_ 2022-09-09
    return <a href={`/en/locations/show2/${marker.slug}`} ><WBorderedItem {...props} >{children}</WBorderedItem></a>
  } else {
    return <_Marker className="Marker" {...props} >{children}</_Marker>
  }
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
 * Default
 */
const MarkersList = (props) => {
  // logg(props, 'MarkersList')
  const { variant } = props

  const {
    itemToUnlock, setItemToUnlock,
    showUrl, setShowUrl,
  } = useContext(TwofoldContext)

  const history = useHistory()

  // @TODO: move this to the api object
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
    out.push(<Marker key={idx}
      marker={m}
      onClick={() => goto(m) }
      variant={variant}
    >
      <img src={m.title_img_path} /><br />
      { m.is_purchased && <PurchasedIcon /> }
      { m.name }
    </Marker>)
  })
  const times = 12 - out.length % 12
  for (let i = 0; i < times; i++) { // zero-height placeholders to prettify last row
    out.push(<Marker key={`padded-${i}`}
      style={{ height: 0, marginBottom: 0, marginTop: 0 }}
      variant={variant}
      marker={{}}
    />)
  }

  return <W0 className="MarkersList" >
    {out}
  </W0>
}

MarkersList.propTypes = {
  variant: PropTypes.string,
}
export default MarkersList
