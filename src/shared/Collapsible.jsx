
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
  margin: .5em;
  padding: .5em;

  margin-bottom: 1em;
`;


const Collapsible = ({ children, ...props }) => {
  logg(props, 'Collapsible')

  const ctx = useContext(CollapsibleContext)
  if (!ctx) { return null; }
  const { collapsibles, setCollapsibles } = ctx

  const doToggle = () => {
    setCollapsibles({ ...collapsibles, [props.slug]: !collapsibles[props.slug] })
  }

  const folded = !!collapsibles[props.slug]

  return <Root>
    <Label {...S} onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label} </Label>
    { !folded && <Inner>{ children }</Inner> }
  </Root>
}

export default Collapsible
