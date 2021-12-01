import { Raycaster,TextureLoader, ShaderMaterial, UniformsUtils, UniformsLib, Vector3, Color} from 'three'
import {
    fragmentShader
} from './fragmentShader'
import {
    vertexShader
} from './vertexShader'
import random from 'lodash/random'
import gsap from "gsap";
import point_texture from '../../../assets/images/point_texture.png';

const texture = new TextureLoader().load(point_texture);

// window.THREE = THREE

class Shader {
    raycaster = new Raycaster()

    constructor(props) {
        this.engine = props.engine
        this.original_mesh = props.original_mesh
        const {
            geometry
        } = props.model
        geometry.computeBoundingBox()
        this.model = props.model

        // this.engine.scene.add(this.debugMesh)

        if (!props.buffer) {} else {

            const randomValues = () => random(.75, 1.1, true)

            //const verticesCount = geometry.getAttribute('position').count
            const vertices = geometry.getAttribute('position')

            const randomness = vertices.clone()

            // console.log(vertices)

            const stack = []



            for (let i = 0; i < randomness.count; i = i + 1) {
                const pos = [
                    randomness.getX(i),
                    randomness.getY(i),
                    randomness.getZ(i),
                ]




                // const has = stack.find(i => i.v.equals(pos))
                let has = undefined
                for (let k = 0; k < stack.length; k = k + 1) {
                    const item = stack[k]

                    if (item.pos[0] === pos[0] && item.pos[1] === pos[1] && item.pos[2] === pos[2]) {
                        has = item
                    }
                }

                if (has) {
                    randomness.setXYZ(i, ...has.r)

                } else {
                    const r = [randomValues(), randomValues(), randomValues()]

                    stack.push({
                        pos,
                        r
                    })

                    randomness.setXYZ(i, ...r)
                }

            }


            geometry.setAttribute('aRandom', randomness)

        }

        const color1 = props.colorData.colors[0]
        const color2 = props.colorData.colors[1] || color1

        this.material = new ShaderMaterial({
            fragmentShader,
            vertexShader,
            transparent: true,
            morphTargets: true,

            fog: true,
            // opacity: props.colorData.opacity,

            // blending: NormalBlending,
            uniforms: UniformsUtils.merge([
                UniformsLib.points,
                UniformsLib.fog,
                {
                    // tranparency: {
                    //     value: props.colorData.opacity
                    // },
                    bboxMin: {
                        value: geometry.boundingBox.min
                    },
                    bboxMax: {
                        value: geometry.boundingBox.max
                    },
                    aRandomExist: {
                        value: props.buffer
                    },
                    dir: {
                        value: new Vector3(random(1, Math.PI * 2), random(1, Math.PI * 2), random(1, Math.PI * 2))
                    },
                    floatingAlpha: {
                        value: 0
                    },
                    size: {
                        value: props.size
                    },
                    pointT: {
                        type: 't',
                        tranparent: true,
                        value: texture
                    },
                    uColor1: {
                        value: new Color(color1)
                    },
                    uColor2: {
                        value: new Color(color2)
                    },
                    mousePos: {
                        value: new Vector3()
                    },
                    uTime: {
                        value: performance.now()
                    },
                    colorOffset: {
                        value: props.colorOffset
                    },
                }

            ], )


            // th   is.material.uniforms.diffuse.value = new Color(0xff0000)
        })

        // this.material.needsUpdate = true
        this.initListeners()
    }

    setColors([_color1, _color2]) {
        const {
            uniforms
        } = this.material

        const color1 = new Color(_color1)
        const color2 = new Color(_color2)

        uniforms.uColor1.value = color1
        uniforms.uColor2.value = color2
    }

    set size(size) {
        this.material.uniforms.size.value = size
    }

    set scale(size) {
        this.material.uniforms.scale.value = size
    }

    // debugMesh = new Mesh(new SphereGeometry(2, 32, 32), new MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: .3}))
    particlesHoverUpdate(v) {

        // this.raycaster.setFromCamera(v, this.engine.camera)

        // const intersections = this.raycaster.intersectObject(this.original_mesh, true)

        // if(intersections.length) {
        //     const {point} = intersections[0]

        //     this.material.uniforms.mousePos.value = point
        //     // console.log(intersections[0])


        //     this.debugMesh.position.copy(point)
        // }

    }

    update(time, v) {
        this.particlesHoverUpdate(v)


        this.updateGeo()

        this.material.uniforms.uTime.value = time
    }

    setRandomFloating(floating) {
        const value = floating ? 1 : 0

        gsap.to(this.material.uniforms.floatingAlpha, {
            value
        })
    }

    updateGeo() {
        const {
            geometry
        } = this.model


        geometry.computeBoundingBox()
        this.material.uniforms.bboxMin.value = geometry.boundingBox.min
        this.material.uniforms.bboxMax.value = geometry.boundingBox.max
    }

    initListeners() {
        window.addEventListener('mousemove', this.onMouseMove)
    }
}

const createShader = ({
    colorData,
    original_mesh,
    model,
    engine,
    buffer = false,
    colorOffset = .3
}) => {
    // color2 = color2 || color1



    return new Shader({
        colorData,
        original_mesh,
        model,
        engine,
        colorOffset,
        buffer
    })
}

export {
    createShader
}