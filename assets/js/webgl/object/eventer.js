import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let eventers = []

export const eventer01 = () => {
   let eventer = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 30, 30),
      new THREE.MeshBasicMaterial({
         color: setting.markerColor,
         transparent: true,
         opacity: 0.0,
      })
   )
   eventer.scale.set(setting.eventerSize, setting.eventerSize, setting.eventerSize)
   eventer.name = 'eventer01'
   eventers.push(eventer)
   onload.marker01.add(eventer)
   return eventer
}

export const eventer02 = () => {
   let eventer = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 30, 30),
      new THREE.MeshBasicMaterial({
         color: setting.markerColor,
         transparent: true,
         opacity: 0.0,
      })
   )
   eventer.scale.set(setting.eventerSize, setting.eventerSize, setting.eventerSize)
   eventer.name = 'eventer02'
   eventers.push(eventer)
   onload.marker02.add(eventer)
   return eventer
}

export const eventer03 = () => {
   let eventer = new THREE.Mesh(
      new THREE.SphereGeometry(0.055, 30, 30),
      new THREE.MeshBasicMaterial({
         color: setting.markerColor,
         transparent: true,
         opacity: 0.0,
      })
   )
   eventer.scale.set(setting.eventerSize, setting.eventerSize, setting.eventerSize)
   eventer.name = 'eventer03'
   eventers.push(eventer)
   onload.marker03.add(eventer)
   return eventer
}
