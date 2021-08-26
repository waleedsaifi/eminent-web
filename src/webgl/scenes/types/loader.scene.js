import anime from "animejs";
import {
    wait
} from "helpers/dev.helpers";

import {
    Scene
} from "../scene";
import * as THREE from 'three'

class LoaderScene extends Scene {
    static _name = 'loader'

    setScale(dir, noAnim = false) {
        const scale = dir === 1 ? this.data.particlesMinSize : this.data.particlesMaxSize

        if (noAnim) {
            this.noise.particlesSize = scale
        }

        anime({
            targets: this.noise,
            particlesSize: scale,
            duration: 500,
            easing: 'linear'
        })
    }

    async start() {
        await wait(this.fade_config.scale_duration)

        this.active = true
        this.updateCamera()

        this.startAnimation()
        await this.fadeOut(true)
        await this.fadeIn()


        // default: {
        //   if(this.active) {
        //     this.fadeOut()
        //     this.active = false
        //   }
        // } 
    }

    async hide() {
        await this.fadeOut(true)
        this.active = false
    }

    onLoad() {
        this.initNoise()

        this.clips.forEach(clip => {
            clip.loop = THREE.LoopRepeat

            clip.clampWhenFinished = false
        })

        this.start()
    }

    update(_, time) {
        this.noise.update(_, time)
    }
}

export {
    LoaderScene
}