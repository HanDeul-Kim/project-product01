console.warn = () => { }
import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc,
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'

initial.initialFn()
model.modelFn()
object.objectFn()
// colorPickerFnc.colorPickerFn()
update.updateFn()
layout.layoutFn()

// svg 애니메이션 종료 
const anim = document.querySelector('.ani-box');
const overlay = document.querySelector('.overlay');
let offArr = [];
offArr.push(anim, overlay);
offArr.forEach(el => {
   setTimeout( () => {
      el.classList.add('active');
      // callback 컨텐츠 visible
      setTimeout( () => {
         document.querySelector('.container').classList.add('active');
      })
   },3500)
})

