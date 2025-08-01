import * as THREE from 'three';

// create a canvas 

canvas = document.getElementById('canvas');

//1. scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

//2. camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 5; // Position the camera 5 units away from the origin along the z-axis

//3.object
const geometry  = new THREE.DodecahedronGeometry(1, 0);
const material = new THREE.MeshBasicMaterial({ color: '#468565' });
const dodecahedron = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3'});
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = -1.5;

scene.add(dodecahedron);
scene.add(box);

//4. light
const light = new THREE.SpotLight(0x006769, 100);
light.position.set(1, 1, 1);
scene.add(light);

//5. renderer
const renderer = new THREE.WebGLRenderer({ canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.setPixelRatio(window.devicePixelRatio);



// animate 
renderer.render(scene, camera); // Render the scene from the perspective of the camera