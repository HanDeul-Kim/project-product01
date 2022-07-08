import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export const colorPickerFn = () => {
   let colorBtn = document.querySelector('#colorBtn')
   let colorPickerWrap = document.querySelector('.colorPickerWrap')
   colorBtn.addEventListener('click', () => {
      colorPickerWrap.style.display = 'inline-block'
   })
   colorPickerWrap.addEventListener('mousedown', (e) => {
      if(e.target.className === 'colorPickerWrap') {
         colorPickerWrap.style.display = 'none'
      }
   })
   let colorPickerObj = new iro.ColorPicker('#colorPicker', {
      width: 130,
      layout: [
         {
            component: iro.ui.Box,
         },
         {
            component: iro.ui.Slider,
            options: {
               sliderType: 'hue'
            }
         }
      ]
   })
   colorPickerObj.on('color:change', function(color) {
      let result = model.modelObj.children.filter(obj => obj.name === 'cover_body')
      result.forEach(child => {
         child.traverse(item => {
            if(item.isMesh) {
               item.material.color = new THREE.Color(color.hexString)
            }
         })
      })
   })
}
