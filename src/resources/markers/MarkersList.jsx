
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { useHistory, } from 'react-router-dom'
import styled from 'styled-components'

import {
  C,
  logg,
  PurchasedIcon,
  TwofoldContext,
  WBordered, WBorderedItem,
} from "$shared"

/* M */
const _Marker = styled.div`
  color: ${p => p.theme.colors.text};
  margin: 0 auto 10px auto;
  width: 120px;
  text-align: center;
`;
const Marker = ({ children, variant, ...props }) => {
  if (variant===C.variants.bordered) {
    return <WBorderedItem {...props} >{children}</WBorderedItem>
  } else {
    return <_Marker className="Marker" {...props} >{children}</_Marker>
  }
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
    out.push(<Marker key={idx} variant={variant}
      onClick={() => goto(m) }
    >
      <img src={m.title_img_path} /><br />
      { m.is_purchased && <PurchasedIcon /> }
      { m.name }
    </Marker>)
  })
  const times = 12 - out.length % 12
  for (let i = 0; i < times; i++) { // zero-height placeholders to prettify last row
    out.push(<Marker style={{ height: 0, marginBottom: 0, marginTop: 0 }} variant={variant} key={`padded-${i}`} />)
  }

  return <W0 className="MarkersList" >
    {out}
  </W0>
}

MarkersList.propTypes = {
  variant: PropTypes.string,
}
export default MarkersList
