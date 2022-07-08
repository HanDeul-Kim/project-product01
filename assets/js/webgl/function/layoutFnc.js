import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const layoutShowFn = layout => {
   layout.style.display = 'block'
}

export const layoutsHideFn = () => {
   layout.layouts.forEach(layout => (layout.style.display = 'none'))
}
