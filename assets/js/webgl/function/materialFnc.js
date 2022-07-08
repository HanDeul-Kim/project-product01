import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const materialBackFn = () => {
   model.modelObj.traverse(item => {
      if(item.isMesh) {
         // item.material.opacity = 1
         item.material.wireframe = false
         item.material.depthTest = true
         gsap.to(item.material, {
            opacity: 1,
            duration: setting.backwardDuration,
            ease: setting.ease03,
            onComplete: () => {
            },
         })
      }
   })
   let result = model.modelObj.children.filter(obj => obj.name == 'window')
   result.forEach(child => {
      child.traverse(item => {
         if(item.isMesh) {
            // item.material.opacity = 0.01
            gsap.to(item.material, {
               opacity: 0.01,
               duration: setting.backwardDuration,
               ease: setting.ease02,
               onComplete: () => {
               },
            })
         }
      })
   })
}


export const materialForwardFn = () => {
   model.modelObj.traverse(item => {
      if(item.isMesh) {
         // item.material.opacity = 0.8
         item.material.depthTest = false
         gsap.to(item.material, {
            opacity: 0.055,
            duration: setting.forwardTransparentDuration,
            ease: setting.ease03,
            onComplete: () => {
               // item.material.opacity = 0.015
               // item.material.wireframe = false
            },
         })
      }
   })
}
