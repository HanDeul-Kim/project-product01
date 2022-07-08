import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export function updateFn() {
   initial.camera.lookAt(setting.camLookAt.x, setting.camLookAt.y, setting.camLookAt.z)
   requestAnimationFrame(updateFn)
   initial.renderer.render(initial.scene, initial.camera)
   const delta = setting.clock.getDelta()
   if(model.mixer) model.mixer.update(delta)
}
