import React, { useEffect, useRef, useState } from "react";
import Viewer from "webgl/viewer/viewer";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import TweenMax from "gsap";
import Contentful from "../../helpers/contentful";
import { useParams, withRouter } from "react-router-dom";

import {
  setMenuData,
  setStepsTextData,
  setScheduleData,
  setLightThemeData,
  setDarkThemeData,
  setHomeSection,
  setCurrentSection,
  setCurrentSectionTitle,
} from "../../store/actions/actionCreator";
import { lightTheme, darkTheme } from "../../constants/constants";
import store from "../../store/store";

const App = (props) => {
  const node = useRef(null);
  const { currentStep, currentSection, currentSectionTitle } = useSelector(
    (state) => state.state
  );

  useEffect(() => {
    new Viewer({
      container: node.current,
      currentSectionTitle: props.currentSectionTitle,
    });

    console.log(props.currentSectionTitle);
  }, [props.currentSectionTitle]);

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
      $step === 5 && $section === "home" ? "10px" : "none"}
  );
`;
