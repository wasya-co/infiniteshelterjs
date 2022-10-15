'use strict';

/* global THREE */

class ResourceTracker {
  constructor() {
    this.resources = new Set();
  }
  track(resource) {
    if (!resource) {
      return resource;
    }

    // handle children and when material is an array of materials or
    // uniform is array of textures
    if (Array.isArray(resource)) {
      resource.forEach(resource => this.track(resource));
      return resource;
    }

    if (resource.dispose || resource instanceof THREE.Object3D) {
      this.resources.add(resource);
    }
    if (resource instanceof THREE.Object3D) {
      this.track(resource.geometry);
      this.track(resource.material);
      this.track(resource.children);
    } else if (resource instanceof THREE.Material) {
      // We have to check if there are any textures on the material
      for (const value of Object.values(resource)) {
        if (value instanceof THREE.Texture) {
          this.track(value);
        }
      }
      // We also have to check if any uniforms reference textures or arrays of textures
      if (resource.uniforms) {
        for (const value of Object.values(resource.uniforms)) {
          if (value) {
            const uniformValue = value.value;
            if (uniformValue instanceof THREE.Texture ||
                Array.isArray(uniformValue)) {
              this.track(uniformValue);
            }
          }
        }
      }
    }
    return resource;
  }
  untrack(resource) {
    this.resources.delete(resource);
  }
  dispose() {
    for (const resource of this.resources) {
      if (resource instanceof THREE.Object3D) {
        if (resource.parent) {
          resource.parent.remove(resource);
        }
      }
      if (resource.dispose) {
        resource.dispose();
      }
    }
    this.resources.clear();
  }
}

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas});

  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('lightblue');

  function addLight(...pos) {
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(...pos);
    scene.add(light);
  }
  addLight(-1, 2, 4);
  addLight( 2, -2, 3);

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * .5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = (new THREE.Vector3())
        .subVectors(camera.position, boxCenter)
        .multiply(new THREE.Vector3(1, 0, 1))
        .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  const gltfLoader = new THREE.GLTFLoader();
  function loadGLTF(url) {
    return new Promise((resolve, reject) => {
      gltfLoader.load(url, resolve, undefined, reject);
    });
  }

  function waitSeconds(seconds = 0) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
  }

  const fileURLs = [
    'https://r105.threejsfundamentals.org/threejs/resources/models/cartoon_lowpoly_small_city_free_pack/scene.gltf',
    'https://r105.threejsfundamentals.org/threejs/resources/models/3dbustchallange_submission/scene.gltf',
    'https://r105.threejsfundamentals.org/threejs/resources/models/mountain_landscape/scene.gltf',
    'https://r105.threejsfundamentals.org/threejs/resources/models/simple_house_scene/scene.gltf',
  ];

  async function loadFiles() {
    for (;;) {
      for (const url of fileURLs) {
        const resMgr = new ResourceTracker();
        const track = resMgr.track.bind(resMgr);
        const gltf = await loadGLTF(url);
        const root = track(gltf.scene);
        scene.add(root);

        // compute the box that contains all the stuff
        // from root and below
        const box = new THREE.Box3().setFromObject(root);

        const boxSize = box.getSize(new THREE.Vector3()).length();
        const boxCenter = box.getCenter(new THREE.Vector3());

        // set the camera to frame the box
        frameArea(boxSize * 1.1, boxSize, boxCenter, camera);

        await waitSeconds(2);
        renderer.render(scene, camera);

        resMgr.dispose();

        await waitSeconds(1);

      }
    }
  }
  loadFiles();

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
