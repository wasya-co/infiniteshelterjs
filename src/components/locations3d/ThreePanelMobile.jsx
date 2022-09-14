
import React, { Fragment as F, useEffect, useRef } from 'react'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
import styled from 'styled-components'

import {
  logg,
} from "$shared"
import {
  Blocker,
} from './'
import TouchControls from './vendor/TouchControls'
import MovementPad from './vendor/MovementPad'


/**
 * ThreePanelMobile
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-02
 * Continue.           _vp_ 2022-09-14
 *
 *
 */
const Loc = (props) => {
  logg(props, 'ThreePanelMobile')
  const { map } = props

  let camera, controls,
    fpsBody,
    object, objects = [], markerObjects = [], markerObjectsIdxs = [],
    raycaster, renderer,
    texture,
    scene

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)
  useEffect(() => {
    init()
    animate()
  }, [])

  let moveForward = false
  let moveBackward = false
  let moveLeft = false
  let moveRight = false
  let canJump = false

  let prevTime = performance.now()
  const velocity = new THREE.Vector3()
  const direction = new THREE.Vector3()
  const vertex = new THREE.Vector3()
  const color = new THREE.Color()
  const loader = new GLTFLoader()
  const worldOctree = new Octree()

  function init() {

    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    **/
    camera = new THREE.PerspectiveCamera( 75, 2, 1, 1000 ) // fov, aspect, near, far
    camera.position.y = 10

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

    const onMove = (event) => {
      logg(event, 'onMove')

      let ztouch = Math.abs(event.detail.deltaY)
      let xtouch = Math.abs(event.detail.deltaX)

      if (event.detail.deltaY === event.detail.middle) {
        ztouch = 1;
        moveForward = moveBackward = false
      } else {
        if (event.detail.deltaY > event.detail.middle) {
          moveForward = true
          moveBackward = false
        }
        else if (event.detail.deltaY < event.detail.middle) {
          moveForward = false
          moveBackward = true
        }
      }

      if (event.detail.deltaX === event.detail.middle) {
        xtouch = 1
        moveRight = moveLeft = false
      } else {
        if (event.detail.deltaX < event.detail.middle) {
          moveRight = true
          moveLeft = false
        }
        else if (event.detail.deltaX > event.detail.middle) {
          moveRight = false
          moveLeft = true
        }
      }

    }
    document.addEventListener( 'move', onMove )
    document.addEventListener( 'stopMove', onStopMove )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )

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

    /*
     * Render
    **/
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )

  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()

    if (controls?.isLocked === true ) {

      // var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()

      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      // raycaster = new THREE.Raycaster( camera.position, cameraDirection )
      // const intersections = raycaster.intersectObjects( markerObjects, true )
      // if (intersections.length) {
      //   const pickedObject = intersections[0].object
      //   /* collision */
      //   if (intersections[0].distance < 5) {
      //     moveForward = false
      //   }
      // }

      // const onObject = intersections.length > 0

      let delta = ( time - prevTime ) / 1000
      velocity.x -= velocity.x * 10.0 * delta
      velocity.z -= velocity.z * 10.0 * delta
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
      direction.z = Number( moveForward ) - Number( moveBackward )
      direction.x = Number( moveRight ) - Number( moveLeft )
      direction.normalize(); // this ensures consistent movements in all directions
      if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta
      if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta

      // if ( onObject === true ) {
      //   velocity.y = Math.max( 0, velocity.y )
      //   canJump = true
      // }
    }

    // onMove
    if (true) {
      const delta = ( time - prevTime ) / 1000
      velocity.x -= velocity.x * 10.0 * delta
      velocity.z -= velocity.z * 10.0 * delta
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
      direction.z = Number( moveForward ) - Number( moveBackward )
      direction.x = Number( moveRight ) - Number( moveLeft )
      direction.normalize(); // this ensures consistent movements in all directions
      if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta
      if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta
    }

    // logg(velocity, 'velocity')
    camera.translateX(velocity.x);
    // camera.translateY(velocity.y);
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



