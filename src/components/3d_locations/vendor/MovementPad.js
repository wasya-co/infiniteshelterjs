
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import {
  logg,
} from "$shared"

const _Region = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(126, 126, 0, .5);
`;
const Region = ({ children, ref, ...props }) => <_Region innerRef={ref} className='Region' {...props} >{children}</_Region>

const _Handle = styled.div``;
const Handle = ({ children, ...props }) => <_Handle className='Handle' {...props} >{children}</_Handle>

const _Pad = styled.div`
  // top: container.find("canvas").height() + container.position().top - regionRef.currentouterHeight() - 10,
  // left: 20,

  top: 20px;
  right: 20px;

  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid cyan;

`;
const Pad = ({ children, ...props }) => <_Pad className='MovementPad' {...props} >{children}</_Pad>


/**
 * MovementPad
 * _vp_ 2022-09-02
**/
const MovementPad = (props) => {
  logg(props, 'MovementPad')
  const { container } = props

  let mouseDown = false
  let mouseStopped = false
  let mouseStopTimeout, eventRepeatTimeout
  let newLeft, newTop, distance, angle

  const regionData = {}
  const regionRef = useRef(null)
  const handleData = {}

  if (regionRef.current) {
    logg(regionRef.current, 'setting regionData')

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

    logg(regionData, 'set RegionData1')
  }


  const onMouseDown = (e) => {
    logg(e, 'mouseDown')

    // mouseDown = true;
    // handle.css("opacity", "1.0");
    // update(event.pageX, event.pageY);
  }

  const onMouseUp = (e) => {
    // mouseDown = false;
    // resetHandlePosition();
  }

  const onMouseMove = (e) => {
    // if (!mouseDown) return;
    // update(event.pageX, event.pageY);
  }

  const onTouchEnd = (e) => { // and touchcancel
    // mouseDown = false;
    // resetHandlePosition();
  }

  const onTouchMove = (e) => {
    // if (!mouseDown) return;
    // update(event.originalEvent.touches[0].pageX, event.originalEvent.touches[0].pageY);
  }

  const onTouchStart = (e) => {
    e.persist()
    logg([e.targetTouches[0].pageX, e.targetTouches[0].pageY], 'onTouchStart')

    mouseDown = true
    // handle.css("opacity", "1.0")
    update(e.targetTouches[0].pageX, e.targetTouches[0].pageY)
  }

  const update = (pageX, pageY) => {
    // logg(regionData, 'regionData')

    newLeft = (pageX - regionData.x)
    newTop = (pageY - regionData.y)

    logg([newLeft, newTop], 'update')


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

    // Providing event and data for handling camera movement.
    let deltaX = regionData.centerX - parseInt(newLeft);
    let deltaY = regionData.centerY - parseInt(newTop);
    // Normalize x,y between -2 to 2 range.
    deltaX = -2 + (2+2) * (deltaX - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
    deltaY = -2 + (2+2) * (deltaY - (-regionData.radius)) / (regionData.radius - (-regionData.radius));
    deltaX = Math.round(deltaX * 10) / 10;
    deltaY = Math.round(deltaY * 10) / 10;
    // console.log(deltaX, deltaY);

    sendEvent(deltaX, deltaY, 0);
  }

  function sendEvent(dx, dy, middle) {
    logg([dx, dy, middle, mouseDown], 'sendEvent')

    if (!mouseDown) {
      clearTimeout(eventRepeatTimeout);
      var stopEvent = $.Event("stopMove", {
        bubbles: false
      });
      $(self).trigger(stopEvent);
      return;
    }

    clearTimeout(eventRepeatTimeout);
    eventRepeatTimeout = setTimeout(function() {
      sendEvent(dx, dy, middle);
    }, 5 * 1000);

    var moveEvent = new CustomEvent("move", {
      detail: {
        "deltaX": dx,
        "deltaY": dy,
        "middle": middle,
      },
      bubbles: false
    })
    // regionRef.current.dispatchEvent(moveEvent)
    document.dispatchEvent(moveEvent)
  }

  // const resetHandlePosition = () => {
  //   // handle.animate({
  //   //   top: this.regionData.centerY - this.handleData.radius,
  //   //   left: this.regionData.centerX - this.handleData.radius,
  //   //   opacity: 0.1
  //   // }, "fast");
  // }

  // resetHandlePosition()

  return <Pad >
    <div className='Region' style={{ width: '100px', height: '100px', background: 'rgba(255,0,0,.5)' }}
      onTouchStart={onTouchStart} ref={regionRef}
    ><Handle />
    </div>
  </Pad>
};

export default MovementPad