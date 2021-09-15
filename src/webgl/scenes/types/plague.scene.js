import anime from "animejs";
import { wait } from "helpers/dev.helpers";
import { Scene } from "../scene";

class PlagueScene extends Scene {
  static _name = "plague";
  perlinEnabled = true;
  _type = "Plague";

  setScale(dir, noAnim = false) {
    const scale =
      dir === 1 ? this.data.particlesMinSize : this.data.particlesMaxSize;

    if (noAnim) {
      this.noise.particlesSize = scale;
    }

    anime({
      targets: this.noise,
      particlesSize: scale,
      duration: 500,
      easing: "linear",
    });
  }

  setPerlin(value, animate = true) {
    if (this.perlinAnim) {
      this.perlinAnim.pause();
    }

    if (animate) {
      this.perlinAnim = anime({
        targets: this.noise,
        duration: 3500,
        easing: "linear",
        noiseTransAlpha: value,
        // timeAlpha: data.timeAlpha,
        // noiseRangeLow: data.noiseRangeLow,
        // noiseRangeHigh: data.noiseRangeHigh,
        complete: () => {
          this.perlinAnim = null;
        },
      });
    } else {
      this.noise ? this.noise.noiseTransAlpha = value: this.initNoise();
    }
  }

  async transition(from, to, currentSectionTitle) {
    const changeColor = async (key) => {
      this.objects.forEach((object) => {
        const { shader } = object.userData;

        shader.setColors(object.userData[key][0].colors);
      });
    };

    const open = async (fast = false) => {
      this.toggleFloating(true);
      this.setPerlin(0, false);

      this.active = true;
      this.updateCamera();

      this.fadeOut(true);
      this.setScale(-1, true);
      this.startAnimation(-1, true);
      this.fadeIn();

      if (!fast) {
        await wait(this.fade_config.scale_duration);
      }

      this.startAnimation(1, fast);
      this.setScale(1, fast);
    };

    const close = () => {
      this.startAnimation(-1);

      this.toggleFloating(false);

      this.setScale(-1);
    };

    const sphread = async (fast = false) => {
      this.toggleFloating(false);

      this.active = true;
      this.setPerlin(0, false);
      this.startAnimation(-1, fast);

      if (!fast) {
        await wait(fast ? 0 : 500);
      }

      this.setScale(-1, fast);
    };

    const turbo = (fast) => {
      this.active = true;

      this.setPerlin(1, !fast);
    };

    const out = () => {
      if (this.active) {
        this.fadeOut();
        this.active = false;
      }
    };

    // const steps = [10, 2, 13, 3, 4, 11, 12, 5]
    switch (currentSectionTitle) {
      case "home": {
        //console.log(" currentSectionTitle:" + currentSectionTitle + " to:" + to);
        switch (to) {
          // eslint-disable-next-line no-fallthrough
          case 2: {
            await wait(this.fade_config.scale_duration);

            changeColor("main");
            await open();

            break;
          }
          case 1:
          case 3: {
            const friendly = [2, 4, 5];
            const fromFriendly = friendly.includes(from);

            if (!fromFriendly) {
              await wait(this.fade_config.scale_duration);

              changeColor("main");
              open(true);
            }

            await sphread(!fromFriendly);

            break;
          }

          case 4: {
            const friendly = [3, 5];
            const fromFriendly = friendly.includes(from);

            if (!fromFriendly) {
              await wait(this.fade_config.scale_duration);
              changeColor("main");
              open(true);
              await sphread(true);
              turbo(true);
            } else {
              turbo();
            }

            break;
          }
          
          case 5: {
            const friendly = [4];
            const fromFriendly = friendly.includes(from);

            if (!fromFriendly) {
              await wait(this.fade_config.scale_duration);

              changeColor("main");
              open(true);
              await sphread(true);
              turbo(true);
            } else {
              this.active = true;
            }

            break;
          }
          default: {
            if (this.active) {
              await this.fadeOut();
              this.active = false;
            }
            break;
          }
        }
        return;
      }
      case "work": {
        switch (to) {
          case 0:
          case 1: {
            const friendly = [0, 1, 2];
            const fromFriendly = friendly.includes(from);
            changeColor("extra");

            if (fromFriendly) {
              await wait(this.fade_config.scale_duration);

              await open(true);
            }

            break;
          }
          case 2: {
            const friendly = [0, 1, 2];
            const fromFriendly = friendly.includes(from);

            if (fromFriendly) {
              close();
            } else {
              changeColor("extra");
              open(true);
              close();
            }
            break;
          }
          default: {
            if (this.active) {
              out();
            }
            break;
          }
        }
        return;
      }
      default: {
        if (this.active) {
          await this.fadeOut();
          this.active = false;
        }
        break;
      }
      //   case "careers":{
      //     switch (to) {
      //       case 13: {
      //         const friendly = [10, 11, 12];
      //         const fromFriendly = friendly.includes(from);

      //         if (fromFriendly) {
      //           close();
      //         } else {
      //           changeColor("extra");
      //           open(true);
      //           close();
      //         }

      //         break;
      //       }

      //       default: {
      //         out();
      //       }
      //     }
      //   }
    }
  }

  onLoad() {
    this.initNoise();

    this.noise.perlin1 = this.data.perlin_data.rest;
    this.noise.perlin2 = this.data.perlin_data.turbo;
  }

  toggleFloating(floating) {
    this.objects.forEach((object) => {
      object.userData.shader.setRandomFloating(floating);
    });
  }

  update(_, time) {
    this.noise.update(_, time);
  }
}

export { PlagueScene };
