	import WebglEngine from "../engine/engine";
	class Viewer {
	    constructor(props) {
	        this.engine = new WebglEngine({
	            container: props.container
	        });
	    }
	}

	export default Viewer