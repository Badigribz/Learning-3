//where 3d happens
import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();

//defining size of the space on page
renderer.setSize(window.innerWidth, window.innerHeight);

//injecting the 3d space into the body of the html
document.body.appendChild(renderer.domElement);