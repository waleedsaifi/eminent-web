import React, { useEffect } from "react";
import * as MainContent from "../../helpers/main_content";
import styled, { keyframes } from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";
import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import { useHistory } from "react-router-dom";
import {
  getFadeInChooseStoryText,
  getFadeInCustomText,
  getFadeInFormTen,
  getFadeInMainText,
  getFadeInProgressSvg,
} from "../../helpers/animations";

const HomeContent = ({
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  const history = useHistory();

  useEffect(() => {
    const progressSvgArray = document.querySelectorAll(
      `.styledProgress_${currentStep}`
    );
    const progressBorderDefault = document.querySelector(
      `.progressBorderDefault__${currentStep}`
    );
    getFadeInProgressSvg([progressSvgArray, progressBorderDefault], () => "");

   

      window.animation.way = "forward";
      getFadeInCustomText(() => {
        window.animation._name = "custom_anime";
        setTimeout(() => (window.stoppedAnimation = true), 1000);
      });



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


    switch (currentStep) {
      case 0:
        return (
          <>
            <TextContainer className="textContainer">
              {currentSection?.fields[currentStep].fields.mainText && (
                <MainText
                  className="anime"
                  $color={"#fff"}
                  $top={MainContent.getTopMainText(0, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                  $lineHeight={"auto"}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0, currentSectionTitle)}
                  $boxMaxWidth={MainContent.getBoxMaxWidth(0, currentSectionTitle)}
                  $textTransform={"initial"}
                  $fontWeight={"700"}
                  $textAlign={"left"}
                  $position={"unset"}
                >
                  {currentSection.fields[currentStep].fields.mainText}
                  {/* {"High-quality apps & dapps delivered fast"} */}
                </MainText>
              )}

              {currentSection?.fields[currentStep].fields.mainText && (
                <MainTextSecond
                  className="anime"
                  $color={currentTheme.textColor}
                  $top={MainContent.getTopSecondText(0, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getSecondFontSize(0, currentSectionTitle)}
                  $lineHeight={["40px", "31px", "28px"]}
                  $left={MainContent.getLeft(0, currentSectionTitle)}
                  $letterSpacing={MainContent.getLetterSpacing(0, currentSectionTitle)}
                  $boxMaxWidth={{
                    deskXl: { t2: "1100px" },
                    deskM: { t2: "1100px" },
                    tablet: { t2: "700px" },
                    mob: { t2: "300px" },
                  }}
                  $textAlign={"left"}
                  $position={"unset"}
                >
                  {currentSection?.fields[currentStep].fields.subText}
                  {/* {
                    "We are a digital product and innovation company. We help passionate and proactive leaders in the public & private sector invent intuitive web, mobile, and decentralized digital experiences."
                  } */}
                </MainTextSecond>
              )}

              {currentSection?.fields[currentStep].fields.mainText && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={MainContent.onServicesPopUpHandler(history)}
                  $top={MainContent.getTopContinueBtn(currentStep, currentSectionTitle)}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                  $justifySelf={"left"}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="GET A FREE STRATEGY CALL"
                    viewBox="0 0 410 59"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>LEARN MORE</title>
                    <rect x="0.5" y="0.5" width="408" height="58" rx="21" />
                  </ContinueBtnBorder>
                  <span>LEARN MORE</span>{" "}
                </ContinueBtn>
              )}
            </TextContainer>
          </>
        );
      case 1:
        return (
          <>
            <TextContainer className="textContainer">
              {currentSection.fields[currentStep].fields.mainText && (
                <MainText
                  className="animeStatic"
                  // $color={currentTheme.textColor}
                  $color={"#fff"}
                  $top={MainContent.getTopMainText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={MainContent.getBoxMaxWidth(0, currentSectionTitle)}
                  $textTransform={"initial"}
                  $fontWeight={"700"}
                  $textAlign={"left"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {/* {currentSection.fields[currentStep].fields.mainText} #FIXME */}
                  <LogoIcon />
                  {"Apps"}
                </MainText>
              )}
              {currentSection.fields[currentStep].fields.longSubText && (
                <MainTextSecond
                  className="anime"
                  $color={currentTheme.textColor}
                  $top={MainContent.getTopSecondText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getSecondFontSize(1, currentSectionTitle)}
                  $lineHeight={["44px", "31px", "28px"]}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={{
                    deskXl: { t2: "1100px" },
                    deskM: { t2: "1100px" },
                    tablet: { t2: "700px" },
                    mob: { t2: "300px" },
                  }}
                  $textAlign={"center"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {currentSection.fields[currentStep].fields.longSubText}
                </MainTextSecond>
              )}

              {currentSection.fields[currentStep].fields.mainText && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={MainContent.onEminentAppsHandler}
                  $top={"unset"}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="VIEW PROJECTS"
                    viewBox="0 0 226 43"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>LEARN MORE</title>
                    <rect x="0.5" y="0.5" width="225" height="42" rx="21" />
                  </ContinueBtnBorder>
                  <span> LEARN MORE </span>{" "}
                </ContinueBtn>
              )}
            </TextContainer>
          </>
        );
      case 2:
        return (
          <>
            <TextContainer className="textContainer">
              {currentSection.fields[currentStep].fields.mainText && (
                <MainText
                  className="animeStatic"
                  // $color={currentTheme.textColor}
                  $color={"#fff"}
                  $top={MainContent.getTopMainText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={MainContent.getBoxMaxWidth(0, currentSectionTitle)}
                  $textTransform={"initial"}
                  $fontWeight={"700"}
                  $textAlign={"left"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {/* {currentSection.fields[currentStep].fields.mainText} #FIXME */}
                  <LogoIcon />
                  {"DApps"}
                </MainText>
              )}
              {currentSection.fields[currentStep].fields.longSubText && (
                <MainTextSecond
                  className="anime"
                  $color={currentTheme.textColor}
                  $top={MainContent.getTopSecondText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getSecondFontSize(1, currentSectionTitle)}
                  $lineHeight={["44px", "31px", "28px"]}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={{
                    deskXl: { t2: "1100px" },
                    deskM: { t2: "1100px" },
                    tablet: { t2: "700px" },
                    mob: { t2: "300px" },
                  }}
                  $textAlign={"center"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {currentSection.fields[currentStep].fields.longSubText}
                  {/* {
                    "Eminent DApps simplifies the process by giving you everything you need to deliver decentralized blockchain and token solutions in a fraction of the time at a fraction of the cost. We handle all the hard stuff for you from start to finish."
                  } */}
                </MainTextSecond>
              )}

              {currentSection.fields[currentStep].fields.mainText && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={MainContent.onProjectsPopUpHandler(history)}
                  $top={"unset"}
                  $left={"unset"}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="GET STARTED"
                    viewBox="0 0 226 43"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>GET STARTED</title>
                    <rect x="0.5" y="0.5" width="225" height="42" rx="21" />
                  </ContinueBtnBorder>
                  <span> GET STARTED </span>{" "}
                </ContinueBtn>
              )}
            </TextContainer>
          </>
        );
      case 3:
        return (
          <>
            <TextContainer className="textContainer">
              {currentSection.fields[currentStep].fields.mainText && (
                <MainText
                  className="animeStatic"
                  // $color={currentTheme.textColor}
                  $color={"#fff"}
                  $top={MainContent.getTopMainText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={MainContent.getBoxMaxWidth(0, currentSectionTitle)}
                  $textTransform={"initial"}
                  $left={"unset"}
                  $fontWeight={"700"}
                  $textAlign={"left"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {/* {currentSection.fields[currentStep].fields.mainText} #FIXME */}
                  <LogoIcon />
                  {"Contracts"}
                </MainText>
              )}
              {currentSection.fields[currentStep].fields.longSubText && (
                <MainTextSecond
                  className="anime"
                  $color={currentTheme.textColor}
                  $top={MainContent.getTopSecondText(1, currentSectionTitle)}
                  $step={currentStep}
                  $fontSize={MainContent.getSecondFontSize(1, currentSectionTitle)}
                  $lineHeight={["44px", "31px", "28px"]}
                  $left={"unset"}
                  $letterSpacing={MainContent.getLetterSpacing(0)}
                  $boxMaxWidth={{
                    deskXl: { t2: "1100px" },
                    deskM: { t2: "1100px" },
                    tablet: { t2: "700px" },
                    mob: { t2: "300px" },
                  }}
                  $textAlign={"center"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {currentSection.fields[currentStep].fields.longSubText}
                </MainTextSecond>
              )}

              {currentSection.fields[currentStep].fields.mainText && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={MainContent.onProjectsPopUpHandler(history)}
                  $top={"unset"}
                  $left={"unset"}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="GET STARTED"
                    viewBox="0 0 226 43"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>GET STARTED</title>
                    <rect x="0.5" y="0.5" width="225" height="42" rx="21" />
                  </ContinueBtnBorder>
                  <span> GET STARTED </span>{" "}
                </ContinueBtn>
              )}
            </TextContainer>
          </>
        );
      case 4:
        return (
          <>
            {currentSection.fields[currentStep].fields.mainText && (
              <MainText
                className="animeStatic"
                // $color={currentTheme.textColor}
                $color={"#fff"}
                $top={MainContent.getTopMainText(currentStep, currentSectionTitle)}
                $step={currentStep}
                $fontSize={MainContent.getFontSize(currentStep, currentSectionTitle)}
                $left={MainContent.getLeft(currentStep)}
                $letterSpacing={MainContent.getLetterSpacing(currentStep)}
                $boxMaxWidth={MainContent.getBoxMaxWidth(currentStep, currentSectionTitle)}
                $lineHeight={["44px", "31px", "28px"]}
              >
                <h2>
                  <LogoIcon />
                  {"Suite"}
                </h2>
                {currentSection.fields[currentStep].fields.mainText}
              </MainText>
            )}
            {currentSection.fields[currentStep].fields.subText && (
              <MainTextSecond
                className="anime2"
                $color={"#fff"}
                $top={MainContent.getTopSecondText(currentStep, currentSectionTitle)}
                $step={currentStep}
                $fontSize={MainContent.getFontSize(currentStep, currentSectionTitle)}
                $left={MainContent.getLeft(currentStep)}
                $letterSpacing={MainContent.getLetterSpacing(currentStep)}
                $boxMaxWidth={MainContent.getBoxMaxWidth(currentStep, currentSectionTitle)}
                $lineHeight={["44px", "31px", "28px"]}
              >
                {currentSection.fields[currentStep].fields.subText}
                {/* {
                  "Together we got this. We are here for you no matter how big your dream is."
                } */}
              </MainTextSecond>
            )}
            {/* {currentSection.fields[currentStep].fields.mainText &&
              currentStep !== 5 && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={onContractsPopUpHandler}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                  $top={getTopContinueBtn}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="VIEW CONTRACTS"
                    viewBox="0 0 226 43"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>VIEW CONTRACTS</title>
                    <rect x="0.5" y="0.5" width="225" height="42" rx="21" />
                  </ContinueBtnBorder>
                  <span> VIEW CONTRACTS </span>{" "}
                </ContinueBtn>
              )} */}
            {currentSection.fields[currentStep].fields.mainText &&
              currentStep == 5 && (
                <ScheduleBtn
                  className="animeCalltoAction"
                  $bg={currentTheme.bgScheduleBtn}
                  $color={currentTheme.menuBtnColor}
                  onClick={MainContent.onScheduleClickHandler(history)}
                  $lineBg={currentTheme.bgScheduleBtn}
                >
                  <ScheduleBtnBorder $color={currentTheme.bgScheduleBtn} />
                  <span> BOOK DEMO </span>
                </ScheduleBtn>
              )}
          </>
        );
      case 5:
        return (
          <>
            <TextContainer className="textContainer">
              {currentSection.fields[currentStep].fields.mainText && (
                <MainText
                  className="anime"
                  $color={"#fff"}
                  $top={"unset"}
                  $step={currentStep}
                  $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                  $left={MainContent.getLeft(0, currentSectionTitle)}
                  $letterSpacing={MainContent.getLetterSpacing(0, currentSectionTitle)}
                  $boxMaxWidth={MainContent.getBoxMaxWidth(5, currentSectionTitle)}
                  $textTransform={"initial"}
                  $fontWeight={"700"}
                  $textAlign={"center"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {currentSection.fields[currentStep].fields.mainText}
                </MainText>
              )}
              {currentSection.fields[currentStep].fields.subText && (
                <MainTextSecond
                  className="anime"
                  $color={currentTheme.textColor}
                  $top={"unset"}
                  $step={currentStep}
                  $fontSize={MainContent.getSecondFontSize(5, currentSectionTitle)}
                  $lineHeight={["44px", "31px", "28px"]}
                  $left={MainContent.getLeft(0, currentSectionTitle)}
                  $letterSpacing={MainContent.getLetterSpacing(0, currentSectionTitle)}
                  $boxMaxWidth={{
                    deskXl: { t2: "1100px" },
                    deskM: { t2: "1100px" },
                    tablet: { t2: "700px" },
                    mob: { t2: "300px" },
                  }}
                  $textAlign={"center"}
                  $position={"unset"}
                  $margin={"0px auto"}
                >
                  {currentSection.fields[currentStep].fields.subText}
                </MainTextSecond>
              )}

              {currentSection.fields[currentStep].fields.mainText && (
                <ContinueBtn
                  className="animeCalltoAction"
                  onClick={MainContent.onScheduleClickHandler(history)}
                  $top={MainContent.getTopContinueBtn(currentStep, currentSectionTitle)}
                  $color={currentTheme?.menuBtnColor}
                  $bg={currentTheme?.bgScheduleBtn}
                >
                  <ContinueBtnBorder
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-labelledby="BOOK DEMO"
                    viewBox="0 0 211 53"
                    $color={currentTheme?.bgScheduleBtn}
                    id="MyButton"
                    fill="none"
                  >
                    <title>BOOK DEMO</title>
                    <rect x="0.5" y="0.5" width="210" height="52" rx="21" />
                  </ContinueBtnBorder>
                  <span> BOOK DEMO </span>{" "}
                </ContinueBtn>
              )}
            </TextContainer>
          </>
        );
      default:
        return;
    }
  

//   return {getHomeContent};
};

export default HomeContent;

const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px 0px;
  justify-content: start;
  align-content: center;
  justify-items: start;
  min-width: 1180px;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    min-width: unset;
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

const MainTextSecond = styled(MainText)`
  ${
    "" /* max-width: ${({ $boxMaxWidth }) =>
    $boxMaxWidth.deskXl.t2 ? $boxMaxWidth.deskXl.t2 : "80%"}; */
  }
  max-width:700px;
  line-height: ${({ $lineHeight }) =>
    $lineHeight ? $lineHeight[0] : ($fontSize) => $fontSize[0]};
  margin: ${({ $margin }) => ($margin ? $margin : "unset")};
  padding: 10px 0px;

  @media (max-width: ${BREAKPOINTS.xl}px) {
    ${
      "" /* max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t2 : "80%"}; */
    }
    max-width:700px;
    line-height: ${({ $lineHeight }) =>
      $lineHeight ? $lineHeight[0] : ($fontSize) => $fontSize[0]};
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    ${
      "" /* max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.tablet ? $boxMaxWidth.tablet.t2 : "80%"}; */
    }
    max-width:60%;
    line-height: ${({ $lineHeight }) =>
      $lineHeight ? $lineHeight[1] : "42px"};
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.mob ? $boxMaxWidth.mob.t2 : "80%"};
    line-height: ${({ $lineHeight }) =>
      $lineHeight ? $lineHeight[2] : "27px"};
  }
`;

const CallActionBtn = styled.button`
  color: ${({ $color }) => $color};
  font-size: 15px;
  letter-spacing: 3px;
  text-decoration: none;
  justify-self: ${({ $justifySelf }) =>
    $justifySelf ? $justifySelf : "center"};
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  transition: 0.3s ease;

  .letter {
    display: inline-block;
    line-height: 1em;
    opacity: 0;
  }
`;

const ContinueBtnBorder = styled.svg`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  stroke: ${({ $color }) => $color};
  stroke-dashoffset: 1000;
  stroke-dasharray: 1000;
  stroke-width: 2px;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    display: none;
  }
`;

const ScheduleBtnAnimation = keyframes`
	0%   { stroke-dashoffset: 1000;}
	100% { stroke-dashoffset: 0; }
`;

const ContinueBtn = styled(CallActionBtn)`
  opacity: 0;
  background: ${({ $bg }) => $bg};
  padding: 13px 10px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;
  top: ${({ $top }) => $top};
  display: block;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      background: none;

      ${ContinueBtnBorder} {
        animation: ${ScheduleBtnAnimation} 0.7s ease-in;
        animation-direction: normal;
        stroke: ${({ $bg }) => $bg};
        stroke-dashoffset: 0;
      }
    }
    &:active {
      background: ${({ $bg }) => $bg};
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    ${"" /* top: 70%; */}
    opacity: 1;
    height: 40px;
    display: block;
    align-self: stretch;
    align-items: center;
    transition: 0.3s ease;
    background: none;
    color: var(--block1-text-primary);
    font-size: 21px;
    border-radius: 0 0 45px 45px;
    padding: 0px;
    border-bottom: none;
    & > span {
      padding-left: 21px;
    }
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    ${"" /* top: 70%; */}
    height: 50px;
    background: ${({ $bg }) => $bg};
    border-radius: 67px;
    font-size: 18px;
    color: #fff;
    padding: 15px;
    & > span {
      padding-left: 0px;
    }
  }
`;

const LogoIcon = styled(LogoIconSVG)`
  display: "inline-block";
  stroke: rgba(255, 255, 255, 0);
  width: 55px;
  height: 55px;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    height: 34px;
    width: 40px;
  }
`;

const ScheduleBtnBorder = styled(RightBtnSvg)`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100%;
  opacity: 1;
  stroke: ${({ $color }) => $color};
  stroke-dashoffset: 520;
  stroke-dasharray: 520;
  stroke-width: 2px;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    stroke: transparent;
  }
`;
const ScheduleBtn = styled(CallActionBtn)`
  background: ${({ $bg }) => $bg};
  padding: 13px 15px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;
  ${"" /* margin-top: 60px; */}
`;
