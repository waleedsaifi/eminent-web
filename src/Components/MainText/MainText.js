import React, { useEffect } from "react";
// import styled from "styled-components";
// import { BREAKPOINTS } from "../../constants/constants";
// import { useDispatch } from "react-redux";
import anime from "animejs/lib/anime.es.js";
// import { setProgress } from "../../store/actions/actionCreator";
// import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";
// import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import {
  getFadeInChooseStoryText,
  getFadeInCustomText,
  getFadeInFormTen,
  getFadeInMainText,
  getFadeInProgressSvg,
} from "../../helpers/animations";

// import ProjectsContent from "../Projects/Projects";
// import { toggleElementsforPopup } from "utils/navigation";

const App = ({
  showPopup,
  menuHandler,
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  // const dispatch = useDispatch();

  useEffect(() => {
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    const progressBorderDefault = document.querySelector(
      `.progressBorderDefault__${currentStep}`
    );
    getFadeInProgressSvg([progressSvgArray, progressBorderDefault], () => "");

    if (currentSectionTitle === "approach" && currentStep === 0) {
      window.animation = anime;
      window.animation.way = "forward";
    }

    if (currentSectionTitle === "work" && currentStep === 0) {
      window.animation = anime;
      window.animation.way = "forward";
      getFadeInFormTen(".chooseStory", 0, () =>
        setTimeout(() => (window.stoppedAnimation = true), 1000)
      );
      const storyWrapper = document.querySelectorAll(".chooseStoryText");
      if (storyWrapper) {
        [...storyWrapper].forEach((i) => {
          i.innerHTML = i.textContent.replace(
            /\S/g,
            "<span class='storyLetter'>$&</span>"
          );
          getFadeInChooseStoryText(() =>
            setTimeout(() => (window.stoppedAnimation = true), 1000)
          );
        });
      }
    }

    if (currentSectionTitle === "work" && currentStep === 1) {
      getFadeInFormTen(".formTen", 0, () => {
        //window.engine.start();
        setTimeout(() => (window.stoppedAnimation = true), 1000);
      });
      return;
    }

    //const customSteps = [6, 7, 8, 9];
    if (
      currentSectionTitle === "approach" &&
      window.animation &&
      currentStep < 4
    ) {
      window.animation.way = "forward";
      getFadeInCustomText(() => {
        window.animation._name = "custom_anime";
        setTimeout(() => (window.stoppedAnimation = true), 1000);
      });
      return;
    }

    const textWrapper = document.querySelectorAll(".anime");
    const textWrapper2 = document.querySelectorAll(".anime2");
    if (textWrapper) {
      [...textWrapper].forEach((i) => {
        i.innerHTML = i.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      });
    }
    if (textWrapper2) {
      [...textWrapper2].forEach((i) => {
        i.innerHTML = i.textContent.replace(
          /\S/g,
          "<span class='letter2'>$&</span>"
        );
      });
    }

    let timeout = 0;
    let container = document.getElementById("glContainer");
    if (currentSectionTitle !== "work") {
      timeout = currentStep === 0 ? 2000 : 0;

      if (currentStep === 0 && container != null)
        setTimeout(() => (container.style.opacity = "1"), 2000);
    } else {
      timeout = 500;
    }
    getFadeInMainText(() => {
      //   window.engine.start();

      window.animation._name = "anime";
      setTimeout(() => (window.stoppedAnimation = true), 700);
    }, timeout);
  }, [currentSectionTitle, currentStep]);

  // const getNextStep = () => {
  //   const progressSvgArray = document.querySelectorAll(
  //     `.styledProgress_${currentStep}`
  //   );
  //   //getNextStepFromForm(currentStep + 1, progressSvgArray, dispatch);
  //   // if (getNextStepFromForm(progressSvgArray)) {
  //   //   setTimeout(
  //   //     () => dispatch(setProgress(currentStep + 1, currentSectionTitle)),
  //   //     500
  //   //   );
  //   // }
  //   getFadeOutProgressSvg(progressSvgArray, () => {
  //     getFadeOutFormTen([".footer"], 0, () => null);
  //     getFadeOutFormTen([".formTen"], 100, () => {
  //       setTimeout(
  //         () => dispatch(setProgress(currentStep + 1, currentSectionTitle)),
  //         500
  //       );
  //     });
  //   });
  // };

  switch (currentSectionTitle) {
    case "home": {
      const HomeContent = React.lazy(() => import("./HomeContent"));
      return (
        <HomeContent
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      );
    }
    case "approach": {
      const ApproachContent = React.lazy(() => import("./ApproachContent"));
      return (
        <ApproachContent
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      );
    }
    case "work": {
      const WorkContent = React.lazy(() => import("./WorkContent"));
      return (
        <WorkContent
          currentSectionTitle={currentSectionTitle}
          currentStep={currentStep}
          currentSection={currentSection}
          currentTheme={currentTheme}
        />
      );
    }
    default:
      return;
  }
};

export default App;

// const AnimatedSVG = css`
//   display: inline-block;
//   stroke: rgba(255, 255, 255, 0);
// `;
// const MainText = styled.div`
//   opacity: 0;
//   position: ${({ $position }) => ($position ? $position : "fixed")};
//   color: ${({ $color }) => $color};
//   font-size: ${({ $fontSize }) => $fontSize[0]};
//   top: ${({ $top }) => ($top ? $top[0] : "30%")};
//   text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
//   left: ${({ $left }) => $left};
//   max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.deskXl.t1};
//   white-space: pre-line;
//   letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
//   line-height: ${({ $lineHeight, $fontSize }) =>
//     $lineHeight ? $lineHeight : $fontSize[0]};
//   text-transform: ${({ $textTransform }) =>
//     $textTransform ? $textTransform : "none"};
//   font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "400")};
//   margin: ${({ $margin }) => ($margin ? $margin : "unset")};

//   @media (max-width: "1080px") {
//     font-size: ${({ $fontSize }) => $fontSize[1]};
//     max-width: ${({ $boxMaxWidth }) =>
//       $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t1 : $boxMaxWidth.deskXl.t1};
//     top: ${({ $top }) => ($top ? $top[1] : "30%")};
//   }
//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.tablet.t1};
//     font-size: ${({ $fontSize }) => $fontSize[1]};
//     top: ${({ $top }) => ($top ? $top[1] : "30%")};
//     line-height: 42px;
//   }
//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     font-size: ${({ $fontSize }) => $fontSize[2]};
//     max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.mob.t1};
//     line-height: 34px;
//     top: ${({ $top }) => ($top ? $top[2] : "30%")};
//   }
// `;
// const MainTextSecond = styled(MainText)`
//   ${
//     "" /* max-width: ${({ $boxMaxWidth }) =>
//     $boxMaxWidth.deskXl.t2 ? $boxMaxWidth.deskXl.t2 : "80%"}; */
//   }
//   max-width:700px;
//   line-height: ${({ $lineHeight }) =>
//     $lineHeight ? $lineHeight[0] : ($fontSize) => $fontSize[0]};
//   margin: ${({ $margin }) => ($margin ? $margin : "unset")};
//   padding: 10px 0px;

//   @media (max-width: ${BREAKPOINTS.xl}px) {
//     ${
//       "" /* max-width: ${({ $boxMaxWidth }) =>
//       $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t2 : "80%"}; */
//     }
//     max-width:700px;
//     line-height: ${({ $lineHeight }) =>
//       $lineHeight ? $lineHeight[0] : ($fontSize) => $fontSize[0]};
//   }
//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     ${
//       "" /* max-width: ${({ $boxMaxWidth }) =>
//       $boxMaxWidth.tablet ? $boxMaxWidth.tablet.t2 : "80%"}; */
//     }
//     max-width:60%;
//     line-height: ${({ $lineHeight }) =>
//       $lineHeight ? $lineHeight[1] : "42px"};
//   }
//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     max-width: ${({ $boxMaxWidth }) =>
//       $boxMaxWidth.mob ? $boxMaxWidth.mob.t2 : "80%"};
//     line-height: ${({ $lineHeight }) =>
//       $lineHeight ? $lineHeight[2] : "27px"};
//   }
// `;
// const CallActionBtn = styled.button`
//   color: ${({ $color }) => $color};
//   font-size: 15px;
//   letter-spacing: 3px;
//   text-decoration: none;
//   justify-self: ${({ $justifySelf }) =>
//     $justifySelf ? $justifySelf : "center"};
//   position: relative;
//   display: block;
//   outline: none;
//   cursor: pointer;
//   transition: 0.3s ease;

//   .letter {
//     display: inline-block;
//     line-height: 1em;
//     opacity: 0;
//   }
// `;
// const ScheduleBtnAnimation = keyframes`
// 	0%   { stroke-dashoffset: 1000;}
// 	100% { stroke-dashoffset: 0; }
// `;
// const ScheduleBtnBorder = styled(RightBtnSvg)`
//   content: "";
//   display: block;
//   position: absolute;
//   left: 0;
//   top: 0%;
//   width: 100%;
//   height: 100%;
//   opacity: 1;
//   stroke: ${({ $color }) => $color};
//   stroke-dashoffset: 520;
//   stroke-dasharray: 520;
//   stroke-width: 2px;

//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     stroke: transparent;
//   }
// `;
// const ScheduleBtn = styled(CallActionBtn)`
//   background: ${({ $bg }) => $bg};
//   padding: 13px 15px;
//   border-radius: 67px;
//   white-space: nowrap;
//   border: 1px solid transparent;
//   position: relative;
//   transition: 0.2s ease-in-out;
//   ${"" /* margin-top: 60px; */}
// `;
// const Continue = styled.div`
//   color: ${({ $color }) => $color};
//   position: absolute;
//   top: ${({ $top }) => $top};
//   text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
//   text-decoration: none;
//   font-size: 16px;
//   cursor: pointer;
//   padding-bottom: 5px;
//   &:after {
//     position: absolute;
//     content: "";
//     width: 100%;
//     height: 1px;
//     left: 0;
//     bottom: 4px;
//     background: #fff;
//     transition: 0.7s ease;
//     opacity: 1;
//   }
// `;
// const ContinueBtnBorder = styled.svg`
//   content: "";
//   display: block;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   opacity: 1;
//   stroke: ${({ $color }) => $color};
//   stroke-dashoffset: 1000;
//   stroke-dasharray: 1000;
//   stroke-width: 2px;

//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     display: none;
//   }
// `;
// const ContinueBtn = styled(CallActionBtn)`
//   opacity: 0;
//   background: ${({ $bg }) => $bg};
//   padding: 13px 10px;
//   border-radius: 67px;
//   white-space: nowrap;
//   border: 1px solid transparent;
//   position: relative;
//   transition: 0.2s ease-in-out;
//   top: ${({ $top }) => $top};
//   display: block;

//   @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
//     &:hover {
//       background: none;

//       ${ContinueBtnBorder} {
//         animation: ${ScheduleBtnAnimation} 0.7s ease-in;
//         animation-direction: normal;
//         stroke: ${({ $bg }) => $bg};
//         stroke-dashoffset: 0;
//       }
//     }
//     &:active {
//       background: ${({ $bg }) => $bg};
//     }
//   }

//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     ${"" /* top: 70%; */}
//     opacity: 1;
//     height: 40px;
//     display: block;
//     align-self: stretch;
//     align-items: center;
//     transition: 0.3s ease;
//     background: none;
//     color: var(--block1-text-primary);
//     font-size: 21px;
//     border-radius: 0 0 45px 45px;
//     padding: 0px;
//     border-bottom: none;
//     & > span {
//       padding-left: 21px;
//     }
//   }

//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     ${"" /* top: 70%; */}
//     height: 50px;
//     background: ${({ $bg }) => $bg};
//     border-radius: 67px;
//     font-size: 18px;
//     color: #fff;
//     padding: 15px;
//     & > span {
//       padding-left: 0px;
//     }
//   }
// `;
// const ContinueArrow = styled.span`
//   content: "\ea3c";
//   font-size: 28px;
//   height: 20px;
//   width: 5px;
//   @media (min-width: ${BREAKPOINTS.tablet}px) {
//     &:hover {
//       &:after {
//         width: 0;
//         opacity: 0;
//       }
//       svg {
//         transform: rotate(45deg);
//       }
//     }
//   }

//   @media (max-width: ${BREAKPOINTS.tablet}px) {
//     bottom: 78px;
//     font-size: 18px;
//   }
//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     bottom: 78px;
//   }
// `;

// const LogoIcon = styled(LogoIconSVG)`
//   display: "inline-block";
//   stroke: rgba(255, 255, 255, 0);
//   width: 55px;
//   height: 55px;
//   @media (max-width: ${BREAKPOINTS.mob}px) {
//     height: 34px;
//     width: 40px;
//   }
// `;
