
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

/**
 * TabiversePlanet
 */
const TabiversePlanet = (props) => {

  let camera
  let geometry
  let material
  let planet
  let renderer
  let texture
  let scene

  const blockerRef = useRef(null)
  const instructionsRef = useRef(null)
  useEffect(() => {
    init()
    animate()
  }, [])

  function init() {

    camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 ) // fov, aspect, near, far
    camera.position.y = 10
    camera.position.z = -10

    scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x31231f )
    scene.fog = new THREE.Fog( 0xffffff, 0, 750 )

    const light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )

    /*
     * Floor
     */
    // texture = THREE.ImageUtils.loadTexture(`/assets/textures/moon-1.jpg`)
    // let floorGeometry = new THREE.CircleGeometry(1000, 32) // radius, segments, thetaStart, thetaLength
    // floorGeometry.rotateX( - Math.PI / 2 )
    // const floorMaterial = new THREE.MeshBasicMaterial({ map: texture })
    // const floor = new THREE.Mesh( floorGeometry, floorMaterial )
    // scene.add( floor )

    /*
     * Planet
    **/
    texture = THREE.ImageUtils.loadTexture(`/assets/textures/2k_mercury.jpeg`)
    geometry = new THREE.SphereBufferGeometry(1, 32, 32)
    // geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    material = new THREE.MeshBasicMaterial({ map: texture })
    planet = new THREE.Mesh(geometry, material)
    planet.position.y = 10
    planet.position.z = -12
    scene.add(planet)

    /*
     * Render
     */
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5
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

    // camera.rotation.x += 0.01
    // camera.rotation.y += 0.01

    planet.rotation.y += 0.00035


    renderer.render( scene, camera )
  }

  return <F>
    <Blocker {...S} ref={blockerRef} >
    </Blocker>
  </F>
}

export default TabiversePlanet
