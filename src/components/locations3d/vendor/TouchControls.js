
import React from 'react'
import * as THREE from "three"
import styled from 'styled-components'

import {
  logg,
} from "$shared"

import RotationPad from './RotationPad'
import MovementPad from './MovementPad'

const W0 = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  border: 1px solid red;
  z-index: 2;
  color: white;
  font-size: 2em;
`;

/**
 * TouchControls
 * _vp_ 2022-09-02
 *
**/
const TouchControls = (props) => {
  logg(props, 'TouchControls')
  const { container, camera, options } = props

  if (!container?.current) {
    logg('no current ref in TouchControls!')
    return null
  }

  const config = { ...options, ...{
    speedFactor: 0.5,
    delta: 1,
    rotationFactor: 0.002,
    maxPitch: 55,
    hitTest: true,
    hitTestDistance: 40
  }}

  var isRightMouseDown = false;
  var rotationMatrices = [];
  var hitObjects = [];

  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var lockMoveForward = false;
  var lockMoveBackward = false;
  var lockMoveLeft = false;
  var lockMoveRight = false;

  var ztouch = 1, xtouch = 1;
  var PI_2 = Math.PI / 2;
  var maxPitch = config.maxPitch * Math.PI / 180;
  var velocity = new THREE.Vector3(0, 0, 0);

  var cameraHolder = new THREE.Object3D()
  cameraHolder.name = "cameraHolder"
  cameraHolder.add(camera)

  const scene = null;
  const fpsBody = new THREE.Object3D();
  fpsBody.add(cameraHolder);
  const enabled = true;

  const mouse = new THREE.Vector2();

  $(self.rotationPad).on("YawPitch", function(event) {
    var rotation = calculateCameraRotation(event.detail.deltaX, event.detail.deltaY);
    self.setRotation(rotation.rx, rotation.ry);
  });

  // // Creating movement pad:
  // self.movementPad = new MovementPad(container);
  // $(self.movementPad).on("move", function(event) {
  //   ztouch = Math.abs(event.detail.deltaY);
  //   xtouch = Math.abs(event.detail.deltaX);

  //   if (event.detail.deltaY == event.detail.middle) {
  //     ztouch = 1;
  //     moveForward = moveBackward = false;
  //   } else {
  //     if (event.detail.deltaY > event.detail.middle) {
  //       moveForward = true;
  //       moveBackward = false;
  //     }
  //     else if (event.detail.deltaY < event.detail.middle) {
  //       moveForward = false;
  //       moveBackward = true;
  //     }
  //   }

  //   if (event.detail.deltaX == event.detail.middle) {
  //     xtouch = 1;
  //     moveRight = moveLeft = false;
  //   } else {
  //     if (event.detail.deltaX < event.detail.middle) {
  //       moveRight = true;
  //       moveLeft = false;
  //     }
  //     else if (event.detail.deltaX > event.detail.middle) {
  //       moveRight = false;
  //       moveLeft = true;
  //     }
  //   }
  // });
  // $(self.movementPad).on("stopMove", function(event) {
  //   ztouch = xtouch = 1;
  //   moveForward = moveBackward = moveLeft = moveRight = false;
  // });



  // container.on("contextmenu", onContextMenu);
  // container.on("mousedown", onMouseDown);
  // container.on("mouseup", onMouseUp);
  container.current.addEventListener('contextmenu', onContextMenu)
  container.current.addEventListener('mousedown', onMouseDown)
  container.current.addEventListener('mouseup', onMouseUp)


  // $(document).on("keydown", onKeyDown);
  // $(document).on("keyup", onKeyUp);
  // $(document).on("mousemove", onMouseMove);
  // $(document).on("mouseout", onMouseOut);

  container.current.addEventListener('keydown', onKeyDown)
  container.current.addEventListener("keyup", onKeyUp);
  container.current.addEventListener("mousemove", onMouseMove);
  container.current.addEventListener("mouseout", onMouseOut);

  prepareRotationMatrices();

  //
  // Events:
  //
  function onContextMenu(event) {
    event.preventDefault();
  };

  function onMouseDown(event) {
    if (self.enabled && event.button === 2) {
      isRightMouseDown = true;
      event.preventDefault();
      event.stopPropagation();
    }
  };

  function onMouseUp(event) {
    if (self.enabled && event.button === 2) {
      isRightMouseDown = false;
    }
  };

  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    if (!self.enabled || !isRightMouseDown) return;

    var movementX = event.originalEvent.movementX || event.originalEvent.mozMovementX || event.originalEvent.webkitMovementX || 0;
    var movementY = event.originalEvent.movementY || event.originalEvent.mozMovementY || event.originalEvent.webkitMovementY || 0;
    var rotation = calculateCameraRotation(-1 * movementX, -1 * movementY);

    // console.log(self.mouse, "\n", movementX, rotation);

    self.setRotation(rotation.rx, rotation.ry);

    // updateNavPad();
  };

  function onMouseOut(e) {
    isRightMouseDown = false;
    // self.stopMouseMoving();
  };

  function onKeyDown(e) {
    if (!self.enabled) return;
    switch (e.keyCode) {

      case 38: // up
      case 87: // w
        moveForward = true;
        break;

      case 37: // left
      case 65: // a
        moveLeft = true;
        break;

      case 40: // down
      case 83: // s
        moveBackward = true;
        break;

      case 39: // right
      case 68: // d
        moveRight = true;
        break;
    }
  };

  function onKeyUp(e) {
    switch (e.keyCode) {

      case 38: // up
      case 87: // w
        moveForward = false;
        break;

      case 37: // left
      case 65: // a
        moveLeft = false;
        break;

      case 40: // down
      case 83: // a
        moveBackward = false;
        break;

      case 39: // right
      case 68: // d
        moveRight = false;
        break;
    }
  };

  //
  // Private functions:
  //
  function prepareRotationMatrices() {
    var rotationMatrixF = new THREE.Matrix4();
    rotationMatrixF.makeRotationY(0);
    rotationMatrices.push(rotationMatrixF); // forward direction.

    var rotationMatrixB = new THREE.Matrix4();
    rotationMatrixB.makeRotationY(180 * Math.PI / 180);
    rotationMatrices.push(rotationMatrixB);

    var rotationMatrixL = new THREE.Matrix4();
    rotationMatrixL.makeRotationY(90 * Math.PI / 180);
    rotationMatrices.push(rotationMatrixL);

    var rotationMatrixR = new THREE.Matrix4();
    rotationMatrixR.makeRotationY((360 - 90) * Math.PI / 180);
    rotationMatrices.push(rotationMatrixR);
  };

  function calculateCameraRotation(dx, dy, factor) {
    var factor = factor ? factor : self.config.rotationFactor;
    var ry = self.fpsBody.rotation.y - (dx * factor);
    var rx = cameraHolder.rotation.x - (dy * factor);
    rx = Math.max(-maxPitch, Math.min(maxPitch, rx));

    return {
      rx: rx,
      ry: ry
    };
  };

  function lockDirectionByIndex(index) {
    if (index == 0)
      self.lockMoveForward(true);
    else if (index == 1)
      self.lockMoveBackward(true);
    else if (index == 2)
      self.lockMoveLeft(true);
    else if (index == 3)
      self.lockMoveRight(true);
  }

  //
  // Public functions:
  //
  const update = function() {
    return

    if (config.hitTest)
      self.hitTest();

    velocity.x += (-1 * velocity.x) * 0.75 * self.config.delta;
    velocity.z += (-1 * velocity.z) * 0.75 * self.config.delta;

    if (moveForward && !lockMoveForward) velocity.z -= ztouch * self.config.speedFactor * self.config.delta;
    if (moveBackward && !lockMoveBackward) velocity.z += ztouch * self.config.speedFactor * self.config.delta;

    if (moveLeft && !lockMoveLeft) velocity.x -= xtouch * self.config.speedFactor * self.config.delta;
    if (moveRight && !lockMoveRight) velocity.x += xtouch * self.config.speedFactor * self.config.delta;

    fpsBody.translateX(velocity.x);
    fpsBody.translateY(velocity.y);
    fpsBody.translateZ(velocity.z);
  };

  const hitTest = function() {
    return

    self.unlockAllDirections();
    hitObjects = [];
    var cameraDirection = self.getDirection2(new THREE.Vector3(0, 0, 0)).clone();

    for (var i = 0; i < 4; i++) {
      // Applying rotation for each direction:
      var direction = cameraDirection.clone();
      direction.applyMatrix4(rotationMatrices[i]);

      var rayCaster = new THREE.Raycaster(fpsBody.position, direction);
      var intersects = rayCaster.intersectObject(self.scene, true);
      if ((intersects.length > 0 && intersects[0].distance < self.config.hitTestDistance)) {
        lockDirectionByIndex(i);
        hitObjects.push(intersects[0]);
        // console.log(intersects[0].object.name, i);
      }
    }

    return hitObjects;
  };

  const getDirection2 = function(v) {
    return

    var self = this;
    var direction = new THREE.Vector3(0, 0, -1);
    var rotation = new THREE.Euler(0, 0, 0, "YXZ");
    var rx = fpsBody.getObjectByName("cameraHolder").rotation.x;;
    var ry = fpsBody.rotation.y;

    // console.log("DIRECTION:", this);
    rotation.set(rx, ry, 0);
    v.copy(direction).applyEuler(rotation);
    // console.log(v);
    return v;
  };

  const getDirection = function() {
    return

    var self = this;
    var rx = 0;
    var ry = 0;
    var direction = new THREE.Vector3(0, 0, -1);
    var rotation = new THREE.Euler(0, 0, 0, "YXZ");

    // console.log("DIRECTION:", this);
    if (self != undefined) {
      rx = fpsBody.getObjectByName("cameraHolder").rotation.x;
      ry = fpsBody.rotation.y;
      console.log(rx, ry);
    }
    // var camHolder = self.fpsBody.getObjectByName("cameraHolder");

    return function(v) {
      rotation.set(rx, ry, 0);
      v.copy(direction).applyEuler(rotation);
      // console.log(v);
      return v;
    }
  }();

  // const moveLeft = function() {
  //   return moveLeft;
  // };

  // const moveRight = function() {
  //   return moveRight;
  // };

  // const moveForward = function() {
  //   return moveForward;
  // };

  // const moveBackward = function() {
  //   return moveBackward;
  // };

  // const lockMoveForward = function(boolean) {
  //   lockMoveForward = boolean;
  // };

  // const lockMoveBackward = function(boolean) {
  //   lockMoveBackward = boolean;
  // };

  // const lockMoveLeft = function(boolean) {
  //   lockMoveLeft = boolean;
  // };

  // const lockMoveRight = function(boolean) {
  //   lockMoveRight = boolean;
  // };

  const unlockAllDirections = function() {
    self.lockMoveForward(false);
    self.lockMoveBackward(false);
    self.lockMoveLeft(false);
    self.lockMoveRight(false);
  }

  const setRotation = (x, y) => {
    var camHolder = fpsBody.getObjectByName("cameraHolder");

    if (x !== null)
      camHolder.rotation.x = x;

    if (y !== null)
      fpsBody.rotation.y = y;
  }

  return <RotationPad />
  return <W0>[ Touch4 ]</W0>
}

TouchControls.prototype = {
  addToScene: function(scene) {
    this.scene = scene;
    scene.add(this.fpsBody);
  },

  setPosition: function(x, y, z) {
    this.fpsBody.position.set(x, y, z);
  },

  stopMouseMoving: function() {
    isRightMouseDown = false;
  },

  getHitObjects: function() {
    return hitObjects;
  }

};

export default TouchControls
