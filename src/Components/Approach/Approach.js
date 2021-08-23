import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { BREAKPOINTS } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./../Menu/Menu";
import ProgressBar from "../ProgressBar/ProgressBar";
import MainText from "./../MainText/MainText";
import Footer from "./../Footer/Footer";
import HotspotsContainer from "../Hotspots/HotspotsContainer";
import {
  setMenuData,
  setStepsTextData,
  setScheduleData,
  setLightThemeData,
  setDarkThemeData,
  setHomeSection,
  setCurrentSection,
  setCurrentSectionTitle,
  setCurrentStep,
  setCurrentThemeData,
  setProgress,
} from "../../store/actions/actionCreator";

export default ({ showPopup, menuHandler }) => {
  const node = useRef(null);
  const [isBgBlur, setBgBlur] = useState(false);
  const blurredBackground = useRef(null);
  const {
    currentStep,
    currentTheme,
    currentSection,
    currentSectionTitle,
    lightThemeData,
  } = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = useState(null);
  console.log(currentSectionTitle);
  console.log(currentTheme);


  const getBlur = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 5:
            return 10;
          default:
            return 15;
        }
        return;
      }
      case "approach": {
        switch (currentStep) {
          case 3:
            return 5;
          case 4:
            return 5;
          default:
            return 15;
        }
        return;
      }
      default:
        return 15;
    }
  };

  return (
    <Container
      id="Approach"
      ref={node}
      $step={currentStep}
      $section={currentSectionTitle}
    >
      <Menu showPopup={setActivePopup} menuHandler={menuHandler} />
      <ProgressBar />
      <MainText />
      <Footer />
      {isBgBlur && (
        <BlurredBackground
          ref={blurredBackground}
          className="blurredBackground"
          $blur={getBlur()}
        />
      )}
      <HotspotsContainer />
    </Container>
  );


};

const mobBreakpoint = 900;

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

const BlurredBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(${({ $blur }) => $blur}px);
`;
