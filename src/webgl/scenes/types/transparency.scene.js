import { Noise } from "../noise";
import { Scene } from "../scene";
import * as THREE from "three";
import { wait } from "helpers/dev.helpers";

class Transparency extends Scene {
  static _name = "transparency";

  async transition(from, to, currentSectionTitle) {
    switch (currentSectionTitle) {
      case "approach": {
        switch (to) {
          case 1: {
            this.active = true;
            await wait(this.fade_config.scale_duration);
            this.updateCamera();

            // this.enabled = true
            // this.positionWatch = true
            this.startAnimation(1, true);

            await this.fadeOut(true);
            await this.fadeIn();

            this.startAnimation(1);
            // console.log(this.object)

            break;
          }

          default: {
            if (this.active) {
              await this.fadeOut();
              this.active = false;

              break;
            }
          }
        }
        break;
      }
      default: {
        if (this.active) {
          await this.fadeOut();
          this.active = false;

          break;
        }
      }
    }
  }

  onLoad() {
    this.initNoise();

    this.clips.forEach((clip) => {
      clip.loop = THREE.LoopRepeat;

      clip.clampWhenFinished = false;
    });
  }

  update(_, time) {}
}

export { Transparency };
