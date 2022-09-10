
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import * as THREE from "three"
import Stats from 'three/examples/jsm/libs/stats.module'
import { Octree } from 'three/examples/jsm/math/Octree'
import { Capsule } from 'three/examples/jsm/math/Capsule'
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

import { TwofoldContext, } from "$components/TwofoldLayout"
import {
  C,
  logg,
} from "$shared"
import { Crosshair } from "./"
import { PointerLockControls, } from './PointerLockControls'

const Blocker = styled.div`
  // border: 2px solid red;

  position: relative;
  width: 100%;
  height: 100%;
`;

/**
 * Location
 *
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 * Right now the unit is 1cm, 1/10 of a meter.
 *
 * Octree! From: https://threejs.org/examples/games_fps.html
 * @TODO: let's load the map, and collision player on map. _vp_ 202-04-20
 *
**/
const Location = (props) => {
  // logg(props, 'Loc')

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

  let camera, clock,
    directionalLight,
    fillLight1,
    glow,
    markerObjects = [],
    pickedObject, plc,
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



  function init_old() {

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

    plc = new PointerLockControls( camera, document.body )

    blockerRef.current.addEventListener( 'click', function () {
      plc.lock()
    } )

    plc.addEventListener( 'lock', function () {
      logg('event #lock')
      // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    } )

    plc.addEventListener( 'unlock', function () {
      // blocker.style.display = 'block'
      // instructions.style.display = ''
    } )

    scene.add( plc.getObject() )

    const onClick = (event) => {
      // logg(event, 'onCLick')
      // logg(pickedObject, 'pickedObject')

      // @TODO: prevent lock-outs!
      if (pickedObject) {
        // plc.unlock()
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

  }


  const GRAVITY = 30;

  const NUM_SPHERES = 100;
  const SPHERE_RADIUS = 0.2;

  const STEPS_PER_FRAME = 5;

  const sphereGeometry = new THREE.IcosahedronGeometry( SPHERE_RADIUS, 5 );
  const sphereMaterial = new THREE.MeshLambertMaterial( { color: 0xbbbb44 } );

  const spheres = [];
  let sphereIdx = 0;

  const worldOctree = new Octree();

  const playerCollider = new Capsule( new THREE.Vector3( 0, 0.35, 0 ), new THREE.Vector3( 0, 1, 0 ), 0.35 );

  const playerVelocity = new THREE.Vector3();
  const playerDirection = new THREE.Vector3();

  let playerOnFloor = false;
  let mouseTime = 0;

  const keyStates = {};

  const vector1 = new THREE.Vector3();
  const vector2 = new THREE.Vector3();
  const vector3 = new THREE.Vector3();

  const init = () => {
    clock = new THREE.Clock();

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0x88ccee );
    scene.fog = new THREE.Fog( 0x88ccee, 0, 50 );

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.rotation.order = 'YXZ';

    fillLight1 = new THREE.HemisphereLight( 0x4488bb, 0x002244, 0.5 );
    fillLight1.position.set( 2, 1, 1 );
    scene.add( fillLight1 );

    directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
    directionalLight.position.set( - 5, 25, - 1 );
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.near = 0.01;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.left = - 30;
    directionalLight.shadow.camera.top	= 30;
    directionalLight.shadow.camera.bottom = - 30;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.radius = 4;
    directionalLight.shadow.bias = - 0.00006;
    scene.add( directionalLight );

    for ( let i = 0; i < NUM_SPHERES; i ++ ) {
      const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
      sphere.castShadow = true;
      sphere.receiveShadow = true;

      scene.add( sphere );

      spheres.push( {
        mesh: sphere,
        collider: new THREE.Sphere( new THREE.Vector3( 0, - 100, 0 ), SPHERE_RADIUS ),
        velocity: new THREE.Vector3()
      } );
    }

    /*
     * controls
    **/
    plc = new PointerLockControls( camera, document.body )

    blockerRef.current.addEventListener( 'click', function () {
      plc.lock()
    } )

    plc.addEventListener( 'lock', function () {
      logg('event #lock')
      // instructions.style.display = 'none'
      // blocker.style.display = 'none'
    } )

    plc.addEventListener( 'unlock', function () {
      // blocker.style.display = 'block'
      // instructions.style.display = ''
    } )

    scene.add( plc.getObject() )

    /*
     * Render
    **/
    renderer = new THREE.WebGLRenderer( { antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.VSMShadowMap
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.toneMapping = THREE.ACESFilmicToneMapping

    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )

    /*
     * GLFT Loader
    **/
    const loader = new GLTFLoader().setPath( './assets/objects/gltf/' );

    loader.load( 'collision-world.glb', ( gltf ) => {
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
      } );

      // const helper = new OctreeHelper( worldOctree );
      // helper.visible = false;
      // scene.add( helper );

      animate();
    } );

    /*
     * keyboard control, event listeners
    **/
    document.addEventListener( 'keydown', ( event ) => {
      keyStates[ event.code ] = true;
    } );

    document.addEventListener( 'keyup', ( event ) => {
      keyStates[ event.code ] = false;
    } );

    document.addEventListener( 'mouseup', () => {
      if ( document.pointerLockElement !== null ) throwBall();
    } );

    // document.body.addEventListener( 'mousemove', ( event ) => {
    //   if ( document.pointerLockElement === document.body ) {
    //     camera.rotation.y -= event.movementX / 500;
    //     camera.rotation.x -= event.movementY / 500;
    //   }
    // } );

    document.addEventListener( 'mousedown', () => {
      document.body.requestPointerLock();
      mouseTime = performance.now();
    } );

  }

  function onWindowResize() {
    camera.aspect = blockerRef.current.clientWidth / blockerRef.current.clientHeight
    camera.updateProjectionMatrix()
    renderer.setSize( blockerRef.current.clientWidth, blockerRef.current.clientHeight )
  }

  function playerCollisions() {
    const result = worldOctree.capsuleIntersect( playerCollider );
    playerOnFloor = false;
    if ( result ) {
      playerOnFloor = result.normal.y > 0;
      if ( ! playerOnFloor ) {
        playerVelocity.addScaledVector( result.normal, - result.normal.dot( playerVelocity ) );
      }
      playerCollider.translate( result.normal.multiplyScalar( result.depth ) );
    }
  }

  function updateSpheres( deltaTime ) {
    spheres.forEach( sphere => {
      sphere.collider.center.addScaledVector( sphere.velocity, deltaTime );
      const result = worldOctree.sphereIntersect( sphere.collider );
      if ( result ) {
        sphere.velocity.addScaledVector( result.normal, - result.normal.dot( sphere.velocity ) * 1.5 );
        sphere.collider.center.add( result.normal.multiplyScalar( result.depth ) );
      } else {
        sphere.velocity.y -= GRAVITY * deltaTime;
      }
      const damping = Math.exp( - 1.5 * deltaTime ) - 1;
      sphere.velocity.addScaledVector( sphere.velocity, damping );
      playerSphereCollision( sphere );
    } );
    spheresCollisions();
    for ( const sphere of spheres ) {
      sphere.mesh.position.copy( sphere.collider.center );
    }
  }

  function throwBall() {
    const sphere = spheres[ sphereIdx ];
    camera.getWorldDirection( playerDirection );
    sphere.collider.center.copy( playerCollider.end ).addScaledVector( playerDirection, playerCollider.radius * 1.5 );
    // throw the ball with more force if we hold the button longer, and if we move forward
    const impulse = 15 + 30 * ( 1 - Math.exp( ( mouseTime - performance.now() ) * 0.001 ) );
    sphere.velocity.copy( playerDirection ).multiplyScalar( impulse );
    sphere.velocity.addScaledVector( playerVelocity, 2 );
    sphereIdx = ( sphereIdx + 1 ) % spheres.length;
  }

  function getForwardVector() {
    camera.getWorldDirection( playerDirection );
    playerDirection.y = 0;
    playerDirection.normalize();
    return playerDirection;
  }

  function getSideVector() {
    camera.getWorldDirection( playerDirection );
    playerDirection.y = 0;
    playerDirection.normalize();
    playerDirection.cross( camera.up );
    return playerDirection;
  }

  function updatePlayer( deltaTime ) {
    let damping = Math.exp( - 4 * deltaTime ) - 1;
    if ( ! playerOnFloor ) {
      playerVelocity.y -= GRAVITY * deltaTime;
      // small air resistance
      damping *= 0.1;
    }
    playerVelocity.addScaledVector( playerVelocity, damping );
    const deltaPosition = playerVelocity.clone().multiplyScalar( deltaTime );
    playerCollider.translate( deltaPosition );
    playerCollisions();
    camera.position.copy( playerCollider.end );
  }

  function spheresCollisions() {
    for ( let i = 0, length = spheres.length; i < length; i ++ ) {
      const s1 = spheres[ i ];
      for ( let j = i + 1; j < length; j ++ ) {
        const s2 = spheres[ j ];

        const d2 = s1.collider.center.distanceToSquared( s2.collider.center );
        const r = s1.collider.radius + s2.collider.radius;
        const r2 = r * r;

        if ( d2 < r2 ) {
          const normal = vector1.subVectors( s1.collider.center, s2.collider.center ).normalize();
          const v1 = vector2.copy( normal ).multiplyScalar( normal.dot( s1.velocity ) );
          const v2 = vector3.copy( normal ).multiplyScalar( normal.dot( s2.velocity ) );

          s1.velocity.add( v2 ).sub( v1 );
          s2.velocity.add( v1 ).sub( v2 );

          const d = ( r - Math.sqrt( d2 ) ) / 2;

          s1.collider.center.addScaledVector( normal, d );
          s2.collider.center.addScaledVector( normal, - d );
        }
      }
    }
  }

  function playerSphereCollision( sphere ) {
    const center = vector1.addVectors( playerCollider.start, playerCollider.end ).multiplyScalar( 0.5 );
    const sphere_center = sphere.collider.center;
    const r = playerCollider.radius + sphere.collider.radius;
    const r2 = r * r;

    // approximation: player = 3 spheres
    for ( const point of [ playerCollider.start, playerCollider.end, center ] ) {
      const d2 = point.distanceToSquared( sphere_center );

      if ( d2 < r2 ) {
        const normal = vector1.subVectors( point, sphere_center ).normalize();
        const v1 = vector2.copy( normal ).multiplyScalar( normal.dot( playerVelocity ) );
        const v2 = vector3.copy( normal ).multiplyScalar( normal.dot( sphere.velocity ) );

        playerVelocity.add( v2 ).sub( v1 );
        sphere.velocity.add( v1 ).sub( v2 );

        const d = ( r - Math.sqrt( d2 ) ) / 2;
        sphere_center.addScaledVector( normal, - d );
      }
    }
  }

  function teleportPlayerIfOob() {
    if ( camera.position.y <= - 25 ) {
      playerCollider.start.set( 0, 0.35, 0 );
      playerCollider.end.set( 0, 1, 0 );
      playerCollider.radius = 0.35;
      camera.position.copy( playerCollider.end );
      camera.rotation.set( 0, 0, 0 );
    }
  }

  function controls( deltaTime ) {
    // gives a bit of air control
    const speedDelta = deltaTime * ( playerOnFloor ? 25 : 8 );

    if ( keyStates[ 'KeyW' ] ) {
      playerVelocity.add( getForwardVector().multiplyScalar( speedDelta ) );
    }

    if ( keyStates[ 'KeyS' ] ) {
      playerVelocity.add( getForwardVector().multiplyScalar( - speedDelta ) );
    }

    if ( keyStates[ 'KeyA' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( - speedDelta ) );
    }

    if ( keyStates[ 'KeyD' ] ) {
      playerVelocity.add( getSideVector().multiplyScalar( speedDelta ) );
    }

    if ( playerOnFloor ) {
      if ( keyStates[ 'Space' ] ) {
        playerVelocity.y = 15;
      }
    }
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    if ( plc.isLocked === true ) {

      const deltaTime = Math.min( 0.05, clock.getDelta() ) / STEPS_PER_FRAME;

      // we look for collisions in substeps to mitigate the risk of
      // an object traversing another too quickly for detection.

      for ( let i = 0; i < STEPS_PER_FRAME; i ++ ) {
        controls( deltaTime );
        updatePlayer( deltaTime );
        updateSpheres( deltaTime );
        teleportPlayerIfOob();
      }

    }
    prevTime = time

    // @TODO: add stats
    // @TODO: add OctreeHelper

    renderer.render( scene, camera )
  }

  return <F>
    <div ref={instructionsRef} />
    <Blocker ref={blockerRef} >
      <Crosshair />
    </Blocker>
  </F>
}

export default Location
