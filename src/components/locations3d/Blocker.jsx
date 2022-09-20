

import React, { Fragment as F, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as THREE from "three"
// import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import styled from 'styled-components'

const _Blocker = styled.div`
  border: 2px solid var(--ion-highlight-color);
  border-radius: var(--ion-border-radius);

  position: relative;
  height: 100%;

  #Crosshair {
    width: 50px;
    height: 50px;

    position: absolute;
    left: calc(50% - 0px);
    top: calc(50% - 4px);

    ::before {
      content: '';
      position: absolute;
      border-color: var(--ion-highlight-color);
      border-style: solid;
      border-width: 0 2px 0 0;
      height: 16px;
      top: 0em;
      left: 0;
      transform: rotate(90deg);
    }
    ::after {
      content: '';
      position: absolute;
      border-color: var(--ion-highlight-color);
      border-style: solid;
      border-width: 0 2px 0 0;
      height: 16px;
      top: 0em;
      left: 0;
    }
  }
`;

/**
 * @TODO: is this mobile-only for now? _vp_ 2022-09-14
**/
export default React.forwardRef((props, ref) => {
  const { children, ..._props } = props
  return <_Blocker ref={ref} className="Blocker" {..._props} >
    {children}
  </_Blocker>
})
