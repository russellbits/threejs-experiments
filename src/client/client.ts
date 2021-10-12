import * as THREE from 'three'

const scene = new THREE.Scene()

scene.background = new THREE.Color(0x3412ff)

const camera = new THREE.PerspectiveCamera(
    75,
    // window.innerWidth / window.innerHeight,
    1,
    0.1,
    1000
)
camera.position.z = 2

const canvas1 = document.getElementById('cube') as HTMLCanvasElement
const canvas2 = document.getElementById('clone') as HTMLCanvasElement

// const renderer = new THREE.WebGLRenderer()
const renderer1 = new THREE.WebGLRenderer({canvas:canvas1})
renderer1.setSize(200, 200)
const renderer2 = new THREE.WebGLRenderer({canvas:canvas2})
renderer2.setSize(200, 200)

// To return to full screen
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0xFF0043,
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
    renderer2.render(scene, camera)
}

animate()
