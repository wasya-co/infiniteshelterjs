
import React, { Fragment as F, useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
import styled from 'styled-components'

import {
  logg, logg_v,
} from "$shared"
import {
  Blocker,
} from './'
import TouchControls from './vendor/TouchControls'
import MovementPad from './vendor/MovementPad'

/**
 * Local Constants
**/
const _C = {
  epsilon: 0.001,
  events: {
    move: 'move',
    stopMove: 'stopMove',
    gotoPosition: 'gotoPosition',
  },
  origin: [0, 10, 0],
}
export {
  _C as C,
}

/**
 * ThreePanelMobile
 *
 * _vp_ 2021-11-14 :: Markers are objects
 * _vp_ 2022-08-13 :: Cont.
 * _vp_ 2022-09-02 :: Cont.
 * _vp_ 2022-09-14 :: local constants,
 *
 *
 */
const Loc = (props) => {
  logg(props, 'ThreePanelMobile')
  const { map } = props

  let camera, controls
  let fpsBody
  let markerObjects = [], markerObjectsIdxs = []
  let object, objects = []
  let raycaster, renderer
  let scene
  let texture // sky and floor, maybe all textures will share this memory?

  let moveForward = false
  let moveBackward = false
  let moveLeft = false
  let moveRight = false
  let canJump = false

  let prevTime = performance.now()
  const velocity = new THREE.Vector3()

  const vertex = new THREE.Vector3()
  const color = new THREE.Color()
  const loader = new GLTFLoader()
  const worldOctree = new Octree()

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)
  useEffect(() => {
    init()
    animate()
    onWindowResize()
  }, [])

  const onWindowResize = () => {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
  }

  function init() {

    camera = new THREE.PerspectiveCamera( 75, 2, 1, 1000 ) // fov, aspect, near, far
    camera.position.set(..._C.origin)

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )

    const axesHelper = new THREE.AxesHelper( 5 )
    scene.add( axesHelper )

    // Controls
    var options = {
      speedFactor: 0.5,
      delta: 1,
      rotationFactor: 0.002,
      maxPitch: 55,
      hitTest: true,
      hitTestDistance: 40
    };
    // controls = new TouchControls(blockerRef.current, camera, options);
    // controls.setPosition(0, 35, 400);

    // controls.addToScene(scene);
    // scene.add( controls.getObject() )

    // blockerRef.current.addEventListener( 'click', function () {
    //   logg('locked controls')
    //   controls.lock()
    // } )



    const onKeyDown = (event) => {
      switch ( event.code ) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = true
          break
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = true
          break
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = true
          break
        case 'ArrowRight':
        case 'KeyD':
          moveRight = true
          break
        case 'Space':
          if ( canJump === true ) velocity.y += 350
          canJump = false
          break
      }
    }

    const onKeyUp = function ( event ) {
      switch ( event.code ) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward = false
          break
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft = false
          break
        case 'ArrowDown':
        case 'KeyS':
          moveBackward = false
          break
        case 'ArrowRight':
        case 'KeyD':
          moveRight = false
          break
      }
    }

    document.addEventListener( 'keydown', onKeyDown )
    document.addEventListener( 'keyup', onKeyUp )

    const onStopMove = (e) => {
      // logg(e, 'onStopMove')
      moveRight = moveLeft = moveForward = moveBackward = false
    }

    /*
     * The coords of the event.detail are that of the pad:
     * -2..+2 deltaY = backward/forward
     * -2..+2 deltaX = left/right
    **/
    const onMove = ({ detail }) => {
      // logg(detail, 'onMove')
      const {
        deltaX, deltaY,
      } = detail

      const v = new THREE.Vector3(deltaX, 0, -deltaY)
      v.normalize()
      v.multiplyScalar(0.2) // move slower
      velocity.add( v )
    }

    const gotoPosition = ({ detail }) => {
      // logg(detail, 'going to position')
      camera.position.set( ...detail )
    }

    document.addEventListener(_C.events.move, onMove )
    document.addEventListener(_C.events.stopMove, onStopMove )
    document.addEventListener(_C.events.gotoPosition, gotoPosition )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )

    /*
     * Populate objects
    **/
    if (true) {
      /*
      * Floor
      **/

      // moon floor
      texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`)
      let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
      floorGeometry.rotateX( - Math.PI / 2 )
      const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
      const floor = new THREE.Mesh( floorGeometry, floorMaterial )
      scene.add( floor )

      map.markers.map((marker, idx) => {

        loader.load( marker.asset3d_path, ( gltf ) => {
          scene.add( gltf.scene );
          worldOctree.fromGraphNode( gltf.scene );
          gltf.scene.traverse( child => {
            if ( child.isMesh ) {
              child.castShadow = true;
              child.receiveShadow = true;
              if ( child.material.map ) {
                child.material.map.anisotropy = 4;
              }
            }
          } )
        })

      })

      /*
      * Skybox
      **/
      const textureLoader = new THREE.TextureLoader()
      texture = textureLoader.load(`/assets/textures/space-5.jpg`, () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
        rt.fromEquirectangularTexture(renderer, texture)
        scene.background = rt.texture
      });

      /*
      * Camera Holder
      **/
      var cameraHolder = new THREE.Object3D();
      cameraHolder.name = "cameraHolder";
      // cameraHolder.add(camera);

      fpsBody = new THREE.Object3D();
      fpsBody.add(cameraHolder);
    }

    /*
     * Render
    **/
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )
  }


  // @TODO: it's not a camera, the camera must be held by something, to do object collision. _vp_ 2022-09-14
  // @TODO: add collisions, boundary?
  // @TODO: re-implement jumping and gravity, from threejs fps example. _vp_ 2022-09-14
  function animate() {
    requestAnimationFrame( animate )
    const direction = new THREE.Vector3()
    const time = performance.now()
    const delta = ( time - prevTime ) / 1000

    /*
     * Friction
    **/
    if (Math.abs(velocity.x) < _C.epsilon) {
      velocity.x = 0
    } else {
      velocity.x -= velocity.x * 10.0 * delta
    }
    if (Math.abs(velocity.y) < _C.epsilon) {
      velocity.y = 0
    } else {
      // gravity
      // velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
    }
    if (Math.abs(velocity.z) < _C.epsilon) {
      velocity.z = 0
    } else {
      velocity.z -= velocity.z * 10.0 * delta
    }

    // if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta
    // if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta

    // velocity.z -= direction.z * 400.0 * delta
    // velocity.x -= direction.x * 400.0 * delta


    camera.translateX(velocity.x);
    camera.translateZ(velocity.z);

    prevTime = time
    renderer.render( scene, camera )
  }

  return <F>
    <div ref={instructionsRef} />
    <Blocker ref={blockerRef} className="Blocker" >
      <div id="Crosshair" />
      {/* <TouchControls container={blockerRef} camera={camera} options={{}} /> */}
      <MovementPad />
    </Blocker>
  </F>
}

export default Loc



