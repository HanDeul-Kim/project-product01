import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const handler01 = () => {
   initial.domEvents.addEventListener(onload.eventer01, 'click', () => {
      animateFnc.animatesInitFn()
      markerFnc.markersHideFn()
      pointFnc.pointHideFn()
      pointFnc.points01ShowFn()
      materialFnc.materialForwardFn()
      let result = model.modelObj.children.filter(obj => obj.name === 'wheel_001'  )
      result.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               // item.material.opacity = 0.1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 1,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
      gsap.to(initial.camera.position, {
         x: 10,
         y: 5,
         z: 2,
         ease: setting.ease01,
         duration: setting.forwardDuration,
         onComplete: () => {
            layoutFnc.layoutShowFn(layout.layout01)
            layout.layout01.addEventListener('click', function(e) {
               const close = this.querySelector('.close')
               // if(e.target === this || e.target === close) {
               if(e.target === close) {
                  goBackFnc.goBackFn()
                  gsap.to(initial.camera.position, {
                     x: 20,
                     y: 1,
                     z: 10,
                     ease: setting.ease01,
                     duration: setting.backwardDuration,
                     onComplete: () => { },
                  })
               }
            })
         },
      })
      // gsap.to(model.modelObj.position, {
      //    x: 0,
      //    y: -4,
      //    z: 0,
      //    ease: setting.ease01,
      //    duration: setting.forwardDuration,
      //    onComplete: () => {
      //       layoutFnc.layoutShowFn(layout.layout01)
      //       layout.layout01.addEventListener('click', function(e) {
      //          const close = this.querySelector('.close')
      //          // if(e.target === this || e.target === close) {
      //          if(e.target === close) {
      //             goBackFnc.goBackFn()
      //             gsap.to(model.modelObj.position, {
      //                x: 0,
      //                y: 0,
      //                z: 0,
      //                ease: setting.ease01,
      //                duration: setting.backwardDuration,
      //                onComplete: () => { },
      //             })
      //          }
      //       })
      //    },
      // })
      gsap.to(initial.objTotal.position, {
         x: 0,
         y: -4,
         z: 0,
         ease: setting.ease01,
         duration: setting.forwardDuration,
         onComplete: () => {
            layoutFnc.layoutShowFn(layout.layout01)
            layout.layout01.addEventListener('click', function(e) {
               const close = this.querySelector('.close')
               // if(e.target === this || e.target === close) {
               if(e.target === close) {
                  goBackFnc.goBackFn()
                  gsap.to(initial.objTotal.position, {
                     x: 0,
                     y: 0,
                     z: 0,
                     ease: setting.ease01,
                     duration: setting.backwardDuration,
                     onComplete: () => { },
                  })
               }
            })
         },
      })
      let result2 = model.modelObj.children.filter(obj => obj.name === 'eagle_001'  )
      result2.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.renderOrder = 1
               // item.material.opacity = 0.1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.5,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
      let result3 = model.modelObj.children.filter(obj => obj.name === 'front_top_001' | obj.name === 'top_001' | obj.name === 'back_001'
      | obj.name === 'insdie_001'| obj.name === 'front_002' | obj.name === 'durafin_001' | obj.name === 'wheelcover_001' | obj.name === 'wheelcover_002')
      result3.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.material.opacity = 0
               item.material.wireframe = true
               item.renderOrder = 1
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.05, wireframe : true,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
      let result4 = model.modelObj.children.filter(obj => obj.name === 'side_001'  )
      result4.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               // item.material.opacity = 0.1
               // item.material.wireframe = true
               item.renderOrder = 1
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.2,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
   })
}



export const handler02 = () => {
   initial.domEvents.addEventListener(onload.eventer02, 'click', () => {
      animateFnc.animatesInitFn()
      markerFnc.markersHideFn()
      pointFnc.pointHideFn()
      pointFnc.points02ShowFn()
      materialFnc.materialForwardFn()
      let result = model.modelObj.children.filter(obj => obj.name === 'back_001'| obj.name === 'bottm_001' |  obj.name === 'durafin_001' | 
      obj.name === 'eagle_001' | obj.name === 'front_002' | obj.name === 'front_top_001' | obj.name === 'side_001' |
      obj.name === 'side_top_001' | obj.name === 'top_001' | obj.name === 'wheel_001' | obj.name === 'wheel_002' | obj.name === 'wheelcover_001' )
      result.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               // item.material.opacity = 0.1
               item.renderOrder = 1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.5,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })

      gsap.to(initial.camera.position, {
         x: 20,
         y: 0.5,
         z: 1,
         ease: setting.ease01,
         duration: setting.forwardDuration,
         onComplete: () => {
            layoutFnc.layoutShowFn(layout.layout02)
            layout.layout02.addEventListener('click', function(e) {
               const close = this.querySelector('.close')
               // if(e.target === this || e.target === close) {
               if(e.target === close) {
                  goBackFnc.goBackFn()
                  gsap.to(initial.camera.position, {
                     x: 20,
                     y: 1,
                     z: 10,
                     ease: setting.ease01,
                     duration: setting.backwardDuration,
                     onComplete: () => { },
                  })
               }
            })
         },
      })
      let result2 = model.modelObj.children.filter(obj => obj.name === 'inside_001'   )
      result2.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.renderOrder = 1
               item.material.opacity = 1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.2,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
      let result3 = model.modelObj.children.filter(obj => obj.name === 'chip'   )
      result3.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.renderOrder = 1
               item.material.opacity = 1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 1,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
   })
}


export const handler03 = () => {
   initial.domEvents.addEventListener(onload.eventer03, 'click', () => {
      animateFnc.animatesInitFn()
      markerFnc.markersHideFn()
      pointFnc.pointHideFn()
      pointFnc.points03ShowFn()
      materialFnc.materialForwardFn()
      let result = model.modelObj.children.filter(obj => obj.name === 'back_001'| obj.name === 'bottm_001' |  obj.name === 'inside_001' | 
      obj.name === 'eagle_001' | obj.name === 'front_002' | obj.name === 'front_top_001' | obj.name === 'front_001' | obj.name === 'side_001' |
      obj.name === 'side_top_001' | obj.name === 'top_001' | obj.name === 'wheel_001' | obj.name === 'wheel_002' | obj.name === 'wheelcover_001' )
      result.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.material.opacity = 1
               item.renderOrder = 1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 0.2,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
      gsap.to(initial.camera.position, {
         x: 0,
         y: 0.5,
         z: 20,
         ease: setting.ease01,
         duration: setting.forwardDuration,
         onComplete: () => {
            layoutFnc.layoutShowFn(layout.layout03)
            layout.layout03.addEventListener('click', function(e) {
               const close = this.querySelector('.close')
               // if(e.target === this || e.target === close) {
               if(e.target === close) {
                  goBackFnc.goBackFn()
                  gsap.to(initial.camera.position, {
                     x: 20,
                     y: 1,
                     z: 10,
                     ease: setting.ease01,
                     duration: setting.backwardDuration,
                     onComplete: () => { },
                  })
               }
            })
         },
      })
      let result2 = model.modelObj.children.filter(obj => obj.name === 'durafin_001'  )
      result2.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.renderOrder = 1
               item.material.opacity = 1
               item.material.wireframe = false
               item.material.depthTest = true
               item.material.side = THREE.DoubleSide
               gsap.to(item.material, {
                  opacity: 1,
                  duration: setting.forwardDuration,
                  ease: setting.ease01,
                  onComplete: () => { },
               })
            }
         })
      })
   })
}

