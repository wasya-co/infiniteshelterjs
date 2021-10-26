
import React, { Fragment as F, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import { Canvas, extend } from 'react-three-fiber'
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Box, Plane } from "@react-three/drei"
import { Physics, useBox, usePlane } from "@react-three/cannon"
import styled from 'styled-components'

import { logg } from "$shared"
import { PointerLockControls } from './PointerLockControls'

/**
 * Excellent documentation. From: https://threejs.org/examples/#misc_controls_pointerlock
 */


function PhyPlane({ color, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <Plane args={[1000, 1000]} ref={ref}>
      <meshStandardMaterial color={color} />
    </Plane>
  );
}

function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  return (
    <Box
      args={[1, 1, 1]}
      ref={ref}
      onClick={() => api.applyImpulse([0, 0, -10], [0, 0, 0])}
    >
      <meshNormalMaterial />
    </Box>
  );
}


const W = styled.div`
  position: relative;
  width: 1000px;
  height: 500px;
`;

const Three = (props) => {
  // logg(props, 'Three')

  const innerRef = useRef()
  let camera, controls, scene, renderer, raycaster
  const objects = []

  const fov = 45 // 75
  const aspect = 2  // the canvas default
  const near = 0.1 // 1
  const far = 100 // 1000
  let camX = 0.0
  let camY = 0.0
  let camZ = 0.0

  useEffect(() => {
    const div = innerRef.current

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.set(camX, camY, camZ)

    const clickListener = () => controls.lock()
    div.addEventListener('click', clickListener )

    controls = new PointerLockControls( camera, innerRef.current )
    controls.addEventListener( 'lock', function () {
      // innerRef.style.display = 'none';
      // blocker.style.display = 'none';
    } )
    controls.addEventListener( 'unlock', function () {
      // blocker.style.display = 'block'
      // innerRef.style.display = ''
    } )

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0xffffff )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )
    scene.add( controls.getObject() )

    // floor
    let floorGeometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
    floorGeometry.rotateX( - Math.PI / 2 );
    let position = floorGeometry.attributes.position;
    floorGeometry = floorGeometry.toNonIndexed(); // ensure each face has unique vertices
    position = floorGeometry.attributes.position;
    const colorsFloor = [];
    floorGeometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colorsFloor, 3 ) );
    const floorMaterial = new THREE.MeshBasicMaterial( { vertexColors: true } );
    const floor = new THREE.Mesh( floorGeometry, floorMaterial );
    scene.add( floor );


    document.addEventListener( 'keydown', onKeyDown );
    document.addEventListener( 'keyup', onKeyUp );

    raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    innerRef.current.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize );
    animate()

    return () => div.removeEventListener("click", clickListener)
  }, [])



  const onKeyDown = function ( event ) {
    logg(event, 'onKeyDown')

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
    logg(event, 'onKeyUp')

    switch ( event.code ) {
      case 'ArrowUp':
      case 'KeyW':
        moveForward = false
        break;
      case 'ArrowLeft':
      case 'KeyA':
        moveLeft = false
        break;
      case 'ArrowDown':
      case 'KeyS':
        moveBackward = false
        break;
      case 'ArrowRight':
      case 'KeyD':
        moveRight = false
        break;
    }
  }

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

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
  }

  function animate() {
    requestAnimationFrame( animate )
    const time = performance.now()
    if ( controls.isLocked === true ) {
      raycaster.ray.origin.copy( controls.getObject().position );
      raycaster.ray.origin.y -= 10;

      const intersections = raycaster.intersectObjects( objects, false );
      const onObject = intersections.length > 0;

      const delta = ( time - prevTime ) / 1000;

      velocity.x -= velocity.x * 10.0 * delta;
      velocity.z -= velocity.z * 10.0 * delta;

      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass

      direction.z = Number( moveForward ) - Number( moveBackward );
      direction.x = Number( moveRight ) - Number( moveLeft );
      direction.normalize(); // this ensures consistent movements in all directions

      if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
      if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;

      if ( onObject === true ) {
        velocity.y = Math.max( 0, velocity.y );
        canJump = true;
      }

      controls.moveRight( - velocity.x * delta );
      controls.moveForward( - velocity.z * delta );

      controls.getObject().position.y += ( velocity.y * delta ); // new behavior

      if ( controls.getObject().position.y < 10 ) {
        velocity.y = 0;
        controls.getObject().position.y = 10;

        canJump = true;
      }
    }
    prevTime = time
    renderer.render( scene, camera )
  }


  return <F>
    <W>
      <div ref={innerRef} />
    </W>
  </F>

  /* return <F>
    <W>
      <Canvas camera={camera} ref={innerRef} renderer={renderer} >
        <Physics gravity={[0, -10, 0]} >
          <PhyPlane
            color="hotpink"
            position={[0, -2, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <PhyPlane color="lightblue" position={[0, 0, -10]} />
          <PhyBox position={[2, 0, -5]} />
          <PhyBox position={[0, 0, -5]} />
          <PhyBox position={[-2, 0, -5]} />
        </Physics>
        <ambientLight intensity={0.3} />
        <pointLight intensity={0.8} position={[5, 0, 5]} />
      </Canvas>
    </W>

  </F> */
}
export { Three }





/*

  // const moveDelta = 0.1 // how fast camera moves on asdw key press
  // document.onkeydown = checkKey
  function checkKey(e) {
    e = e || window.event;
    logg(e.keyCode, 'keyCode')

    switch (e.keyCode) {
      case 38:
        // up arrow
        break
      case 40:
        // down arrow
        break
      case 37:
        // left arrow
        break
      case 39:
        // right arrow
        break

      case 65:
        // a
        camX = camX - moveDelta
        logg(camX, 'camX')
        break
      case 83:
        // s
        break
      case 68:
        // d
        camX = camX + moveDelta
        break
      case 87:
        // w
        break
    }
    camera.position.set(camX, camY, camZ)
    camera.updateProjectionMatrix()
  }


*/