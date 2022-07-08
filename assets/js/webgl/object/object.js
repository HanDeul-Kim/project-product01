import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let shadow, mapImage, textureLoader

export const objectFn = () => {
   textureLoader = new THREE.TextureLoader()
   mapImage = textureLoader.load(setting.shadowImg)
   shadow = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.ShadowMaterial({
         color: 0x888888,
         side: THREE.DoubleSide,
         map: mapImage,
         transparent: true,
         opacity: setting.shadowOpacity,
         depthWrite: false,
      })
   )
   shadow.rotation.x = Math.PI / 2
   shadow.position.y = - 4.6
   shadow.receiveShadow = true;
   initial.objTotal.add(shadow)
}
