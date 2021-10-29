
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  C, CollapsibleContext,
  logg,
  S,
} from '$shared'

const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>

const Inner = styled.div`
  // border: 2px solid red;
  // max-height: 100vh;
`;

const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>

const Label = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.borderWidth};
`;


const WBordered = styled.div`
  border: ${p => p.theme.thinBorder};
  border-radius: ${p => p.theme.thinBorderRadius};
  background: white;

  margin: .5em;
  margin-bottom: 1em;
  padding: .5em;
`;

const WDefault = styled.div`
  background: #dedede;

  margin: .5em;
  margin-bottom: 1em;
  padding: .5em;
`;

const W = ({ children, variant }) => {
  switch (variant) {
    case C.variants.bordered:
      return <WBordered>{children}</WBordered>
    default:
      return <WDefault>{children}</WDefault>
  }
}


/**
 * @TODO: test-driven
 */
const Collapsible = ({ children, ...props }) => {
  // logg(props, 'Collapsible')
  const { config, variant, } = props

  const ctx = useContext(CollapsibleContext)
  if (!ctx) { return null }
  const { collapsibles, setCollapsibles } = ctx

  const doToggle = () => setCollapsibles({ ...collapsibles, [props.slug]: !collapsibles[props.slug] })

  const collapsible = typeof config === 'undefined' ? true
    : typeof config.collapsible === 'undefined' ? true
      : config.collapsible
  const folded = collapsible ? !!collapsibles[props.slug] : false

  return <W variant={variant} className={`Collapsible ${props.className}`} >
    { props.label &&  collapsible && <Label onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label}</Label> }
    { props.label && !collapsible && <Label >{props.label}</Label> }
    { !folded && <Inner>{ children }</Inner> }
  </W>
}

Collapsible.propTypes = {
  config: PropTypes.shape({
    collapsible: PropTypes.bool,
  }),
  label: PropTypes.string,
  slug: PropTypes.string.isRequired,
  variant: PropTypes.string,
}
export default Collapsible
