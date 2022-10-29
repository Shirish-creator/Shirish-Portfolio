import './scss/style.scss'
import * as THREE from 'three'
import * as dat from 'dat.gui'

//---------------------------------------- V A R I A B L E S --------------------------------------------------------
const textureLoader=new THREE.TextureLoader()

// const normalTextureMap=textureLoader.load('assets/textures/Normal.png')
console.log(textureLoader);


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
material.color = new THREE.Color(0xff0000)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene1.add(sphere)

// Lights

const pointLight = new THREE.PointLight(0xFB722E, 1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene1.add(pointLight)

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

    // Render
    renderer.render(scene1, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()