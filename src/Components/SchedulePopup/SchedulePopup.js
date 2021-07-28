import styled from "styled-components";
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import ScheduleForm from "./ScheduleForm";
import {
    ReactComponent as CrossSvg
} from "../../assets/images/cross.svg";
import {
    BREAKPOINTS,
    screens
} from "../../constants/constants";
import {
    useSelector
} from "react-redux";

export default ({
    closeHandler
}) => {
    const wrapper = useRef(null);
    const header = useRef(null);
    const [isHeaderSmall, setIsHeaderSmall] = useState(false);
    const {
        currentStep
    } = useSelector(state => state.state);

    useEffect(() => {
        window.addEventListener('wheel', popupWheelHandler);
        return () => window.removeEventListener('wheel', popupWheelHandler);
    }, []);

    const popupWheelHandler = useCallback((e) => {
        if (window.innerWidth < 901) {
            setIsHeaderSmall(() => e.deltaY > 0);
        }
    }, [isHeaderSmall])

    const closeHandlerPopup = () => {
        closeHandler();
    }

    return ( 
    <Wrapper ref = {
            wrapper
        }
        $bg = {
            screens[currentStep].schedulePopupBg[0]
        } >
        <PopupContainer $border = {
            screens[currentStep].schedulePopupTextColor
        } >
        <Header ref = {
            header
        }
        $isSmall = {
            isHeaderSmall
        }
        $color = {
            screens[currentStep].schedulePopupTextColor
        }
        $bg = {
            screens[currentStep].schedulePopupBg[0]
        } >
        <h2> Schedule a call </h2> <CloseCross onClick = {closeHandlerPopup}>
        <Cross $color = {
            screens[currentStep].schedulePopupTextColor
        }
        /> </CloseCross> </Header> 
        <ScheduleForm background = {
            screens[currentStep].schedulePopupBg
        }
        color = {
            screens[currentStep].schedulePopupTextColor
        }
        closeHandlerPopup = {
            closeHandlerPopup
        }
        /> 
        </PopupContainer> 
        </Wrapper>
    )
}

const mobBreakpoint = 900;

const Wrapper = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 100%;
  z-index: 1000;
  background: ${({$bg}) => $bg};
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
`
const PopupContainer = styled.div `
  position: relative;
  border: 1px solid ${({$border}) => $border};
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
    margin-top: 45px;
  }
`
const Header = styled.div `
  text-align: center;
  transition: 0.2s ease;

  h2 {
    padding: 0;
    margin: 0 0 1rem;
    font-weight: normal;
    font-size: 32px;
    letter-spacing: 0.1em;
    color: ${({$color}) => $color};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    position: fixed;
    text-align: center;
    left: 0;
    top: 0;
    padding: ${({$isSmall}) => $isSmall
  ? '20px 0 0 0' : '40px 0 0 0'} ;
    margin: 0;
    width: 100%;
    background-color: ${({$bg}) => $bg};
    z-index: 10;

    h2 {
      font-size: 21px;
      text-transform: uppercase;
      padding: 0 0.5rem;
    }
  }
`
const CloseCross = styled.div `
  position: absolute;
  content: '';
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
`
const Cross = styled(CrossSvg)
`
  stroke: ${({$color}) => $color};
  fill:  ${({$color}) => $color};
`