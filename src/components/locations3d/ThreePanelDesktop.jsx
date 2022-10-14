
import React, { Fragment as F, useContext, useEffect, useRef } from 'react'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
import { Capsule } from 'three/examples/jsm/math/Capsule'
import { CSS2DRenderer, CSS2DObject } from './vendor/CSS2DRenderer.js'
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
  // logg(props, 'ThreePanelDesktop')
  const { map } = props

  const {
    useHistory,
  } = useContext(AppContext)

  // const {
  //   resizeCount,
  // } = useContext(TwofoldContext)
  // useEffect(() => {
  //   onWindowResize()
  // }, [resizeCount])

  const history = useHistory()
  let markers2destinationSlugs = {}

  let camera, controls
  let pickingObjects = []
  let raycaster, renderer
  let texture
  let scene

  const GRAVITY = U.m(3)
  const playerH = U.m(1) // 1.75 ?
  const keyStates = {}

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)
  useEffect(() => {
    init()
    animate()
    onWindowResize()
  }, [])

  const textureLoader = new THREE.TextureLoader()
  const gltfLoader = new GLTFLoader()
  const worldOctree = new Octree()

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


  let collisionObject, collisionObectSavedColor
  let deltaPosition
  let playerOnObject = false
  let prevTime = performance.now()
  const playerVelocity = new THREE.Vector3()
  const playerDirection = new THREE.Vector3()
  let pickedObject, pickedObjectSavedColor
  let result // collisions

  const playerCtlGeometry = new THREE.SphereGeometry(5, 8, 8) // radius, widthSegments, heightSegments, phiStart, phiEnd, thetaStart, thetaEnd
  const playerCtl = new THREE.Mesh( playerCtlGeometry, wireframeMaterial )
  playerCtl.position.y = playerH

  // @TODO: make the below adjustable per-Location
  playerCtl.position.x = -U.m(2)
  playerCtl.position.z = U.m(3)

  const playerBodyGeometry = new THREE.BoxGeometry(U.m(1), playerH, U.m(0.2)) // w, h, l
  const playerBody = new THREE.Mesh( playerBodyGeometry, wireframeMaterial )
  playerBody.position.y = 0
  playerBody.castShadow = true
  playerCtl.add(playerBody)


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


  const initStudio = () => {

    /*
     * Lights
    **/
    {

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

    const studioLength = U.meters(25)
    const studioWidth = U.meters(25)
    /* Floor */
    // texture = textureLoader.load(`/assets/textures/moon-1.jpg`)
    texture = textureLoader.load(`/assets/textures/floor-1.png`)
    const textureM = U.meters(1) // the texture is a unit meter
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping
    texture.offset.set(0, 0)
    texture.repeat.set(studioWidth/textureM, studioLength/textureM)
    let floorGeometry = new THREE.PlaneGeometry( studioWidth, studioLength ) // width, height, widthSegments, heightSegments
    floorGeometry.rotateZ( - Math.PI / 2 )
    floorGeometry.rotateX( - Math.PI / 2 )

    // material = new THREE.MeshStandardMaterial({ color: 0x333333 })
    material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide,
    })
    const floor = new THREE.Mesh( floorGeometry, material )
    floor.receiveShadow = true
    scene.add( floor )

    /* Skybox */
    texture = textureLoader.load(`/assets/textures/space-5.jpg`, () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      rt.fromEquirectangularTexture(renderer, texture)
      scene.background = rt.texture
    })

    /* Measuring tools */
    // @TODO: Measuring tools?!

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

    const onClick = (event) => {
      // e.preventDefault()
      if (pickedObject) {
        // logg(pickedObject, 'pickedObject')
        // logg(markers2destinationSlugs, 'all of them')
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

  function init() {

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const axesHelper = new THREE.AxesHelper( 5 )
    scene.add( axesHelper )

    camera = new THREE.PerspectiveCamera( 75, 2, U.cm(10), U.m(25) ) // fov, aspect, near, far
    camera.position.y = U.m(0)
    camera.position.z = U.cm(0) // 40cm behind the body

    /* Adding playerBody */
    playerCtl.add( camera )
    scene.add( playerCtl )

    // scene.add( playerBody )
    // scene.add( cameraColliderHelper )
    scene.add( playerColliderHelper )


    initControls()
    initStudio()


    /**
     * Load, import models of markers
    **/
    {
      map.markers.map((marker, idx) => {
        // logg(marker.asset3d_path, 'Loading asset...')
        if (!!marker.asset3d_path) {
          gltfLoader.load( marker.asset3d_path, ( gltf ) => {

            gltf.scene.position.x = marker.x
            gltf.scene.position.y = marker.y
            gltf.scene.scale.multiplyScalar(110)
            // @TODO: and Z ?!
            // @TODO: and parent-child relationships ?!
            scene.add( gltf.scene )

            const box = new THREE.BoxHelper(gltf.scene, 0xff00ff)
            scene.add( box )

            /*
            * Collisions
            **/
            worldOctree.fromGraphNode( gltf.scene )
            // collisionObjects.push( gltf.scene )

            /*
            * Picking
            **/
            if (marker.destination_slug) {
              pickingObjects.push( gltf.scene )
            }


            { // picking - not used
            // gltf.scene.traverse( child => {
            //   if ( child.isMesh ) {
            //     child.castShadow = true
            //     child.receiveShadow = true

            //     // logg(child, 'mesh child')


            //     if ( child.material.map ) {
            //       // child.material.map.anisotropy = 4
            //     }

            //     /*
            //     * Picking
            //     **/
            //     if (marker.destination_slug) {
            //       markers2destinationSlugs[child.uuid] = { destination_slug: marker.destination_slug }
            //     }

            //   }
            // } )
            }

          })
        }
      })
    } // endLoadModels


    /*
     * Render
    **/
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5
    renderer.shadowMap.enabled = true
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )
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

    return playerDirection;

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

    // player body
    result = worldOctree.capsuleIntersect( playerCollider )
    if (result) {
      playerOnObject = result.normal.y > 0
      if ( !playerOnObject ) {
        playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
      }
      playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
    }

    result = worldOctree.capsuleIntersect( cameraCollider )
    if (result) {
      logg(result, 'camera Collision') // herehere
      // playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
      // playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
    }

  }

  function animateControls( deltaTime ) {

    // gives a bit of air control
    const speedDelta = deltaTime * ( playerOnObject ? U.m(5) : U.m(3) )

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
    raycaster = new THREE.Raycaster( cameraPosition, cameraDirection )

    const pickingIntersections = raycaster.intersectObjects( pickingObjects, true )

    if (pickedObject) {
      pickedObject.material.emissive.setHex(pickedObjectSavedColor)
      pickedObject = undefined
    }
    if (pickingIntersections.length) {
      pickedObject = pickingIntersections[0].object
      pickedObjectSavedColor = pickedObject.material.emissive.getHex()
      pickedObject.material.emissive.setHex(0xFFFF00);
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

    }
    renderer.render( scene, camera )
    prevTime = time
    requestAnimationFrame( animate )
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
