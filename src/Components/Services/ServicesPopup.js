import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { useSelector } from "react-redux";
import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";
import {
  TeamCollabIMG,
  GroupWorkingIMG,
  MomWorkingIMG,
  TwoWorkingTogetherIMG,
  WireframingCollaborationIMG,
  WomanWorkerIMG,
  WorkersIMG,
} from "../../assets/images/services/index";

const ServicesPopupContent = ({ closeHandler }) => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const { currentTheme } = useSelector((state) => state.state);

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
      mob: { t1: "325px" },
    };
  };

  return (
    <Wrapper ref={wrapper} $bg={currentTheme?.schedulePopupBg[0]}>
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
            <h2> SERVICES </h2>
            <h4> Just a few of the ways we can help you make a difference. </h4>
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
            <img src={GroupWorkingIMG} alt="Logo" />
            <h5>Apps and Frameworks</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <img src={TeamCollabIMG} alt="Logo" />
            <h5>Cloud and Infrastructure</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            <img src={MomWorkingIMG} alt="Logo" />
            <h5>DevOps and Site Reliability</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <img src={TwoWorkingTogetherIMG} alt="Logo" />
            <h5>Engineering Project Management</h5>
            <GradientKeyline />
            <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
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
          </ServicesTextItem>
        </ServicesTextContainer>
      </PopupContainer>
    </Wrapper>
  );
};

export default ServicesPopupContent;

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
  background: #111;

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
  ${'' /* transition: 0.2s ease; */}

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: bold;
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
	  margin-bottom:10px;
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
	margin-top:30px;
    .grid-left {
      margin-right: 0px;
    }

    .grid-right {
      margin-left: 0px;
    }
  }
`;

// const  = styled(MainText)`
// opacity: 1 ;
// font-size: 16px;
// top: 55%;
// `;

const ServicesTextItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 530px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  ${"" /* box-shadow: 4px 12px 40px 6px rgb(156 216 196 / 10%); */}
  transition: transform 1s cubic-bezier(0.5, 1, 0.89, 1);
  transition-delay: 0.25s;
  margin-bottom: 20px;
  border: 1px solid #465e4f;
  border-radius: 18px;

  img {
    max-height: 400px;
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: 20% 10%;
  }

  h5 {
    font-size: 26px;
    margin-top: 30px;
    margin-bottom: 10px;
    line-height: 1.1em;
    letter-spacing: 0.03em;
    text-align: left;
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
    color: #a1a1a6;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    h5 {font-size: 20px;}
  }
`;

const GradientKeyline = styled.div`
  align-self: flex-end;
  width: 93%;
  margin: 10px auto 10px;
  height: 2px;
  background-image: linear-gradient(to right, #77a596, #9cd8c4);
  display: none;
`;
//anime top 30%
