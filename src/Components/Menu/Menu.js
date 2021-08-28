import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import anime from "animejs/lib/anime.es.js";
import { useDispatch } from "react-redux";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as RightBtnSvg } from "../../assets/images/rightBtn.svg";
import {
  desktopMenuLabelAnimation,
  getLogoToMobPosition,
  logoTimeline,
  mobBurgerCloseAnimation,
  mobBurgerOpenAnimation,
  mobLogoCloseAnimation,
  mobLogoOpenAnimation,
  mobMenuCloseAnimation,
  mobMenuOpenAnimation,
  removeInlineStyles,
} from "../../helpers/animations";
import { getStandardNextStep } from "../../helpers/next_step";
import { Link, useLocation } from "react-router-dom";
import {
  setCurrentStep,
  setCurrentSectionTitle,
} from "../../store/actions/actionCreator";

const MenuContent = ({
  showPopup,
  menuHandler,
  currentSectionTitle,
  currentStep,
  currentSection,
  currentTheme,
}) => {
  let location = useLocation();

  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isLogoBtnsShow, setLogoBtnsShow] = useState({
    logo: false,
    first: false,
    second: false,
  });
  const logoSvg = useRef(null);
  const burgerBox = useRef(null);
  const menu = useRef(null);
  const menuRightBtn = useRef(null);
  const rightBorderBtn = useRef(null);
  const introText = useRef(null);
  const dispatch = useDispatch();

  const menuResizer = () => {
    if (window.innerWidth > BREAKPOINTS.tablet) {
      setMenuOpen(true);
      menu.current && removeInlineStyles([menu.current]);
    }
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
      //correct mob logo position
      anime({
        targets: ".logo",
        translateX: -window.innerWidth / 2 + 80,
        easing: "linear",
        duration: 50,
      });
    }
  };

  const getIntroFontSize = () => {
    return window.innerWidth < 768 ? 18 : window.innerWidth < 901 ? 21 : 28;
  };

  useEffect(() => {
    switch (currentSectionTitle) {
      case "home": {
        switch (currentStep) {
          case 0: {
            setLogoBtnsShow({
              logo: false,
              first: false,
              second: false,
            });
            logoTimeline(currentTheme?.logoColor, getIntroFontSize(), () => {
              window.gradient.setStep(0, currentSectionTitle);
              setLogoBtnsShow((state) => {
                return {
                  ...state,
                  logo: true,
                };
              });
              removeInlineStyles([logoSvg.current, menuRightBtn.current]);
              setLogoBtnsShow((state) => {
                return {
                  ...state,
                  first: true,
                };
              });
              setTimeout(() => {
                setLogoBtnsShow((state) => {
                  return {
                    ...state,
                    second: true,
                  };
                });
              }, 200);

              if (window.innerWidth <= BREAKPOINTS.tablet) {
                getLogoToMobPosition();
              }

              window.innerWidth <= BREAKPOINTS.tablet
                ? setMenuOpen(false)
                : setMenuOpen(true);
              window.addEventListener("resize", menuResizer);
            });
            return;
          }
          default: {
            if (window.logoAnimation && !window.logoAnimation.completed) {
              window.logoAnimation.pause();
            }
            setLogoBtnsShow({
              logo: true,
              first: true,
              second: true,
            });
            removeInlineStyles([logoSvg.current, menuRightBtn.current]);

            if (window.innerWidth <= BREAKPOINTS.tablet) {
              getLogoToMobPosition();
            }
            window.innerWidth <= BREAKPOINTS.tablet
              ? setMenuOpen(false)
              : setMenuOpen(true);
            window.addEventListener("resize", menuResizer);
          }
        }
        return;
      }
      default: {
        if (window.logoAnimation && !window.logoAnimation.completed) {
          window.logoAnimation.pause();
        }
        setLogoBtnsShow({
          logo: true,
          first: true,
          second: true,
        });
        removeInlineStyles([logoSvg.current, menuRightBtn.current]);

        if (window.innerWidth <= BREAKPOINTS.tablet) {
          getLogoToMobPosition();
        }
        window.innerWidth <= BREAKPOINTS.tablet
          ? setMenuOpen(false)
          : setMenuOpen(true);
        window.addEventListener("resize", menuResizer);
      }
    }

    return () => window.removeEventListener("resize", menuResizer);
  }, [currentSectionTitle, currentStep]);

  useEffect(() => {
    const burgerChildren = [...burgerBox.current.children];
    const menuButtons = [...menu.current.children];

    if (!isMenuOpen) {
      burgerChildren[0].classList.remove("open");
      mobBurgerCloseAnimation(burgerChildren);

      menuButtons.forEach((btn, index) => {
        if (index !== 0 && index !== 3) {
          mobMenuCloseAnimation(btn);
        }
      });

      mobLogoCloseAnimation(".logo");
    } else if (isMenuOpen) {
      burgerChildren[0].classList.add("open");
      mobBurgerOpenAnimation(burgerChildren);

      menuButtons.forEach((btn, index) => {
        if (index !== 0 && index !== 3) {
          mobMenuOpenAnimation(btn);
        }
      });

      mobLogoOpenAnimation(".logo");
    }
  }, [isMenuOpen]);

  const menuLabelHandler = (e) => {
    e.preventDefault();
    if (window.innerWidth <= BREAKPOINTS.tablet) return;

    const textWrapper = e.target.parentElement.querySelector(".menu_label");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      const letters = [...textWrapper.children];
      desktopMenuLabelAnimation(letters, textWrapper);
    }
  };

  const burgerClickHandler = (e) => {
    e.preventDefault();
    const mainContainer = document.querySelector(".mainContainer");
    if (mainContainer) {
      mainContainer.scrollTop = 0;
    }
    menuHandler(!isMenuOpen);
    setMenuOpen((state) => {
      if (state) {
        menu.current.style.gridTemplateRows = `73px 0 0 0 0`;
      } else {
        menu.current.style.gridTemplateRows = `93px 64px 64px 64px 94px`;
      }
      return !state;
    });
  };

  // const rightMenuBtnHoverIn = () => {
  //   if (!rightBorderBtn || window.innerWidth <= BREAKPOINTS.tablet) return;
  //   rightMenuBtnHoverInAnimation(
  //     menuRightBtn.current,
  //     rightBorderBtn.current,
  //     currentTheme?.bgScheduleBtn
  //   );
  // };

  // const rightMenuBtnHoverOut = () => {
  //   if (!rightBorderBtn || window.innerWidth <= BREAKPOINTS.tablet) return;
  //   rightMenuBtnHoverOutAnimation(
  //     rightBorderBtn.current,
  //     menuRightBtn.current,
  //     currentTheme?.bgScheduleBtn,
  //     () => {
  //       setTimeout(
  //         () =>
  //           removeInlineStyles([rightBorderBtn.current, menuRightBtn.current]),
  //         300
  //       );
  //     }
  //   );
  // };

  // const onMouseDownScheduleHandler = (e) => {
  //   if (!rightBorderBtn || window.innerWidth <= BREAKPOINTS.tablet) return;
  //   rightMenuBtnMouseDownAnimation(
  //     menuRightBtn.current,
  //     currentTheme?.bgScheduleBtn
  //   );
  // };

  // const onMouseUpScheduleHandler = (e) => {
  //   if (!rightBorderBtn || window.innerWidth <= BREAKPOINTS.tablet) return;
  //   rightMenuBtnMouseUpAnimation(
  //     menuRightBtn.current,
  //     currentTheme?.bgScheduleBtn,
  //     () => {
  //       setTimeout(() => removeInlineStyles([menuRightBtn.current]), 300);
  //     }
  //   );
  // };

  const onScheduleClickHandler = () => {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
    }
    showPopup("schedule");
  };

  useEffect(() => {
    switch (location.pathname) {
      case "/": {
        GoSectionHandler("home");
        return;
      }
      case "/approach": {
        GoSectionHandler("approach");
        return;
      }
      case "/work": {
        GoSectionHandler("work");
        return;
      }
      default:
        return;
    }
  }, [currentSection]);

  function GoSectionHandler(type) {
    if (window.innerWidth <= BREAKPOINTS.tablet) {
      setMenuOpen(false);
    }
    if (window.engine) {
      dispatch(setCurrentSectionTitle(type));
      dispatch(setCurrentStep(0));
      window.engine.currentSectionTitle = type;
      window.gradient.setStep(0, type);
      window.engine.setCurrentStep(0);
    }
    if (window.animation) {
      window.animation.way = "back";
      getStandardNextStep(0, type, dispatch);
    }
    return () => {
      console.error("Error going to" + type);
    };
  }

  const getMenuBlur = () => {
    switch (currentSectionTitle) {
      case "work":
        switch (currentStep) {
          case "Slide 1":
          case "Slide 2":
            return 10;
          default:
            return 0;
        }
      default:
        return 0;
    }
  };

  return (
    <>
      {currentSectionTitle === "home" && currentStep === 0 && (
        <IntroText
          className="introText"
          ref={introText}
          $color={currentTheme?.textColor}
        >
          Made By
        </IntroText>
      )}{" "}
      <Menu
        $open={isMenuOpen}
        ref={menu}
        className="menu"
        $blur={getMenuBlur()}
      >
        <MenuBurger
          $open={isMenuOpen}
          $color={currentTheme?.logoColor}
          onClick={burgerClickHandler}
          ref={burgerBox}
          $show={isLogoBtnsShow.first}
        >
          <span />
          <span />
          <span />
        </MenuBurger>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.second}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            <Link to="/approach"> APPROACH </Link>
          </span>{" "}
          <span className="menu_label"> COMPLIANT YET DISRUPTIVE </span>{" "}
        </MenuBtn>
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.first}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            {" "}
            <Link to="/work"> WORK </Link>{" "}
          </span>{" "}
          <span className="menu_label"> THINK BETTER </span>{" "}
        </MenuBtn>
        <MenuLogoBtn className="logo" $open={isMenuOpen}>
          <span>
            <Link to="/">
              {" "}
              <LogoSvg
                className="menuLogoSvg"
                ref={logoSvg}
                $color={currentTheme?.textColor}
                $show={isLogoBtnsShow.logo}
              />
            </Link>
          </span>{" "}
        </MenuLogoBtn>{" "}
        <MenuBtn
          $open={isMenuOpen}
          $color={currentTheme?.menuBtnColor}
          $lineBg={currentTheme?.bgScheduleBtn}
          $show={isLogoBtnsShow.first}
        >
          <span className="menu_item" onMouseOver={menuLabelHandler}>
            {" "}
            CAREERS{" "}
          </span>{" "}
          <span className="menu_label"> JOIN OUR TEAM </span>
        </MenuBtn>
        <MenuRightBtn
          ref={menuRightBtn}
          $open={isMenuOpen}
          $bg={currentTheme?.bgScheduleBtn}
          $color={currentTheme?.menuBtnColor}
          id="ScheduleBtn"
          // onMouseOver={rightMenuBtnHoverIn}
          // onMouseLeave={rightMenuBtnHoverOut}
          // onMouseDown={onMouseDownScheduleHandler}
          // onMouseUp={onMouseUpScheduleHandler}
          onClick={onScheduleClickHandler}
          $show={isLogoBtnsShow.second}
        >
          <RightBtnBorder
            ref={rightBorderBtn}
            $color={currentTheme?.bgScheduleBtn}
          />{" "}
          <span> SCHEDULE A CALL </span>{" "}
        </MenuRightBtn>{" "}
      </Menu>
    </>
  );
};

export default MenuContent;

const IntroText = styled.div`
  opacity: 0;
  position: absolute;
  color: ${({ $color }) => $color};
  top: 35vh;
  font-size: 28px;
  line-height: 45px;
  text-align: center;
  letter-spacing: 0.1em;
  z-index: 20;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    top: 38vh;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    top: 36vh;
  }
`;

const MenuBurger = styled.div`
  position: absolute;
  display: none;
  width: 0;
  height: 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: absolute;
    right: 20px;
    top: 19px;
    content: "";
    width: 30px;
    height: 30px;
    display: ${({ $show }) => ($show ? "grid" : "none")};
    cursor: pointer;

    > span {
      background: ${({ $color }) => $color};
      width: 26px;
      height: 2px;
      border-radius: 8px;
      align-self: center;
      justify-self: left;

      &:nth-of-type(2) {
        justify-self: right;
      }
    }
  }
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 55vmax;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 135px 135px 273px 135px 331px;
  grid-template-rows: 75px;
  align-items: center;
  z-index: 10;
  backdrop-filter: blur(${({ $blur }) => $blur}px);

  @media (max-width: 1650px) {
    left: 55.5vmax;
  }
  @media (max-width: 1550px) {
    left: 56vmax;
  }
  @media (max-width: 1450px) {
    left: 57vmax;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-template-columns: 1fr;
    grid-template-rows: 73px 0 0 0 0;
    //grid-template-rows: ${({ $open }) =>
      $open
        ? `
93 px 64 px 64 px 64 px 94 px `
        : `
73 px 0 0 0 0 `};
    width: 100%;
    top: 0;
    left: 0;
    transform: none;
    backdrop-filter: ${({ $open }) =>
      $open
        ? `
blur(10 px) opacity(0.8)
`
        : `
`};
    transition: 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background: var(--block1-bg2);
      transition: 0.3s ease;
      height: ${({ $open }) => ($open ? "100vh" : "0px")};
      opacity: ${({ $open }) => ($open ? "0.9" : "0")};
      z-index: -1;
    }
  }
`;

const MenuLogoBtn = styled.div`
  width: 175px;
  height: 34px;
  justify-self: center;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    grid-row-start: 1;
    width: 124px;
    height: 24px;
    margin-top: 20px;
    margin-left: ${({ $open }) => ($open ? "20px" : "0")};
    align-self: start;
    transition: 0.3s ease;
  }
`;
const LogoSvg = styled(Logo)`
  stroke-width: 0.9px;
  fill: ${({ $color }) => $color};
  opacity: ${({ $show }) => ($show ? 1 : 0)};
`;
const MenuBtn = styled.div`
  color: ${({ $color }) => $color};
  font-size: 15px;
  letter-spacing: 3px;
  text-decoration: none;
  justify-self: center;
  position: relative;
  display: block;
  outline: none;
  cursor: pointer;
  opacity: ${({ $show }) => ($show ? 1 : 0)}!important;
  transition: 0.3s ease;

  .menu_item a {
    color: ${({ $color }) => $color};
    text-decoration: none;
  }

  .menu_item {
    z-index: 1;
    &::before {
      position: absolute;
      content: "";
      display: block;
      top: 12px;
      left: -6%;
      width: 110%;
      height: 10px;
      background: ${({ $lineBg }) => $lineBg};
      opacity: 0;
      transition: 0.4s ease-in;
      z-index: -1;
    }

    &:hover {
      &::before {
        opacity: 0.8;
      }

      & ~ .menu_label {
        opacity: 1;

        .letter {
          opacity: 1;
        }
      }
    }
  }

  .menu_label {
    position: absolute;
    display: block;
    top: 30px;
    left: 0;
    color: ${({ $color }) => $color};
    width: 200px;
    font-size: 15px;
    letter-spacing: 0;
    text-transform: uppercase;
    overflow: hidden;
    opacity: 0;
    white-space: nowrap;

    .letter {
      display: inline-block;
      line-height: 1em;
      opacity: 0;
    }
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    transition: 0.3s ease;
    text-align: left;
    width: 100%;
    align-self: stretch;
    align-items: center;

    &:nth-of-type(4) {
      &::after {
        content: "";
        position: absolute;
        display: block;
        left: 5%;
        bottom: 0;
        width: 90%;
        height: 1px;
        border-bottom: 1px solid #485f5675;
      }
    }

    .menu_item {
      transition: 0.3s ease;
      background: none;
      color: var(--block1-text-primary);
      font-size: 21px;
      padding-left: 21px;

      &:hover {
        &::before {
          opacity: 0;
        }

        & ~ .menu_label {
          opacity: 0;

          .letter {
            opacity: 0;
          }
        }
      }
    }

    .menu_label {
      display: none;
    }
  }
`;
const rightBtnBorderAnimation = keyframes`
	0%   { stroke-dashoffset: 520;}
	100% {stroke-dashoffset: 0;}
`;
const RightBtnBorder = styled(RightBtnSvg)`
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
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
const MenuRightBtn = styled(MenuBtn)`
  background: ${({ $bg }) => $bg};
  padding: 13px 30px;
  border-radius: 67px;
  white-space: nowrap;
  border: 1px solid transparent;
  position: relative;
  transition: 0.2s ease-in-out;

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      background: none;

      ${RightBtnBorder} {
        animation: ${rightBtnBorderAnimation} 0.5s ease-in;
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
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    height: ${({ $open }) =>
      $open
        ? `
auto `
        : `
0 px `};
    display: ${({ $show, $open }) =>
      $open && $show
        ? `
grid `
        : `
none `};
    align-self: stretch;
    align-items: center;
    transition: 0.3s ease;
    background: none !important;
    color: var(--block1-text-primary);
    font-size: 21px;
    border-radius: 0 0 45px 45px;
    border-bottom: 1px solid var(--block1-text-secondary);

    & > span {
      padding-left: 21px;
    }
  }
`;
