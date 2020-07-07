import * as THREE from './node_modules/three/build/three.module.js';
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh( geometry, material );

const pointLight = new THREE.PointLight(0xff0000, 1, 100);
pointLight.position.set(0, 10, 0);
const ambLight = new THREE.AmbientLight(0xf0f000, .25);

const controls = new OrbitControls( camera, renderer.domElement );
controls.minDistance = 2;
controls.maxDistance = 20;


scene.add( cube, pointLight, ambLight );

camera.position.z = 5;

const animate = function () {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  controls.update();

  renderer.render( scene, camera );
};

animate();