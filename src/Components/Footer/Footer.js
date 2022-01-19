import React, { useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import {
  getAnimationTimeout,
  getFadeInFormTen,
} from "../../helpers/animations";

const FooterContent = ({
  showPopup,
  menuHandler,
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  const getContent = () => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0:
          case 1:
            return <FooterText> {getFooterText()} </FooterText>;
          default:
            return null;
        }
      }
      case "work": {
        switch (currentStep) {
          case 0:
            return <FooterText>Click on the correct answer </FooterText>;
          case 2:
            return (
              <>
                <FooterFollowText>Follow us:</FooterFollowText>{" "}
                <FooterLinks>
                  <FooterLink href="https://www.linkedin.com/company/eminent-it"> Linkedin </FooterLink>{" "}
                  <FooterLink href="https://www.instagram.com/eminent.it/"> Instagram </FooterLink>{" "}
                  <FooterLink href="https://twitter.com/eminentit"> Twitter </FooterLink>{" "}
                  <FooterLink href="https://www.facebook.com/EminentIT"> Facebook </FooterLink>{" "}
                </FooterLinks>{" "}
              </>
            );
          default:
            return null;
        }
      }
      case "approach": {
        switch (currentStep) {
          default:
            return null;
        }
      }
      default:
        return null;
    }
  };

  useEffect(() => {
    getContent(currentStep) &&
      getFadeInFormTen(
        ".footer",
        getAnimationTimeout(currentStep, currentSectionTitle),
        () => setTimeout(() => (window.stoppedAnimation = true), 1000)
      );
  }, [currentStep]);

  const getBottom = () => {
    switch (currentSectionTitle) {
      case "work": {
        switch (currentStep) {
          case 2:
            return {
              desk: "14%",
              tablet: "160px",
              mob: "133px",
            };
          default:
            return {
              desk: "3%",
              tablet: "65px",
              mob: "65px",
            };
        }
      }
      case "home":
      case "approach":
      default:
        return {
          desk: "3%",
          tablet: "65px",
          mob: "65px",
        };
    }
  };

  const getFooterText = () => {
    switch (currentSectionTitle) {
      case "Approach": {
        switch (currentStep) {
          case 0:
          case 1:
            return window.innerWidth < BREAKPOINTS.tablet
              ? `Swipe Up`
              : `Scroll Down`;
          default:
            return;
        }
      }
      default:
        return;
    }
  };

  const getDisplayBlurredBlock = () => {
    switch (currentSectionTitle) {
      case "work": {
        switch (currentStep) {
          case 0:
          case 1:
            return "block";
          default:
            return "none";
        }
      }
      case "home":
      case "approach": {
        switch (currentStep) {
          default:
            return "none";
        }
      }
      default:
        return;
    }
  };

  const getDisplayBlurredBlockHeight = () => {
    switch (currentSectionTitle) {
      case "work": {
        switch (currentStep) {
          case 0:
            return "100px";
          case 1:
            return "70px";
          default:
            return "0px";
        }
      }
      case "home":
      case "approach": {
        switch (currentStep) {
          default:
            return "none";
        }
      }
      default:
        return;
    }
  };

  return (
    <>
      <Footer
        className="footer"
        $color={currentTheme?.footerTextColor}
        $bottom={getBottom()}
      >
        {getContent()}{" "}
      </Footer>{" "}
      <BlurredFooterBlock
        className="blurredFooterBlock"
        $display={getDisplayBlurredBlock()}
        $height={getDisplayBlurredBlockHeight()}
      />{" "}
    </>
  );
};

export default FooterContent;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  color: ${({ $color }) => $color};
  position: fixed;
  bottom: ${({ $bottom }) => $bottom.desk};
  transition: color 0.3s;
  opacity: 0;
  z-index: 1;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    bottom: ${({ $bottom }) => $bottom.tablet};
    text-align: center;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    bottom: ${({ $bottom }) => $bottom.mob};
  }
`;
const BlurredFooterBlock = styled.div`
  display: none;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    display: ${({ $display }) => $display};
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${({ $height }) => $height};
    backdrop-filter: blur(10px);
    z-index: 0;
  }
`;
const FooterText = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.35em;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 0.3em;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const FooterFollowText = styled.div`
  text-align: center;
  text-transform: none;
  margin-bottom: 40px;
  font-size: 28px;
  color: #fff;
  opacity: 0.6;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 24px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-bottom: 18px;
    font-size: 21px;
  }
`;
const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 200px);
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const FooterLink = styled.a`
  width: 100%;
  height: 100%;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  border-right: 1px solid #fff;
  color: #fff;
  &:last-child {
    border-right: 0;
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    &:hover {
      color: #ffffffa1;
      transition: 0.3s ease-in;
    }
  }
  @media (max-width: ${BREAKPOINTS.tablet}px) {
    font-size: 21px;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    font-size: 16px;
  }
`;
