//where 3D happens
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

//defining size of the space on page
renderer.setSize(window.innerWidth, window.innerHeight);

//injecting the 3d space into the body of the html
document.body.appendChild(renderer.domElement); 

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);
camera.position.set(0, 2, 10);


//creating a cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

function animate(time) {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;    
    renderer.render(scene, camera); 
}
renderer.setAnimationLoop(animate);