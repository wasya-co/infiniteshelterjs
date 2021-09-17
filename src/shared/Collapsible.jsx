
import React, { Fragment as F, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { CollapsibleContext, logg } from '$shared'

const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>
const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>
const Label = styled.div`
  display: flex;
`;
const Root = styled.div`
  background: #dedede;
  margin: .5em;
  padding: .5em;

  margin-bottom: 1em;
`;
const W1 = styled.div`
  // border: 2px solid red;

  max-height: 100vh;
`;

const Collapsible = ({ children, ...props }) => {
  logg(props, 'Collapsible')
  const ctx = useContext(CollapsibleContext);
  logg(ctx, 'ctx')
  if (!ctx) { return null; }
  const { collapsibles, setCollapsibles } = ctx;

  const doToggle = () => {
    setCollapsibles({ ...collapsibles, [props.slug]: !collapsibles[props.slug] })
  }

  const folded = !!collapsibles[props.slug]

  return <Root>
    <Label onClick={doToggle} >{folded ? <Lt /> : <Gt />} {props.label} </Label>
    { !folded && <W1>{ children }</W1> }
  </Root>
}

export default Collapsible
