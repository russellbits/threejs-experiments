import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene

scene.background = new THREE.Color(0xff06CF)

const camera = new THREE.PerspectiveCamera(
    75,
    // window.innerWidth / window.innerHeight,
    1,
    0.1,
    1000
)
camera.position.z = 4

const camera1 = new THREE.PerspectiveCamera(100, 200/200, 0.1, 500)
camera1.position.z = 5

const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1)
camera2.position.z = 2

const camera3 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
camera3.position.y = 2
camera3.lookAt(new THREE.Vector3())

const cubeCanvas = document.getElementById('cube') as HTMLCanvasElement
const cloneCanvas = document.getElementById('clone') as HTMLCanvasElement
const strangeCanvas = document.getElementById('strange') as HTMLCanvasElement
const luckCanvas = document.getElementById('luck') as HTMLCanvasElement

// const renderer = new THREE.WebGLRenderer()
const renderer1 = new THREE.WebGLRenderer({canvas:cubeCanvas})
renderer1.setSize(200, 200)
const renderer2 = new THREE.WebGLRenderer({canvas:cloneCanvas})
renderer2.setSize(200, 200)
const renderer3 = new THREE.WebGLRenderer({canvas:strangeCanvas})
renderer3.setSize(200, 200)
const renderer4 = new THREE.WebGLRenderer({canvas:luckCanvas})
renderer4.setSize(200, 200)

new OrbitControls(camera, renderer1.domElement)
new OrbitControls(camera1, renderer1.domElement)

// To return to full screen
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

const geometry = new THREE.TorusKnotGeometry() // THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x4AEDDF,
    wireframe: false,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

/*
window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}
*/

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    render()
}

function render() {
    renderer1.render(scene, camera)
    renderer2.render(scene, camera1)
    renderer3.render(scene, camera2)
    renderer4.render(scene, camera)
}

animate()
