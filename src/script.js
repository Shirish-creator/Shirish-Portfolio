import './scss/style.scss';
import * as THREE from 'three';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import * as dat from 'dat.gui';
import normal from "./assets/textures/Normal.png"
import height from "./assets/textures/Height.jpg"





//---------------------------------------- V A R I A B L E S --------------------------------------------------------
const textureLoader=new THREE.TextureLoader()
const normalTextureMap=textureLoader.load(normal);
const heightTextureMap=textureLoader.load(height)
console.log(normalTextureMap);


//----- modification to the textures-----------
normalTextureMap.wrapS = THREE.RepeatWrapping;
normalTextureMap.wrapT = THREE.RepeatWrapping;
normalTextureMap.repeat.set(10,10);


// Debug
const gui = new dat.GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene1 = new THREE.Scene()

// Objects
const geometry = new THREE.SphereGeometry( 10,100,200);
geometry.scale(0.08,0.08,0.08)

// Materials

const material = new THREE.MeshStandardMaterial()
material.color = new THREE.Color(0x00000)
// var material=new THREE.MeshStandardMaterial();
material.metalness=0.463;
material.roughness=0.272;
material.normalMap=normalTextureMap;

material.heightTextureMap=heightTextureMap;

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene1.add(sphere)

// Lights

//-----------This is initial point light

const pointLight1 = new THREE.PointLight(0xFB722E, 50)
pointLight1.position.x = 5.7
pointLight1.position.y = 7
pointLight1.position.z = -3.1
scene1.add(pointLight1)

//-----------This is initial point light

const pointLight2 = new THREE.PointLight(0xC25FFD, 50)
pointLight2.position.x = -100
pointLight2.position.y = 7
pointLight2.position.z = -3.1
pointLight2.scale.z=105
scene1.add(pointLight2)






/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene1.add(camera)

// Controls


//add GUI
gui.add(pointLight1.position,'x',-10,10).name('sphererotationX')
gui.add(pointLight1.position,'y',-10,10).name('sphererotationY')
gui.add(pointLight1.position,'z',-10,10).name('sphererotationZ')


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,alpha:1
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()
const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    // sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()
    sphere.rotation.y += 0.001;

    // Render
    renderer.render(scene1, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()