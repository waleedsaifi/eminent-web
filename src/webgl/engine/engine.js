import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import AnimationProcessor from "./engine.animation"
import gsap from 'gsap';
import { addDevGUIConfig,isDev,wait} from "../../helpers/dev.helpers";
import store from "../../store/store";
import { setProgress, toggleLoader } from "../../store/actions/actionCreator";
import { RaycasterEvents } from "../lib/raycasterEvents";
import { loaderScene,
    scenes
} from "../../constants/constants";
import {
    createScene
} from "../../webgl/scenes/createScene";
import {
    TexturesLoader
} from "./textures.loader";
import {
    isMobile
} from 'react-device-detect'
import HdrFile from "../models/env.hdr";

class WebglEngine {
    constructor(props) {
        this.container = props.container
        this.init()
        this.currentStep = 0
        this.clips = []
        window.engine = this
    }


    init() {
        this.initScene()
        this.initCamera()
        this.initRenderer()
        this.initControls()
        this.initLight()
        this.render()
        this.initAnimationProcessor()
        this.mouseMoveListen()
        this.initRaycaster()
        this.initScenes()

        this.updateOrientation()
        this.initOrientation()
    }

    initOrientation() {
        window.addEventListener('orientationchange', () => {
            this.updateOrientation()
        })
    }

    updateOrientation() {
        setTimeout(() => {
            let landscape = false

            if (window.screen.orientation) {
                const orientation = window.screen.orientation.type

                if (orientation.includes('landscape')) {
                    landscape = true
                }
            } else {
                if ((window.orientation === 90 || window.orientation === -90)) {
                    landscape = true
                }
            }


            this.scenes.forEach(scene => {
                scene.landscape = landscape

                if (scene.active) {
                    scene.updateCamera(landscape)
                }
            })
        }, 150)

    }

    initRaycaster() {
        this.hotspotsRaycaster = new RaycasterEvents(this.container, this.camera)

        this.hotspotsRaycaster._raycaster.params.Points.threshold = 5
    }

    initScene() {
        this.scene = new THREE.Scene();

        this.scene.fog = new THREE.FogExp2(0xffffff, 0.004)
    }

    /*------------------------------
    Init Camera
    ------------------------------*/
    initCamera() {
        this.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 500);
        this.camera.position.set(0, 70, 70);
    }

    /*------------------------------
    Init Light
    ------------------------------*/
    initLight() {;

        const light = new THREE.PointLight(0xfff000, 1)

        light.position.set(15, 15, 15)

        this.scene.add(light)
    }

    /*------------------------------
    Init Controls
    ------------------------------*/
    initControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.addEventListener('change', () => {
            this.renderer && this.render()
        });
        this.controls.target.set(0, 0, 0)
        this.controls.enableZoom = true
        this.controls.enablePan = true
        this.controls.update()
        this.render();
        window.addEventListener('resize', this.onWindowResize);
    }

    /*------------------------------
    Init Renderer
    ------------------------------*/
    initRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
            // preserveDrawingBuffer: true
        });

        // this.renderer.outputEncoding = THREE.sRGBEncoding
        this.renderer.setPixelRatio(window.devicePixelRatio < 1 ? window.devicePixelRatio : 1);
        // this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.container.appendChild(this.renderer.domElement);


       TexturesLoader.loadEnvTexture(HdrFile, this.renderer)
           .then((res) => {
               this.envMap = res
               this.scene.environment = res
           })
    }


    async initLoader() {
        this.loaderScene = createScene(loaderScene, this)

        await this.loaderScene.loadPromise
    }

    scenes = []
    ready = false
    async initScenes() {
        this.scenes = scenes.map(sceneData => {
            const scene = createScene(sceneData, this)

            return scene
        })


        await Promise.all([
            ...this.scenes.map(scene => scene.loadPromise),
            //     wait(2000),
        ])

        this.ready = true

        store.dispatch(toggleLoader(false))

        this.start()
    }

    render = () => {
        this.renderer.render(this.scene, this.camera)
    }

    start() {
        this.setCurrentStep(0)

    }

    setCurrentStep(step) {
        const prevStep = this.currentStep
        this.currentStep = step

        this.scenes.forEach(scene => {
            scene.transition(prevStep, step)
        })

    }


    initAnimationProcessor = () => {
        this.animationProcessor = new AnimationProcessor({
            renderer: this.renderer,

        });

        this.animationProcessor.add(this.render, "updateRenderer");
        this.animationProcessor.add(this.onWindowResize, "updateSize");

        window.addEventListener("resize", this.onWindowResize);
    }

    onWindowResize = () => {
        this.camera.aspect = this.container.offsetWidth / this.container.offsetHeight;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
        this.render();
    }

    mouseMoveListen() {
        if (!isMobile) {
            window.addEventListener('mousemove', this.onMouseMove)
        }
    }

    pointer = new THREE.Vector2()
    onMouseMove = e => {
        const [w, h] = [window.innerWidth, window.innerHeight]

        this.pointer.x = (e.clientX / w) * 2 - 1;
        this.pointer.y = -(e.clientY / h) * 2 + 1;

        const activeModel = this.scenes.find(i => i.active)

        const includeY = activeModel ? activeModel.data.parralax_y : 0

        //TODO return movement
        var y = includeY ? gsap.utils.mapRange(0, window.innerWidth, .1, -.1, e ? e.clientX : 0) : 0
        gsap.to(this.scene.rotation, {y: y})
    }

}


const DEV_TEST_FUNCTIONS = {
    'GO PREV': () => {
        const state = store.getState().state.currentStep
        store.dispatch(setProgress(state - 1))

    },
    'GO NEXT': () => {
        const state = store.getState().state.currentStep

        store.dispatch(setProgress(state + 1))
    },

    'HIDE INTERFACE': () => {
        const [a, b, c] = [document.querySelector('#app'), document.querySelector('#particles'), document.querySelector('#glContainer')]

        const display = a.style.display === 'none' ? 'block' : 'none'

        a.style.display = display
        b.style.display = display
        c.style.pointerEvents = 'auto'
    },
}

window.DEV_TEST_FUNCTIONS = DEV_TEST_FUNCTIONS

const DEV_GUI_CONFIG = [{
    name: 'engine',
    object: DEV_TEST_FUNCTIONS
}]

addDevGUIConfig(DEV_GUI_CONFIG)


export default WebglEngine