import React from "react";
import { GradientController } from "./gradient";
import { ParticleBg } from "./view";

const ParticleBackground = () => {
  const _canvas = React.useRef(null);
  const _root = React.useRef(null);

  React.useEffect(() => {
    if (_canvas.current) {
      new ParticleBg(_canvas.current);
    }
  }, [_canvas]);

  React.useEffect(() => {
    if (_root.current) {
      new GradientController(_root.current);
    }
  }, [_root]);

  return (
    <div
      ref={_root}
      id="particles"
      style={{
        zIndex: 1,
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={_canvas}
        style={{
          zIndex: 2,
          opacity: 0,
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          transition: "all 2s",
        }}
      ></canvas>{" "}
    </div>
  );
};

export { ParticleBackground };
