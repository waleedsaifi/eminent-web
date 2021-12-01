import {Clock} from "three";

class AnimationProcessor {
  animations = [];
  active = false;
  FRAME = 0;
  clock = new Clock();

  static STATUSES = {
    ACTIVE: 0,
    PAUSED: 1,
  };

  constructor() {
    this._start();

    this.init();
  }

  init = () => {
    this.animate();
  };

  _start = () => {
    this.active = true;
  };

  _stop = () => {
    this.active = false;
  };

  add = (f, key) => {
    const item = {
      f,
      key,
      status: AnimationProcessor.STATUSES.ACTIVE,
    };

    this.animations.push(item);
  };

  remove = (key) => {
    this.animations = this.animations.filter((item) => item.key !== key);
  };

  pause = (key) => {
    const targetAnimation = this.animations.find((item) => item.key === key);

    if (targetAnimation)
      targetAnimation.status = AnimationProcessor.STATUSES.PAUSED;
  };

  animate = () => {
    if (this.active) {
      const time = this.clock.getDelta();
      const time2 = this.clock.getElapsedTime();
      this.animations.forEach((animation) => {
        if (animation.status === AnimationProcessor.STATUSES.ACTIVE) {
          animation.f(time, time2);
        }
      });

      requestAnimationFrame(this.animate);
      // =====TEST
    }
  };
}

export default AnimationProcessor;
