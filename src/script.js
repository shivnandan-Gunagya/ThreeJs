import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";

const secne = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const rendrer = new THREE.WebGLRenderer();

rendrer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendrer.domElement);

const box = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(box, material);

secne.add(cube);

camera.position.z = 5;

function animate(){

    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    rendrer.render(secne, camera);

}

if(WebGL.isWebGLAvailable){

    animate();
}
else{
    const warning = WebGL.getWebGLErrorMessage();
	document.getElementById( 'container' ).appendChild( warning );
}