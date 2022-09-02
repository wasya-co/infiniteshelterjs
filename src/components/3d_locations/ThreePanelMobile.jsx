
import React, { Fragment as F, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
import styled from 'styled-components'

import {
  logg,
} from "$shared"
import TouchControls from './touch-controls'

/**
 * What is blocker? the entire canvas?
 *
 * @TODO: make its own component. _vp_ 2022-08-13
**/
const Blocker = styled.div`
  border: 2px solid red;

  position: relative;
  width: 700px;
  height: 350px;

  #Crosshair {
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
 * ThreePanelMobile
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-02
 *
 *
 */
const Loc = (props) => {
  // logg(props, 'ThreePanelMobile')
  const { map } = props

  const history = useHistory()

  let camera, controls,
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



    // // Controls
    // var options = {
    // 	speedFactor: 0.5,
    // 	delta: 1,
    // 	rotationFactor: 0.002,
    // 	maxPitch: 55,
    // 	hitTest: true,
    // 	hitTestDistance: 40
    // };
    // controls = new TouchControls(el, camera, options);
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
    if ( controls?.isLocked === true ) {

      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()

      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new THREE.Raycaster( camera.position, cameraDirection )
      const intersections = raycaster.intersectObjects( markerObjects, true )
      if (intersections.length) {
        const pickedObject = intersections[0].object

        /* collision */
        // if (intersections[0].distance < 5) {
        //   moveForward = false
        // }
      }

      const onObject = intersections.length > 0
      const delta = ( time - prevTime ) / 1000
      velocity.x -= velocity.x * 10.0 * delta
      velocity.z -= velocity.z * 10.0 * delta
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
      direction.z = Number( moveForward ) - Number( moveBackward )
      direction.x = Number( moveRight ) - Number( moveLeft )
      direction.normalize(); // this ensures consistent movements in all directions
      if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta
      if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta
      if ( onObject === true ) {
        velocity.y = Math.max( 0, velocity.y )
        canJump = true
      }


      // controls.moveRight( - velocity.x * delta )
      // controls.moveForward( - velocity.z * delta )
      // controls.getObject().position.y += ( velocity.y * delta ); // new behavior
      // if ( controls.getObject().position.y < 10 ) {
      //   velocity.y = 0
      //   controls.getObject().position.y = 10
      //   canJump = true
      // }


    }
    prevTime = time

    renderer.render( scene, camera )
  }

  return <F>
    <div ref={instructionsRef} />
    <Blocker ref={blockerRef} className="Blocker" >
      <div id="Crosshair" />
    </Blocker>
  </F>
}

export default Loc
