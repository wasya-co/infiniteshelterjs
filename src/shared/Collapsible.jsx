
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  C, CollapsibleContext,
  logg,
  S,
  WBordered, WBorderedItem,
} from '$shared'

const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>

const Inner = styled.div`
  // border: 2px solid red;
  // max-height: 100vh;

  clear: left;
`;

const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>

const Label = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.borderWidth};
`;

const WTransparent = styled.div`
  background: ${p => p.theme.colors.background};

  margin: 0 0.5 1em .5em;
  padding: 0 .5em .5em .5em;

`;
const W = ({ children, variant, ...props }) => {
  switch (variant) {
    case C.variants.bordered:
      return <WBordered {...props} >{children}</WBordered>
    default:
      return <WTransparent {...props} >{children}</WTransparent>
  }
}


/**
 * Collapsible
 *
 * @TODO: test-driven _vp_ 2021-10-29
 */
const Collapsible = ({ children, ...props }) => {
  // logg(props, 'Collapsible')
  const { className='', config, variant, } = props

  const ctx = useContext(CollapsibleContext)
  if (!ctx) { return null }
  const { collapsibles, setCollapsibles } = ctx

  const doToggle = () => setCollapsibles({ ...collapsibles, [props.slug]: !collapsibles[props.slug] })

  const collapsible = typeof config === 'undefined' ? true
    : typeof config.collapsible === 'undefined' ? true
      : config.collapsible
  const folded = collapsible ? !!collapsibles[props.slug] : false

  return <W variant={variant} className={`Collapsible ${className}`} >
    { props.label &&  collapsible && <Label onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label}</Label> }
    { props.label && !collapsible && <Label >{props.label}</Label> }
    { !folded && <Inner>{ children }</Inner> }
  </W>
}

Collapsible.propTypes = {
  className: PropTypes.string,
  config: PropTypes.shape({
    collapsible: PropTypes.bool,
  }),
  label: PropTypes.string,
  slug: PropTypes.string.isRequired,
  variant: PropTypes.string,
}
export default Collapsible
