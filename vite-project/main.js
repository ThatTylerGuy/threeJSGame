import * as THREE from "three"


let explode = false;

//Create the scene
const scene = new THREE.Scene();

//Create the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5

//Create the renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//Create an object
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'blue'});
const mesh = new THREE.Mesh(geometry, material);
//Add the new mesh to the scene
scene.add(mesh);

//create light
const light = new THREE.PointLight(0xfffff, 1, 1);
scene.add(light);

//Change the background color
renderer.setClearColor(0x3d3d3d, 1)
renderer.render(scene, camera)

animate();