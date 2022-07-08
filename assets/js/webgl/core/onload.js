import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let marker01, marker02, marker03
export let eventer01, eventer02, eventer03
export let handler01, handler02, handler03
export let point01, point02, point03, point11, point12, point21, point22, point31

window.onload = () => {
   marker01 = marker.marker01()
   marker02 = marker.marker02()
   marker03 = marker.marker03()

   eventer01 = eventer.eventer01()
   eventer02 = eventer.eventer02()
   eventer03 = eventer.eventer03()

   handler01 = handler.handler01()
   handler02 = handler.handler02()
   handler03 = handler.handler03()

   point01 = point.point01()
   point02 = point.point02()
   point03 = point.point03()
   point11 = point.point11()
   point12 = point.point12()
   point21 = point.point21()
   point22 = point.point22()
   point31 = point.point31()

   pointFnc.pointHideFn()
   pointFnc.pointRootShowFn()
   globalHandler.globalHandlerFn()
}