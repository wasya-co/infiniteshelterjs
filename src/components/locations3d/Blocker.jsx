

import React, { Fragment as F, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as THREE from "three"
// import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import styled from 'styled-components'

const _Blocker = styled.div`
  border: 2px solid red;

  position: relative;
  height: calc(100vh - ${p => p.theme.breadcrumbsHeight} - ${p => p.theme.smallWidth});

  // width: 700px;
  // height: 350px;

  #Crosshair {
    // display: none; // @TODO: it's not really center, so lets not show it. _vp_ 2022-09-14
    // border: 1px solid yellow;
    width: 50px;
    height: 50px;

    position: absolute;
    left: 50%;
    top: 50%;
    color: white;

    ::before {
      content: '';
      position: absolute;
      border-color: white;
      border-style: solid;
      border-width: 0 0.1em 0 0;
      height: 1em;
      top: 0em;
      left: 0.3em;
      // margin-top: -1em;
      transform: rotate(90deg);
      // width: 0.5em;
    }
    ::after {
      content: '';
      position: absolute;
      border-color: white;
      border-style: solid;
      border-width: 0 0.1em 0 0;
      height: 1em;
      top: 0em;
      left: 0.3em;
      // margin-top: -1em;
      // width: 0.5em;
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
