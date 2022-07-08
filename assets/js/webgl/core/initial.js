import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc,
   materialFnc, colorPickerFnc, animateFnc,
   setting, store, 
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let scene, camera, renderer, controls, hLight, dLight, dLight2, dLight3, domEvents, objTotal

export const initialFn = () => {
   scene = new THREE.Scene()
   camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.01, 5000)
   camera.position.set(20, 1, 10)
   renderer = new THREE.WebGLRenderer({antialias: true, alpha:true})
   renderer.setPixelRatio(window.devicePixelRatio || 1)
   renderer.setClearColor(setting.backgroundColor, 0)
   renderer.setSize(innerWidth, innerHeight)
   renderer.shadowMap.enabled = true
   renderer.shadowMapSoft = true
   renderer.sortObjects = false;
   // renderer.shadowMap.type = THREE.PCFSoftShadowMap
   document.querySelector('#canvas').appendChild(renderer.domElement)
   window.addEventListener('resize', function() {
      renderer.setSize(this.innerWidth, this.innerHeight)
      camera.aspect = this.innerWidth / this.innerHeight
      camera.updateProjectionMatrix()
   })
   controls = new THREE.OrbitControls(camera, renderer.domElement)
   controls.update();
   controls.enableZoom = true;
   controls.minAzimuthAngle = Infinity;
   controls.maxAzimuthAngle = Infinity;
   controls.minDistance = 10;
   controls.maxDistance = 25;
   controls.minPolarAngle = 0.8; // radians
   controls.maxPolarAngle = 1.5 // radians
   controls.rotateSpeed = 0.4;
   controls.zoomSpeed = 0.5;
   controls.panSpeed = 0.8;
   controls.autoRotate = false
   controls.touches = {ONE: THREE.TOUCH.ROTATE, TWO:THREE.TOUCH.DOLLY};
   controls.mouseButtons = {LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.ROTATE};


   hLight = new THREE.HemisphereLight('#fff', 0.7)
   scene.add(hLight)
   dLight = new THREE.DirectionalLight('#fff', 0.5)
   dLight.position.set(1, 10, 1)
   dLight.castShadow = true
   scene.add(dLight)
   dLight.shadow.camera.top = 10
   dLight.shadow.camera.bottom = -10
   dLight.shadow.camera.left = -10
   dLight.shadow.camera.right = 10
   dLight.shadow.bias = 0.00001
   dLight.shadow.radius = 20
   dLight.shadow.needsUpdate = true
   dLight.shadow.mapSize.width = 2048
   dLight.shadow.mapSize.height = 2048
   dLight.shadow.camera.far = 30


   dLight2 = new THREE.DirectionalLight('#fff', 0.3)
   dLight2.position.set(10, 10, 10)
   scene.add(dLight2)

   dLight2 = new THREE.DirectionalLight('#fff', 0.3)
   dLight2.position.set(-10, -10, -10)
   scene.add(dLight2)


   // scene.add(new THREE.CameraHelper(dLight2.shadow.camera))
   domEvents = new THREEx.DomEvents(camera, renderer.domElement)
   objTotal = new THREE.Group()
   scene.add(objTotal)



   
}



