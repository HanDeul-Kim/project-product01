import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const goBackFn = () => {
   animateFnc.animatesInitFn()
   pointFnc.pointHideFn()
   layoutFnc.layoutsHideFn()
   markerFnc.markersShowFn()
   pointFnc.pointHideFn()
   pointFnc.pointRootShowFn()
   materialFnc.materialBackFn()

   object.shadow.material.opacity = setting.shadowOpacity
}
