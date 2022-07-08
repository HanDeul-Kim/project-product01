import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let points = []
export let pointsRoot = []
export let points01 = []
export let points02 = []
export let points03 = []

export const point01 = () => {
   const pointImg = './assets/img/eagle.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 0.6,
         alphaTest: 0.15,
         map: pointMap,
         size: 6,
      }),
   )
   point.name = 'point01'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, 5, 0)
   points.push(point)
   pointsRoot.push(point)
   initial.scene.add(point)
}

export const point02 = () => {
   const pointImg = './assets/img/Active.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 0.6,
         alphaTest: 0.15,
         map: pointMap,
         size: 6,
      }),
   )
   point.name = 'point02'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, -1, 6)
   points.push(point)
   pointsRoot.push(point)
   initial.scene.add(point)
}

export const point03 = () => {
   const pointImg = './assets/img/Durafin.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 0.6,
         alphaTest: 0.15,
         map: pointMap,
         size: 6,
      }),
   )
   point.name = 'point03'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, -1, -6)
   points.push(point)
   pointsRoot.push(point)
   initial.scene.add(point)
}

export const point11 = () => {
   const pointImg = './assets/img/eagle.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 1,
         alphaTest: 0.15,
         map: pointMap,
         size: 4,
      }),
   )
   point.name = 'point11'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, 1, -1.7)
   points.push(point)
   points01.push(point)
   initial.scene.add(point)
}

export const point12 = () => {
   const pointImg = './assets/img/eagle.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 1,
         alphaTest: 0.15,
         map: pointMap,
         size: 4,
      }),
   )
   point.name = 'point12'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, 1, 1.2)
   points.push(point)
   points01.push(point)
   initial.scene.add(point)
}

export const point21 = () => {
   const pointImg = './assets/img/Active.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 1,
         alphaTest: 0.15,
         map: pointMap,
         size: 8,
      }),
   )
   point.name = 'point21'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0, 0.0, 6)
   points.push(point)
   points02.push(point)
   initial.scene.add(point)
}

export const point22 = () => {
   const pointImg = './assets/img/t_center_fascia.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 0,
         alphaTest: 0.15,
         map: pointMap,
         size: 0.01
      }),
   )
   point.name = 'point22'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(0.7, 0.3, 0.3)
   points.push(point)
   points02.push(point)
   initial.scene.add(point)
}

export const point31 = () => {
   const pointImg = './assets/img/Durafin.png'
   const pointMap = new THREE.TextureLoader().load(pointImg)
   const point = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         transparent: true,
         opacity: 1,
         alphaTest: 0.15,
         map: pointMap,
         size: 8
      }),
   )
   point.name = 'point31'
   point.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   point.position.set(-5, 0, 0)
   points.push(point)
   points03.push(point)
   initial.scene.add(point)
}
