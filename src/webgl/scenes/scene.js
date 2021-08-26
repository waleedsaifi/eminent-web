import anime from "animejs";
import * as THREE from "three";
import { Vector3 } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { BREAKPOINTS } from "constants/constants";

import { Noise } from "./noise";

const fade_config = {
  move_duration: 700,
  scale_wait: 400,
  scale_duration: 500,
  duration: 700,
};

const animate = (targets, duration, properties = {}) => {
  return new Promise((resolve) => {
    anime({
      targets,
      duration,
      ...properties,
      easing: "easeInOutQuad",
      complete: () => resolve(),
      // change: () => {
      // }
    });
  });
};

class Scene {
  group = new THREE.Group();
  materials = {};
  fade_config = fade_config;
  enabled = false;
  objects = [];
  positionWatch = true;
  _type = "Scene";
  _active = false;
  get active() {
    return this._active;
  }
  set active(value) {
    this.noise._shaders.forEach((shader) => {
      shader.material.visible = value;
    });

    this.noise.someMaterials.forEach((item) => {
      item.visible = value;
    });

    this._active = value;
  }

  constructor(data, engine) {
    this.data = data;
    this.engine = engine;

    this._init();
  }

  transition(from, to, currentSectionTitle) {
    console.log(from, to);
  }

  initNoise() {
    this.noise = new Noise(this);
  }

  async fadeOut(noAnim = false) {
    const { scale_duration } = fade_config;

    if (noAnim) {
      animate(this.noise, 0, {
        scale: 0,
      });
    } else {
      await animate(this.noise, scale_duration, {
        scale: 0,
      });
    }

    this.toggleGroup(false);
    this.enabled = false;
  }

  async fadeIn(noAnim = false) {
    const { scale_duration } = fade_config;

    this.enabled = true;
    this.positionWatch = true;

    this.toggleGroup(true);

    if (noAnim) {
      animate(this.noise, 0, {
        scale: 1,
      });
    } else {
      await animate(this.noise, scale_duration, {
        scale: 1,
      });
    }
  }

  render = (delta, time) => {};

  toggleGroup = (visible = false) => {
    this.group.visible = visible;
  };

  onLoad() {}

  _init() {
    const { engine } = this;

    engine.scene.add(this.group);

    this.engine.animationProcessor.add(
      this.render,
      THREE.MathUtils.generateUUID()
    );

    this.loadPromise = this.load();
  }

  ready = false;

  load() {
    return new Promise((resolve, reject) => {
      new FBXLoader().load(
        this.data.asset,
        async (fbx) => {
          this.ready = true;
          this.object = fbx;

          this.group.add(fbx);
          fbx.visible = false;

          this.cameraProps = {};

          this.cameraProps.target = new THREE.Vector3().fromArray(
            this.data.target || [0, 0, 0]
          );

          if (this.data.campos) {
            this.cameraProps.position = new Vector3().fromArray(
              this.data.campos
            );
          }

          if (!this.cameraProps.position) {
            const cam =
              this.object.getObjectByName("camera1") ||
              this.object.getObjectByName("Camera2") ||
              this.object.getObjectByName("main_camera");

            this.cameraProps.position = cam.position.clone();
          }

          if (this.data.tablet_campos) {
            this.cameraPropsTablet = {
              position: new THREE.Vector3().fromArray(this.data.tablet_campos),
              target: new THREE.Vector3().fromArray(this.data.tablet_target),
            };
          }

          this.initAnimations();

          this.group.visible = false;

          this.onLoad();
          resolve(this.object);
        },
        null,
        reject
      );
    });
  }

  initAnimations() {
    const { object } = this;

    this.mixer = new THREE.AnimationMixer(object);
    this.clips = object.animations.map((action) => {
      const clip = this.mixer.clipAction(action);

      clip.loop = THREE.LoopOnce;
      clip.clampWhenFinished = true;

      clip.setDuration(this.data.animation_duration);

      return clip;
    });

    this.engine.animationProcessor.add((d) => {
      this.mixer.update(d);
    }, THREE.MathUtils.generateUUID());
  }

  startAnimation(dir = 1, noAnim = false) {
    const [anim] = this.clips;

    anim.timeScale = Math.abs(anim.timeScale) * dir;
    anim.paused = false;
    anim.play();

    if (noAnim) {
      if (dir === 1) {
        this.mixer.update(this.mixer.time);
        this.mixer.update(anim._clip.duration * 2);
      } else {
        this.mixer.update(this.mixer.time);
        this.mixer.update(anim._clip.duration * 2);
      }
    } else {
    }
  }

  pauseAnimation() {
    const [anim] = this.clips;

    anim.paused = true;
  }

  setCamPos() {
    const { cameraProps, engine } = this;

    if (cameraProps) {
      engine.controls.target.copy(cameraProps.target.clone());

      engine.controls.update();

      engine.camera.position.copy(cameraProps.position.clone());

      engine.camera.updateProjectionMatrix();

      engine.controls.update();
    }
  }

  setCamPosTablet() {
    const { cameraPropsTablet, engine } = this;

    if (cameraPropsTablet) {
      engine.controls.target.copy(cameraPropsTablet.target.clone());

      engine.controls.update();

      engine.camera.position.copy(cameraPropsTablet.position.clone());

      engine.camera.updateProjectionMatrix();

      engine.controls.update();
    }
  }

  updateCamera() {
    const isTabletLandscape =
      window.innerWidth < BREAKPOINTS.tablet &&
      window.innerWidth > BREAKPOINTS.mob &&
      this.landscape;

    if (isTabletLandscape) {
      if (this.cameraPropsTablet) {
        this.setCamPosTablet();
      } else {
        this.setCamPos();
      }
    } else {
      this.setCamPos();
    }
  }

  landscape = false;
  orientationChange(landscape) {
    this.landscape = landscape;
    this.updateCamera();
  }
}

export { Scene };
