import React, { useEffect, useRef } from "react";
import Viewer from "webgl/viewer/viewer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { WEBGL } from "three/examples/jsm/WebGL.js";

export default function App(props) {
  const node = useRef(null);
  const { currentStep, currentSectionTitle } = useSelector(
    (state) => state.state
  );

  useEffect(() => {
    if (WEBGL.isWebGLAvailable()) {
      new Viewer({
        container: node.current,
        currentSectionTitle: props.currentSectionTitle,
        currentStep: currentStep,
      });
    } else {
      const warning = WEBGL.getWebGLErrorMessage();
      document.getElementById("glContainer").appendChild(warning);
    }
  }, []);

  return (
    <Container
      id="glContainer"
      ref={node}
      $step={currentStep}
      $section={currentSectionTitle}
    >
      {currentStep <= 3 && props.currentSectionTitle === "home" ? (
        <GradientWrapper></GradientWrapper>
      ) : null}
    </Container>
  );
}

const GradientWrapper = styled.div`
  background: linear-gradient(
    179.65deg,
    #050a10 -5.36%,
    rgba(5, 10, 16, 0) 87.09%
  );
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: fixed;
  z-index: 2;
  transition: all 0.5s;
  filter: blur(
    ${({ $step, $section }) =>
      $step === 5 && $section === "home" ? "10px" : "none"}
  );
`;
