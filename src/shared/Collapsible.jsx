
import React, { Fragment as F, useState } from 'react'
import styled from 'styled-components'

const Gt = () => <span>&nbsp;&gt;&nbsp;&nbsp;</span>
const Lt = () => <span>&nbsp;&lt;&nbsp;&nbsp;</span>
const Label = styled.div`
  display: flex;
`;
const Root = styled.div`
  // border: 2px solid green;

  margin-bottom: 1em;
`;
const W1 = styled.div`
  // border: 2px solid red;

  max-height: 100vh;
`;

const Collapsible = ({ children, ...props }) => {
  const [ folded, setFolded ] = useState(false)

  return <Root>
    <Label onClick={() => setFolded(!folded) } >{folded ? <Lt /> : <Gt />} {props.label} </Label>
    { !folded && <W1>{ children }</W1> }
  </Root>
}

export default Collapsible
