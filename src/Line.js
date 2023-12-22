import * as THREE from "three";

const secne = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500);

const rendrer = new THREE.WebGLRenderer();

rendrer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(rendrer.domElement);


camera.position.set(0,0,100);

camera.lookAt(0,0,0);


const material = new THREE.LineBasicMaterial({color: 0x00ff00});

const points = [];

points.push( new THREE.Vector3(-10,0,0));
points.push( new THREE.Vector3(0,10,0));
points.push( new THREE.Vector3(10,0,0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);

const line = new THREE.Line(geometry, material);

secne.add(line);

rendrer.render(secne, camera);