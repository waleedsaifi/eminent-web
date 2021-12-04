import React, { useRef } from "react";
import * as MainContent from "../../helpers/main_content";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as WatchAgainSvg } from "../../assets/images/watchAgainArrow.svg";
import each from "lodash/each";
import throttle from "lodash/throttle";
import ScheduleForm from "../SchedulePopup/ScheduleForm";
import { useDispatch } from "react-redux";
import {
  getFadeOutChooseStoryText,
  getFadeOutFormTen,
  getFadeOutProgressSvg,
} from "../../helpers/animations";
import { setProgress } from "../../store/actions/actionCreator";
import anime from "animejs/lib/anime.es.js";

const WorkContent = ({
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  const chooseStoryTextContainer = useRef(null);
  const storyItem1 = useRef(null);
  const storyItem2 = useRef(null);
  const storyItem3 = useRef(null);
  const storyItem4 = useRef(null);
  const svgWatch = useRef(null);
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    if (window.animation.way === "back") return;
    window.animation.way = "back";
    //------
    let target = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;
    if (!target) {
      const candidate = e.target.parentElement;
      target = candidate.parentElement.classList.contains("storyItem")
        ? candidate.parentElement
        : null;
    }
    if (!target) return;

    const allItems = document.querySelectorAll(".storyItem");
    [...allItems].forEach((i) => {
      if (i !== target) {
        const context = i.querySelector(".storyItem-context");
        context.style.opacity = "0.5";
      }
    });
    if (window.innerWidth > BREAKPOINTS.mob) {
      target.style.transform = "scale(1.1)";
    } else {
      target.style.transform = "scale(1.05)";
    }
    //------
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    getFadeOutFormTen([".footer"], 0, () => null);
    getFadeOutChooseStoryText();
    getFadeOutProgressSvg(progressSvgArray, () => {
      window.animation.reverse();
      window.animation.play();
      window.animation.complete = () => {
        setTimeout(() =>
          dispatch(setProgress(currentStep + 1, currentSectionTitle), 500)
        );
      };
    });
  };

  const watchAgain = () => {
    anime
      .timeline()
      .add({
        targets: svgWatch.current,
        rotate: {
          value: 360,
          duration: 800,
          easing: "easeInCubic",
        },
      })
      .finished.then(() => {
        // window.engine.setCurrentStep(0);
        dispatch(setProgress(0, currentSectionTitle));
      });
  };

  const formDataValidator = (flag) => {
    if (!flag) return;

    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    getFadeOutProgressSvg(progressSvgArray, () => {
      getFadeOutFormTen([".footer"], 0, () => null);
      getFadeOutFormTen([".formTen"], 100, () => {
        setTimeout(() =>
          dispatch(setProgress(currentStep + 1, currentSectionTitle), 500)
        );
      });
    });
  };

  const mouseLeaveStoryContainer = () => {
    const storyItems = [
      storyItem1.current,
      storyItem2.current,
      storyItem3.current,
      storyItem4.current,
    ];
    const blurTextEl =
      chooseStoryTextContainer.current.querySelector(".storyBlur");
    chooseStoryTextContainer.current.style.opacity = 1;
    blurTextEl.style.opacity = 0;
    each(storyItems, (item) => {
      const blurEl = item.querySelector(".storyBlur");
      item.style.opacity = 1;
      blurEl.style.opacity = 0;
    });
  };

  const mouseMoveHandlerStory = (e) => {
    if (window.innerWidth < 900) return;
    const storyItemEl = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;

    if (!storyItemEl) return;
    const el = storyItemEl.querySelector(".storyItem-context");

    if (!el) return;

    const height = el.clientHeight;
    const width = el.clientWidth;

    const xVal = e.clientX - el.getBoundingClientRect().x;
    const yVal = e.clientY - el.getBoundingClientRect().y;

    const yRotation = -5 + 20 * ((xVal - width / 9) / width);
    const xRotation = 10 + -20 * ((yVal - height / 9) / height);

    el.style.transform =
      "perspective(500px) rotateX(" +
      xRotation +
      "deg) rotateY(" +
      yRotation +
      "deg)";
  };

  const mouseMoveHandlerStoryThrottle = throttle(
    (e) => mouseMoveHandlerStory(e),
    17
  );

  const mouseLeaveHandlerStory = (e) => {
    if (window.innerWidth < 900) return;
    const storyItemEl = e.target.classList.contains("storyItem")
      ? e.target
      : e.target.parentElement.classList.contains("storyItem")
      ? e.target.parentElement
      : null;

    if (!storyItemEl) return;
    const el = storyItemEl.querySelector(".storyItem-context");

    if (!el) return;
    const transformData = "perspective(500px) rotateX(0deg) rotateY(0deg)";
    setTimeout(() => {
      el.style.transform = transformData;
    }, 100);
  };

  const getWorkContent = () => {
    switch (currentStep) {
      default:
      case 0:
        return (
          <ChooseStoryWrapper className="chooseStoryWrapper">
            <ChooseStoryTextContainer ref={chooseStoryTextContainer}>
              <ChooseStoryText
                className="chooseStoryText"
                $color={currentTheme.textColor}
                $top={MainContent.getTopMainText(0)}
                $step={0}
                $fontSize={MainContent.getFontSize(0).text}
                $left={MainContent.getLeft(0)}
                $letterSpacing={MainContent.getLetterSpacing(0)}
                $textAlign={MainContent.getTextAlign(0)}
              >
                {currentSection.fields[0].fields.subText}
              </ChooseStoryText>
              <span className="storyBlur" />
            </ChooseStoryTextContainer>
            <ChooseStoryTitle
              className="anime"
              $color={currentTheme.textColor}
              $top={MainContent.getTopMainText(0)[0]}
              $step={0}
              $fontSize={MainContent.getFontSize(0).title}
              $left={MainContent.getLeft(0)}
              $letterSpacing={MainContent.getLetterSpacing(0)}
            >
              {currentSection.fields[0].fields.mainText}
            </ChooseStoryTitle>
            <ChooseStory
              className="chooseStory"
              onMouseOut={mouseLeaveStoryContainer}
            >
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem1}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={MainContent.getFontSize(0)}
                >
                  <span className="num">01.</span>
                  <span className="text1">
                    {currentSection.fields[0].fields.description1}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem2}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={MainContent.getFontSize(0)}
                >
                  <span className="num">02.</span>
                  <span className="text2">
                    {currentSection.fields[0].fields.description2}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem3}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={MainContent.getFontSize(0)}
                >
                  <span className="num">03.</span>
                  <span className="text3">
                    {currentSection.fields[0].fields.description3}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
              <ChooseStoryItem
                onClick={clickHandler}
                onMouseMove={mouseMoveHandlerStoryThrottle}
                onMouseLeave={mouseLeaveHandlerStory}
                className="storyItem"
                ref={storyItem4}
              >
                <StoryContext
                  className="storyItem-context"
                  $fontSize={MainContent.getFontSize(0)}
                >
                  <span className="num">04.</span>
                  <span className="text4">
                    {currentSection.fields[0].fields.description4}
                  </span>
                </StoryContext>
                <span className="storyBlur" />
                <FocusHolder />
              </ChooseStoryItem>
            </ChooseStory>
          </ChooseStoryWrapper>
        );
      case 1:
        return (
          <>
            <FormContainer
              className="formTen"
              $color={currentTheme.textColor}
              $bg={MainContent.getBackground(1)}
            >
              <ScheduleHeader $color={currentTheme.textColor}>
                {currentSection.fields[currentStep].fields.mainText}
              </ScheduleHeader>
              <FormHeader $color={currentTheme.textColor}>
                {currentSection.fields[currentStep].fields.subText}
              </FormHeader>
              <ScheduleForm
                color={currentTheme.textColor}
                background={"rgb(11, 17, 23)"}
                focus={MainContent.getFocus(1)}
                inputFocusHandler={MainContent.inputFocusHandler}
                inputOnfocusoutHandler={MainContent.inputOnfocusoutHandler}
                validateData={formDataValidator}
              />
            </FormContainer>
          </>
        );
      case 2:
        return (
          <>
            <MainText
              className="anime"
              $color={currentTheme.textColor}
              $top={MainContent.getTopMainText(2)}
              $step={currentStep}
              $fontSize={MainContent.getFontSize(2)}
              $left={MainContent.getLeft(2)}
              $boxMaxWidth={MainContent.getBoxMaxWidth(2, currentSectionTitle)}
            >
              {currentSection.fields[currentStep].fields.mainText}
            </MainText>
            <WatchAgain onClick={watchAgain}>
              {currentSection.fields[currentStep].fields.subText}
              <SvgWatchAgain ref={svgWatch} />
            </WatchAgain>
          </>
        );
    }
  };

  return getWorkContent;
};

export default WorkContent;

const SvgWatchAgain = styled(WatchAgainSvg)`
  stroke: #fff;
  width: 25px;
  height: 25px;
  display: inline-block;
  position: absolute;
  right: -40px;
  top: 8px;
  transition: 0.2s linear;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 20px;
    height: 20px;
    top: 2px;
  }
`;

const ChooseStoryWrapper = styled.div`
  padding-left: 30px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: absolute;
    top: 14%;
    width: 90%;
    padding-left: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    width: 100%;
  }
`;
const ChooseStoryTextContainer = styled.div`
  position: relative;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    .storyBlur {
      display: block;
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      border: none;
      transition: 0.2s ease;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    .storyBlur {
      display: none;
    }
  }
`;
const ChooseStoryText = styled.div`
  opacity: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  text-align: left;
  max-width: 1200px;
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: auto;
  padding: 0 0 2rem 1.2rem;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    line-height: 27px;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 85%;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 14px;
    padding: 0 0 1.5rem 1rem;
    line-height: 20px;
  }
`;
const ChooseStoryTitle = styled.div`
  opacity: 0;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  text-align: left;
  max-width: 1200px;
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: 75px;
  padding: 0 0 0 1.2rem;
  margin-bottom: 5px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    line-height: ${({ $fontSize }) => $fontSize[1]};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 85%;
    margin-top: 5%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    margin-top: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    max-width: 100%;
    font-size: 8vmin;
    padding: 0 0 1rem 1rem;
    margin-top: 0;
    line-height: 8vmin;
  }
`;
const ChooseStory = styled.div`
  top: 260px;
  display: grid;
  grid-template-columns: repeat(2, 570px);
  column-gap: 0;
  row-gap: 0;
  transition: 0.2s ease-in-out;
  transform-style: preserve-3d;
  transform-origin: center;
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 100%;
    margin: 5% auto 0 auto;
    grid-template-columns: repeat(2, 49%);
    grid-row-gap: 10%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    margin: 0 auto 0 auto;
    grid-row-gap: 0;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: 1fr;
    grid-row-gap: 0;
    margin-bottom: 100px;
  }
`;
const ChooseStoryItem = styled.div`
  position: relative;
  cursor: pointer;
  transition: 0.2s ease;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    .storyBlur {
      opacity: 0;
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      border: none;
      transition: 0.2s ease;
    }
  }
`;

const StoryContext = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: ${({ $fontSize }) => $fontSize.itemText[0]};
  line-height: 40px;
  z-index: 0;
  transition: all 0.2s ease;
  transform-style: preserve-3d;
  padding: 2.5rem 0 0 1.2rem;

  & span.num {
    font-size: ${({ $fontSize }) => $fontSize.numText[0]};
    border-bottom: 1px solid #fff;
    padding-bottom: 20px;
    margin-bottom: 20px;
    width: 85%;
    line-height: normal;
  }

  & span[class^="text"] {
    font-size: ${({ $fontSize }) => $fontSize.itemText[0]};
    max-width: 490px;
  }

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize.itemText[1]};
    line-height: 70px;

    & span.num {
      font-size: ${({ $fontSize }) => $fontSize.numText[1]};
      padding-bottom: 10px;
      margin-bottom: 10px;
    }

    & span[class^="text"] {
      font-size: ${({ $fontSize }) => $fontSize.itemText[1]};
      max-width: 410px;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    & span.num {
      width: 95%;
    }
    & span[class^="text"] {
      max-width: 100%;
    }
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    padding: 0 1rem 1.5rem 1rem;

    & span.num {
      font-size: 28px;
    }
    & span[class^="text"] {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

const FocusHolder = styled.div`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  top: 100px;
  padding: 0 78px;
  max-width: 610px;
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    width: 92vmin;
    max-width: 92vmin;
    padding: 18px 18px 80px 18px;
    border-color: transparent;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    width: 100%;
  }
`;

const ScheduleHeader = styled.div`
  color: ${({ $color }) => $color};
  font-size: 24px;
  letter-spacing: 0.07em;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-bottom: 40px;
    font-size: 21px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 18px;
  }
`;
const FormHeader = styled.div`
  color: ${({ $color }) => $color};
  font-size: 45px;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 28px;
  }
`;

const MainText = styled.div`
  opacity: 0;
  position: ${({ $position }) => ($position ? $position : "fixed")};
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  top: ${({ $top }) => ($top ? $top[0] : "30%")};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
  left: ${({ $left }) => $left};
  max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.deskXl.t1};
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $lineHeight, $fontSize }) =>
    $lineHeight ? $lineHeight : $fontSize[0]};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "none"};
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "400")};
  margin: ${({ $margin }) => ($margin ? $margin : "unset")};

  @media (max-width: "1080px") {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t1 : $boxMaxWidth.deskXl.t1};
    top: ${({ $top }) => ($top ? $top[1] : "30%")};
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.tablet.t1};
    font-size: ${({ $fontSize }) => $fontSize[1]};
    top: ${({ $top }) => ($top ? $top[1] : "30%")};
    line-height: 42px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: ${({ $fontSize }) => $fontSize[2]};
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.mob.t1};
    line-height: 34px;
    top: ${({ $top }) => ($top ? $top[2] : "30%")};
  }
`;
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

const WatchAgain = styled.div`
  color: #fff;
  position: absolute;
  bottom: 4%;
  text-decoration: none;
  font-size: 28px;
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 4px;
    background: #fff;
    transition: 0.7s ease;
    opacity: 1;
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    &:hover {
      &:after {
        width: 0;
        opacity: 0;
      }
      svg {
        transform: rotate(45deg);
      }
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    bottom: 78px;
    font-size: 18px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    bottom: 78px;
  }
`;
