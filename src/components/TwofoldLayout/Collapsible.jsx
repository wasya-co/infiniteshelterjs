
import PropTypes from 'prop-types'
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import {
  C,
  logg,
  WBordered,
} from '$shared'

/**
 * CollapsibleProvider
**/
export const CollapsibleContext = React.createContext({})
export const CollapsibleProvider = ({ children, ...props }) => {
  // logg(props, 'CollapsibleProvider')

  let defaultCollapsibles = {
    [C.collapsible.descr]: true,
  }
  let tmp
  try {
    if (tmp = localStorage.getItem(C.collapsibles)) {
      defaultCollapsibles = JSON.parse(tmp)
    }
  } catch (err) {
    logg(err, 'Could not parse collapsibles from localStorage')
  }
  const [ collapsibles, _setCollapsibles ] = useState(defaultCollapsibles)
  const setCollapsibles = (m) => {
    localStorage.setItem(C.collapsibles, JSON.stringify(m))
    _setCollapsibles(m)
  }

  return <CollapsibleContext.Provider value={{
    collapsibles, setCollapsibles,
  }} >{ children }</CollapsibleContext.Provider>
}



const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>

const Inner = styled.div`
  clear: left;
`;

const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>

const Label = styled.div`
  display: flex;
  margin-bottom: ${p => p.theme.borderWidth};
  color: ${p => p.theme.colors.text};
`;

const WTransparent = styled.div`
  // background: ${p => p.theme.colors.background};
  padding: 0 .5em .5em .5em;
`;
const W0 = ({ children, variant, ...props }) => {
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
  logg(props, 'Collapsible')
  const {
    className='', config={},
    slug,
    variant,
  } = props

  const {
    collapsibles, setCollapsibles
  } = useContext(CollapsibleContext)

  const doToggle = () => setCollapsibles({ ...collapsibles, [slug]: !collapsibles[slug] })

  const collapsible = typeof config.collapsible === 'undefined' ? true : config.collapsible
  const folded = collapsible ? !!collapsibles[slug] : false

  return <W0 variant={variant} className={`Collapsible ${className}`} >
    { props.label &&  collapsible && <Label onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label}</Label> }
    { props.label && !collapsible && <Label >{props.label}</Label> }
    { !folded && <Inner>{ children }</Inner> }
  </W0>
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
