
import React, { Fragment as F, useEffect, useRef } from 'react'
import * as THREE from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import styled from 'styled-components'

import {
  logg,
} from "$shared"
import { PointerLockControls } from './PointerLockControls'

const Blocker = styled.div`
  height: calc(100% - ${p => p.theme.breadcrumbsHeight});
`;

/**
 * ThreePanelV1
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 */
const Loc = (props) => {
  logg(props, 'ThreePanelV1')

  let camera, controls,
    object, objects = [],
    raycaster, renderer,
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

  function init() {
    /*
    // PerspectiveCamera( fov : Number, aspect : Number, near : Number, far : Number )
    // fov — Camera frustum vertical field of view.
    // aspect — Camera frustum aspect ratio.
    // near — Camera frustum near plane.
    // far — Camera frustum far plane.
    */
    // camera = new THREE.PerspectiveCamera( 75, 2, 1, 100 )
    camera = new THREE.PerspectiveCamera( 75, 2, 1, 300 )
    camera.position.y = 10

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
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

    // floor
    // @TODO: it's not aligned to parcels the way I want
    let floorGeometry = new THREE.PlaneGeometry( 460, 680, 100, 100 )
    floorGeometry.rotateX( - Math.PI / 2 )

    // vertex displacement
    let position = floorGeometry.attributes.position
    for ( let i = 0, l = position.count; i < l; i ++ ) {
      vertex.fromBufferAttribute( position, i )
      vertex.x += Math.random() * 20 - 10
      vertex.y += Math.random() * 2
      vertex.z += Math.random() * 20 - 10
      position.setXYZ( i, vertex.x, vertex.y, vertex.z )
    }
    floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices
    floorGeometry.x = -200
    floorGeometry.y = -200
    floorGeometry.z = -200
    position = floorGeometry.attributes.position
    const colorsFloor = []
    for ( let i = 0, l = position.count; i < l; i ++ ) {
      color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
      colorsFloor.push( color.r, color.g, color.b )
    }
    floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) )
    const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } )
    const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    scene.add( floor )

    // objects
    /*
    const boxGeometry = new THREE.BoxGeometry( 20, 20, 20 ).toNonIndexed()
    position = boxGeometry.attributes.position
    const colorsBox = []
    for ( let i = 0, l = position.count; i < l; i ++ ) {
      color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
      colorsBox.push( color.r, color.g, color.b )
    }
    boxGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsBox, 3 ) )
    for ( let i = 0; i < 500; i ++ ) {
      const boxMaterial = new THREE.MeshPhongMaterial( { specular: 0xffffff, flatShading: true, vertexColors: true } )
      boxMaterial.color.setHSL( Math.random() * 0.2 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )

      const box = new THREE.Mesh( boxGeometry, boxMaterial )
      box.position.x = Math.floor( Math.random() * 20 - 10 ) * 20
      box.position.y = Math.floor( Math.random() * 20 ) * 20 + 10
      box.position.z = Math.floor( Math.random() * 20 - 10 ) * 20
      scene.add( box )
      objects.push( box )
    }
    */

    // load OBJ

    // manager

    // this is specifically for tiny-house-1
    const loadModel = () => {
      object.traverse((child) => {
        if ( child.isMesh ) {
          child.material.map = texture
          child.geometry.scale(10, 10, 10)
        }
      })
      object.position.x = 100
      object.position.y = 10
      object.position.z = 100

      scene.add( object )
    }
    const manager = new THREE.LoadingManager( loadModel )
    manager.onProgress = function ( item, loaded, total ) {
      console.log( item, loaded, total )
    }

    // texture

    const textureLoader = new THREE.TextureLoader( manager )
    const texture = textureLoader.load( 'textures/uv_grid_opengl.jpg' )

    // model

    // tiny-house-1
    const loader = new OBJLoader( manager )
    loader.load( '/assets/scenes/tiny-house-1/tiny-house-1.obj', ( obj ) => {
      object = obj
    }, ( xhr ) => {
      if ( xhr.lengthComputable ) {
        const percentComplete = xhr.loaded / xhr.total * 100
        console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' )
      }
    }, (e) => {
      logg(e, 'onError')
    } )


    // some delimiters for the first 6 parcels!
    let geometry = new THREE.BoxGeometry( 10, 10, 10 )
    let material = new THREE.MeshBasicMaterial( {color: 0x00ff00} )
    let cube = new THREE.Mesh( geometry, material )
    cube.position.x = 0
    cube.position.y = 5
    cube.position.z = 0
    scene.add( cube )
    const items = [
      { color: 0xff0000, x: 1, y: 0, z: 0 },
      { color: 0x00ff00, x: 0, y: 1, z: 0 },
      { color: 0x0000ff, x: 0, y: 0, z: 1 }
    ]
    items.map((item, idx) => {
      logg(item, 'item')
      const { color, x, y, z } = item
      geometry = new THREE.BoxGeometry( 1 + x*10, 1 + y*10, 1 + z*10 )
      material = new THREE.MeshBasicMaterial({ color: color })
      cube = new THREE.Mesh( geometry, material )
      cube.position.x = x*5
      cube.position.y = 10+y*5
      cube.position.z = z*5
      scene.add( cube )
    })

    const parcels = [
      { color: 0xff0000, x: 100, y: 1, z: 100 },
      { color: 0x00ff00, x: 100, y: 1, z: 320 },
      { color: 0x0000ff, x: -120, y: 1, z: 320 },

      { color: 0x660000, x: -120, y: 1, z: 100 },
      { color: 0x006600, x: -120, y: 1, z: -120 },
      { color: 0x000066, x: 100, y: 1, z: -120 },
    ]
    parcels.map((item, idx) => {
      const { color, x, y, z } = item
      const g = new THREE.BoxGeometry( 200, 2, 200 )
      const m = new THREE.MeshBasicMaterial({color: color})
      const p = new THREE.Mesh( g, m )
      p.position.x = x
      p.position.y = y
      p.position.z = z
      scene.add( p )
    })

    //


    renderer = new THREE.WebGLRenderer({ antialias: true })
    // renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setPixelRatio(1)
    renderer.setSize( 800, 400 )
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
    if ( controls.isLocked === true ) {
      raycaster.ray.origin.copy( controls.getObject().position )
      raycaster.ray.origin.y -= 10
      const intersections = raycaster.intersectObjects( objects, false )
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
    <Blocker ref={blockerRef} />
  </F>
}

export default Loc
