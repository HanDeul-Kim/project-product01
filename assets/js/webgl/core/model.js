import {
   initial, layout, model, onload, update,
   goBackFnc, layoutFnc, markerFnc, pointFnc, 
   materialFnc, colorPickerFnc, animateFnc,
   setting, store,
   globalHandler, handler,
   eventer, marker, object, point
} from '../core/imp.js'


export let modelLoader, mixer, modelObj, result
export let animates = []

export const modelFn = () => {
   const pmremGenerator = new THREE.PMREMGenerator(initial.renderer)
   pmremGenerator.compileEquirectangularShader()
   new THREE.RGBELoader()
      .setDataType(THREE.UnsignedByteType)
      .load(setting.hdrImg, function(texture) {
         const envMap = pmremGenerator.fromEquirectangular(texture).texture
         // scene.background = envMap
         initial.scene.environment = envMap
         texture.dispose()
         pmremGenerator.dispose()
         modelLoader = new THREE.GLTFLoader()
         modelLoader.load(setting.modelFile, function(gltf) {
            modelObj = gltf.scene
            modelObj.name = 'modelObj'
            modelObj.scale.set(0.5, 0.5, 0.5)
            modelObj.position.set(0, -0.208, 0)
            modelObj.traverse(function(child) {
               if(child.isMesh) {
                  child.castShadow = true
                  child.receiveShadow = true
                  child.material.side = THREE.DoubleSide;
                  // child.material.opacity = 1
                  child.material.transparent = true
               }
            })
            modelObj.castShadow = true
            modelObj.receiveShadow = true
            modelObj.rotation.y = Math.PI / 2
            initial.objTotal.add(modelObj)
            mixer = new THREE.AnimationMixer(modelObj)
            gltf.animations.forEach(clip => {
               const animate = mixer.clipAction(clip)
               animate.clampWhenFinished = true
               animate.loop = THREE.LoopOnce
               animates.push(animate)
            })

            // result = modelObj.children.find(obj => obj.name === 'body')
            // result.traverse(function(child) {
            //    if(child.isMesh) {
            //       child.material.transparent = true
            //       child.material.opacity = 0.5
            //       child.premultipliedAlpha = true
            //       child.renderOrder = 1
            //    }
            // })

            animateFnc.animatesSetFn()
         })
      })
}
