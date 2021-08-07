import anime from "animejs";
import { wait } from "helpers/dev.helpers";
import { Noise } from "../noise";
import { Scene } from "../scene";

class ChessScene extends Scene {
  static _name = "chess";

  async transition(from, to, currentSectionTitle) {
    switch (currentSectionTitle) {
      case "approach":
        switch (to) {
          case 0: {
            await wait(this.fade_config.scale_duration);

            this.updateCamera();
            this.active = true;
            await this.fadeOut(true);
            this.startAnimation(-1, true);
            await this.fadeIn();

            this.startAnimation(1);

            break;
          }

          default: {
            if (this.active) {
              await this.fadeOut();
              this.active = false;
            }
          }
        }
    }
  }

  onLoad() {
    this.initNoise();
  }

  update(_, time) {
    this.noise.update(_, time);
  }
}

export { ChessScene };
