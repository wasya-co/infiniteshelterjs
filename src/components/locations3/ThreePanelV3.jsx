
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as THREE from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"

import { Crosshair } from "./"
import { PointerLockControls, } from './PointerLockControls'
import {
  C,
  logg,
  TwofoldContext,
} from "$shared"

const Blocker = styled.div`
  // border: 2px solid red;

  position: relative;
  width: 100%;
  height: 100%;
`;

/**
 * Loc = Location
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 */
const Loc = (props) => {
  // logg(props, 'Loc')
  logg([window.innerWidth, window.innerHeight], 'windowWidthHeight')

  const history = useHistory()
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

  let camera, controls,
    glow,
    markerObjects = [],
    pickedObject,
    raycaster, removedObject, renderer,
    texture,
    scene

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



  function init() {

    /**
     * PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
     *
     * fov — Camera frustum vertical field of view.
     * aspect — Camera frustum aspect ratio.
     * near — Camera frustum near plane.
     * far — Camera frustum far plane.
    */
    const aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera = new THREE.PerspectiveCamera( 75, aspect, 1, 1000 ) // fov, aspect, near, far
    camera.position.y = 10

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    // scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )

    controls = new PointerLockControls( camera, document.body )

    blockerRef.current.addEventListener( 'click', function () {
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
      // logg(event, 'onCLick')
      // logg(pickedObject, 'pickedObject')

      // @TODO: prevent lock-outs!
      if (pickedObject) {
        // controls.unlock()
        // history.push(`/en/locations/show/${pickedObject.slug}`)
      }
    }

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
    document.addEventListener( 'click', onClick )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )


    /*
     * Floor
     */

    // moon floor
    texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`)

    // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments
    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    floorGeometry.rotateX( - Math.PI / 2 )
    const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    scene.add( floor )

    /*
     * Model Import
     */
    const scenesPath = '/assets/scenes/'
    const objectsPath = '/assets/objects/'
    const manager = new THREE.LoadingManager()

    let importModels = [
      // { modelName: 'wasyaco-reception-2', slug: 'construct1' },

      { modelName: 'camaro75', slug: 'construct1' },
      { modelName: 'girl',     slug: 'demmitv' },

      // { modelName: 'girl-5',     slug: 'demmitv' },
    ]

    const onProgress = (xhr) => {
      if (xhr.lengthComputable) {
        const percentComplete = xhr.loaded / xhr.total * 100
        console.log( Math.round( percentComplete, 2 ) + '% downloaded' )
      }
    }
    const onError = () => {}
    const mtlLoader = new MTLLoader(manager)
    mtlLoader.setPath(objectsPath)

    importModels.map(({ modelName, slug }) => {
      const texturePath = `${modelName}/${modelName}.mtl`
      const modelPath = `${modelName}/${modelName}.obj`
      const wrappedOnLoad = (modelPath) => {
        return (materials) => {
          materials.preload()
          const objLoader = new OBJLoader( manager )
          objLoader.setMaterials( materials )

          objLoader.setPath(objectsPath)
          objLoader.load( modelPath, ( object ) => {
            object.traverse((child) => {
              if (child.isMesh) {
                child.geometry.scale(10, 10, 10)
              }
            })
            object.position.x = Math.random() * 200
            object.position.y = 10
            object.position.z = Math.random() * 200

            scene.add( object )
            markerObjects.push({ uuid: object.uuid, name: 'camaro75', object, slug: 'construct1', })

          }, onProgress, onError )
        }
      }
      mtlLoader.load(texturePath, wrappedOnLoad(modelPath))
    })




    /*
     * Skybox
     */
    const loader = new THREE.TextureLoader()
    texture = loader.load(`/assets/textures/space-5.jpg`, () => {
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

  function onWindowResize() {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    if ( controls.isLocked === true ) {

      var cameraDirection = controls.getDirection(new THREE.Vector3(0, 0, 0)).clone()

      // hmmm unneeded
      // let mouse = new THREE.Vector2()
      // mouse.x = ( cameraDirection.x / window.innerWidth ) * 2 - 1;
	    // mouse.y = - ( cameraDirection.y / window.innerHeight ) * 2 + 1;

      /* for standing on things */
      // raycaster.ray.origin.copy( controls.getObject().position )
      // raycaster.ray.origin.y -= 10

      pickedObject = null
      scene.remove( glow )
      if (removedObject) {
        scene.add( removedObject )
        removedObject = null
      }

      raycaster = new THREE.Raycaster( camera.position, cameraDirection )
      const intersections = raycaster.intersectObjects( markerObjects.map(m=>m.object), true )
      if (intersections.length) {
        const _pickedObject = intersections[0].object

        // glow
        markerObjects.map((item, idx) => {
          if (item.uuid === _pickedObject.parent.uuid) {
            glow = item.object.clone()
            glow.traverse((child) => {
              if (child.isMesh) {
                child.material = new THREE.MeshBasicMaterial()
                child.material.color = new THREE.Color(0Xffff00)
              }
            })
            glow.position.set(_pickedObject.parent.position.x, _pickedObject.parent.position.y, _pickedObject.parent.position.z)
            // glow.scale.multiplyScalar(1.05)
            scene.add( glow )
            removedObject = _pickedObject.parent.clone()
            scene.remove( _pickedObject.parent )
          }
        })

        /* collision @TODO */
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
      <Crosshair />
    </Blocker>
  </F>
}

export default Loc
