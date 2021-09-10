import React, { useCallback, useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { useSelector } from "react-redux";
import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";

const ProjectsPopupContent = ({ closeHandler }) => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const { currentTheme } = useSelector((state) => state.state);

  const onScheduleClickHandler = (e) => {
    closeHandlerPopup();
    document.getElementById("ScheduleBtn").click();
  };

  const closeHandlerPopup = () => {
    closeHandler();
    window.addEventListener("wheel", popupWheelHandler);
  };

  useEffect(() => {
    window.addEventListener("wheel", popupWheelHandler);
    return () => window.removeEventListener("wheel", popupWheelHandler);
  });

  const popupWheelHandler = useCallback((e) => {
    if (window.innerWidth < 901) {
      setIsHeaderSmall(() => e.deltaY > 0);
    }
  }, []);

  const getBoxMaxWidth = () => {
    return {
      deskXl: { t1: "1200px" },
      deskM: { t1: "1200px" },
      tablet: { t1: "700px" },
      mob: { t1: "375px" },
    };
  };

  return (
    <Wrapper
      ref={wrapper}
      $bg={currentTheme?.schedulePopupBg[0]}
      className="popup"
    >
      <PopupContainer $border={currentTheme?.schedulePopupTextColor}>
        <Header
          ref={header}
          $isSmall={isHeaderSmall}
          $color={currentTheme?.schedulePopupTextColor}
          $bg={currentTheme?.schedulePopupBg[0]}
        >
          <CloseCross onClick={closeHandlerPopup}>
            <Cross $color={currentTheme?.schedulePopupTextColor} />{" "}
          </CloseCross>{" "}
          <HeaderTextContainer>
            <LogoIcon />
            <h2> CONTRACTS </h2>
            <h4> We are a small team focused on solving big problems.</h4>
          </HeaderTextContainer>
        </Header>
        <ServicesTextContainer
          className="serviceTextContainer"
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          <ServicesTextItem className="grid-left">
            {/* <img src={MomWorkingIMG} alt="Logo" /> */}
            <h5>
              Helping the Pentagon recruit diverse talent and close the
              technology skills gap
            </h5>
            <GradientKeyline />

            <p>$6 Million - Remote Team - 8(a) Sole Source</p>
            {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            {/* <img src={TeamCollabIMG} alt="Logo" /> */}
            <h5>
              Improving Air Force and Space Force IT systems and software using
              modern technology
            </h5>
            <GradientKeyline />
            <p>$13.5 Billion - Remote Team - 8(a) Joint Venture</p>
            {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            {/* <img src={CloudIMG} alt="Logo" /> */}
            <h5>
              Using the Cloud to develop the $25 billion diplomatic engagement
              budget
            </h5>
            <GradientKeyline />
            <p>$2 Million - Remote Team - 8(a) Subcontract</p>

            {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            {/* <img src={TwoWorkingTogetherIMG} alt="Logo" /> */}
            <h5>
              Empowering Walter Reed National Military Medical Center Wounded
              Warriors
            </h5>
            <GradientKeyline />
            <p>$4.5 Million - Remote Team - 8(a) Sole Source</p>

            {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
          </ServicesTextItem>
          {/* <ServicesTextItem className="grid-left">
            <img src={WireframingCollaborationIMG} alt="Logo" />
            <h5>Information Systems and Technology</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <img src={WomanWorkerIMG} alt="Logo" />
            <h5>Machine Learning and AI</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            <img src={WorkersIMG} alt="Logo" />
            <h5>Defi and Blockchain</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <img src={GroupWorkingIMG} alt="Logo" />
            <h5>Software Quality, Automation, and Tools</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem> */}
        </ServicesTextContainer>
        <ContinueBtn
          className="animeCalltoAction"
          onClick={onScheduleClickHandler}
          $top={"35%"}
          $color={currentTheme?.menuBtnColor}
          $bg={currentTheme?.bgScheduleBtn}
        >
          <ContinueBtnBorder
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-labelledby="REQUEST INFORMATION"
            viewBox="0 0 226 43"
            $color={currentTheme?.bgScheduleBtn}
            id="MyButton"
            fill="none"
          >
            <title>REQUEST INFORMATION</title>
            <rect x="0.5" y="0.5" width="225" height="42" rx="21" />
          </ContinueBtnBorder>
          <span> REQUEST INFO </span>{" "}
        </ContinueBtn>
      </PopupContainer>
    </Wrapper>
  );
};

export default ProjectsPopupContent;

const mobBreakpoint = 900;
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1000;
  ${"" /* background: ${({ $bg }) => $bg}; */}
  background: rgba(8,8,8,0.9);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--block1-text-primary);
  transition: 0.2s ease;
  overflow-y: auto;
  opacity: 1;

  @media (max-width: ${mobBreakpoint}px) {
    align-items: flex-start;
  }
`;
const PopupContainer = styled.div`
  position: relative;
  ${"" /* border: 1px solid ${({ $border }) => $border}; */}
  border-radius: 18px;
  padding: 40px 78px;
  max-width: 1180px;
  margin: 20px 0;
  width: 100%;
  background: #071118;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-top: 85px;
    width: 100%;
    padding: 18px;
    border-color: transparent;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-top: 45px;
  }
`;
const Header = styled.div`
  text-align: center;
  ${"" /* transition: 0.2s ease; */}

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: 400;
    font-size: 86px;
    letter-spacing: 0.1em;
    color: ${({ $color }) => $color};
    display: inline-block;
  }

  h4 {
    font-size: 32px;
    line-height: 1.1;
    font-weight: 400;
    max-width: 600px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.3em;
    letter-spacing: 0.03em;
    color: #a1a1a6;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: fixed;
    text-align: center;
    left: 0;
    top: 0;
    padding: ${({ $isSmall }) => ($isSmall ? "20px 0 0 0" : "40px 0 0 0")};
    margin: 0;
    width: 100%;
    background-color: ${({ $bg }) => $bg};
    z-index: 10;

    h2 {
      font-size: 21px;
      text-transform: uppercase;
      padding: 0 0.5rem;
    }
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    position: relative;
    z-index: 0;
    background-color: unset;

    h2 {
      font-size: 41px;
    }

    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }
  }
`;

const HeaderTextContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-top: 20px;
  }
`;

const LogoIcon = styled(LogoIconSVG)`
  display: inline-block;
  stroke: rgba(255, 255, 255, 0);
  width: 80px;
  height: 64px;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    height: 34px;
    width: 40px;
  }
`;

const CloseCross = styled.div`
  position: absolute;
  content: "";
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: 0.2s ease;

  @media (min-width: ${mobBreakpoint + 1}px) {
    &:hover {
      transform: rotate(90deg);
    }
  }
`;
const Cross = styled(CrossSvg)`
  stroke: ${({ $color }) => $color};
  fill: ${({ $color }) => $color};
`;

const ServicesTextContainer = styled.div`
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize[0]};
  top: ${({ $top }) => $top};
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "center")};
  left: ${({ $left }) => $left};
  max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.deskXl.t1};
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $fontSize }) => $fontSize[0]};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "none"};
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "none")};
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: var(--grid-gutter);
  width: 100%;
  margin: 56px auto 50px;
  box-sizing: border-box;

  .grid-left {
    margin-right: 10px;
  }

  .grid-right {
    margin-left: 10px;
  }

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t1 : $boxMaxWidth.deskXl.t1};
    .grid-left {
      margin-right: 10px;
    }

    .grid-right {
      margin-left: 10px;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.tablet.t1};
    font-size: ${({ $fontSize }) => $fontSize[1]};
    top: ${({ $top }) => $top};
    line-height: "42px";
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: ${({ $fontSize }) => $fontSize[2]};
    max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.mob.t1};
    line-height: "27px";
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
    .grid-left {
      margin-right: 0px;
    }

    .grid-right {
      margin-left: 0px;
    }
  }
`;

const ServicesTextItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 200px;
  padding: 40px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  ${"" /* box-shadow: 4px 12px 40px 6px rgb(156 216 196 / 10%); */}
  transition: transform 1s cubic-bezier(0.5, 1, 0.89, 1);
  transition-delay: 0.25s;
  margin-bottom: 20px;
  ${"" /* border: 1px solid #465e4f; */}
  border-radius: 18px;
  background: #08141df0;

  img {
    max-height: 400px;
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 20% 10%;
  }
  p {
    margin-bottom: 0px;
    font-size: 17px;
    color: #a1a1a6;
  }

  h5 {
    font-size: 26px;
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.1em;
    letter-spacing: 0.03em;
    text-align: center;
    padding: 0px 20px 0px;
    color: #fff;
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    ${"" /* background-image: linear-gradient(to right, #77a596, #9cd8c4); */}
    background-image: linear-gradient(to right,#999999,#ffffff);
  }
  h6 {
    font-size: 17px;
    line-height: 1.19048;
    font-weight: 600;
    letter-spacing: 0.011em;
    margin: 10px 20px 20px;
    max-width: 550px;
    text-align: left;
    color: #e6e6eb;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    h5 {
      font-size: 20px;
    }
  }
`;

const GradientKeyline = styled.div`
  align-self: flex-end;
  width: 93%;
  margin: 10px auto 10px;
  height: 2px;
  background-image: linear-gradient(to right, #77a596, #9cd8c4);
`;

const BtnAnimation = keyframes`
	0%   { stroke-dashoffset: 1000;}
	100% { stroke-dashoffset: 0; }
`;

const CallActionBtn = styled.div`
  color: ${({ $color }) => $color};
  font-size: 15px;
  letter-spacing: 3px;
  text-decoration: none;
  justify-self: center;
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
  width: 247px;
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

const ContinueBtn = styled(CallActionBtn)`
  opacity: 1;
  background: ${({ $bg }) => $bg};
  padding: 13px 10px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;
  top: ${({ $top }) => $top};
  width: 227px;
  margin: 0px auto;
  text-align: center;
  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      background: none;

      ${ContinueBtnBorder} {
        animation: ${BtnAnimation} 0.7s ease-in;
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
    top: 70%;
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
    top: 70%;
    height: 20px;
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
