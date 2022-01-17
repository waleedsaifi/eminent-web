import React from "react";
import { GradientController } from "./gradient";
import { ParticleBg } from "./view";
import { useState, useEffect } from "react";

const ParticleBackgroundContent = () => {
  const _canvas = React.useRef(null);
  const _root = React.useRef(null);
  const size = useWindowSize();

  React.useEffect(() => {
    if (_canvas.current) {
      new ParticleBg(_canvas.current);
    }
  }, [_canvas, size]);

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
        // zIndex: 4,
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={_canvas}
        id="ParticleCanvas"
        style={{
          zIndex: 4,
          opacity: 0,
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          transition: "all 2s",
          //background: "url('https://eminent-web.s3.amazonaws.com/images/home/bg.jpg') left top / cover no-repeat",
        }}
      ></canvas>{" "}
    </div>
  );
};

export default ParticleBackgroundContent;

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}
