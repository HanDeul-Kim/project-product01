import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let markers = []

export const marker01 = () => {
   let markerMap = new THREE.TextureLoader().load(setting.markerImg)
   let marker = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         size: setting.markerSize,
         transparent: true,
         opacity: 1,
         map: markerMap,
         alphaTest: 0.55,
      })
   )
   marker.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   marker.position.set(0, 6, 0)
   marker.scale.set(setting.markerSize, setting.markerSize, setting.markerSize)
   marker.name = 'marker01'
   markers.push(marker)
   initial.scene.add(marker)
   return marker
}

export const marker02 = () => {
   let markerMap = new THREE.TextureLoader().load(setting.markerImg)
   let marker = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         size: setting.markerSize,
         transparent: true,
         opacity: 1,
         map: markerMap,
         alphaTest: 0.55,
      })
   )
   marker.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   marker.position.set(0, 0, 6)
   marker.scale.set(setting.markerSize, setting.markerSize, setting.markerSize)
   marker.name = 'marker02'
   markers.push(marker)
   initial.scene.add(marker)
   return marker
}

export const marker03 = () => {
   let markerMap = new THREE.TextureLoader().load(setting.markerImg)
   let marker = new THREE.Points(
      new THREE.BufferGeometry(),
      new THREE.PointsMaterial({
         size: setting.markerSize,
         transparent: true,
         opacity: 1,
         map: markerMap,
         alphaTest: 0.55,
      })
   )
   marker.geometry.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0], 3))
   marker.position.set(0, 0, -6)
   marker.scale.set(setting.markerSize, setting.markerSize, setting.markerSize)
   marker.name = 'marker03'
   markers.push(marker)
   initial.scene.add(marker)
   return marker
}
