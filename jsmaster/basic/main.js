import * as THREE from 'three';

// 1. create the scene 
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');// Set a light gray background color

// 2. create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // 75 degrees field of view, aspect ratio based on window size, near and far clipping planes)
camera.position.z = 5; // Position the camera 5 units away from the origin along the z-axis

// 3. create and add the cube object
const geometry = new THREE.BoxGeometry(); // Create a cube geometry with width, height, and depth
const material  = new THREE.MeshLambertMaterial({ color : '#468585', emissive: '#468585'}); // Create a material with a color and emissive property})


const cube  = new THREE.Mesh(geometry, material); // Create a mesh by combining the geometry and material
scene.add(cube); // Add the cube mesh to the scene

// 4. add lighting 
const light = new THREE.DirectionalLight(0x9CDBA6, 10); // Create a directional light with intensity 10
light.position.set(1, 1, 1); // Position the light at (x, y, z) coordinates
scene.add(light); // Add the light to the scene

// 5. create the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set the size of the renderer to match the window dimensions
document.body.appendChild(renderer.domElement);

// animate the scene
function animate(){
    requestAnimationFrame(animate);//Request the next frame to animate. 

    cube.rotation.x += 0.01;//Rotate the cube around the x-axis
    cube.rotation.y += 0.01;//Rotate the cube around the y-axis
    
    renderer.render(scene, camera); // Render the scene from the perspective of the camera
}
//renderer.render(scene, camera); // Render the scene from the perspective of the camera

animate(); // Start the animation loop
