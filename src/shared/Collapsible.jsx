
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { CollapsibleContext, logg, S } from '$shared'

const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>

const Inner = styled.div`
  // border: 2px solid red;
  // max-height: 100vh;
`;

const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>

const Label = styled.div`
  display: flex;
  margin-bottom: ${p => p.borderWidth};
`;

const Root = styled.div`
  // background: #dedede;

  border: 1px solid black;
  border-radius: 5px;

  margin: .5em;
  padding: .5em;

  margin-bottom: 1em;
`;


const Collapsible = ({ children, ...props }) => {
  logg(props, 'Collapsible')
  const { config } = props

  const ctx = useContext(CollapsibleContext)
  if (!ctx) { return null; }
  logg(ctx, 'CollapsibleContext')
  const { collapsibles, setCollapsibles } = ctx

  const doToggle = () => {
    setCollapsibles({ ...collapsibles, [props.slug]: !collapsibles[props.slug] })
  }

  const collapsible = typeof config === 'undefined' ? true
    : typeof config.collapsible === 'undefined' ? true
      : config.collapsible
  const folded = collapsible ? !!collapsibles[props.slug] : false

  return <Root className={`Collapsible ${props.className}`} >
    { collapsible && props.label && <Label {...S} onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label} </Label> }
    { !folded && <Inner>{ children }</Inner> }
  </Root>
}

export default Collapsible
