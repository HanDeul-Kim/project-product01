import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const animatesInitFn = () => {
   model.animates.forEach(anim => {
      anim.reset()
      anim.stop()
   })
}
animatesInitFn()


let anim01, anim02
let aniState01 = false
let aniState02 = false


export const animatesSetFn = () => {
   // const animate = animates.find(animate => animate._clip.name === prop.animate)
   anim01 = model.animates[0]
   anim02 = model.animates[1]

   const btn01 = document.querySelector('#btn01')
   btn01 &&
      btn01.addEventListener('click', () => {
         if(aniState01 === false) {
            anim01.timeScale = 1
            anim01.paused = false
            anim01.play()
         } else if(aniState01 === true) {
            anim01.timeScale = -1
            anim01.paused = false
         }
         aniState01 = !aniState01
      })

   const btn02 = document.querySelector('#btn02')
   btn02 &&
      btn02.addEventListener('click', () => {
         if(aniState02 === false) {
            anim02.timeScale = 1
            anim02.paused = false
            anim02.play()
         } else if(aniState02 === true) {
            anim02.timeScale = -1
            anim02.paused = false
         }
         aniState02 = !aniState02
      })
}
