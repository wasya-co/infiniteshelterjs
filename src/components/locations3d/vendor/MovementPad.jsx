
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { C } from "$components/locations3d/ThreePanelMobile"
import {
  logg,
} from "$shared"
import bgImg from './MovementPadBg.png'
import aimSvg from './aim.svg'

const _Region = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(126, 126, 0, .5);
`;
const Region = ({ children, ref, ...props }) => {
  return <_Region innerRef={ref} className='Region' {...props} >
    {children}
  </_Region>
}

const _C = {
  thresh: 0.2, // the center eg 20% of the pad are insensitive.
  ...C,
}

const _Handle = styled.div``;
const Handle = ({ children, ...props }) => <_Handle className='Handle' {...props} >{children}</_Handle>

const _Pad = styled.div`
  // top: container.find("canvas").height() + container.position().top - regionRef.currentouterHeight() - 10,
  // left: 20,

  top: 50px;
  right: 50px;

  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid cyan;
`;
const Pad = ({ children, ...props }) => {
  return <_Pad className='MovementPad' {...props} >
    {children}
  </_Pad>
}


/**
 * MovementPad
 * _vp_ 2022-09-02 ::
 * _vp_ 2022-09-14 :: Continue, MovementPad helper, axesHelper,
 *
**/
const MovementPad = (props) => {
  logg(props, 'MovementPad')
  const {} = props

  let mouseDown = false
  let mouseStopped = false
  let eventStopTimeout, eventRepeatTimeout
  let newLeft, newTop, distance, angle

  const regionData = {}
  const regionRef = useRef(null)
  const handleData = {}

  if (regionRef.current) {
    regionData.w = regionRef.current.clientWidth
    regionData.radius = regionData.w / 2
    regionData.h = regionRef.current.clientHeight
    regionData.x = regionRef.current.getBoundingClientRect().x
    regionData.y = regionRef.current.getBoundingClientRect().y
    regionData.centerX = regionData.x + regionData.w / 2
    regionData.centerY = regionData.y + regionData.h / 2

    // handleData.width = handle.outerWidth();
    // handleData.height = handle.outerHeight();
    // handleData.radius = handleData.width / 2;

    // regionData.radius = regionData.width / 2 - handleData.radius;
  }

  const onTouchEnd = (e) => { // and touchcancel
    // logg(e, 'onTouchEnd')
    mouseDown = false
    resetHandlePosition()
    sendEvent()
  }

  const onTouchMove = (e) => {
    // logg(e, 'onTouchMove')
    if (!mouseDown) return
    update(e.touches[0].pageX, e.touches[0].pageY);
  }

  const onTouchStart = (e) => {
    // logg(e, 'onTouchStart')
    // logg([e.targetTouches[0].pageX, e.targetTouches[0].pageY], 'onTouchStart')
    e.persist()

    mouseDown = true
    // handle.css("opacity", "1.0")
    update(e.targetTouches[0].pageX, e.targetTouches[0].pageY)
  }

  const update = (pageX, pageY) => {
    // logg(regionData, 'regionData')

    newLeft = (pageX - regionData.x)
    newTop = (pageY - regionData.y)

    // logg([newLeft, newTop], 'update: newLeft, newTop')
    // logg([ regionData.centerX, regionData.centerY ], 'centerX, centerY')

    // // If handle reaches the pad boundaries.
    // distance = Math.pow(regionData.centerX - newLeft, 2) + Math.pow(regionData.centerY - newTop, 2);
    // if (distance > Math.pow(regionData.radius, 2)) {
    //   angle = Math.atan2((newTop - regionData.centerY), (newLeft - regionData.centerX));
    //   newLeft = (Math.cos(angle) * regionData.radius) + regionData.centerX;
    //   newTop = (Math.sin(angle) * regionData.radius) + regionData.centerY;
    // }
    // newTop = Math.round(newTop * 10) / 10;
    // newLeft = Math.round(newLeft * 10) / 10;

    // handle.css({
    //   top: newTop - handleData.radius,
    //   left: newLeft - handleData.radius
    // });
    // console.log(newTop , newLeft);

    regionData.centerX = 50
    regionData.centerY = 50

    // Providing event and data for handling camera movement.
    let deltaX = regionData.centerX - parseInt(newLeft);
    let deltaY = regionData.centerY - parseInt(newTop);
    // Normalize x,y between -2 to 2 range.
    deltaX = -2 + (2+2) * (deltaX - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
    deltaY = -2 + (2+2) * (deltaY - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
    deltaX = Math.round(deltaX * 10) / 10;
    deltaY = Math.round(deltaY * 10) / 10;
    // touching the center is insensitive
    if (Math.abs(deltaX) < _C.thresh && Math.abs(deltaY) < _C.thresh) {
      deltaX = 0
      deltaY = 0
    }

    // console.log(deltaX, deltaY);

    sendEvent(-deltaX, deltaY, 0);
  }

  const stopEvent = new CustomEvent("stopMove", {
    bubbles: false
  })

  function sendEvent(dx, dy, middle) {

    if (!mouseDown) {
      clearTimeout(eventRepeatTimeout);
      document.dispatchEvent(stopEvent)
      return
    }

    // logg([dx, dy, middle, mouseDown], 'sendEvent')

    // stop moving after 1sec ? _vp_ 2022-09-13
    clearTimeout(eventStopTimeout);
    eventStopTimeout = setTimeout(function() {
      logg('stopping...')
      document.dispatchEvent(stopEvent)
    }, 0.2 * 1000);

    eventStopTimeout

    var moveEvent = new CustomEvent(_C.events.move, {
      detail: {
        "deltaX": dx,
        "deltaY": dy,
      },
      bubbles: false
    })
    document.dispatchEvent(moveEvent)
  }

  const resetPosition = () => {
    const ev = new CustomEvent(_C.events.gotoPosition, {
      detail: _C.origin,
      bubbles: false
    })
    document.dispatchEvent(ev)
  }

  const resetHandlePosition = () => {
    // handle.animate({
    //   top: this.regionData.centerY - this.handleData.radius,
    //   left: this.regionData.centerX - this.handleData.radius,
    //   opacity: 0.1
    // }, "fast");
  }

  // resetHandlePosition()



  return <Pad >
    <div className='Region'
      style={{ width: '100px', height: '100px', background: `center center url("${bgImg}") rgba(255,0,0,.5)` }}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      ref={regionRef}
    >
      <Handle />
    </div>
    <img style={{ width: 25, height: 25, position: 'absolute', right: 0, top: 125 }} src={aimSvg} onClick={resetPosition} />
  </Pad>
};

export default MovementPad