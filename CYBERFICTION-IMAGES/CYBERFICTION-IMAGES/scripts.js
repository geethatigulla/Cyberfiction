// script.js
import * as THREE from 'three';

// Create the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('canvas'),
  antialias: true
});

// Check if the canvas element is present
if (!renderer.domElement) {
  console.error('Canvas element not found');
}

// Create the cityscape
const cityGeometry = new THREE.BoxGeometry(100, 100, 100);
const cityMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const city = new THREE.Mesh(cityGeometry, cityMaterial);
scene.add(city);

// Create the phishing email
const emailGeometry = new THREE.PlaneGeometry(50, 50);
const emailMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const email = new THREE.Mesh(emailGeometry, emailMaterial);
email.position.set(0, 50, 0);
scene.add(email);

// Create the animation
function animate() {
  requestAnimationFrame(animate);
  city.rotation.y += 0.01;
  email.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();

// Add event listener to the email
email.addEventListener('click', () => {
  // Simulate phishing attack
  alert('You have been phished!');
});

// Add animation to the email
function animateEmail() {
  email.position.y += 0.1;
  if (email.position.y > 100) {
    email.position.y = -100;
  }
  requestAnimationFrame(animateEmail);
}

animateEmail();

// Debugging statements
console.log('Scene:', scene);
console.log('Camera:', camera);
console.log('Renderer:', renderer);
console.log('City:', city);
console.log('Email:', email);