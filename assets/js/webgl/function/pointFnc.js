import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const pointHideFn = () => {
   point.points.forEach(point => initial.scene.remove(point))
}

export const pointRootShowFn = () => {
   point.pointsRoot.forEach(point => initial.scene.add(point))
}

export const points01ShowFn = () => {
   point.points01.forEach(point => initial.scene.add(point))
}

export const points02ShowFn = () => {
   point.points02.forEach(point => initial.scene.add(point))
}

export const points03ShowFn = () => {
   point.points03.forEach(point => initial.scene.add(point))
}
