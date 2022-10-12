
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

  const history = useHistory()
  let markers2destinationSlugs = {}

  let camera, controls,
    object, objects = [],
    collisionObjects = [],
    pickingObjects = [],
    raycaster, renderer,
    texture,
    scene

  const GRAVITY = 30;

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

  const textureLoader = new THREE.TextureLoader()
  const gltfLoader = new GLTFLoader()
  const worldOctree = new Octree()


  const helperMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
  const wireframeMaterial = new THREE.MeshStandardMaterial()
  wireframeMaterial.wireframe = true

  const playerCollider = new Capsule( new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0, 17.5, 0 ),
    6 ) // begin, end, radius
  const playerColliderHelper = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(6, 6, 17.5, 5), // radiusTop, radiusBottom, height, radialSegments
    helperMaterial )

  let playerOnFloor = false

  let prevTime = performance.now()
  const playerVelocity = new THREE.Vector3()
  const playerDirection = new THREE.Vector3()

  const playerCtlGeometry = new THREE.SphereGeometry(5, 8, 8) // radius, widthSegments, heightSegments, phiStart, phiEnd, thetaStart, thetaEnd
  const playerBodyGeometry = new THREE.BoxGeometry(16, 20, 2)


  const playerCtl = new THREE.Mesh( playerCtlGeometry, wireframeMaterial )
  const playerBody = new THREE.Mesh( playerBodyGeometry, wireframeMaterial )
  playerBody.position.y = 0
  playerBody.castShadow = true
  playerCtl.position.y = 17.5
  // playerCtl.add(playerBody)

  let collisionObject, collisionObectSavedColor
  let pickedObject, pickedObjectSavedColor

  var vector = new THREE.Vector3()
  var quaternion = new THREE.Quaternion() // create one and reuse it
  var matrix = new THREE.Matrix4(); // create one and reuse it


  function init() {

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const axesHelper = new THREE.AxesHelper( 5 )
    scene.add( axesHelper )

    // 1.75m tall guy
    camera = new THREE.PerspectiveCamera( 75, 2, .1, 1000 ) // fov, aspect, near, far
    camera.position.y = 17.5 // 1.75m tall guy
    camera.position.z = 40 // this much behind the body

    playerCtl.add( camera )
    // playerCtl.add( playerCollider )
    scene.add( playerCollider )
    scene.add( playerCtl )
    scene.add( playerBody )
    scene.add( playerColliderHelper )


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


    /*
     * Controls
    **/
    {
      controls = new PointerLockControls( playerCtl, document.body )

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
            if ( canJump === true ) playerVelocity.y += 350
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
     * Ground, Skybox
    **/
    {
      // Moon floor
      texture = textureLoader.load(`/assets/textures/moon-1.jpg`)
      let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
      floorGeometry.translate(0, 0, -1)
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
      // scene.add( floor )

      // Skybox
      texture = textureLoader.load(`/assets/textures/space-5.jpg`, () => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
        // rt.fromEquirectangularTexture(renderer, texture)
        scene.background = rt.texture
      })

    } // endGround


    /*
     * Load, import models of markers
    **/
    {
      map.markers.map((marker, idx) => {

        gltfLoader.load( marker.asset3d_path, ( gltf ) => {

          gltf.scene.position.x = marker.x
          gltf.scene.position.y = marker.y
          gltf.scene.scale.multiplyScalar(17)
          // @TODO: and Z ?!
          // @TODO: and parent-child relationships ?!
          scene.add( gltf.scene )

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



          gltf.scene.traverse( child => {
            if ( child.isMesh ) {
              child.castShadow = true
              child.receiveShadow = true

              // logg(child, 'mesh child')


              if ( child.material.map ) {
                // child.material.map.anisotropy = 4
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
     * Render
    **/
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5
    renderer.shadowMap.enabled = true
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    const delta = ( time - prevTime ) / 1000

    if ( controls.isLocked === true ) {
      camera.updateMatrixWorld()
      playerCtl.updateMatrixWorld()

      var cameraDirection = new THREE.Vector3()
      camera.getWorldDirection( cameraDirection )
      cameraDirection.normalize()

      var cameraPosition = camera.position.clone()
      cameraPosition.applyMatrix4( camera.matrixWorld )
      // logg(cameraPosition, 'cameraPosition')

      /*
       * Picking
       */
      const pickingScope = (() => {
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
      })()


      /*
       * Third-person body
       */
      const bodyScope = (() => {

        let damping = Math.exp( - 4 * delta ) - 1;
        if ( ! playerOnFloor ) {
          playerVelocity.y -= GRAVITY * delta;
          // small air resistance
          damping *= 0.1;
        }
        playerVelocity.addScaledVector( playerVelocity, damping );

        const onObject = false // collisionIntersections.length > 0

        playerVelocity.x -= playerVelocity.x * 10.0 * delta
        playerVelocity.z -= playerVelocity.z * 10.0 * delta
        playerVelocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

        playerDirection.z = Number( moveForward ) - Number( moveBackward )
        playerDirection.x = Number( moveRight ) - Number( moveLeft )
        if ( moveForward || moveBackward ) playerVelocity.z -= playerDirection.z * 400.0 * delta
        if ( moveLeft || moveRight ) playerVelocity.x -= playerDirection.x * 400.0 * delta
        if ( onObject === true ) {
          playerVelocity.y = Math.max( 0, playerVelocity.y )
          canJump = true
        }
        playerDirection.normalize()
        // logg(playerDirection, 'playerDirection') // these are binary controls, i.e. keyboard presses

        controls.moveRight( - playerVelocity.x * delta )
        controls.moveForward( - playerVelocity.z * delta )
        controls.getObject().position.y += ( playerVelocity.y * delta )
        if ( controls.getObject().position.y < 10 ) {
          playerVelocity.y = 0
          controls.getObject().position.y = 10
          canJump = true
        }

        // logg(controls.getObject().rotation, 'controlsRotation')

        const deltaPosition = playerVelocity.clone().multiplyScalar( delta )

        // logg(deltaPosition, 'deltaPosition')
        playerCollider.translate( deltaPosition )
        // playerCollider.getCenter(vector)
        // vector.addScaledVector( playerVelocity, delta )

        { // logs

        /* cameraDirection */
        // const arrowHCD = new THREE.ArrowHelper(
        //   cameraDirection,
        //   controls.getObject().position,
        //   10,
        //   0x336699 )
        // scene.add( arrowHCD )
        // logg(cameraDirection, 'cameraDirection')

        /* shows controls' position */
        // const arrowH1 = new THREE.ArrowHelper(
        //   controls.getObject().clone().position.normalize(),
        //   new THREE.Vector3(0, 0, 0),
        //   new THREE.Vector3(0, 0, 0).distanceTo( controls.getObject().position ),
        //   0xffffff )
        // scene.add( arrowH1 )

        /* playerDirection */
        /* not useful, use cameraDirection instead */
        // const arrowHPD = new THREE.ArrowHelper(
        //   playerDirection,
        //   controls.getObject().position,
        //   10,
        //   0xff0f0 )
        // scene.add( arrowHPD )

        /* Shows playerVelocity */
        // const arrowHPV = new THREE.ArrowHelper(
        //   playerVelocity,
        //   controls.getObject().position,
        //   10,
        //   0xffff00 )
        // scene.add( arrowHPV )


        /* shows deltaPosition above your head */
        /* this is object-relative, left/right switched (-x) */
        // const arrowH2 = new THREE.ArrowHelper(
        //   deltaPosition.clone().normalize(),
        //   controls.getObject().position,
        //   deltaPosition.length()*10, // 10, // new THREE.Vector3(0, 0, 0).distanceTo( controls.getObject().position ),
        //   0xff00ff )
        // scene.add( arrowH2 )

        } // endLogs


        { // playerBody

          // playerBody.rotation.x = controls.getObject().rotation.x
          playerBody.rotation.y = controls.getObject().rotation.y
          // playerBody.rotation.z = controls.getObject().rotation.z

          // let q = new THREE.Quaternion()
          // controls.getObject().getWorldQuaternion( q )
          // // playerBody.setRotationFromQuaternion( q )
          // let dp = deltaPosition.clone()
          // dp.applyQuaternion( q )
          // playerBody.position.x -= dp.x
          // playerBody.position.y += dp.y
          // playerBody.position.z += dp.z

          /* I think the below works quite well */
          // playerBody.position.x -= deltaPosition.x
          // playerBody.position.z += deltaPosition.z

          // playerBody.position.x = controls.getObject().position.x
          // playerBody.position.y = controls.getObject().position.y
          // playerBody.position.z = controls.getObject().position.z

        } // endPlayerBody


        /* The below works well. */
        playerCollider.getCenter( vector )
        playerColliderHelper.position.x = vector.x
        playerColliderHelper.position.y = vector.y
        playerColliderHelper.position.z = vector.z
        // logg(vector, 'playerCollider Center')


      })()


      /*
       * Collisions
       * I'm mixing several methodologies here, should stick to one (for Desktop at least)
       */
      const collisionsScope = (() => {
        const collisionIntersections = worldOctree.capsuleIntersect( playerCollider )

        if (collisionIntersections.length) {
          logg(collisionIntersections, 'collisionIntersections')

          if (collisionIntersections[0].distance < 5) {
            moveForward = false
          }
        }

        const result = worldOctree.capsuleIntersect( playerCollider )

        playerOnFloor = false
        if ( result ) {
          playerOnFloor = result.normal.y > 0
          if ( !playerOnFloor ) {
            playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) )
          }
          playerCollider.translate( result.normal.multiplyScalar( result.depth ) )
        }
      })()




    } // end if controls are locked

    prevTime = time
    renderer.render( scene, camera )

  } // end animate()

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
