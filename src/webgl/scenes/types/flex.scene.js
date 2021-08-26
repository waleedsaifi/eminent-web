import { wait } from "helpers/dev.helpers";
import { Scene } from "../scene";
import * as THREE from "three";

class FlexScene extends Scene {
  static _name = "flex";

  async transition(from, to, currentSectionTitle) {
    switch (currentSectionTitle) {
      case "approach": {
        switch (to) {
          case 2: {
            await wait(this.fade_config.scale_duration);

            this.updateCamera();
            this.active = true;
            await this.fadeOut();
            await this.fadeIn();
            this.startAnimation(1);

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
      default: {
        if (this.active) {
          await this.fadeOut();
          this.active = false;
        }
        break;
      }
    }
  }

  onLoad() {
    this.initNoise();

    this.clips.forEach((clip) => {
      clip.clampWhenFinished = false;
      clip.loop = THREE.LoopRepeat;
    });
  }

  update(_, time) {
    this.noise.update(_, time);
  }
}

export { FlexScene };
