import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { useSelector } from "react-redux";
import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";
import IMacIMG from "../../assets/images/services/imac.png";
import {
  TeamCollabIMG,
  GroupWorkingIMG,
  MomWorkingIMG,
  TwoWorkingTogetherIMG,
  WireframingCollaborationIMG,
  WomanWorkerIMG,
  WorkersIMG,
  CloudIMG,
} from "../../assets/images/services/index";
import PaperWhiteIcon from "../../assets/images/icon_paper_white.png";
import { toggleElementsforPopup } from "utils/navigation";
import GLContainer from "../GLContainer/GLContainer";

const ServicesPopupContent = ({ closeHandler, showPopup }) => {
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
          $color={currentTheme.textColor}
          $bg={currentTheme?.schedulePopupBg[0]}
        >
          <CloseCross onClick={closeHandlerPopup}>
            <Cross $color={currentTheme?.schedulePopupTextColor} />
          </CloseCross>{" "}
          <HeaderTextContainer>
            <h2> Services </h2>
            <h4>
              {" "}
              Here are a few of the ways we can help you make a difference.{" "}
            </h4>
          </HeaderTextContainer>
        </Header>
        <AboutSectionViolatorStrip
          $icon={PaperWhiteIcon}
          $borderColor={currentTheme?.bgScheduleBtn}
        >
          <div className="violator-strip-content">
            <div className="overview-copy">
              <p>Designed to deliver impactful Apps and DApps fast.</p>
            </div>
            <a
              href="https://s3.amazonaws.com/www.eminentfuture.com/Eminent_CapabilitiesStatement_V1+(1).pdf"
              data-analytics-title="view capabilities statement"
              aria-label=" View Capabilities Statement (PDF)"
              className="icon-wrapper violator-strip-link-outlined"
            >
              <span className="icon-copy">
                View Capabilities Statement&nbsp;(PDF)
              </span>
            </a>{" "}
          </div>
        </AboutSectionViolatorStrip>
        <ServicesTextContainer
          className="serviceTextContainer"
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          <ServicesTextItem className="grid-1 grid-left">
            <ServiceCardContent cardImage={MomWorkingIMG} />
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
            <ServiceCardContent cardImage={TeamCollabIMG} />
            <h5>Cloud and Infrastructure</h5>
            <GradientKeyline />
            <h6>
              We are prepared to jump right in when with a team capable of
              designing, developing, and deploying high-performance systems to
              handle millions of queries every day. Areas of work include Big
              Data, Server-Side Software Engineering, Database, and Data
              Engineering.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            <ServiceCardContent cardImage={CloudIMG} />
            <h5>DevOps and Site Reliability</h5>
            <GradientKeyline />
            <h6>
              By designing and building a continuous integration and delivery
              system, we’ll ensure the high availability, scalability, and
              security of a huge infrastructure every day. Areas of work include
              Site Reliability Engineering, Systems Engineering, Network
              Engineering, Performance Engineering, Systems Administration, and
              Hadoop Administration.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <ServiceCardContent cardImage={TwoWorkingTogetherIMG} />
            <h5>Project Management</h5>
            <GradientKeyline />
            <h6>
              We take ownership of projects by overseeing every aspect, from
              start to finish. Areas of work include Technical Project
              Management, Evangelism, Metrics, Analytics, and Program
              Management.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            <ServiceCardContent cardImage={WireframingCollaborationIMG} />
            <h5>Information Systems and Technology</h5>
            <GradientKeyline />
            <h6>
              You can depend on us, to help design and manage complex systems
              that run our country such as high traffic public-facing web
              platforms, as well as manufacturing, logistics, operations, and
              facilities. Our team develops and manages data centers that
              support users all over the globe. Areas of work include Web
              Application Engineering, Back-End Engineering, Mobile Software
              Engineering, Data Science and Applied Machine Learning, Software
              Quality Engineering, Security Engineering, Network Engineering,
              Content Delivery, Data Center Operations, and Package Support for
              SAP and Oracle.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <ServiceCardContent cardImage={WomanWorkerIMG} />
            <h5>Machine Learning and AI</h5>
            <GradientKeyline />
            <h6>
              We help develop algorithms that learn from data to create the most
              insightful options for the best outcomes. We do it with the help
              of privacy experts to ensure users’ privacy is respected. Areas of
              work include Artificial Intelligence, Computer Vision, Data
              Science, and Deep Learning.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-left">
            <ServiceCardContent cardImage={WorkersIMG} />
            <h5>Defi and Blockchain</h5>
            <GradientKeyline />
            <h6>
              All though the technology is still not widely adopted, we've come
              to take Blockchain and Cryptocurrency seriously. We are proactivly
              engaged in the community to see what innovations we can advance as
              we create customer experiences that are seamless. Areas of work
              include Blockchain Solutions, Smart Contracts, Wallet Development,
              DAPP Development and NFTs.
            </h6>
          </ServicesTextItem>
          <ServicesTextItem className="grid-right">
            <ServiceCardContent cardImage={GroupWorkingIMG} />
            <h5>Quality, Automation, and Tools</h5>
            <GradientKeyline />
            <h6>
              We work to ensure that your software and services run as smoothly
              as each was designed to. Areas of work include Quality Assurance
              Engineering, Integration Engineering, Software Developer in Test
              Engineering, Applications Engineering, Software Compatibility
              Engineering, Automation Engineering, and Tools Development.
            </h6>
          </ServicesTextItem>
        </ServicesTextContainer>

        <EminentAppsSectionViolatorStrip
          $icon={PaperWhiteIcon}
          $borderColor={currentTheme?.bgScheduleBtn}
        >
          <div className="violator-strip-content">
            <div className="overview-copy">
              <p>Get Started</p>
            </div>
            <p className="strip-copy">
              Are you ready to bring <br />
              your app idea to life?
            </p>

            <p className="strip-sub-copy">
              Eminent Apps is ready to create your most innovative apps ever.
            </p>
            <a
              className="button green w-button"
              onClick={onScheduleClickHandler}
            >
              Book a Demo →
            </a>
          </div>
        </EminentAppsSectionViolatorStrip>
      </PopupContainer>
    </Wrapper>
  );
};

export default ServicesPopupContent;

const onScheduleClickHandler = (e) => {
  document.getElementById("ScheduleBtn").click();
};

const ServiceCardContent = (cardImage) => {
  const src = Object.values(cardImage);
  return (
    <ServiceCard className="card-1">
      <img src={src} alt="Logo" />
      <div className="content">
        <h3>Need a Quote?</h3>
        <h4>Let's work together.</h4>
        <a
          onClick={onScheduleClickHandler}
          href="#"
          className="btn"
          title="Request Quote"
        >
          REQUEST QUOTE
        </a>
      </div>
      <div className="overlay red"></div>
      <div className="overlay blue"></div>
    </ServiceCard>
  );
};
const mobBreakpoint = 900;
const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 100%;
  min-height: 80%;
  z-index: 1000;
  ${"" /* background: rgb(5 11 17); */}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--block1-text-primary);
  transition: 0.2s ease;
  opacity: 1;

  @media (max-width: ${mobBreakpoint}px) {
    align-items: flex-start;
    top: 65px;
    z-index: 1000;
  }
`;
const PopupContainer = styled.div`
  position: relative;
  ${"" /* border: 1px solid ${({ $border }) => $border}; */}
  border-radius: 18px;
  padding: 0px;
  max-width: 1180px;
  margin: 20px 0;
  width: 100%;
  ${"" /* background: #071118; */}

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-top: 85px;
    width: 100%;
    padding: 18px;
    border-color: transparent;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-top: 0px;
  }
`;
const Header = styled.div`
  text-align: center;

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: 700;
    font-size: 66px;
    color: ${({ $color }) => $color};
    display: inline-block;
  }

  h4 {
    font-size: 32px;
    line-height: 1.3;
    font-weight: 400;
    max-width: 600px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.3em;
    letter-spacing: 0.03em;
    color: ${({ $color }) => ($color == "" ? "#a1a1a6" : "#fff")};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: fixed;
    text-align: center;
    left: 0;
    top: 0;
    padding: ${({ $isSmall }) => ($isSmall ? "20px 0 0 0" : "20px 0 0 0")};
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
    padding: 0px;
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
  width: 40px;
  height: 64px;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    height: 34px;
    width: 40px;
  }
`;

const CloseCross = styled.button`
  position: absolute;
  content: "";
  right: 20px;
  top: 20px;
  width: 30px;
  height: 20px;
  cursor: pointer;
  transition: 0.2s ease;
  background-color: unset;
  border: none;
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
  min-height: 530px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.5, 1, 0.89, 1);
  transition-delay: 0.25s;
  margin-bottom: 20px;
  border-radius: 18px;
  background: #282e33f0;

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
    line-height: 1.3em;
    letter-spacing: 0.03em;
    text-align: left;
    padding: 0px 20px 0px;
    color: #fff;
    display: inline-block;
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(to right, #999999, #ffffff);
  }

  h6 {
    font-size: 17px;
    line-height: 1.52947;
    font-weight: 400;
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

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 350px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;

  h3 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 0.7rem;
    margin-top: 0.7rem;
    text-transform: uppercase;
  }

  h4 {
    font-size: 1.3rem;
    color: #fff;
    margin-bottom: 1.5rem;
    line-height: 1.3;
  }

  .btn {
    text-decoration: none;
    color: #40464c;
    background: #fff;
    padding: 15px 25px;
    border-radius: 31px;
    font-weight: 500;
    margin-top: 1.2rem;
  }

  .btn:hover {
    background: #081119;
    color: #fff;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: translateY(100px);
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    transition-delay: 0.3s;
    padding: 0;
    text-align: center;
  }

  .overlay {
    position: absolute;
    width: 0px;
    height: 0px;
    transform-origin: 50% 50%;
    mix-blend-mode: normal;
    border-radius: 50%;
    -webkit-transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition: all 0.4s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    opacity: 0.8;
  }

  .red {
    width: 1400px;
    height: 1400px;
    background-color: #465e4f;
    left: calc(0% - 1400px);
    top: calc(50% - 700px);
  }

  .blue {
    width: 1400px;
    height: 1400px;
    background-color: #7dab9e;
    left: calc(100%);
    top: calc(50% - 700px);
  }

  &:hover .red {
    width: 1400px;
    height: 1400px;
    left: calc(0% - 700px);
    top: calc(50% - 700px);
  }

  &:hover .blue {
    width: 1400px;
    height: 1400px;
    left: calc(100% - 700px);
    top: calc(50% - 700px);
  }

  &:hover .content {
    transform: translateY(0);
    opacity: 1;
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

const AboutSectionViolatorStrip = styled.section`
  border: 2px dashed ${({ $borderColor }) => $borderColor};
  text-align: center;
  padding: 44px;
  color: ${({ $color }) => ($color == "" ? "#9cd8c4" : "#fff")};
  border-radius: 30px;
  font-weight: 500;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;

  .overview-copy {
    font-size: 20px;
  }

  .violator-strip-link-outlined {
    display: inline-block;
    position: relative;
    margin-top: 1.35em;
    border: 1px solid #06c;
    border-radius: 16px;
    padding: 8px 16px 8px 28px;
    color: ${({ $color }) => ($color == "" ? "#9cd8c4" : "#fff")};
    border-color: #fff;
  }

  a.icon-wrapper {
    text-decoration: none;
  }

  a.icon-wrapper:hover {
    text-decoration: underline;
  }

  .violator-strip-link-outlined .icon-copy {
    padding-left: 8px;
  }

  .violator-strip-link-outlined:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 14px;
  }

  .violator-strip-link-outlined:before {
    width: 13px;
    height: 18px;
    background-size: 13px 18px;
    background-repeat: no-repeat;
    background-image: url(${PaperWhiteIcon});
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 1.5dppx),
    (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi) {
    .violator-strip-link-outlined:before {
      background-image: url(${PaperWhiteIcon});
    }
  }
`;

const EminentAppsSectionViolatorStrip = styled.section`
  border: 2px dashed ${({ $borderColor }) => $borderColor};
  text-align: center;
  padding: 44px;
  color: ${({ $color }) => ($color == "" ? "#9cd8c4" : "#fff")};
  border-radius: 30px;
  font-weight: 500;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;

  .overview-copy {
    font-size: 2em;
  }

  .violator-strip-link-outlined {
    display: inline-block;
    position: relative;
    margin-top: 1.35em;
    border: 1px solid #06c;
    border-radius: 16px;
    padding: 8px 16px 8px 28px;
    color: ${({ $color }) => ($color == "" ? "#9cd8c4" : "#fff")};
    border-color: #fff;
  }

  a.icon-wrapper {
    text-decoration: none;
  }

  a.icon-wrapper:hover {
    text-decoration: underline;
  }

  .strip-copy {
    padding-left: 8px;
    font-size: 4em;
    background-image: linear-gradient(
      225deg,
      #affaff,
      #678f7d 20%,
      #9cd8c4 70%,
      #00a8b3
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 50px auto;
  }

  .strip-sub-copy {
    padding-left: 8px;
    font-size: 22px;
    max-width: 700px;
    margin: 0px auto;
  }

  .violator-strip-link-outlined:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 8px;
    left: 14px;
  }

  .violator-strip-link-outlined:before {
    width: 13px;
    height: 18px;
    background-size: 13px 18px;
    background-repeat: no-repeat;
    background-image: url(${PaperWhiteIcon});
  }

  .button.green {
    border-style: none;
    background-color: #3cf7a2;
    background-image: none;
    color: #060606;
    text-shadow: none;
    width: 280px;
    margin: 50px auto;
  }

  .button {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 48px;
    margin: 0;
    padding: 0.8em 2em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 32px;
    background-color: #fff;
    background-image: none;
    -webkit-transition-property: all;
    transition-property: all;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    color: #060606;
    font-size: 1em;
    line-height: 1;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    background-clip: border-box;
    -webkit-text-fill-color: inherit;
  }
  .button:hover {
    color: #fff;
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-resolution: 1.5dppx),
    (-webkit-min-device-pixel-ratio: 1.5),
    (min-resolution: 144dpi) {
    .violator-strip-link-outlined:before {
      background-image: url(${PaperWhiteIcon});
    }
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    .strip-copy {
      font-size: 1.6em;
    }
    .strip-sub-copy {
      font-size: 18px;
    }
    .overview-copy {
      font-size: 1.3em;
    }
    padding: 20px;
    margin: 0px 20px;

    .button.green {
      width: 200px;
    }
  }
`;

const SolutionsTextContainer = styled(ServicesTextContainer)`
  grid-template-columns: repeat(1, 1fr);
`;
