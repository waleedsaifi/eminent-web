import { ReactComponent as OutcomeSVG } from "../../assets/images/Outcome.svg";
import { ReactComponent as PartnersSVG } from "../../assets/images/Partners.svg";
import { ReactComponent as VisionSVG } from "../../assets/images/Vision.svg";
import { ReactComponent as VeteransSVG } from "../../assets/images/Veterans.svg";
import React, { useEffect } from "react";
import * as MainContent from "../../helpers/main_content";
import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import {
  getFadeInCustomText,
  getFadeInMainText,
  getFadeInProgressSvg,
} from "../../helpers/animations";

const ApproachContent = ({
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
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
    default:
      return (
        <>
          <CustomBlockWrapper
            $top={MainContent.getTopCustomBlock(0, currentSectionTitle)}
            $left={MainContent.getLeft(0, currentSectionTitle)}
            $maxWidth={MainContent.getMaxWidthCustomBlock(
              0,
              currentSectionTitle
            )}
            className="customBlockWrapper"
          >
            <CustomBlock
              className="customBlock"
              $align={"flex-start"}
              $mobGridCols={MainContent.getMobGridColumns(
                0,
                currentSectionTitle
              )}
            >
              {/* <CustomText
                  className="custom_anime"
                  $margin={MainContent.getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}
              <CustomID
                $margin={MainContent.getMarginId(0, currentSectionTitle)}
                className="custom_anime"
              >
                {currentSection.fields[0].fields.customNumber}
              </CustomID>

              {/* <AnimatedStrategyText
                  ref={strategySvg}
                  className="svgText"
                  $color={currentTheme.textColor}
                /> */}

              <AnimtateOutcomeText
                className="svgText"
                $color={currentTheme.textColor}
              />

              <CustomText
                className="custom_anime"
                $margin={MainContent.getMarginCustomText(
                  0,
                  currentSectionTitle
                )}
              >
                {currentSection.fields[0].fields.description1}
              </CustomText>
              {/* <CustomText
                  className="custom_anime"
                  $margin={MainContent.getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description4}
                </CustomText> */}
            </CustomBlock>
          </CustomBlockWrapper>
          <CustomBlockMobGradient />
        </>
      );
    case 1:
      return (
        <>
          <CustomBlockWrapper
            $top={MainContent.getTopCustomBlock(1, currentSectionTitle)}
            $right={MainContent.getRight(1, currentSectionTitle)}
            $maxWidth={MainContent.getMaxWidthCustomBlock(
              1,
              currentSectionTitle
            )}
            className="customBlockWrapper"
          >
            <CustomBlock
              className="customBlock"
              $top={MainContent.getTopCustomBlock(1, currentSectionTitle)}
              $align={"flex-end"}
              $mobGridCols={MainContent.getMobGridColumns(
                1,
                currentSectionTitle
              )}
              $maxWidth={MainContent.getMaxWidthCustomBlock(
                1,
                currentSectionTitle
              )}
            >
              <CustomID
                $margin={MainContent.getMarginId(1, currentSectionTitle)}
                className="custom_anime"
                $step={currentStep}
              >
                {currentSection.fields[currentStep].fields.customNumber}
              </CustomID>

              <AnimatedPartnersText
                className="svgText"
                $color={currentTheme.textColor}
              />

              <CustomText
                className="custom_anime"
                $right={MainContent.getRight(1, currentSectionTitle)}
                $margin={MainContent.getMarginCustomText(
                  1,
                  currentSectionTitle
                )}
              >
                {currentSection.fields[currentStep].fields.description1}
              </CustomText>
              {/* <CustomText
                  className="custom_anime"
                  $right={MainContent.getRight()}
                  $margin={MainContent.getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}
            </CustomBlock>
          </CustomBlockWrapper>
          <CustomBlockMobGradient />
        </>
      );
    case 2:
      return (
        <>
          <CustomBlockWrapper
            $top={MainContent.getTopCustomBlock(2, currentSectionTitle)}
            $left={MainContent.getLeft(2, currentSectionTitle)}
            $maxWidth={MainContent.getMaxWidthCustomBlock(
              2,
              currentSectionTitle
            )}
            className="customBlockWrapper"
          >
            <CustomBlock
              className="customBlock"
              $top={MainContent.getTopCustomBlock(2, currentSectionTitle)}
              $left={MainContent.getLeft}
              $align={"flex-start"}
              $mobGridCols={MainContent.getMobGridColumns(
                2,
                currentSectionTitle
              )}
              $maxWidth={MainContent.getMaxWidthCustomBlock(
                2,
                currentSectionTitle
              )}
            >
              {/* <CustomText
                  className="custom_anime"
                  $margin={MainContent.getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText>
                <CustomText
                  className="custom_anime"
                  $margin={MainContent.getMarginCustomText()}
                >
                  {currentSection.fields[currentStep].fields.description3}
                </CustomText> */}
              <CustomID
                $margin={MainContent.getMarginId(2, currentSectionTitle)}
                className="custom_anime"
                $step={currentStep}
              >
                {currentSection.fields[currentStep].fields.customNumber}
              </CustomID>
              <AnimatedVisionText
                className="svgText"
                $color={currentTheme.textColor}
              />
              <CustomText
                className="custom_anime"
                $margin={MainContent.getMarginCustomText(
                  2,
                  currentSectionTitle
                )}
              >
                {currentSection.fields[currentStep].fields.description1}
              </CustomText>
            </CustomBlock>
          </CustomBlockWrapper>
          <CustomBlockMobGradient />
        </>
      );
    case 3:
      return (
        <>
          <CustomBlockWrapper
            $top={MainContent.getTopCustomBlock(3, currentSectionTitle)}
            $right={MainContent.getRight(3, currentSectionTitle)}
            $maxWidth={MainContent.getMaxWidthCustomBlock(
              3,
              currentSectionTitle
            )}
            className="customBlockWrapper"
          >
            <CustomBlock
              className="customBlock"
              $top={MainContent.getTopCustomBlock(3, currentSectionTitle)}
              $right={MainContent.getRight(3, currentSectionTitle)}
              $align={"flex-end"}
              $mobGridCols={MainContent.getMobGridColumns(
                3,
                currentSectionTitle
              )}
              $maxWidth={MainContent.getMaxWidthCustomBlock(
                3,
                currentSectionTitle
              )}
            >
              {/* <CustomText className="custom_anime" $right={MainContent.getRight()}>
                  {currentSection.fields[currentStep].fields.description2}
                </CustomText> */}

              <CustomID
                $margin={MainContent.getMarginId(3, currentSectionTitle)}
                className="custom_anime"
              >
                {currentSection.fields[currentStep].fields.customNumber}
              </CustomID>

              <AnimatedVeteransText
                className="svgText"
                $color={currentTheme.textColor}
              />
              <CustomText
                className="custom_anime"
                $right={MainContent.getRight(3, currentSectionTitle)}
              >
                {currentSection.fields[currentStep].fields.description1}
              </CustomText>
              {/* <AnimatedServiceText
                  className="svgText2"
                  $color={currentTheme.textColor}
                /> */}
              {/* <CustomText className="custom_anime" $right={MainContent.getRight()}>
                  {currentSection.fields[currentStep].fields.description3}
                </CustomText>
                <CustomText className="custom_anime" $right={MainContent.getRight()}>
                  {currentSection.fields[currentStep].fields.description4}
                </CustomText> */}
            </CustomBlock>
          </CustomBlockWrapper>
          <CustomBlockMobGradient />
        </>
      );

    case 4:
      return (
        <>
          <TextContainer className="textContainer">
            {currentSection.fields[currentStep].fields.mainText && (
              <MainText
                className="anime"
                $color={currentTheme.textColor}
                $step={currentStep}
                $fontSize={MainContent.getFontSize(0, currentSectionTitle)}
                $letterSpacing={MainContent.getLetterSpacing(
                  4,
                  currentSectionTitle
                )}
                $boxMaxWidth={MainContent.getBoxMaxWidth(
                  4,
                  currentSectionTitle
                )}
                $fontWeight={"700"}
                $left={"unset"}
                $textAlign={"center"}
                $position={"unset"}
                $margin={"0px auto"}
              >
                {currentSection.fields[currentStep].fields.mainText}
              </MainText>
            )}
            {currentSection.fields[currentStep].fields.subText && (
              <MainTextSecond
                className="anime2"
                $color={currentTheme.textColor}
                $step={currentStep}
                $fontSize={MainContent.getFontSize(4, currentSectionTitle)}
                $letterSpacing={MainContent.getLetterSpacing(
                  4,
                  currentSectionTitle
                )}
                $boxMaxWidth={MainContent.getBoxMaxWidth(
                  4,
                  currentSectionTitle
                )}
                $left={"unset"}
                $fontWeight={"700"}
                $textAlign={"center"}
                $position={"unset"}
                $margin={"0px auto"}
              >
                {currentSection.fields[currentStep].fields.subText}
              </MainTextSecond>
            )}

            {currentSection.fields[currentStep].fields.mainText && (
              <ScheduleBtn
                className="animeCalltoAction"
                $bg={currentTheme.bgScheduleBtn}
                $color={currentTheme.menuBtnColor}
                onClick={MainContent.onScheduleClickHandler}
                $lineBg={currentTheme.bgScheduleBtn}
              >
                <ScheduleBtnBorder $color={currentTheme.bgScheduleBtn} />
                <span> BOOK DEMO </span>
              </ScheduleBtn>
            )}
          </TextContainer>
        </>
      );
  }
};

export default ApproachContent;

const AnimatedSVG = css`
  display: inline-block;
  stroke: rgba(255, 255, 255, 0);
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
const AnimtateOutcomeText = styled(OutcomeSVG)`
  width: auto;
  height: auto;
  transform-origin: left;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedPartnersText = styled(PartnersSVG)`
  width: auto;
  height: auto;
  transform-origin: right;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedVisionText = styled(VisionSVG)`
  width: auto;
  height: auto;
  transform-origin: left;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;
const AnimatedVeteransText = styled(VeteransSVG)`
  width: auto;
  height: auto;
  transform-origin: right;
  ${AnimatedSVG};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 2;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 2;
    margin: 20px 0px 0px !important;
  }
`;

const CustomBlockWrapper = styled.div`
  position: absolute;
  top: ${({ $top }) => $top[0]};
  left: ${({ $left }) => $left};
  right: ${({ $right }) => $right};
  transform: translateY(-50%);
  max-width: ${({ $maxWidth }) => $maxWidth};

  @media (max-width: ${BREAKPOINTS.xl}px) {
    top: ${({ $top }) => $top[1]};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    left: 70px;
    top: 65%;
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) and (orientation: landscape) {
    top: 60%;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    left: 4%;
    top: 96%;
    padding-left: 20px;
    background: #7f96a0;
  }
`;
const CustomBlockMobGradient = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    display: block;
    width: 100%;
    height: 72px;
    position: fixed;
    //border: 1px solid red;
    backdrop-filter: blur(4px);
    bottom: 0;
    left: 0;
  }
`;
const CustomBlock = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  width: 100%;
  transition: left 1s, right 1s;
  align-items: ${({ $align }) => $align};

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: grid;
    grid-template-columns: ${({ $mobGridCols }) => $mobGridCols.tablet};
    grid-template-rows: repeat(6, auto);
    max-width: 90%;
    //left: 70px;
    transform: translateX(0) translateY(0);
    //top: 42%;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    left: 25px;
    grid-template-columns: 100%;
    top: 39%;
    margin-bottom: 40px;
    padding-bottom: 100px;
  }
`;
const CustomText = styled.div`
  position: relative;
  font-size: 21px;
  line-height: 31px;
  color: #fff;
  margin: ${({ $margin }) => ($margin ? $margin.desk : "15px 0 0 0")};
  opacity: 0;
  text-align: ${({ $right }) => ($right ? "right" : "left")};
  letter-spacing: 1px;

  &:after {
    position: none;
    content: "";
    left: -15px;
    top: 12px;
    width: 8px;
    height: 8px;
    background: #fff;
    border-radius: 50%;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin: ${({ $margin }) => ($margin ? $margin.tablet : "15px 0 0 0")};
    font-size: 18px;
    text-align: left;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 14px;
    margin: 0;
    top: 20px;
    line-height: 26px;
  }
`;
const CustomID = styled.div`
  font-size: 48px;
  margin: ${({ $margin }) => $margin.desk};
  opacity: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 1;
    font-size: 36px;
    margin: ${({ $margin }) => $margin.tablet};
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-row-start: 1;
    font-size: 28px;
  }
`;

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
