import React, { useEffect, useRef } from "react";
import Viewer from "webgl/viewer/viewer";
import styled from "styled-components";
import { useSelector } from "react-redux";
import TweenMax from "gsap";

const App = () => {
  const node = useRef(null);
  const { currentStep, currentSection } = useSelector((state) => state.state);

  useEffect(() => {
    new Viewer({
      container: node.current,
    });
  }, []);

  return (
    <Container
      id="glContainer"
      ref={node}
      $step={currentStep}
      $section={currentSection}
    >
      {//currentStep.match(/^(Slide 1|Slide 2|Slide 3|Slide 4)$/) &&
      currentStep <= 3 && currentSection === "home" ? (
        <GradientWrapper></GradientWrapper>
      ) : null}
    </Container>
  );
};
export default App;

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
      $step === "Slide 6" && $section === "home" ? "10px" : "none"}
  );
`;
