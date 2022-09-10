
import React, { Fragment as F, useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import * as THREE from "three"
// import MTLLoader from 'three-mtl-loader' // @TODO: remove from package.json
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import styled from 'styled-components'

import {
  Blocker,
} from './'
import { logg, S } from "$shared"
import { PointerLockControls } from './PointerLockControls'


/**
 * Equirectangular
 * _vp_ 2021-11-13
 * It works, it shows the panoramic.
 *
 */
const Equirectangular = (props) => {
  logg(props, 'Equirectangular')
  const { map } = props

  const history = useHistory()

  let camera, controls,
    markerObjects = [], markerObjectsIdxs = [],
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


    /*
     * Crosshair
     * From: https://codepen.io/driezis/pen/jOPzjLG?editors=1000
     */
    var pMat = new THREE.ShaderMaterial({
        uniforms: { main_color: {value: {r: 1, g: 1, b: 1}},
                    border_color: {value: {r: 0, g: 0, b: 0.1}},

                    thickness: {value:0.006},
                    height: {value:0.13},
                    offset: {value:0.05},
                    border: {value:0.003},

                    opacity: {value: 1},
                    center: {value: {x: 0.5, y: 0.5}},
                    rotation: {value: 0}
                },
        vertexShader: `
                uniform float rotation;
                uniform vec2 center;
                #include <common>
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
                    vec2 scale;
                    scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
                    scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
                    #ifndef USE_SIZEATTENUATION
                        bool isPerspective = isPerspectiveMatrix( projectionMatrix );
                        if ( isPerspective ) scale *= - mvPosition.z;
                    #endif
                    vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
                    vec2 rotatedPosition;
                    rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
                    rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
                    mvPosition.xy += rotatedPosition;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
        fragmentShader: `
            uniform vec3 main_color;
            uniform vec3 border_color;
            uniform float opacity;

            uniform float thickness;
            uniform float height;
            uniform float offset;
            uniform float border;

            varying vec2 vUv;
            void main() {

                float a = (step(abs(vUv.x - 0.5), thickness)) * step(abs(vUv.y - 0.5), height + offset) * step(offset, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness)) * step(abs(vUv.x - 0.5), height + offset) * step(offset, abs(vUv.x - 0.5));
                float b = (step(abs(vUv.x - 0.5), thickness - border)) * step(abs(vUv.y - 0.5), height + offset - border) * step(offset + border, abs(vUv.y - 0.5)) + (step(abs(vUv.y - 0.5), thickness - border)) * step(abs(vUv.x - 0.5), height + offset - border) * step(offset + border, abs(vUv.x - 0.5));
                gl_FragColor = vec4( mix(border_color, main_color, b), a * opacity);
            }
        `,
        transparent: true,
    });
    var sprite = new THREE.Sprite(pMat);
    // scene.add(sprite);
    // sprite.position.set(0,0,-5);


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

    // document.addEventListener( 'keydown', onKeyDown )
    // document.addEventListener( 'keyup', onKeyUp )

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 )

    /*
     * Floor
     */

    // // random
    // // @TODO: it's not aligned to parcels the way I want
    // let floorGeometry = new THREE.PlaneGeometry( 460, 680, 100, 100 )
    // floorGeometry.rotateX( - Math.PI / 2 )

    // // vertex displacement
    // let position = floorGeometry.attributes.position
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   vertex.fromBufferAttribute( position, i )
    //   vertex.x += Math.random() * 20 - 10
    //   vertex.y += Math.random() * 2
    //   vertex.z += Math.random() * 20 - 10
    //   position.setXYZ( i, vertex.x, vertex.y, vertex.z )
    // }
    // floorGeometry = floorGeometry.toNonIndexed() // ensure each face has unique vertices
    // floorGeometry.x = -200
    // floorGeometry.y = -200
    // floorGeometry.z = -200
    // position = floorGeometry.attributes.position
    // const colorsFloor = []
    // for ( let i = 0, l = position.count; i < l; i ++ ) {
    //   color.setHSL( Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75 )
    //   colorsFloor.push( color.r, color.g, color.b )
    // }
    // floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) )
    // const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } )
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )




    /**
     * From: https://threejs.org/docs/#api/en/geometries/CircleGeometry
     * CircleGeometry(radius : Float, segments : Integer, thetaStart : Float, thetaLength : Float)
     *
     * radius — Radius of the circle, default = 1.
     * segments — Number of segments (triangles), minimum = 3, default = 8.
     * thetaStart — Start angle for first segment, default = 0 (three o'clock position).
     * thetaLength — The central angle, often called theta, of the circular sector. The default is 2*Pi, which makes for a complete circle.
     */
    // let floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 100, 100 ) // width, height, w segments, h segments
    // let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    // floorGeometry.rotateX( - Math.PI / 2 )
    // texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`) // moon floor
    // const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )

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
    <Blocker {...S} ref={blockerRef} >
      <div id="Crosshair" />
    </Blocker>
  </F>
}

export default Equirectangular
