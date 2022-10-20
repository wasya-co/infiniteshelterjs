
import React, { Fragment as F, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as THREE from "three"
import OctreeHelper from './vendor/OctreeHelper.js'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
import { Capsule } from 'three/examples/jsm/math/Capsule'
import { CSS2DRenderer, CSS2DObject } from './vendor/CSS2DRenderer.js'
import ResourceTracker from './vendor/ResourceTracker'
import styled from 'styled-components'


import {
  AppContext,
  logg,
} from "$shared"
import {
  TwofoldContext,
} from "$components/TwofoldLayout"
import {
  Blocker,
} from './'
import { PointerLockControls } from './vendor/PointerLockControls'
import { appPaths } from "$src/AppRouter"

/**
 * Unit converter
 * 1 unit is a centimeter
**/
const U = {
  cm: (inn) => inn,
  m: (inn) => inn * 100,
  centimeters: (inn) => inn, // unit
  meters: (inn) => inn * 100, // e.g. 1 meter is 100cm
}

/**
 * ThreePanelDesktop
 *
 * Units are centimeters
 *
 * Math capsule: https://github.com/mrdoob/three.js/blob/dev/examples/jsm/math/Capsule.js
 *
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-13
 *
**/
const ThreePanelDesktop = (props) => {
  logg(props, 'ThreePanelDesktop')
  const { map, slug } = props

  const {
    useHistory,
    scene,
    pickingObjects, setPickingObjects,
    worldOctree, setWorldOctree,
    markers2destinationSlugs, setSarkers2destinationSlugs,
    tracked, // @TODO: rename
  } = useContext(AppContext)
  const resMgr = new ResourceTracker();
  const track = resMgr.track.bind(resMgr);

  const history = useHistory()

  let camera = new THREE.PerspectiveCamera( 75, 2, U.cm(10), U.m(25) ) // fov, aspect, near, far
  let controls
  let raycaster
  const keyStates = {}

  let renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setPixelRatio( window.devicePixelRatio )
  renderer.setSize( 700, 350 ) // aspect ratio 0.5
  renderer.shadowMap.enabled = true
  let texture

  const GRAVITY = U.m(3)
  const playerH = U.m(1) // 1.75 ?
  const playerForce = U.m(8)

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)

  useEffect(() => {
    resMgr.dispose()
    init()
    animate()
    onWindowResize()
  }, [ map.id, slug ])

  const textureLoader = new THREE.TextureLoader()
  const gltfLoader = new GLTFLoader()

  let octreeHelper

  let material
  const helperMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  const wireframeMaterial = new THREE.MeshStandardMaterial()
  wireframeMaterial.wireframe = true

  const playerCollider = new Capsule( // begin, end, radius
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0, playerH, 0 ),
    U.m(0.5) )
  playerCollider.translate(new THREE.Vector3(
    -U.m(2),
    0,
    U.m(3)
  ) ) // @TODO: make adjustable per-Location
  const playerColliderHelper = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(U.m(0.05), U.m(0.025), U.m(0.15), 5), // radiusTop, radiusBottom, height, radialSegments
    helperMaterial )


  const cameraCollider = new Capsule( new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0, playerH, 0 ),
    6 ) // begin, end, radius
  const cameraColliderHelper = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(6, 3, playerH, 5), // radiusTop, radiusBottom, height, radialSegments
    helperMaterial )

  let deltaPosition
  let playerOnObject = false
  let prevTime = performance.now()
  const playerVelocity = new THREE.Vector3()
  const playerDirection = new THREE.Vector3()
  let pickedObject, pickedObjectSavedColor
  let result // collisions
  let frame_id

  const playerCtlGeometry = new THREE.SphereGeometry(5, 8, 8) // radius, widthSegments, heightSegments, phiStart, phiEnd, thetaStart, thetaEnd
  let playerCtl

  window.addEventListener( 'resize', onWindowResize )

  const dispose = (resource) => {
    if (resource instanceof THREE.Object3D) {
      if (resource.parent) {
        resource.parent.remove(resource);
      }
    }
    if (resource.dispose) {
      resource.dispose();
    }
  }



  function initLabels () {

    // const labelRenderer = new CSS2DRenderer()
    // const earthDiv = document.createElement( 'div' )
    // earthDiv.className = 'label'
    // earthDiv.textContent = 'Earth'
    // earthDiv.style.marginTop = '-1em'
    // const earthLabel = new CSS2DObject( earthDiv )
    // earthLabel.position.set( 0, 20, 0 )
    // playerCtl.add( earthLabel )
    // earthLabel.layers.set( 0 )
    // labelRenderer.setSize( window.innerWidth, window.innerHeight )
    // labelRenderer.domElement.style.position = 'absolute'
    // labelRenderer.domElement.style.top = '0px'
    // document.body.appendChild( labelRenderer.domElement )
  }

  const initStudio = (c) => {

    { /* Lights */

      // // Illuminate everytyhing
      const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
      light.position.set( 0.5, 1, 0.75 )
      scene.add( light )

      // Shadow
      const white = 0xffffff
      const shadowLightIntensity = 2
      const shadowLightPosition = [ 0*10, 40*10, -10*100 ]
      const shadowLight = new THREE.DirectionalLight(white, shadowLightIntensity)
      shadowLight.castShadow = true
      // shadowLight.shadow.mapSize.width = 512
      // shadowLight.shadow.mapSize.height = 512

      shadowLight.shadow.camera.bottom = -150
      shadowLight.shadow.camera.top = 150
      shadowLight.shadow.camera.left = -150
      shadowLight.shadow.camera.right = 150
      shadowLight.shadow.camera.near = 10
      shadowLight.shadow.camera.far = 5000
      shadowLight.shadow.camera.updateProjectionMatrix()

      shadowLight.position.set( ...shadowLightPosition )
      scene.add( shadowLight )
      // const helper = new THREE.DirectionalLightHelper( shadowLight, 5 )
      const helper = new THREE.CameraHelper(shadowLight.shadow.camera)
      scene.add( helper )

    } // endLights

    { /* Floor */
      if (c.hasFloor) {

      texture = textureLoader.load(`/assets/textures/floor-1.png`)
      const textureM = U.meters(1) // the texture is a unit meter
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping
      texture.offset.set(0, 0)
      texture.repeat.set(c.studioWidth/textureM, c.studioLength/textureM)
      let floorGeometry = new THREE.PlaneGeometry( c.studioWidth, c.studioLength ) // width, height, widthSegments, heightSegments
      floorGeometry.rotateZ( - Math.PI / 2 )
      floorGeometry.rotateX( - Math.PI / 2 )

      // Basic material cannot receive shadow, but standard material can.
      // material = new THREE.MeshStandardMaterial({ color: 0x333333 })
      material = new THREE.MeshStandardMaterial({
        map: texture,
        side: THREE.DoubleSide,
      })
      const floor = new THREE.Mesh( floorGeometry, material )
      floor.receiveShadow = true
      scene.add( floor )

      }
    } /* endFloor */

    /* Skybox */
    texture = textureLoader.load(`/assets/textures/space.jpg`, () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      rt.fromEquirectangularTexture(renderer, texture)
      scene.background = rt.texture
    })

  }

  const initControls = () => {
    controls = new PointerLockControls( playerCtl, document.body ) // Only rotation, no movement!

    blockerRef.current.addEventListener( 'click', function () {
      logg('event #click, locked controls')
      controls.lock()
    } )

    controls.addEventListener( 'lock', function () {
      logg('event #lock')
      // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    } )

    controls.addEventListener( 'unlock', function () {
      logg('event #unlock')
      // blocker.style.display = 'block'
      // instructions.style.display = ''
    } )

    scene.add( controls.getObject() )

    const onClick = () => { // There is no event here.
      if (pickedObject && controls.isLocked) {

        logg(tracked, 'cleaning Up')
        /* cleanup */
        while(tracked.length) {
          const popped = tracked.pop()
          logg(popped, 'popped')
          scene.remove(popped)
          dispose(popped)
        }

        const TmpWorldOctree = new Octree()
        setWorldOctree(TmpWorldOctree)
        // scene.remove(octreeHelper)

        history.push( appPaths.location({
          slug: markers2destinationSlugs[pickedObject.uuid].destination_slug
        }) )
      }
    }

    document.addEventListener( 'keydown', ( event ) => {
      keyStates[ event.code ] = true;
    } );

    document.addEventListener( 'keyup', ( event ) => {
      keyStates[ event.code ] = false;
    } );

    document.addEventListener( 'click', onClick )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )
  }

  const initModels = () => {
    map.markers.map((marker, idx) => {

      if (marker.asset3d_path) {
        gltfLoader.load( marker.asset3d_path, ( gltf ) => {

          tracked.push(gltf.scene)
          logg(tracked, 'adding Tracking')

          gltf.scene.position.x = marker.x
          gltf.scene.position.y = marker.y
          gltf.scene.position.z = marker.z
          gltf.scene.scale.multiplyScalar(110)
          // @TODO: and Z ?!
          // @TODO: and parent-child relationships ?!

          scene.add(gltf.scene)

          /* show the bounding box */
          let box = new THREE.BoxHelper(gltf.scene, 0xff00ff)
          scene.add( box )

          /* Collisions */
          worldOctree.fromGraphNode( gltf.scene, scene )
          octreeHelper = new OctreeHelper( worldOctree )
          octreeHelper.visible = false
          scene.add( octreeHelper ) // @TODO: these need to be multiple, if I'm keeping it

          { // init Picking, @TODO: remove usage of markers2destinationSlugs


            if (marker.destination_slug) {
              pickingObjects.push( gltf.scene )
              logg(gltf.scene, 'added to picking')
            }

            gltf.scene.traverse( child => {
              if ( child.isMesh ) {
                child.castShadow = true
                child.receiveShadow = true

                if (marker.destination_slug) {

                  // logg(marker, 'init Picking')
                  // logg(gltf.scene, 'init Picking 2')

                  markers2destinationSlugs[child.uuid] = { destination_slug: marker.destination_slug }
                }
              }
            })

            logg(pickingObjects, 'pickingObjects')

          } // endInitPicking

        })
      }

    })
  } // end InitModels

  function init() {
    logg(scene, 'init() scene')
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const axesHelper = new THREE.AxesHelper( 5 )
    scene.add( axesHelper )

    camera.position.y = U.m(0)
    camera.position.z = U.cm(0) // 40cm behind the body

    playerCtl = new THREE.Mesh( playerCtlGeometry, wireframeMaterial )
    playerCtl.position.y = playerH


    playerCtl.position.x = -U.m(2) // @TODO: make adjustable per-Location
    playerCtl.position.z = U.m(3)
    playerCtl.add( camera )
    scene.add( playerCtl )
    scene.add( playerColliderHelper )

    initControls()
    // initStudio(map.config.studio)
    initModels()

    blockerRef.current.appendChild( renderer.domElement )

  }


  function getForwardVector() {

    playerCtl.getWorldDirection( playerDirection );
    playerDirection.y = 0;
    playerDirection.normalize();

    return playerDirection;

  }

  function getSideVector() {

    playerCtl.getWorldDirection( playerDirection );
    playerDirection.y = 0;
    playerDirection.normalize();
    playerDirection.cross( camera.up );

    return playerDirection
  }

  const animateBody = (deltaTime) => {

    deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime )
    playerCollider.translate( deltaPosition )
    playerCtl.position.copy( playerCollider.end )
    playerColliderHelper.position.copy( playerCollider.end )

    playerCtl.position.y += ( playerVelocity.y * deltaTime )
    if ( playerCtl.position.y < playerH ) {
      playerVelocity.y = 0
      playerCtl.position.y = playerH
      playerOnObject = true
    }

  }

  const animateCollisions = () => {
    if (!worldOctree) return

    // player body
    result = worldOctree.capsuleIntersect( playerCollider )
    if (result) {
      playerOnObject = result.normal.y > 0
      if ( !playerOnObject ) {
        playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
      }
      playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
    }

    // result = worldOctree.capsuleIntersect( cameraCollider )
    // if (result) {
    //   logg(result, 'camera Collision') // herehere
    //   // playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
    //   // playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
    // }

  }

  function animateControls( deltaTime ) {

    let speedDelta = deltaTime * playerForce
    if (playerOnObject) speedDelta *= 0.8 // gives a bit of air control

    if ( keyStates[ 'KeyW' ] ) {
      playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) )
    }

    if ( keyStates[ 'KeyS' ] ) {
      playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) )
    }

    if ( keyStates[ 'KeyA' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) )
    }

    if ( keyStates[ 'KeyD' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) )
    }

    if ( playerOnObject ) {
      if ( keyStates[ 'Space' ] ) {
        playerVelocity.y = U.m(3)
        playerOnObject = false
      }
    }

    let damping = Math.exp( - 4 * deltaTime ) - 1;
    if ( ! playerOnObject ) {
      playerVelocity.y -= GRAVITY * deltaTime;
      // small air resistance
      damping *= 0.1;
    }
    playerVelocity.addScaledVector( playerVelocity, damping );

  }

  const animatePicking = () => {
    let cameraPosition = camera.position.clone()
    cameraPosition.applyMatrix4( camera.matrixWorld )
    let cameraDirection = new THREE.Vector3()
    camera.getWorldDirection( cameraDirection )
    cameraDirection.normalize()

    raycaster = new THREE.Raycaster( cameraPosition, cameraDirection )

    const pickingIntersections = raycaster.intersectObjects( pickingObjects, true )

    if (pickedObject) {
      pickedObject.material.emissive.setHex(pickedObjectSavedColor)
      pickedObject = undefined
    }
    if (pickingIntersections.length) {
      pickedObject = pickingIntersections[0].object
      pickedObjectSavedColor = pickedObject.material.emissive.getHex()
      pickedObject.material.emissive.setHex(0xFFFF00)
    }
  }

  function animate() {
    const time = performance.now()
    const delta = ( time - prevTime ) / 1000
    if ( controls.isLocked === true ) {

      // camera.updateMatrixWorld()
      // playerCtl.updateMatrixWorld()

      animateControls(delta)
      animateBody(delta)
      animateCollisions()
      animatePicking()
    }
    renderer.render( scene, camera )
    prevTime = time
    frame_id = requestAnimationFrame( animate )
  }

  const onWindowResize = () => {
    // logg([blockerRef.current.clientWidth, blockerRef.current.clientHeight], 'ThreePanelDesktop. OnWindowResize')

    // if (!blockerRef.current) { return }
    // if (!camera) { return }

    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
  }

  return <F>
    <div ref={instructionsRef} className='Instructions empty' />
    <Blocker ref={blockerRef} className="Blocker" >
      <div id="Crosshair" />
    </Blocker>
  </F>
}

export default ThreePanelDesktop
