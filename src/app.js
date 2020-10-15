import * as THREE from '../node_modules/three/build/three.module.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
import { gsap } from '../node_modules/gsap/src/index.js';
import { ThreePlugin } from './gs_three.js';

const threeContainer = document.querySelector('.three-container');
// console.log(threeContainer);

// --- Listeners for interaction --- //
threeContainer.addEventListener('click', threeContainerClick);

function threeContainerClick(event){
  // console.log(event);
  // tl.restart();
  tl.clear();
  animateThings();
}

// --- Three.js scene setup --- //
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, threeContainer.clientWidth / threeContainer.clientHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer( {alpha: true} );
renderer.setSize( threeContainer.clientWidth, threeContainer.clientHeight );
renderer.setClearColor( 0x000000, 0 );
threeContainer.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
// const cube = new THREE.Mesh( geometry, material );

const keyLight = new THREE.PointLight(0xfffdf7, 1, 100);
keyLight.position.set(5, 10, 0);
const fillLight = new THREE.PointLight(0xeffbff, .5, 100);
fillLight.position.set(-5, -10, 0);
const ambLight = new THREE.AmbientLight(0xeffbff, .25);

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.minDistance = 2;
// controls.maxDistance = 20;

scene.add( keyLight, fillLight, ambLight );

camera.position.z = 5;

// --- Animation Timeline Setup --- //
const tl = gsap.timeline();

// --- Animation update loop --- //
const animate = function () {
  requestAnimationFrame( animate );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // controls.update();

  renderer.render( scene, camera );
};

animate();

const things = [];
for(let i = 0; i < 20; i++){
  things[i] = new THREE.Mesh( geometry, material );
  scene.add( things[i] );
}



function animateThings(){
  for(const thing in things){
    // console.log('thing', things[thing]);
    // const posX = Math.random() * 6 - 3;
    // const posY = Math.random() * 6 - 3;
    // const posZ = Math.random() * 6 - 3;
    // const rotX = Math.random() * 6.283185;
    // const rotY = Math.random() * 6.283185;
  
    tl.to(things[thing].position, { duration: 1, x: Math.random() * 6 - 3, y: Math.random() * 6 - 3, z: Math.random() * 6 - 3 }, 'start'); 
    tl.to(things[thing].rotation, { duration: 1, x: Math.random() * 6.283185, y: Math.random() * 6.283185 }, 'start'); 
    tl.to(things[thing].position, { duration: 1, x: 0, y: 0, z: 0 }, 'return'); 
    tl.to(things[thing].rotation, { duration: 1, x: 0, y: 0 }, 'return'); 
  }
}