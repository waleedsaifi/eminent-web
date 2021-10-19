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
import * as THREE from "three";
import { APP } from "./3D/app";
import { VRButton } from "./3D/VRButton";
import { AppData } from "./3D/AppData";
import { isMobileOnly as mob } from "react-device-detect";
import Menu from "../Menu/Menu";
import { popupManager } from "../../helpers/popups";

const EminentAppsContent = ({ closeHandler, showPopup }) => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const { currentTheme } = useSelector((state) => state.state);
  const [activePopup, setActivePopup] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(true);
  const menuHandler = (flag) => setMenuOpen(flag);
  const [isBgBlur, setBgBlur] = useState(false);
  const blurredBackground = useRef(null);
  const closeHandlerPopup = () => {
    try {
      closeHandler();
    } catch (e) {
      window.location = "/";
    }
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

  window.THREE = THREE; // Used by APP Scripts.
  window.VRButton = VRButton; // Used by APP Scripts.

  useEffect(() => {
    var servicesText = document.getElementById("servicesText");

    const player = new APP.Player();
    player.load(AppData);

    let style = getComputedStyle(servicesText);

    const isMobile = window.innerWidth <= BREAKPOINTS.tablet || mob;
    var width = isMobile
      ? servicesText.offsetWidth
      : servicesText.offsetWidth / 2;
    player.setSize(width, servicesText.offsetHeight);
    player.play();
    if (!servicesText.classList.contains("3DPlayer")) {
      servicesText.appendChild(player.dom);
      servicesText.classList.add("3DPlayer");
      window.addEventListener("resize", function () {
        player.setSize(width, servicesText.offsetHeight);
      });
    }
  }, []);

  return (
    // <PageContainer>
    // {activePopup && popupManager(activePopup)}
    //   <Menu showPopup={setActivePopup} menuHandler={menuHandler} currentSectionTitle={"home"}
    //     currentSection={"home"}
    //     currentTheme={currentTheme} />

    <Wrapper
      ref={wrapper}
      $bg={currentTheme?.schedulePopupBg[0]}
      className="eminent-apps"
    >
      <PopupContainer $border={currentTheme?.schedulePopupTextColor}>
        <Header
          ref={header}
          $isSmall={isHeaderSmall}
          $color={currentTheme.textColor}
          $bg={currentTheme?.schedulePopupBg[0]}
        >
          {/* <CloseCross onClick={closeHandlerPopup}>
              <Cross $color={currentTheme?.schedulePopupTextColor} />
            </CloseCross>{" "} */}
          <HeaderTextContainer $color={"#fff"}>
            <h2>
              <LogoIcon />
              Apps
            </h2>
            <h4>The future of website & app development</h4>
            <h5>
              You don't want to invest in high costs and low-quality developers
              who will abandon your project halfway through. Stop wasting your
              energy and let our experts handle everything!{" "}
            </h5>
          </HeaderTextContainer>
        </Header>

        <SolutionsTextContainer
          className=""
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          <SolutionTextItem id="servicesText">
            <SolutionTextHeaders>
              <p className="greenText">Higher quality.</p>
              <p className="whiteText">Less stress.</p>
            </SolutionTextHeaders>
          </SolutionTextItem>
        </SolutionsTextContainer>
        {/* <UsersTextContainer>
          <h5>Our apps are used by over 1 million users across the globe.</h5>
        </UsersTextContainer> */}

        <AboutSectionViolatorStrip
          $icon={PaperWhiteIcon}
          $borderColor={currentTheme?.bgScheduleBtn}
        >
          <div className="violator-strip-content">
            <div className="overview-copy">
              <p>What is Eminent Apps?</p>
            </div>
            <p className="strip-copy">
              Everything you need to build, host and scale web & mobile apps
              without the hassle
            </p>

            <p className="strip-sub-copy">
              Easier said than done? Eminent Apps simplifies everything in the
              app-building process letting you focus on great experiences rather
              than heavy lifting. Forget using complicated software to
              create an app - our team of experts does that for you!
            </p>
          </div>
        </AboutSectionViolatorStrip>
        <SolutionsProcessContainer>
          <div
            data-w-id="c43c4199-aa6a-f095-04e7-4d2e7047b281"
            className="header-container"
          >
            <h6 className="center-text">How Eminent Apps Works</h6>
            <h2 className="center-text">3 steps to high-quality apps, fast.</h2>
          </div>
          <SolutionsProcessTextItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="60"
              viewBox="0 0 77 77"
              fill="none"
            >
              <path
                d="M19.4437 89H46.5849V0.269192H23.8802C23.8802 11.2301 19.5742 17.1019 0.653622 17.1019V37.8493H19.4437V89Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="44.5"
                  y1="89"
                  x2="44.5"
                  y2="-3"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5BB381" />
                  <stop offset="1" stopColor="#8CE0B6" />
                </linearGradient>
              </defs>
            </svg>
            <h2>Share your vision</h2>
            <p>
              We meet to listen and better understand your vision, current team structure
              and existing environment. We also investigate the long-term app needs
              of you or your company so that we can provide a solution tailored
              just for you!
            </p>
          </SolutionsProcessTextItem>
          <SolutionsProcessTextItem>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="60"
              viewBox="0 0 77 77"
              fill="none"
            >
              <path
                d="M0.306054 91H74.2919V69.9917H34.7545C36.3203 65.6856 38.9301 63.3369 44.28 60.4662L57.7201 53.9418C69.7249 48.0699 75.7272 38.9359 75.7272 26.8006C75.7272 9.96789 62.4176 0.0509195 39.8435 0.0509195C17.2693 0.0509195 2.52432 12.5776 2.52432 31.6286H29.796C29.796 23.7995 33.4496 19.6239 39.9739 19.6239C44.9324 19.6239 48.3251 22.8861 48.3251 27.5836C48.3251 32.6725 45.7154 36.1957 39.8435 39.1969L24.3156 46.7651C7.22184 55.1162 0.306054 67.9039 0.306054 91Z"
                fill="url(#paint1_linear)"
              />
              <defs>
                <linearGradient
                  id="paint1_linear"
                  x1="38.5"
                  y1="-26"
                  x2="38.5"
                  y2="123"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#5FC3FF" />
                  <stop offset="1" stopColor="#4D9DCC" />
                </linearGradient>
              </defs>
            </svg>
            <h2>Choose a plan</h2>
            <p>
              Decide on a subscription plan that suits you best. Our plans are
              designed to help both the professional and novice alike. You can
              scale up or down as your needs change without sacrificing the
              quality of service!
            </p>
          </SolutionsProcessTextItem>
          <SolutionsProcessTextItem>
            <svg
              width="40"
              height="60"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.9289 93.2183C61.9384 93.2183 76.1614 82.2574 76.1614 66.0771C76.1614 55.1162 69.3761 47.287 57.7628 45.0688C69.6371 42.3285 75.509 34.6298 75.509 24.7129C75.509 9.05449 61.4164 0.0509195 40.2776 0.0509195C16.3986 0.0509195 2.43654 11.4032 2.43654 28.497H29.5777C29.5777 22.4946 33.2314 18.9715 39.3642 18.9715C44.8447 18.9715 48.2373 22.1031 48.2373 26.9311C48.2373 32.6725 44.7142 35.6737 37.4069 35.6737H25.9241V54.8552H37.4069C44.7142 54.8552 48.6288 57.9869 48.6288 64.1198C48.6288 69.4697 44.9751 72.8624 38.9728 72.8624C32.1875 72.8624 28.1424 68.9478 28.1424 62.032H0.870703C0.870703 82.3879 13.5279 93.2183 37.9289 93.2183Z"
                fill="url(#paint2_linear)"
              />
              <defs>
                <linearGradient
                  id="paint2_linear"
                  x1="39.5"
                  y1="-26"
                  x2="39.5"
                  y2="123"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#ffa251" />
                  <stop offset="1" stopColor="#9c5c35" />
                </linearGradient>
              </defs>
            </svg>
            <h2>Assemble the team</h2>
            <p>
              We build custom teams (with clearances if needed) of expert
              software designers, engineers, and project managers based on your
              needs. You’ll have access to one point of contact who can take
              care of all the details for you!
            </p>
          </SolutionsProcessTextItem>
        </SolutionsProcessContainer>
        <ServicesHeaderText
          className="serviceHeaderText"
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          {/* <h2>App design and development services </h2> */}
          <h2>What services are included?</h2>
        </ServicesHeaderText>
        <ServicesTextContainer
          className="serviceTextContainer"
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          <ServicesGrid>
            <ServicesTextItem>
              <ServiceCardContent cardImage={MomWorkingIMG} />
              <h5>Apps, UI/UX and Frameworks</h5>
              <GradientKeyline />
              {/* <h6>
              Our Apps and Frameworks people create every application. Areas of
              work include Application Development, API Design, User Interface
              Design, Networking, Application Protocols, Framework Development,
              and Performance Engineering.
            </h6> */}
              <h6>
                We chat to understand your vision better, current team
                structure, and existing skills. We also investigate the
                long-term app needs of you or your company so that we can
                provide a solution tailored just for you!
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={TeamCollabIMG} />
              <h5>Cloud and Infrastructure</h5>
              <GradientKeyline />
              {/* <h6>
              We are prepared to jump right in when with a team capable of
              designing, developing, and deploying high-performance systems to
              handle millions of queries every day. Areas of work include Big
              Data, Server-Side Software Engineering, Database, and Data
              Engineering.
            </h6> */}
              <h6>
                Our team is prepared to work with you on a wide range of
                projects. We can handle designing and developing
                high-performance systems to handle millions of hits every day.
                Our team develops and manages data centers that support users
                all over the globe.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={CloudIMG} />
              <h5>DevOps and Site Reliability</h5>
              <GradientKeyline />
              {/* <h6>
              By designing and building a continuous integration and delivery
              system, we’ll ensure the high availability, scalability, and
              security of a huge infrastructure every day. Areas of work include
              Site Reliability Engineering, Systems Engineering, Network
              Engineering, Performance Engineering, Systems Administration, and
              Hadoop Administration.
            </h6> */}
              <h6>
                We’ll build a system that is constantly up and running. Our
                engineers will be responsible for ensuring the high
                availability, scalability, security of the infrastructure every
                day with Site Reliability Engineering (SRE), Networking Systems
                Administration expertise - including performance engineering as
                well!
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
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
            <ServicesTextItem>
              <ServiceCardContent cardImage={WireframingCollaborationIMG} />
              <h5>Information Systems and Technology</h5>
              <GradientKeyline />
              <h6>
                You can depend on us, to help design and manage complex systems
                that run our country such as high traffic public-facing web
                platforms, as well as manufacturing, logistics, operations, and
                facilities. Areas of work include Web Application Engineering,
                Back-End Engineering, Mobile Software Engineering, Data Science
                and Applied Machine Learning, Software Quality Engineering,
                Security Engineering, Network Engineering, Content Delivery, and
                Data Center Operations.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={WomanWorkerIMG} />
              <h5>Machine Learning and AI</h5>
              <GradientKeyline />
              <h6>
                We help develop algorithms that learn from data to create the
                most insightful options for the best outcomes. We do it with the
                help of privacy experts to ensure users’ privacy is respected.
                Areas of work include Artificial Intelligence, Computer Vision,
                Data Science, and Deep Learning.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={WorkersIMG} />
              <h5>Defi and Blockchain</h5>
              <GradientKeyline />
              <h6>
                All though the technology is still not widely adopted, we've
                come to take Blockchain and Cryptocurrency seriously. We are
                proactivly engaged in the community to see what innovations we
                can advance as we create customer experiences that are seamless.
                Areas of work include Blockchain Solutions, Smart Contracts,
                Wallet Development, DAPP Development and NFTs.
              </h6>
            </ServicesTextItem>
            <ServicesTextItem>
              <ServiceCardContent cardImage={GroupWorkingIMG} />
              <h5>Quality, Automation, and Tools</h5>
              <GradientKeyline />
              <h6>
                We work to ensure that your software and services run as
                smoothly as each was designed to. Areas of work include Quality
                Assurance Engineering, Integration Engineering, Software
                Developer in Test Engineering, Applications Engineering,
                Software Compatibility Engineering, Automation Engineering, and
                Tools Development.
              </h6>
            </ServicesTextItem>

            <div className="paddlenav paddlenav-framed">
              <ul>
                <li>
                  <button
                    data-dir="-1"
                    aria-label="Previous article"
                    className="paddlenav-arrow paddlenav-arrow-previous"
                    data-analytics-click="prop3:Previous News Article"
                    data-analytics-title="Previous News Article"
                    disabled=""
                  >
                    <svg
                      className="svg-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-36.9-80.2
											C-44.2-80.2-50-86-50-93.2c0-7.2,5.8-13.1,13-13.1c7.2,0,13.1,5.8,13.1,13.1C-23.9-86-29.7-80.2-36.9-80.2z M-34.1-85.9
											c0.3-0.3,0.3-0.9,0-1.2l-6.4-6.1l6.4-6.1c0.4-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0l-6.5,6.2c-0.7,0.6-0.7,1.6,0,2.2l6.5,6.2
											C-35-85.6-34.4-85.5-34.1-85.9z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      className="svg-icon icon-hover"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-34.1-85.9
											c-0.3,0.3-0.9,0.3-1.2,0l-6.5-6.2c-0.7-0.6-0.7-1.6,0-2.3l6.5-6.2c0.4-0.3,0.9-0.3,1.2,0c0.4,0.3,0.4,0.9,0,1.3l-6.4,6.1l6.4,6.1
											C-33.7-86.8-33.7-86.2-34.1-85.9z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    data-dir="1"
                    aria-label="Next article"
                    className="paddlenav-arrow paddlenav-arrow-next"
                    data-analytics-click="prop3:Next News Article"
                    data-analytics-title="Next News Article"
                  >
                    <svg
                      className="svg-icon"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-36.9-80.2
											C-44.2-80.2-50-86-50-93.2c0-7.2,5.8-13.1,13-13.1c7.2,0,13.1,5.8,13.1,13.1C-23.9-86-29.7-80.2-36.9-80.2z M-40.2-85.9
											c0.3,0.3,0.9,0.3,1.3,0l6.5-6.2c0.7-0.6,0.7-1.6,0-2.2l-6.5-6.2c-0.4-0.4-0.9-0.4-1.2,0c-0.4,0.3-0.4,0.9,0,1.2l6.4,6.1l-6.4,6.1
											C-40.6-86.8-40.6-86.2-40.2-85.9z"
                        ></path>
                      </g>
                    </svg>
                    <svg
                      className="svg-icon icon-hover"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 44 44"
                    >
                      <g transform="matrix(1 0 0 1 58.93574707031257 115.221435546875)">
                        <path
                          d="M-36.9-78.2c8.2,0,15-6.8,15-15c0-8.2-6.8-15-15-15c-8.2,0-15,6.8-15,15C-51.9-85-45.1-78.2-36.9-78.2z M-40.3-85.7
											c-0.4-0.4-0.4-0.9,0-1.3l6.5-6.2l-6.5-6.2c-0.4-0.3-0.4-0.9,0-1.3c0.4-0.3,0.9-0.3,1.3,0l6.6,6.3c0.7,0.6,0.7,1.7,0,2.3l-6.6,6.3
											C-39.4-85.4-40-85.4-40.3-85.7z"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </ServicesGrid>
        </ServicesTextContainer>
        <PricingContainer>
          <PricingTextContainer>
            <h2>Select a plan and experience the difference today.</h2>
            <h6>
              Save time & cost of building your own backend infrastructure and
              use our fully managed, infinitely scalable enterprise-grade
              infrastructure. Choose one of our flexible plans. We offer three
              different types: Starter Plan (for smaller projects), Business
              Plan (to serve many clients) and Enterprise Packages which can be
              tailored specifically for large organizations like yours at no
              extra cost. You can count on enterprise-class quality support and
              help when you need us.
            </h6>
          </PricingTextContainer>
          <PricingPlanContainer>
            <PricingPlanWrapper>
              <div className="plan-wrapper">
                <div className="pricing-plan-header-wrapper">
                  <h5 className="green-text">Starter Plan</h5>
                  <div className="div-block-3021">
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c593-8377c58e"
                      className="_8px-bottom-margin top-left"
                    >
                      $
                    </div>
                    <h1 className="price-number">19k</h1>
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c597-8377c58e"
                      className="_8px-bottom-margin bottom-right"
                    >
                      /mo billed annually
                    </div>
                  </div>
                  <div className="plan-text-summary">
                    Turn your idea into an amazing website or mobile app that
                    people love.
                  </div>
                </div>
                <SignUpButton
                  onClick={onScheduleClickHandler}
                  className="button green w-button"
                >
                  Book a Demo →
                </SignUpButton>
                <div className="plan-text-summary money-back">
                  Get the 12th month free when you commit to two years or more
                </div>
                <h5 className="pricing-heading">Includes:</h5>
                <div className="pricing-plan-features-wrapper">
                  <div className="feature">
                    <div className="tool-tip">
                      <p>
                        Generate up to 20,000 words per month written by AI. You
                        can buy 5,000 more words for $10 anytime.
                      </p>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Dedicated Project Manager</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Choose a template for your needs (i.e. Email Subject
                        Line) and AI will generate quality, short-form copy.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      Business Analysis Support <br />
                      <span className="blue-text">Up to 100 hours</span>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Javis has been taught over 50+ copywriting skills such
                        as headlines, ads &amp; descriptions.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      App Development Support
                      <br />
                      <span className="blue-text">Up to 100 hours</span>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>Collaborate with everyone on your team.</div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      UI/UX Design Support
                      <br />
                      <span className="blue-text">up to 80 hours</span>
                    </div>
                  </div>
                  <div
                    data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5ad"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Organize your projects into folders, such as client
                        work.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      Quality Assurance Support
                      <br />
                      <span className="blue-text">Up to 80 hours</span>
                    </div>
                  </div>
                  <div
                    data-w-id="80601a13-f87f-fd7a-bcc6-9fb15214983a"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Jarvis can currently read and write in over 25
                        languages.{" "}
                        <a
                          href="https://help.conversion.ai/article/150-what-languages-does-jarvis-speak"
                          target="_blank"
                        >
                          See all here.
                        </a>
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>10+ Programming Languages</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Our team in Austin, Texas is ready to help you when you
                        need!
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5cd">
                      24/5 Support
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Learn tips and connect with 20,000+ copywriters using
                        AI.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Innovation&nbsp;Partner's Network</div>
                  </div>
                </div>
              </div>
            </PricingPlanWrapper>
            <PricingPlanWrapper>
              <div className="plan-wrapper">
                <div className="pricing-plan-header-wrapper">
                  <h5 className="green-text">Business Plan</h5>
                  <div className="div-block-3021">
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c593-8377c58e"
                      className="_8px-bottom-margin top-left"
                    >
                      $
                    </div>
                    <h1 className="price-number">39k</h1>
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c597-8377c58e"
                      className="_8px-bottom-margin bottom-right"
                    >
                      /mo billed annually
                    </div>
                  </div>
                  <div className="plan-text-summary">
                    Get the industry-leading tools and services your business
                    needs to thrive.
                  </div>
                </div>
                <SignUpButton
                  onClick={onScheduleClickHandler}
                  className="button green w-button"
                >
                  Book a Demo →
                </SignUpButton>
                <div className="plan-text-summary money-back">
                  Get the 12th month free when you commit to two years or more
                </div>
                <h5 className="pricing-heading">Includes:</h5>
                <div className="pricing-plan-features-wrapper">
                  {/* <div className="feature">
                    <div className="tool-tip">
                      <p>
                        Generate up to 20,000 words per month written by AI. You
                        can buy 5,000 more words for $10 anytime.
                      </p>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Access to Senior Partners</div>
                  </div> */}
                  <div className="feature">
                    <div className="tool-tip">
                      <p>
                        Generate up to 20,000 words per month written by AI. You
                        can buy 5,000 more words for $10 anytime.
                      </p>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Access to Senior Experts</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Choose a template for your needs (i.e. Email Subject
                        Line) and AI will generate quality, short-form copy.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Dedicated Leadership Team</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Javis has been taught over 50+ copywriting skills such
                        as headlines, ads &amp; descriptions.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Dedicated Scrum Team</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>Collaborate with everyone on your team.</div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      Information Assurance Support
                      <br />
                      <span className="blue-text">
                        FedRAMP and NIST Compliant
                      </span>
                    </div>
                  </div>
                  <div
                    data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5ad"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Organize your projects into folders, such as client
                        work.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      Administrative Assistance <br />
                      <span className="blue-text">Up to 100 Hours</span>
                    </div>
                  </div>
                  <div
                    data-w-id="80601a13-f87f-fd7a-bcc6-9fb15214983a"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Jarvis can currently read and write in over 25
                        languages.{" "}
                        <a
                          href="https://help.conversion.ai/article/150-what-languages-does-jarvis-speak"
                          target="_blank"
                        >
                          See all here.
                        </a>
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>10+ Programming Languages</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Our team in Austin, Texas is ready to help you when you
                        need!
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5cd">
                      API Integrations <br />
                      <span className="blue-text">Up to 5 Platforms</span>
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Our team in Austin, Texas is ready to help you when you
                        need!
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5cd">
                      24/5 Support
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Learn tips and connect with 20,000+ copywriters using
                        AI.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Innovation&nbsp;Partner's Network</div>
                  </div>
                </div>
              </div>
            </PricingPlanWrapper>
            <PricingPlanWrapper>
              <div className="plan-wrapper">
                <div className="pricing-plan-header-wrapper">
                  <h5 className="green-text">Enterprise Plan</h5>
                  <div className="div-block-3021">
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c593-8377c58e"
                      className="_8px-bottom-margin top-left"
                    >
                      $
                    </div>
                    <h1 className="price-number">69k</h1>
                    <div
                      id="w-node-f46277a3-da4b-0cd6-a3ec-fc3b8377c597-8377c58e"
                      className="_8px-bottom-margin bottom-right"
                    >
                      /mo billed annually
                    </div>
                  </div>
                  <div className="plan-text-summary">
                    Get tailored services from our app and service team to meet
                    all of your business needs.
                  </div>
                </div>
                <SignUpButton
                  onClick={onScheduleClickHandler}
                  className="button green w-button"
                >
                  Book a Demo →
                </SignUpButton>
                <div className="plan-text-summary money-back">
                  Get the 12th month free when you commit to two years or more
                </div>
                <h5 className="pricing-heading">Includes: </h5>
                <div className="pricing-plan-features-wrapper">
                  <div className="feature">
                    <div className="tool-tip">
                      <p>
                        Generate up to 20,000 words per month written by AI. You
                        can buy 5,000 more words for $10 anytime.
                      </p>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Access to Senior Partners</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <p>
                        Generate up to 20,000 words per month written by AI. You
                        can buy 5,000 more words for $10 anytime.
                      </p>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Access to Senior Experts</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Choose a template for your needs (i.e. Email Subject
                        Line) and AI will generate quality, short-form copy.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Dedicated Leadership Team</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Javis has been taught over 50+ copywriting skills such
                        as headlines, ads &amp; descriptions.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Dedicated Scrum Team</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>Collaborate with everyone on your team.</div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>
                      Information Assurance Support
                      <br />
                      <span className="blue-text">
                        FedRAMP and NIST Compliant
                      </span>
                    </div>
                  </div>
                  <div
                    data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5ad"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Organize your projects into folders, such as client
                        work.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Administrative Assistants</div>
                  </div>
                  <div
                    data-w-id="80601a13-f87f-fd7a-bcc6-9fb15214983a"
                    className="feature"
                  >
                    <div className="tool-tip">
                      <div>
                        Jarvis can currently read and write in over 25
                        languages.{" "}
                        <a
                          href="https://help.conversion.ai/article/150-what-languages-does-jarvis-speak"
                          target="_blank"
                        >
                          See all here.
                        </a>
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>10+ Programming Languages</div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Our team in Austin, Texas is ready to help you when you
                        need!
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5cd">
                      Unlimited API Integrations
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Our team in Austin, Texas is ready to help you when you
                        need!
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div data-w-id="f46277a3-da4b-0cd6-a3ec-fc3b8377c5cd">
                      Tailored Service Agreements (SLA)
                    </div>
                  </div>
                  <div className="feature">
                    <div className="tool-tip">
                      <div>
                        Learn tips and connect with 20,000+ copywriters using
                        AI.
                      </div>
                      <img
                        src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b86f307c30fcc_White%20Down%20Arrow.svg"
                        alt=""
                        className="tool-tip-arrow"
                      />
                    </div>
                    <img
                      src="https://uploads-ssl.webflow.com/60e5f2de011b86acebc30db7/60e5f2de011b865ecec30fca_Green%20Check.svg"
                      alt="Green Check"
                      className="green-check"
                    />
                    <div>Innovation&nbsp;Partner's Network</div>
                  </div>
                </div>
              </div>
            </PricingPlanWrapper>
          </PricingPlanContainer>
          <PricingTextContainer>
            <h2>Questions? Answers.</h2>
            <p className="strip-sub-copy">
              {" "}
              Don't see your question? Email info@eminentfuture.com
            </p>
          </PricingTextContainer>
          <FAQContainer>
            <FAQTextItem>
              <h2>How do I know which plan is right for me?</h2>
              <p>
                We can help guide you! Just book a call with us and we'll figure
                it out based on your team's needs as well as your expected
                design volume and velocity. Let's find the best option,
                together.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>What is the minimum commitment?</h2>
              <p>
                The minimum subscription commitment is one year; however we do
                offer quarterly trials on a limited basis. 3 months is how long
                it takes to fully onboard your team and establish good processes
                and working relationships, and to deliver on your requirements
                and brand. We encourage moving to an annual commitment after the
                trial period to avail of the cost savings and predictability
                that comes with it.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>Do you do custom plans?</h2>
              <p>
                Yes indeed, however we only offer customized plans for those
                needing something larger than our Enterprise Plan.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>What billing options do you offer?</h2>
              <p>
                We offer credit card billing or invoicing depending on the plan
                you choose.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>
                Can I choose my dedicated development team and Project Manager?
              </h2>
              <p>
                Our process is designed to eliminate all waste and keep this
                hassle-free for you, our customer. You will work exclusively
                with your dedicated project managers and will not need to have
                any face time with the dedicated team. For some subscription
                plans you will have a monthly meeting with your dedicated
                program manager or project manager.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>
                I have a lot of development projects. How does project
                management and/or sprint planning work? And how do I work with
                the dedicated development team?
              </h2>
              <p>
                We help you with all project management. There are some
                differences depending on the plan you choose, but our goal is to
                take ownership and accountability of the process from start to
                finish. Let us worry, so you don’t have to.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>
                Can others in my company use the Eminent Apps platform without
                having to use Eminent Apps development teams for the output?
              </h2>
              <p>
                Glad you asked! This is a feature currently in beta. We plan to
                roll it out to all subscription customers by March 2022 where
                our tech platform can be used by anyone at your company you’d
                like to give access to. With this you'll be able to get your
                developers and teams on to the platform as a ‘resource’ as well.
                This way, your colleagues can choose to get development done
                using internal or external resources or a combination of the
                two.
              </p>
            </FAQTextItem>
            <FAQTextItem>
              <h2>
                Does Eminent Apps allow us to do planning and forecasting of
                projects and see their real-time status?
              </h2>
              <p>
                Yes. While these features are still nascent, a Scrum board shows
                you all your projects currently in progress. As well, several
                project planning features are currently being built and rolled
                out to customers in beta as well.
              </p>
            </FAQTextItem>
          </FAQContainer>
        </PricingContainer>
        <AboutSectionViolatorStrip
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
        </AboutSectionViolatorStrip>
      </PopupContainer>
    </Wrapper>
    // {
    //   <BlurredBackground
    //     ref={blurredBackground}
    //     className="blurredBackground"
    //   />
    // }
    // </PageContainer>
  );
};

export default EminentAppsContent;

const PageContainer = styled.div`
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

const SignUpButton = styled.a``;

const onScheduleClickHandler = (e) => {
  document.getElementById("ScheduleBtn").click();
  document.getElementById("app").scrollTo(0, 0);
};

const ServiceCardContent = (cardImage) => {
  const src = Object.values(cardImage);
  return (
    <ServiceCard className="card-1">
      <img src={src} alt="Logo" />
      <div className="content">
        <h3>Pick a Plan Below</h3>
        <h4>Let's work together.</h4>
        <a
          onClick={onScheduleClickHandler}
          href="#"
          className="btn"
          title="Request Quote"
        >
          GET STARTED
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
  z-index: 1;
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
    z-index: 1;
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
    padding: 0px;
  }
`;
const Header = styled.div`
  text-align: center;

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: 700;
    font-size: 66px;
    color: #fff;
    display: inline-block;
  }

  h4 {
   font-size: 65px;
    line-height: 1.3;
    font-weight: 500;
    max-width: 820px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    -webkit-letter-spacing: 0.03em;
    -moz-letter-spacing: 0.03em;
    -ms-letter-spacing: 0.03em;
    letter-spacing: 0.03em;
    color: #fff;
    background-image: linear-gradient( 
225deg, #affaff, #678f7d 20%, #9cd8c4 70%, #00a8b3 );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
  }

  h5 {
    font-size: 22px;
    color: #fff;
    font-weight: 400;
    max-width: 600px;
    margin: 0px auto 40px;
    line-height: 30px;
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
      font-size: 1.6em;
      margin-bottom: 10px;
    }
    h5 {
    font-size: 18px;
    }
  }
`;

const HeaderTextContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-top: 20px;
    padding: 0px 20px;
  }
`;

const LogoIcon = styled(LogoIconSVG)`
  display: inline-block;
  stroke: rgba(255, 255, 255, 0);
  width: 70px;
  height: 44px;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    height: 34px;
    width: 40px;
  }

  ${
    "" /* @media (prefers-color-scheme: dark) {
    #path0 {
      fill: #fff;
    }
  } */
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
  text-align: ${({ $textAlign }) => ($textAlign ? $textAlign : "left")};
  left: ${({ $left }) => $left};
  max-width: ${({ $boxMaxWidth }) => $boxMaxWidth.deskXl.t1};
  white-space: pre-line;
  letter-spacing: ${({ $letterSpacing }) => $letterSpacing};
  line-height: ${({ $fontSize }) => $fontSize[0]};
  text-transform: ${({ $textTransform }) =>
    $textTransform ? $textTransform : "none"};
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "none")};

  width: 100%;
  margin: 100px auto;
  scroll-behavior: smooth;
  will-change: transform;
  scroll-snap-type: x mandatory;
  overflow: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  scrollbar-height: none;

  h2 {
    margin: 0px auto;
    text-align: center;
    max-width: 800px;
    grid-column: 1 / span 2;
    font-size: 4em;
    padding: 0px;
    line-height: 1.3em;
    font-weight: 500;
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
  }

  @media (max-width: ${BREAKPOINTS.xl}px) {
    font-size: ${({ $fontSize }) => $fontSize[1]};
    max-width: ${({ $boxMaxWidth }) =>
      $boxMaxWidth.deskM ? $boxMaxWidth.deskM.t1 : $boxMaxWidth.deskXl.t1};
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
    width: 90%;
    margin: 50px auto;
    h2 {
      font-size: 2em;
    }
  }

  .paddlenav {
    display: none;
  }

  .paddlenav button {
    position: relative;
    width: 44px;
    height: 44px;
    display: none;
  }
  .paddlenav button .svg-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 44px;
    fill: #1d1d1f;
    transition: opacity 0.15s;
  }

  .paddlenav button:disabled .svg-icon,
  .paddlenav button:disabled:hover .svg-icon {
    fill: #86868b;
    opacity: 1;
  }
`;

const ServicesHeaderText = styled(ServicesTextContainer)`
  width: 100%;
  height: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  overflow: visible;
  grid-auto-flow: column;
  grid-gap: 20px;

  grid-auto-flow: column;
  width: fit-content;
  overflow: visible;
`;

const ServicesTextItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 500px;
  height: auto;
  box-sizing: border-box;
  overflow: hidden;
  transition: transform 1s cubic-bezier(0.5, 1, 0.89, 1);
  transition-delay: 0.25s;
  border-radius: 18px;
  background: #16181a;
  grid-row: 1;
  width: 335px;

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
    display: none;
    padding: 0px;
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
    min-height: auto;
    h5 {
      font-size: 20px;
    }
    margin: 0px 20px;
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
    font-size: 1.6rem;
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

const SolutionsTextContainer = styled.div`
  grid-template-columns: repeat(1, 1fr);
  margin: 100px auto;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin: 50px auto;
  }
`;

const UsersTextContainer = styled.div``;

const SolutionTextItem = styled(ServicesTextItem)`
  ${"" /* background: #282e33; */}
  background:#071118;
  width: auto;
  @media (max-width: ${BREAKPOINTS.mob}px) {
    min-height: 400px;
  }
`;

const SolutionTextHeaders = styled.div`
  position: absolute;
  top: 30%;
  width: 553px;
  font-size: 4em;
  line-height: 1.3em;
  left: 45%;
  font-weight: 500;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #999999, #ffffff);

  .greenText {
    color: transparent;
    -webkit-background-clip: text;
    background-image: linear-gradient(
      225deg,
      #affaff,
      #678f7d 20%,
      #9cd8c4 70%,
      #00a8b3
    );
    margin: 0px !important;
  }

  .whiteText {
    color: #fff;
    ${"" /* -webkit-background-clip: text; */}
    ${"" /* background-image: linear-gradient(to right, #999999, #ffffff); */}
    margin: 0px !important;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 2em;
    left: 10%;
    width: 80%;
  }
`;

const SolutionsProcessContainer = styled.section`
  margin: 100px auto;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  grid-gap: 20px;
  .number {
    height: 40px;
  }
  .header-container {
    grid-column: 1 / span 3;
    text-align: center;
    font-size: 2em;
    color: #fff;
    font-weight: 500;
  }
  h6 {
    margin: 0px;
    font-size: 32px;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  h2 {
    margin: 50px auto 50px;
    text-align: center;
    max-width: 800px;
    grid-column: 1 / span 2;
    font-size: 2em;
    padding: 0px;
    line-height: 1.3em;
    font-weight: 500;
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
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: repeat(1, 1fr);

    margin: 50px auto;
    .header-container {
      grid-column: 1 / span 1;
    }

    h2 {
      font-size: 1.1em;
      padding: 0px 20px;
    }
  }
`;

const SolutionsProcessTextItem = styled.div`
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  min-height: 150px;
  height: auto;
  background: #17171a;
  border-radius: 32px;
  padding: 20px;
  color: #fff;

  svg {
    margin: 0px auto 10px;
  }

  p {
    font-size: 17px;
    line-height: 1.52947;
    font-weight: 400;
    -webkit-letter-spacing: 0.011em;
    -moz-letter-spacing: 0.011em;
    -ms-letter-spacing: 0.011em;
    letter-spacing: 0.011em;
    margin: 10px;
    max-width: 550px;
    text-align: left;
    color: #e6e6eb;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  h2 {
    text-align: center;
    margin: 10px;
    color: #fff;
    -webkit-text-fill-color: #fff;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin: 0px 20px;

    svg {
      margin: 0px 0px 10px 10px;
    }
    h2 {
      text-align: left;
      padding: 0px;
    }
  }
`;

const PricingContainer = styled.section`
  display: grid;
`;

const PricingTextContainer = styled.div`
  h2 {
    margin: 0px auto;
    text-align: center;
    max-width: 980px;
    grid-column: 1 / span 2;
    font-size: 4em;
    padding: 40px 0px;
    line-height: 1.3em;
    font-weight: 500;
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
  }

  h6 {
    font-size: 17px;
    line-height: 1.52947;
    font-weight: 400;
    -webkit-letter-spacing: 0.011em;
    -moz-letter-spacing: 0.011em;
    -ms-letter-spacing: 0.011em;
    letter-spacing: 0.011em;
    margin: 0px auto 40px;
    max-width: 950px;
    text-align: center;
    color: #e6e6eb;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
  }

  .strip-sub-copy {
    font-size: 22px;
    max-width: 700px;
    margin: 0px auto;
    color: #fff;
    text-align: center;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    padding: 0px 20px;

    h2 {
      padding: 20px;
      font-size: 30px;
    }

    .strip-sub-copy {
      font-size: 22px;
    }
  }
`;

const PricingPlanContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 3fr);

  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 20px;
  }
`;

const PricingPlanWrapper = styled.div`
  display: flex;
  color: #e6e6eb;
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
  .plan-wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    max-width: 320px;
    margin: 20px;
    padding: 32px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    border-radius: 20px;
    background-color: #071118;
    text-align: left;
  }

  .plan-wrapper.white-plan {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background-color: #fff;
    color: #8a8f98;
  }

  .div-block-3021 {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    margin-bottom: 10px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    justify-items: center;
    -webkit-box-align: start;
    -webkit-align-items: start;
    -ms-flex-align: start;
    align-items: start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    grid-auto-columns: 1fr;
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
  }

  ._20px-top-margin {
    margin-top: 20px;
  }

  .pricing-heading {
    margin-bottom: 8px;
    text-align: left;
  }

  .black-text {
    color: #0f0f11;
  }
  h1 {
    margin: 0;
    color: #fff;
    font-size: 3em;
    line-height: 1.5em;
    font-weight: 800;
  }

  ._8px-bottom-margin.bottom-right {
    position: relative;
    right: 0;
    bottom: 0;
    width: 60px;
    max-width: 90px;
    margin-left: 2px;
    font-size: 12px;
    text-align: left;
  }

  .pricing-plan-header-wrapper {
    margin-bottom: 20px;
    text-align: center;
  }
  .green-text {
    color: #9cd8c4;
    font-size: 20px;
  }
  .price-number {
    line-height: 1em;
  }

  .button.green {
    border-style: none;
    background-color: #3cf7a2;
    background-image: none;
    color: #060606;
    text-shadow: none;
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

  span.blue-text {
    color: #759eaa;
  }

  .plan-text-summary.money-back {
    margin-top: 8px;
    text-align: center;
  }

  .plan-text-summary {
    font-size: 14px;
    line-height: 1.2em;
  }

  .pricing-heading {
    margin-bottom: 8px;
    text-align: left;
  }
  h5 {
    margin-top: 10px;
    margin-bottom: 10px;
    color: #fff;
    font-size: 1em;
    line-height: 1.5;
    font-weight: 600;
  }

  .feature {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
    font-size: 14px;
    text-align: left;
  }
  .tool-tip {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    z-index: 10;
    display: none;
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background-color: #fff;
    color: #17171a;
    font-size: 14px;
    text-align: left;
  }

  .green-check {
    width: 16px;
    height: 16px;
    margin-top: 4px;
    margin-right: 16px;
    margin-bottom: 4px;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    .plan-wrapper {
      margin: 10px 0px 20px;
    }
  }
`;

const FAQContainer = styled(SolutionsProcessContainer)`
  grid-template-columns: repeat(2, 2fr);

  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const FAQTextItem = styled(SolutionsProcessTextItem)`
  h2 {
    text-align: left;
    font-size: 18px;
  }
  p {
    font-size: 17px;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    p {
      font-size: 16px;
    }
  }
`;

const BlurredBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  backdrop-filter: blur(10px);
`;
