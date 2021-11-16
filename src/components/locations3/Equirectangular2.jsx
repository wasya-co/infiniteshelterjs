
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
import * as THREE from "three"
// import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import styled from 'styled-components'

import { PointerLockControls } from './PointerLockControls'
import {
  logg,
  TwofoldContext,
} from "$shared"

const Blocker = styled.div`
  border: 1px dashed red;

  position: relative;
  width: 100%;
  height: 100%;

  #Crosshair {
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
 * Equirectangular
 * _vp_ 2021-11-15
 * Let's wire in a simple floor and full-window sizing.
 *
 * Threejs units of measure are centimeters (cm).
 *
 */
const Equirectangular = (props) => {
  // logg(props, 'Equirectangular')
  const { map } = props

  const history = useHistory()

  let camera, controls,
    markerObjects = [], markerObjectsIdxs = [],
    raycaster, renderer,
    texture,
    scene

  const {
    bottomDrawerOpen,
    folded, setFolded,
    itemToUnlock, setItemToUnlock,
    mapPanelWidth, setMapPanelWidth,
    mapPanelHeight, setMapPanelHeight,
    ratedConfirmation, setRatedConfirmation,
    showItem, setShowItem,
    showUrl, setShowUrl,
    twofoldPercent,
  } = useContext(TwofoldContext)

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)

  useEffect(() => {
    init()
    animate()
  }, [])

  useEffect(() => {
    window.dispatchEvent(new Event('resize'));
  }, [ bottomDrawerOpen, folded, twofoldPercent ])

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

  function init() {

    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    camera = new THREE.PerspectiveCamera( 75, 2, 1, 1000 ) // fov, aspect, near, far
    camera.position.y = 10

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 ) // @TODO: what this?

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 ) // @TODO: what this?
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )

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
     */

    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 10, 10 ) // width, height, w segments, h segments
    // let floorGeometry = new THREE.CircleGeometry(100, 32) // radius, segments, thetaStart, thetaLength
    floorGeometry.rotateX( - Math.PI / 2 )
    texture = THREE.ImageUtils.loadTexture(`/assets/textures/100x100_lazer-floor.png`)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    texture.repeat.set( 100, 100 )
    const floorMaterial = new THREE.MeshPhongMaterial({ map: texture, transparent: true })
    const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    scene.add( floor )

    /*
     * Model Import
     */
    // const scenesPath = '/assets/scenes/'
    // const objectsPath = '/assets/objects/'
    // let modelName = 'polycity' // 'wasyaco-reception' // 'tiny-house-2'
    // const texturePath = `${modelName}/${modelName}.mtl`
    // const modelPath = `${modelName}/${modelName}.obj`
    // const manager = new THREE.LoadingManager()
    // const onProgress = (xhr) => {
    //   if (xhr.lengthComputable) {
    //     const percentComplete = xhr.loaded / xhr.total * 100
    //     console.log( Math.round( percentComplete, 2 ) + '% downloaded' )
    //   }
    // }
    // const onError = () => {}
    // const onLoad = (materials) => {
    //   materials.preload()
    //   const objLoader = new OBJLoader( manager )
    //   objLoader.setMaterials( materials )
    //   objLoader.setPath( scenesPath)
    //   objLoader.load( modelPath, ( object ) => {
    //     object.traverse((child) => {
    //       if (child.isMesh) {
    //         child.geometry.scale(0.10, 0.10, 0.10) // @TODO: change?
    //       }
    //     })
    //     object.position.x = Math.random() * 500
    //     object.position.y = 10
    //     object.position.z = Math.random() * 500

    //     logg(object, '1st object')
    //     scene.add( object )
    //     markerObjects.push( object )
    //     markerObjectsIdxs.push({ uuid: object.uuid, name: 'camaro75', slug: 'construct1' }) // @TODO: change!

    //   }, onProgress, onError )
    // }
    // const mtlLoader = new MTLLoader(manager)
    // mtlLoader.setPath(scenesPath)
    // mtlLoader.load(texturePath, onLoad)


    /*
     * Skybox
     */
    const textureLoader = new THREE.TextureLoader()
    const assetPath = map.img_path
    texture = textureLoader.load(assetPath, () => {
      const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
      rt.fromEquirectangularTexture(renderer, texture)
      scene.background = rt.texture
    });


    /*
     * and render
     */
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )

  }

  /* From: https://threejsfundamentals.org/threejs/lessons/threejs-responsive.html */
  function resizeRendererToDisplaySize() {
    logg('resizeRendererToDisplaySize()')

    const canvas = renderer.domElement
    const width = blockerRef.current.clientWidth
    const height = blockerRef.current.clientHeight
    const needResize = canvas.width !== width || canvas.height !== height
    if (needResize) {
      logg([width, height], 'setting width, heigh!')
      renderer.setSize(width, height, false)
    }
    return needResize
  }

  function onWindowResize() {
    logg('on window resie')
    if (resizeRendererToDisplaySize()) {
      logg('and aspect')

      // const canvas = renderer.domElement
      // camera.aspect = canvas.clientWidth / canvas.clientHeight
      const width = blockerRef.current.clientWidth
      const height = blockerRef.current.clientHeight
      camera.aspect = width / height

      camera.updateProjectionMatrix()
    }
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    if ( controls.isLocked === true ) {

      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()

      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      raycaster = new THREE.Raycaster( camera.position, cameraDirection )
      const intersections = raycaster.intersectObjects( markerObjects, true )
      if (intersections.length) {
        const pickedObject = intersections[0].object

        // collision
        if (intersections[0].distance < 5) {
          moveForward = false
        }
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
    <div ref={instructionsRef} />
    <Blocker ref={blockerRef} >
      <div id="Crosshair" />
    </Blocker>
  </F>
}

export default Equirectangular
