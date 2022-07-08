import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const globalHandlerFn = () => {
   eventer.eventers.forEach(eventer => {
      initial.domEvents.addEventListener(eventer, 'mouseover', e => {
         document.body.style.cursor = 'pointer'
         eventer.material.color = new THREE.Color('#ffc8c8')
         gsap.to(e.target.parent.material, {
            size: setting.markerSizeHover,
            duration: setting.markerDuration,
            ease: Power0.easeNone,
         })
      })
      initial.domEvents.addEventListener(eventer, 'mouseout', e => {
         document.body.style.cursor = 'default'
         eventer.material.color = new THREE.Color('red')
         gsap.to(e.target.parent.material, {
            size: setting.markerSize,
            duration: setting.markerDuration,
         })
      })
      initial.domEvents.addEventListener(eventer, 'click', e => {
         e.target.parent.material.opacity = 0.6
      })
   })
}

