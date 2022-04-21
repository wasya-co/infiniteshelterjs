
import { IonPage, IonContent, IonButton, IonImg, IonLoading } from "@ionic/react"
import React, { Fragment as F, useContext, useEffect, useRef, useState } from "react"
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
import styled from 'styled-components'
import * as THREE from "three"

import {
  Blocker,
} from './'
import {
  MarkerContext,
} from '$resources/markers'
import {
  C, Card,
  logg,
  S,
  TwofoldContext,
  useWindowSize,
} from "$shared"


const W0 = styled.div``;


/**
 * TabiversePlanet
 *
**/
const TabiversePlanet = (props) => {

  const blockerRef = useRef(null)

  let camera
  let controls
  let light
  let markerObjects = []
  let markerObjectsIdxs = []
  let planet = 'mercury'
  let renderer
  let texture
  let scene
  let prevTime = performance.now()

  const init = () => {
    /*
     * camera
    **/
    camera = new THREE.PerspectiveCamera( 75, 2, 1, 1000 // fov, aspect, near, far
      ).translateZ(2.8)
    camera.position.y = 10

    // @TODO: re-add
    // controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.minDistance = 1.12; controls.maxDistance = 10;

    scene = new THREE.Scene()


    // texture = THREE.ImageUtils.loadTexture(`https://solartextures.b-cdn.net/2k_${planet}.jpg`)
    // scene.add(new THREE.Mesh(new THREE.SphereBufferGeometry(1, 32, 32), new THREE.MeshBasicMaterial({texture})));

    light = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 )
    light.position.set( 0.5, 1, 0.75 )
    scene.add( light )

    /*
     * Render (copy-pasted, @TODO: abstract)
    **/
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( 700, 350 ) // aspect ratio 0.5 // @TODO: make dynamic
    blockerRef.current.appendChild( renderer.domElement )
    window.addEventListener( 'resize', onWindowResize )

    renderer.render(scene, camera);
  }

  const animate = () => {
    requestAnimationFrame( animate )
    const time = performance.now()

    // @TODO: re-add
    // controls.addEventListener("change", () => renderer.render(scene, camera));
    // invalidation.then(() => (controls.dispose(), renderer.dispose()));

    prevTime = time

    renderer.render( scene, camera )
  }

  // @TODO: abstract
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
  }

  useEffect(() => {
    init()
    animate()
  }, [])

  return <W0 className="TabiversePlanet" >

    <form style={{ display: 'none' }} >
      <select>
        <option value="mercury">Mercury</option>
        <option value="venus_surface" selected>Venus Surface</option>
        <option value="venus_atmosphere">Venus Atmosphere</option>
        <option value="mars">Mars</option>
        <option value="jupiter">Jupiter</option>
        <option value="saturn">Saturn</option>
        <option value="uranus">Uranus</option>
        <option value="neptune">Neptune</option>
        <option value="earth_daymap">Earth Day</option>
        <option value="earth_nightmap">Earth Night</option>
        <option value="earth_clouds">Earth Clouds</option>
        <option value="sun">Sun</option>
        <option value="moon">Moon</option>
      </select>
    </form>

    <Blocker {...S} ref={blockerRef} >
      <div id="Crosshair" />
    </Blocker>
  </W0>
}

export default TabiversePlanet
