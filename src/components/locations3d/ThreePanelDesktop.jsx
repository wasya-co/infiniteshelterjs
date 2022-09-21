
import React, { Fragment as F, useContext, useEffect, useRef } from 'react'
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Octree } from 'three/examples/jsm/math/Octree'
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
 * ThreePanelDesktop
 *
 * Units are centimeters
 *
 * Markers are obejcts _vp_ 2021-11-14
 * Continue.           _vp_ 2022-08-13
 * Continue.           _vp_ 2022-09-13
 *
 */
const ThreePanelDesktop = (props) => {
  // logg(props, 'ThreePanelDesktop')
  const { map } = props

  const {
    useHistory,
  } = useContext(AppContext)

  // const {
  //   resizeCount,
  // } = useContext(TwofoldContext)

  const history = useHistory()
  let markers2destinationSlugs = {}

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
    onWindowResize()
  }, [])

  // useEffect(() => {
  //   onWindowResize()
  // }, [resizeCount])


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
  const textureLoader = new THREE.TextureLoader()
  const gltfLoader = new GLTFLoader()
  const worldOctree = new Octree()
  let pickedObject
  let pickedObjectSavedColor

  function init() {

    camera = new THREE.PerspectiveCamera( 75, 2, 1, 1000 ) // fov, aspect, near, far
    camera.position.y = 10

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const axesHelper = new THREE.AxesHelper( 5 )
    scene.add( axesHelper )

    /*
     * Lights
    **/
    {

    // // Illuminate everytyhing
    // const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    // light.position.set( 0.5, 1, 0.75 )
    // scene.add( light )

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



    /*
     * Controls
    **/
    {
    controls = new PointerLockControls( camera, document.body )

    blockerRef.current.addEventListener( 'click', function () {
      logg('locked controls')
      controls.lock()
    } )

    controls.addEventListener( 'lock', function () {
      logg('event #lock')
      // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    } )

    controls.addEventListener( 'unlock', function () {
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


    const onKeyDown = (event) => {
      // logg(event.code, '#onKeyDown')

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
    document.addEventListener( 'click', onClick )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )
    } // endControls


    /*
     * Ground
    **/
    {
    // moon floor
    texture = textureLoader.load(`/assets/textures/moon-1.jpg`)
    let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    floorGeometry.rotateX( - Math.PI / 2 )
    let floorMaterial
    // floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    // floorMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
    floorMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    })
    const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    floor.receiveShadow = true
    scene.add( floor )
    } // endGround

    /*
     * Load models of markers
    **/
    {
    map.markers.map((marker, idx) => {

      gltfLoader.load( marker.asset3d_path, ( gltf ) => {

        gltf.scene.position.x = marker.x
        gltf.scene.position.y = marker.y
        // @TODO: and Z ?!
        // @TODO: and parent-child relationships ?!
        scene.add( gltf.scene )
        worldOctree.fromGraphNode( gltf.scene )

        /*
         * Picking
        **/
        if (marker.destination_slug) {
          markerObjects.push( gltf.scene )
        }


        gltf.scene.traverse( child => {
          if ( child.isMesh ) {
            child.castShadow = true
            // child.receiveShadow = true
            if ( child.material.map ) {
              child.material.map.anisotropy = 4
            }

            /*
            * Picking
            **/
            if (marker.destination_slug) {
              markers2destinationSlugs[child.uuid] = { destination_slug: marker.destination_slug }
            }

          }
        } )
      })

    })
    } // endLoadModels


    /*
     * Skybox
    **/
    texture = textureLoader.load(`/assets/textures/space-5.jpg`, () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      // rt.fromEquirectangularTexture(renderer, texture)
      scene.background = rt.texture
    });


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

  const onWindowResize = () => {
    logg([blockerRef.current.clientWidth, blockerRef.current.clientHeight], 'ThreePanelDesktop. OnWindowResize')

    // if (!blockerRef.current) { return }
    // if (!camera) { return }

    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera.updateProjectionMatrix()

    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    if ( controls.isLocked === true ) {

      /*
       * Picking
      **/

      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      // And for picking _vp_ 2022-09-18
      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()
      raycaster = new THREE.Raycaster( camera.position, cameraDirection )
      const intersections = raycaster.intersectObjects( markerObjects, true )

      if (pickedObject) {
        pickedObject.material.emissive.setHex(pickedObjectSavedColor)
        pickedObject = undefined
      }
      if (intersections.length) {
        pickedObject = intersections[0].object
        pickedObjectSavedColor = pickedObject.material.emissive.getHex()
        pickedObject.material.emissive.setHex(0xFFFF00);

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
      controls.moveRight( - velocity.x * delta )
      controls.moveForward( - velocity.z * delta )
      controls.getObject().position.y += ( velocity.y * delta ); // new behavior
      if ( controls.getObject().position.y < 10 ) {
        velocity.y = 0
        controls.getObject().position.y = 10
        canJump = true
      }
    }
    prevTime = time

    renderer.render( scene, camera )
  }

  return <F>
    <div ref={instructionsRef} className='Instructions empty' />
    <Blocker ref={blockerRef} className="Blocker" >
      <div id="Crosshair" />
    </Blocker>
  </F>
}

export default ThreePanelDesktop
