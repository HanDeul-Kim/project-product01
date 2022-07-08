import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const markersHideFn = () => {
   marker.markers.forEach(marker => initial.scene.remove(marker))
}


export const markersShowFn = () => {
   marker.markers.forEach(marker => initial.scene.add(marker))
}