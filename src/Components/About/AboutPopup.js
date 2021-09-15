import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { useSelector } from "react-redux";
import { ReactComponent as LogoIconSVG } from "../../assets/images/eminent-icon.svg";
import { RisiIMG, IsaacIMG, LeAnnIMG } from "../../assets/images/about/index";
import { ParticleBackground } from "Components/ParticleBackground";
import { darkTheme, lightTheme } from "constants/constants";
import { toggleElementsforPopup } from "utils/navigation";

const AboutPopupContent = ({ closeHandler, showPopup }) => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const { currentTheme } = useSelector((state) => state.state);

  const closeHandlerPopup = () => {
    closeHandler();
    window.addEventListener("wheel", popupWheelHandler);
  };

  //   const onScheduleClickHandler = () => {
  //     if (window.innerWidth <= BREAKPOINTS.tablet) {
  //       setMenuOpen(false);
  //     }
  //     showPopup("schedule");
  //   };

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
    {/* <ParticleBackground currentTheme={darkTheme} /> */}
      <PopupContainer $border={currentTheme?.schedulePopupTextColor}>
        <Header
          ref={header}
          $isSmall={isHeaderSmall}
          $color={currentTheme?.textColor}
          $bg={currentTheme?.schedulePopupBg[0]}
        >
          <CloseCross onClick={closeHandlerPopup}>
            <Cross $color={currentTheme?.schedulePopupTextColor} />{" "}
          </CloseCross>{" "}
          <HeaderTextContainer>
            {/* <LogoIcon /> */}
            <h2> ABOUT </h2>
            <h4>
              We are committed individuals driven by values that inspire
              excellence.{" "}
            </h4>
          </HeaderTextContainer>
        </Header>
        <AboutTextContainer
          className="aboutTextContainer"
          $color={currentTheme?.textColor}
          $top={"50%"}
          $fontSize={"12px"}
          $left={"unset"}
          $letterSpacing={"0.07em"}
          $boxMaxWidth={getBoxMaxWidth()}
        >
          <AboutSection>
            <AboutSectionContent>
              <AboutHeadline className="headline">
                Eminent Leadership
              </AboutHeadline>
              <p className="typography-overview-feature-copy feature-excerpt">
                Finding the courage to lead in the face of adversity.
              </p>
              <div className="typography-overview-feature-copy feature-copy">
                <div className="feature-copy-columns">
                  <p>
                    With a shared ambition to make the future of work
                    extraordinary, Mr. José "Tech" Risi and Mr. Isaac Barnes
                    joined forces in 2009.
                  </p>
                  <p>
                    Despite being from disadvantaged backgrounds, the founders
                    of Eminent formed a risky partnership – one forged from a
                    shared passion for software engineering and a desire to
                    create the Best Innovation Company in the world.
                  </p>
                </div>
              </div>
            </AboutSectionContent>
            <AboutCardContainer>
              <AboutTextItem className="grid-1 grid-left">
                <AboutCardContent
                  cardImage={RisiIMG}
                  url={"https://www.linkedin.com/in/joserisi/"}
                />
                <h5>José "Tech" Risi</h5>
                <GradientKeyline />
                <h6>CEO and Founder</h6>
                {/* <a href="" title="View Profile">View Profile</a> */}
              </AboutTextItem>
              <AboutTextItem className="grid-1 grid-right">
                <AboutCardContent
                  cardImage={IsaacIMG}
                  url={"https://www.linkedin.com/in/isaacbarnes/"}
                />
                <h5>Isaac Barnes</h5>
                <GradientKeyline />
                <h6>President and Founder</h6>
                {/* <a href="" title="View Profile">View Profile</a> */}
              </AboutTextItem>
              <AboutTextItem className="grid-1 grid-left">
                <AboutCardContent
                  cardImage={LeAnnIMG}
                  url={"https://www.linkedin.com/in/leann-dishart-b7676461/"} //aws s3 cp “/Users/isaacbarnes/Documents/GitHub/eminent-web/build” s3://eminentfuture.com/ aws s3 rm s3://eminentfuture.com/ --recursive
                />
                <h5>LeAnn Dishart</h5>
                <GradientKeyline />
                <h6>Chief Human Resources Officer</h6>
                {/* <a href="" title="View Profile">View Profile</a> */}
              </AboutTextItem>
            </AboutCardContainer>
          </AboutSection>

          <AboutSection>
            <AboutSectionContent>
              <AboutHeadline className="headline">
                Eminent the Company
              </AboutHeadline>

              <p className="typography-overview-feature-copy feature-excerpt">
                Committed to doing great work to create a better future.
              </p>

              <div className="typography-overview-feature-copy feature-copy">
                <div className="feature-copy-columns">
                  <p>
                    Eminent is a truly remote-first organization with a
                    distributed team of 20+ people across the United States. We
                    have a diverse and inclusive culture with people from all
                    over the world offering different expertise, cultural
                    perspectives, and different age ranges.
                  </p>
                  <p>
                    Together we imagine and create new ways of taking on issues
                    we care about deeply, such as equity, security,
                    transparency, and the environment.
                  </p>
                </div>
              </div>
            </AboutSectionContent>
            {/* <AboutCardContainer>
              <AboutTextItem className="grid-1 grid-left">
                <AboutCardContent cardImage={IsaacIMG} />
              </AboutTextItem>
              <AboutTextItem className="grid-1 grid-right">
                <AboutCardContent cardImage={IsaacIMG} />
              </AboutTextItem>
            </AboutCardContainer> */}
          </AboutSection>

          <AboutSection>
            <h5></h5>
            <GradientKeyline />
            <h6></h6>
          </AboutSection>
        </AboutTextContainer>
      </PopupContainer>
    </Wrapper>
  );
};

export default AboutPopupContent;

const onScheduleClickHandler = (e) => {
  document.getElementById("ScheduleBtn").click();
};
const AboutCardContainer = styled.div`
  max-width: 1080px;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: var(--grid-gutter);
  margin: 40px auto;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    grid-template-columns: repeat(1, 2fr);
    max-width: 93.5%;
    margin: 40px auto;
  }
`;

const AboutCardContent = ({ cardImage, url }) => {
  //const src = Object.values(cardImage);
  const src = cardImage;
  return (
    <AboutCard className="card-1">
      <img src={src} alt="Logo" />
      <div className="content">
        <h3>Want to Know More?</h3>
        <h4>Click the link below</h4>
        <a
          // onClick={onScheduleClickHandler}
          href={url}
          className="btn"
          title="View Profile"
          target="new"
        >
          View Profile
        </a>
      </div>
      <div className="overlay red"></div>
      <div className="overlay blue"></div>
    </AboutCard>
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
  ${'' /* background: rgb(5 11 17); */}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: var(--block1-text-primary);
  transition: 0.2s ease;
  overflow-y: auto;
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
  padding: 40px 78px;
  max-width: 1180px;
  margin: 20px 0;
  width: 100%;
  ${'' /* background: #071118; */}

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
    font-weight: 700;
    font-size: 66px;
    letter-spacing: 0.1em;
    color: ${({ $color }) => $color};
    display: inline-block;
  }

  h4 {
    font-size: 28px;
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
  p {
    font-size: 22px;
    line-height: 30px;
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
  display: none;
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

const AboutTextContainer = styled.div`
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
  display: grid;
  grid-template-columns: repeat(1, 2fr);
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
    max-width: 100%;

    .grid-left {
      margin-right: 10px;
    }

    .grid-right {
      margin-left: 10px;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    max-width: 100%;
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
      min-height: 300px;
    }

    .grid-right {
      margin-left: 0px;
      min-height: 300px;
    }
  }
`;

const AboutSection = styled.section`
  margin-top: 0;
  margin-bottom: 150px;

  @media only screen and (max-width: 734px) {
    text-align: left;
    margin-bottom: 15px;
  }
`;

const AboutSectionContent = styled.div`
  display: grid;
  border: 2px dashed #71998bff;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 500px;
  max-width: 1068px;
  grid-template-columns: [margin-start] 70px [violator-start headline-start excerpt-start cta-start] 1fr [media-start headline-end violator-end excerpt-end cta-end copy-start] 1fr [margin-end media-end];
  grid-template-rows: [margin-start media-start] 100px [violator-start headline-start copy-start] max-content [violator-end headline-end excerpt-start] 185px [excerpt-end copy-end cta-start] max-content [cta-end] 40px [margin-end media-end];

  @media only screen and (min-width: 1441px) {
    margin-left: auto;
    margin-right: auto;
    width: 1080px;
  }

  @media only screen and (max-width: 1068px) {
    margin-left: auto;
    margin-right: auto;
    width: 692px;
  }

  @media only screen and (max-width: 734px) {
    margin-left: auto;
    margin-right: auto;
    width: 87.5%;
    display: block;
    padding: 20px 10px;
    border: 2px solid #71998bff;
  }

  .feature-excerpt {
    font-size: 19px;
    line-height: 1.4211;
    font-weight: 400;
    letter-spacing: 0.012em;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    grid-column: excerpt-start/excerpt-end;
    grid-row: excerpt-start/excerpt-end;
    color: #fff;
    margin: 0 0 2em;
    max-width: 17em;
  }

  .feature-copy {
    -webkit-transition: opacity 0.1s linear;
    transition: opacity 0.1s linear;
    padding-right: 6.5em;
    margin-top: -12px;
    grid-column: copy-start/copy-end;
    grid-row: copy-start/copy-end;
  }

  @media only screen and (max-width: 734px) .feature-excerpt {
    padding-right: 50px;
  }
  @media only screen and (max-width: 734px) .feature-headline,
    .feature-excerpt,
    .feature-cta,
    .feature-copy,
    .typography-overview-feature-copy {
    padding: 0 30px;
  }
  @media only screen and (max-width: 734px) .feature-excerpt {
    margin-bottom: 1.33em;
  }
  @media only screen and (max-width: 734px) .feature-excerpt {
    max-width: 100%;
  }

  .typography-overview-feature-copy {
    font-size: 20px;
    line-height: 1.4211;
    font-weight: 400;
    letter-spacing: 0.012em;
    font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
      "Arial", sans-serif;
    color: #fff;
  }

  @media only screen and (max-width: 734px) {
    .typography-overview-feature-copy {
      padding: 0 30px;
    }
  }

  @media only screen and (min-width: 1069px) .feature-copy {
    max-height: 434px;
  }
`;

const AboutHeadline = styled.h3`
  font-size: 48px;
  font-weight: 600;
  letter-spacing: -0.003em;
  line-height: 1.1em;
  text-align: left;
  color: #fff;
  display: inline-block;
  ${
    "" /* color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(to right, #999999, #ffffff); */
  }
  grid-column: headline-start/headline-end;
  grid-row: headline-start/headline-end;
  padding-right: 2em;
  margin: 0px;

  @media only screen and (max-width: 734px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    display: flex;
    margin-bottom: 55px;
    padding: 0 30px;
    font-size: 38px;
    text-align: left;
  }
`;

const AboutTextItem = styled.div`
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
    max-height: 500px;
    width: 100%;
    height: 440px;
    object-fit: cover;
    object-position: 10% 70%;
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
    background-image: linear-gradient(to right, #999999, #ffffff);
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

const AboutCard = styled.div`
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
  @media (max-width: ${BREAKPOINTS.mob}px) {
    min-height: 300px;

    img {
      height: 300px;
      object-position: 50% 50%;
    }
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
