import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

//defining size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);