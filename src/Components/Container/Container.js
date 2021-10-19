import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Menu from "./../Menu/Menu";
import ProgressBar from "../ProgressBar/ProgressBar";
import MainText from "./../MainText/MainText";
import FooterContent from "./../Footer/Footer";
import HotspotsContainer from "../Hotspots/HotspotsContainer";
import SchedulePopup from "../SchedulePopup/SchedulePopup";
import EminentApps from "../Services/EminentApps";
import Services from "../Services/Services";
import Projects from "../Projects/Projects";
import About from "../About/About";
import { isMobileOnly } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { addDevGUIConfig } from "../../helpers/dev.helpers";
import {
  getFadeOutFormTen,
  getFadeOutProgressSvg,
  stopChooseStoryTitleAnimation,
  stopCustomAnimationSvg,
  stopFormTenAnimation,
  stopMainTextAnimation,
  getFadeOutCustomText,
  getFadeOutMainText,
} from "../../helpers/animations";
import { ReactComponent as PlugLogo } from "../../assets/images/logo.svg";
import { getThemeContent, getSectionContent } from "../../helpers/content";
import {
  toggleLoader,
  stepBack,
  stepForward,
  setProgress,
  setCurrentThemeData,
} from "../../store/actions/actionCreator";
import { toggleElementsforPopup } from "utils/navigation";


const ContainerContent = (currentData) => {
  const [isLandscape, setLandscape] = useState(
    window.matchMedia("(orientation: landscape)").matches
  );
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isBgBlur, setBgBlur] = useState(false);
  const [touchStart, setTouchStart] = useState({ x1: null, y1: null });
  const { currentSection, currentStep } = useSelector((state) => state.state);
  const currentSectionTitle = currentData.currentSectionTitle;
  const currentTheme = currentData.currentTheme;
  const blurredBackground = useRef(null);
  const mainContainer = useRef(null);
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    getThemeContent(dispatch);
    //First load it will show the home page
    dispatch(setCurrentThemeData(currentData.currentTheme));
    getSectionContent(currentData.currentSectionTitle, dispatch);
  }, [currentData.currentSectionTitle]);

  useEffect(() => {
    dispatch(toggleLoader(false));
    const DEV_TEST_FUNCTIONS = {
      "GO PREV": () => {
        dispatch(stepBack(window.engine.currentSectionTitle));
      },
      "GO NEXT": () => {
        dispatch(stepForward(window.engine.currentSectionTitle));
      },

      "HIDE INTERFACE": () => {
        const [a, b, c] = [
          document.querySelector("#app"),
          document.querySelector("#particles"),
          document.querySelector("#glContainer"),
        ];

        const display = a.style.display === "none" ? "block" : "none";

        a.style.display = display;
        b.style.display = display;
        c.style.pointerEvents = "auto";
      },
    };
    window.DEV_TEST_FUNCTIONS = DEV_TEST_FUNCTIONS;

    const DEV_GUI_CONFIG = [
      {
        name: "engine",
        object: DEV_TEST_FUNCTIONS,
      },
    ];

    addDevGUIConfig(DEV_GUI_CONFIG);
  }, [currentSectionTitle]);

  const stopAnimation = useCallback(
    (e) => {
      if (window.stoppedAnimation) {
        return;
      }
      const allowedContainers = [
        "mainContainer",
        "anime",
        "animeStatic",
        "letter",
        "blurredBackground",
        "custom_anime",
        "customBlock",
        "storyBlur",
        "animeCalltoAction",
      ];
      if (!window.animation) return;
      const isAllowedList = e.target.classList;
      let isAllowed = false;
      [...isAllowedList].forEach((classItem) => {
        if (allowedContainers.includes(classItem)) {
          isAllowed = true;
        }
      });
      if (!isAllowed) return;
      if (currentSection) {
        switch (currentSectionTitle) {
          case "home": {
            switch (currentStep) {
              case 0:
                return;
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
          case "approach": {
            switch (currentStep) {
              case 0:
              case 1: {
                stopCustomAnimationSvg([".svgText", ".svgText path"]);
                window.stoppedAnimation = true;
                return;
              }
              case 2: {
                stopCustomAnimationSvg([".svgText", ".svgText path"]);
                stopCustomAnimationSvg([".svgText2", ".svgText2 path"]);
                window.stoppedAnimation = true;
                return;
              }
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
          case "work": {
            switch (currentStep) {
              case 0: {
                stopFormTenAnimation([".chooseStoryText", ".storyLetter"]);
                stopChooseStoryTitleAnimation([".anime", ".letter"]);
                if (window.animation) {
                  window.stoppedAnimation = true;
                }
                return;
              }
              default: {
                stopMainTextAnimation([".anime", ".letter"]);
                stopMainTextAnimation([".anime2", ".letter2"]);
                stopFormTenAnimation([".footer"]);
                window.stoppedAnimation = true;
              }
            }
            return;
          }
          default: {
            return;
          }
        }
      }
    },
    [currentStep, currentSection, currentSectionTitle]
  );

  const orientationchangeHandler = (e) => {
    if (e.target.orientation === 0) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    //get top of the page
    mainContainer.current.scrollTop = 0;

    window.stoppedAnimation = false;

    if (
      currentSection?.fields[currentStep] &&
      currentSection?.fields[currentStep].fields.blurBackground
    ) {
      setBgBlur(true);
    } else {
      setBgBlur(false);
    }

    window.addEventListener(
      "orientationchange",
      orientationchangeHandler,
      false
    );

    return () => {
      window.removeEventListener("orientationchange", orientationchangeHandler);
      setBgBlur(false);
    };
  }, [currentStep, isLandscape, currentSection?.fields]);

  //FIXME
  const closeSchedulePopup = () => {
    mainContainer.current.style.overflowY = "auto";
    const menu = document.querySelector(".menu");
    menu.removeAttribute("style");
    setPopupOpen(false);
    setActivePopup(null);
    toggleElementsforPopup("show");
  };

  const closeContentPopup = () => {
    mainContainer.current.style.overflowY = "auto";
    const menu = document.querySelector(".menu");
    menu.removeAttribute("style");
    setPopupOpen(false);
    setActivePopup(null);
    toggleElementsforPopup("show");
  };

  const getBlur = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 5:
            return 10;
          default:
            return 15;
        }
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
      }
      default:
        return 15;
    }
  };

  const menuHandler = (flag) => setMenuOpen(flag);

  const getNextStep = (nextStep) => {
    if (isPopupOpen) return;
    if (
      (currentSection.fields[currentStep].locked && nextStep > currentStep) ||
      (window.animation && !window.animation.completed)
    ) {
      return;
    }
    if (nextStep === currentSection.fields.length && nextStep > currentStep)
      return;
    if (nextStep < currentStep && currentStep === 0) return;

    if (
      currentSectionTitle === "work" &&
      currentStep === 1 &&
      nextStep < currentStep
    ) {
      const progressSvgArray = document.querySelectorAll(
        `.styledProgress_${currentStep}`
      );
      getFadeOutProgressSvg(progressSvgArray, () => {
        getFadeOutFormTen([".footer"], 0, () => null);
        getFadeOutFormTen([".formTen"], 100, () => {
          setTimeout(
            () => dispatch(setProgress(nextStep + 1, currentSectionTitle)),
            500
          );
        });
      });
    }

    window.animation.way = "back";
    currentSection.fields[currentStep].isFooterShow &&
      getFadeOutFormTen(".footer", 0, () => null);
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    const progressBorderDefault = document.querySelector(
      `.progressBorderDefault__${currentStep}`
    );
    getFadeOutProgressSvg(
      [...progressSvgArray, progressBorderDefault],
      () => {}
    );
    //getStandardNextStep(nextStep, currentSection.title, dispatch);

    window.animation._name === "anime" &&
      getFadeOutMainText(() => {
        setTimeout(
          () => dispatch(setProgress(nextStep, currentSectionTitle)),
          100
        );
      });
    window.animation._name === "custom_anime" &&
      getFadeOutCustomText(() => {
        setTimeout(
          () => dispatch(setProgress(nextStep, currentSectionTitle)),
          100
        );
      });
  };

  const touchstartHandler = (e) => {
    const firstTouch = e.touches[0];
    if (firstTouch) {
      setTouchStart({
        x1: firstTouch.clientX,
        y1: firstTouch.clientY,
      });
    }
  };

  const touchmoveHandler = (e) => {
    // if (!touchStart.x1 || !touchStart.y1) return;

    wheelHandler(e);
    const x2 = e.touches[0].clientX;
    const y2 = e.touches[0].clientY;
    const xDiff = x2 - touchStart.x1;
    const yDiff = y2 - touchStart.y1;

    if (document.getElementsByClassName("popup").length < 1) {
      if (Math.abs(yDiff) > Math.abs(xDiff)) {
        //top - bottom
        if (yDiff > 0) {
          getNextStep(currentStep - 1); //swipe right
        } else {
          getNextStep(currentStep + 1); //swipe left
        }
      } else {
        //right-left
        if (xDiff > 0) {
          getNextStep(currentStep - 1); //swipe right
        } else {
          getNextStep(currentStep + 1); //swipe right
        }
      }
    }
  };

  const wheelHandler = (e) => {
    // e.preventDefault();              // this one is the key
    e.stopPropagation();

    if (document.getElementsByClassName("popup").length < 1) {
      if (e.deltaY > 0) {
        getNextStep(currentStep + 1);
      } else if (e.deltaY < 0) {
        getNextStep(currentStep - 1);
      }
    }
  };

  const getOverflow = () => {
    switch (currentSectionTitle) {
      case "approach": {
        switch (currentStep) {
          case 0:
          case 1:
          case 2:
          case 3:
            return "auto";
          default:
            return "hidden";
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
          case 1:
            return "auto";
          default:
            return "hidden";
        }
      }
      default:
        return "hidden";
    }
  };

  const popupManager = () => {
    switch (activePopup) {
      case "schedule":
        return <SchedulePopup closeHandler={closeSchedulePopup} />;
      case "services":
        return <Services closeHandler={closeContentPopup} />;
      case "projects":
        return <Projects closeHandler={closeContentPopup} />;
      case "about":
        return <About closeHandler={closeContentPopup} />;
      case "eminentApps":
        return <EminentApps closeHandler={closeContentPopup} />;
      default:
        break;
    }
  };

  if (isLandscape && isMobileOnly) {
    return (
      <Container
        id="app"
        ref={mainContainer}
        $section={currentSection}
        $step={currentStep}
        $isMenuOpen={isMenuOpen}
        className="mainContainer"
      >
        <MobPlug
          $step={currentStep}
          $section={currentSection}
          $color={currentTheme.textColor}
        >
          <PluggedLogo />
          <p>Please rotate your device to portrait mode.</p>
        </MobPlug>
      </Container>
    );
  }

  if (currentData.showApps || currentData.showServices || currentData.showProjects || currentData.showAbout) {
    console.log(currentData);
    return (
      <Container
        id="app"
        ref={mainContainer}
        $section={currentSection}
        $step={currentStep}
        $isMenuOpen={isMenuOpen}
        className="mainContainer"
        $overflow={getOverflow()}
      >
        {activePopup && popupManager()}
        <Menu
          showPopup={setActivePopup}
          menuHandler={menuHandler}
          currentStep={currentStep}
          currentSectionTitle={currentSectionTitle}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
        {currentData.showApps && <EminentApps />}
        {currentData.showServices && <Services />}
        {currentData.showProjects && <Projects />}
        {currentData.showAbout && <About />}
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
  }

  return (
    <Container
      id="app"
      ref={mainContainer}
      $section={currentSection}
      $step={currentStep}
      $isMenuOpen={isMenuOpen}
      className="mainContainer"
      onClick={stopAnimation}
      onTouchStart={touchstartHandler}
      onTouchMove={touchmoveHandler}
      onWheel={wheelHandler}
      $overflow={getOverflow()}
    >
      {activePopup && popupManager()}
      <Menu
        showPopup={setActivePopup}
        menuHandler={menuHandler}
        currentStep={currentStep}
        currentSectionTitle={currentSectionTitle}
        currentSection={currentSection}
        currentTheme={currentTheme}
      />
      {currentSection && (
        <ProgressBar
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
      {currentSection && (
        <MainText
          showPopup={setActivePopup}
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
      {currentSection && (
        <FooterContent
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      )}
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

export default ContainerContent;
/*overflow-y: ${({ $isMenuOpen, $overflow }) =>
  $isMenuOpen ? "hidden" : $overflow};*/

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
  justify-content: center;
  transition: 0.3s ease;
  overflow-x: hidden;
  overflow-y: auto;
  ${
    "" /* ${({ $isMenuOpen, $overflow }) =>
    $isMenuOpen ? "hidden" : $overflow}; */
  }
  touch-action: pan-y;
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
const PluggedLogo = styled(PlugLogo)`
  position: absolute;
  top: 24px;
  width: 124px;
  height: 24px;
`;

const MobPlug = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  ${PluggedLogo} {
    fill: ${({ $color }) => $color};
  }

  p {
    font-family: Archia, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.1em;
    color: ${({ $color }) => $color};
  }
`;
