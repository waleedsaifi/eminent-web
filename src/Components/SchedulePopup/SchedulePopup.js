import styled from "styled-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import ScheduleForm from "./ScheduleForm";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";
import { BREAKPOINTS } from "../../constants/constants";
import { useSelector } from "react-redux";

const SchedulePopupContent = ({ closeHandler }) => {
  const wrapper = useRef(null);
  const header = useRef(null);
  const [isHeaderSmall, setIsHeaderSmall] = useState(false);
  const { currentTheme } = useSelector((state) => state.state);

  useEffect(() => {
    window.addEventListener("wheel", popupWheelHandler);
    return () => window.removeEventListener("wheel", popupWheelHandler);
  });

  const popupWheelHandler = useCallback((e) => {
    if (window.innerWidth < 901) {
      setIsHeaderSmall(() => e.deltaY > 0);
    }
  }, []);

  const closeHandlerPopup = () => {
    closeHandler();
    window.addEventListener("wheel", popupWheelHandler);
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
          <h2> BOOK DEMO </h2>{" "}
          <CloseCross onClick={closeHandlerPopup}>
            <Cross $color={currentTheme?.schedulePopupTextColor} />{" "}
          </CloseCross>{" "}
        </Header>
        <ScheduleForm
          background={currentTheme?.schedulePopupBg[0]}
          color={currentTheme?.schedulePopupTextColor}
          closeHandlerPopup={closeHandlerPopup}
          bgScheduleBtn={currentTheme?.bgScheduleBtn}
        />
      </PopupContainer>
    </Wrapper>
  );
};

export default SchedulePopupContent;

const mobBreakpoint = 900;

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 100px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 9900;
  background: transparent;
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
  border: 1px solid ${({ $border }) => $border};
  border-radius: 8px;
  padding: 40px 78px;
  max-width: 610px;
  margin: 20px 0;

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    margin-top: 85px;
    width: 100%;
    padding: 18px;
    border-color: transparent;
  }
  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin-top: 0px;
    padding: 0px 20px;
  }
`;
const Header = styled.div`
  text-align: center;
  transition: 0.2s ease;

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: 700;
    font-size: 2.5em;
    letter-spacing: 0.1em;
    ${"" /* color: ${({ $color }) => $color}; */}
    color: #fff;
    display: inline-block;
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
      color: #fff;
      padding: 20px 0.5rem 0px;
    }
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    position: relative;
    background-color: transparent;
    margin-top: 0px;
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
