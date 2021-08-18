import WebglEngine from "../engine/engine";
class Viewer {
  constructor(props) {
    this.engine = new WebglEngine({
      container: props.container,
	  currentSectionTitle: props.currentSectionTitle,
	  currentStep: props.currentStep,
    });
  }
}

export default Viewer;
