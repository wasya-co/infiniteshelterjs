
import React from 'react'
import styled from 'styled-components'

const Crosshair = styled.div`
// border: 2px solid yellow;

width: 50px;
height: 50px;

position: absolute;
left: 50%;
top: 50%;

::before {
  content: '';
  position: absolute;
  border-color: white;
  border-style: solid;
  border-width: 0 2px 0 0;
  height: 20px;
  top: -10px;
  left: -1px;
  transform: rotate(90deg);

  // margin-top: -1em;

}
::after {
  content: '';
  position: absolute;
  border-color: white;
  border-style: solid;
  border-width: 0 2px 0 0;
  height: 20px;
  top: -10px;
  left: -1px;

  // margin-top: -1em;
  // width: 0.5em;
}
`;

export default Crosshair
