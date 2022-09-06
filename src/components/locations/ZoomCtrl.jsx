
import PropTypes from 'prop-types'
import React, { useContext, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import config from 'config'

import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  logg,
} from "$shared"

const W = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background: white;
  padding: 5px;

  display: flex;
  flex-direction: column;
`;

/**
 * ZoomCtrl
 */
const ZoomCtrl = (props) => {
  logg(props, 'ZoomCtrl')

  const { zoom, setZoom } = useContext(TwofoldContext)

  const zoomIn = () => {
    setZoom(zoom/2)
  }
  const zoomOut = () => {
    setZoom(zoom*2)
  }
  const zoomReset = () => {
    setZoom(1)
  }

  return <W className='ZoomCtrl' >
    <span onClick={zoomIn} >[+]</span>
    <span onClick={zoomOut} >[-]</span>
    <span onClick={zoomReset} >[1]</span>
  </W>
}

export default ZoomCtrl
