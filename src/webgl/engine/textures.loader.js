/* eslint class-methods-use-this: 0 */
import * as THREE from 'three'
import {
    RGBELoader
} from 'three/examples/jsm/loaders/RGBELoader.js'

class _TexturesLoader {
    textureLoader = new THREE.TextureLoader()
debugger;
    testRenderer = new THREE.WebGLRenderer()

    cache = []

    constructor() {
        this.testRenderer.toneMapping = THREE.LinearToneMapping
        this.testRenderer.toneMappingExposure = 1
    }


    loadEnvTexture(
        url,
        renderer,
        _ext = ''
    ) {
        renderer.toneMapping = THREE.LinearToneMapping
        renderer.toneMappingExposure = 1

        return new Promise((resolve) => {
            const pmremGenerator = new THREE.PMREMGenerator(renderer)
            pmremGenerator.compileEquirectangularShader()

            const ext = _ext || url.split('.').pop()



            if (ext === 'hdr') {
                new RGBELoader()
                    .setDataType(THREE.UnsignedByteType)
                    .load(url, (texture) => {
                        texture.needsUpdate = true
                        const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(
                            texture
                        )



                        const t = pngCubeRenderTarget.texture

                        resolve(t)
                    })
            } else {
                this.textureLoader.load(url, (texture) => {
                    texture.encoding = THREE.sRGBEncoding

                    texture.needsUpdate = true
                    const pngCubeRenderTarget = pmremGenerator.fromEquirectangular(
                        texture
                    )

                    const t = pngCubeRenderTarget.texture

                    resolve(t)
                })
            }
        })
    }
}

export const TexturesLoader = new _TexturesLoader()