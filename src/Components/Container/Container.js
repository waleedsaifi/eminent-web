import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Menu from './../Menu/Menu'
import ProgressBar from '../ProgressBar/ProgressBar'
import MainText from './../MainText/MainText'
import Footer from './../Footer/Footer'
import HotspotsContainer from '../Hotspots/HotspotsContainer'
import SchedulePopup from '../SchedulePopup/SchedulePopup'
import CareersPopup from '../CareersPopup/CareersPopup'
import ServicesPopup from '../ServicesPopup/ServicesPopup'
import { isMobileOnly } from 'react-device-detect'
import { useDispatch, useSelector } from "react-redux";
import { screens, work } from '../../constants/constants';
import { getFadeOutFormTen, getFadeOutProgressSvg, stopChooseStoryTitleAnimation, stopCustomAnimationSvg, stopFormTenAnimation, stopMainTextAnimation } from "../../helpers/animations";
import { ReactComponent as PlugLogo } from '../../assets/images/logo.svg';
import { getStandardNextStep, getNextStepFromForm } from "../../helpers/next_step";
import Contentful from "../../helpers/contentful";
import {setMenuData, setStepsTextData, setScheduleData } from "../../store/actions/actionCreator";

export default () => {
  const [isLandscape, setLandscape] = useState(window.matchMedia("(orientation: landscape)").matches);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isBgBlur, setBgBlur] = useState(false);
  const [touchStart, setTouchStart] = useState({x1: null, y1: null});
  const { currentStep } = useSelector(state => state.state);
  const blurredBackground = useRef(null);
  const mainContainer = useRef(null);
  const dispatch = useDispatch();
  const [activePopup, setActivePopup] = useState(null)

  useEffect(() => {
    const _instance = Contentful.getInstance();

     //_instance.client.getEntry("UjKR6VpJg5baltMzekveI").then(res => {
      _instance.client.getEntries().then(res => {
     console.log(res);
     
     const menuData = res.items.reduce((acc, prev) => {
      if (prev.fields.title === 'MainMenu') {
          
        acc = {
            ...acc,
            [prev.fields.title]: prev.fields
          };

      }
          return acc;
      }, {});
 console.log(menuData)

      const scheduleForm = res.items.reduce((acc1, prev1) => {
      if (prev1.fields.title === 'scheduleForm') {
          
        acc1 = {
            ...acc1,
            [prev1.fields.title]: prev1.fields
          };

      }
          return acc1;
      }, {});
 //console.log(scheduleForm)
    
      const stepsMainTextContent = res.items.reduce((acc2, prev2) => {
        if ( prev2.fields.title != 'scheduleForm' && prev2.fields.title != 'MainMenu') {
          acc2 = {
            ...acc2,
            [prev2.fields.id]: prev2.fields
          };
        } 

        return acc2;
      }, {});
     // console.log(stepsMainTextContent)

      if (menuData) {
        dispatch(setMenuData(menuData));
      }
      if (stepsMainTextContent) {
        dispatch(setStepsTextData(stepsMainTextContent));
      }
      if (scheduleForm) {
        dispatch(setScheduleData(setScheduleData));
      }
    })}, [])

  const stopAnimation = useCallback((e) => {
    if (window.stoppedAnimation) {
      return;
    }
    const allowedContainers = ['mainContainer', 'anime', 'letter', 'blurredBackground', 'custom_anime',
      'customBlock', 'storyBlur'];
    if (!window.animation) return;
    const isAllowedList = e.target.classList;
    let isAllowed = false;
    [...isAllowedList].forEach(classItem => {
      if (allowedContainers.includes(classItem)) {
        isAllowed = true;
      }
    });
    if (!isAllowed) return;

    switch (currentStep) {
      case 0: return;
      case 6: case 7: case 8: {
        stopCustomAnimationSvg( ['.svgText', '.svgText path']);
        window.stoppedAnimation = true;
        return;
      }
      case 9: {
        stopCustomAnimationSvg( ['.svgText', '.svgText path']);
        stopCustomAnimationSvg( ['.svgText2', '.svgText2 path']);
        window.stoppedAnimation = true;
        return;
      }
      case 11: {
        stopFormTenAnimation( ['.chooseStoryText', '.storyLetter',]);
        stopChooseStoryTitleAnimation ( ['.anime', '.letter',]);
        if(window.animation) {
          window.stoppedAnimation = true;
        }
        return;
      }
      default: {
        stopMainTextAnimation ( ['.anime', '.letter',]);
        stopMainTextAnimation( ['.anime2', '.letter2']);
        stopFormTenAnimation( ['.footer']);
        window.stoppedAnimation = true;
      }
    }
  }, [currentStep])

  const orientationchangeHandler = (e) => {
    if (e.target.orientation === 0) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  }

  useEffect(() => {
    //get top of the page
    mainContainer.current.scrollTop = 0;

    window.stoppedAnimation = false;

    if (screens[currentStep].blurBackground) {
      setBgBlur(true);
    } else {
      setBgBlur(false)
    }

    window.addEventListener("orientationchange", orientationchangeHandler, false);

    return () => {
      window.removeEventListener('orientationchange', orientationchangeHandler);
      setBgBlur(false);
    }
  }, [currentStep, isLandscape])

  const closeSchedulePopup = () => {
    mainContainer.current.style.overflowY = 'auto';
    const menu = document.querySelector('.menu');
    menu.removeAttribute('style');
    setPopupOpen(false);
    setActivePopup(null);
  }

  const showSchedulePopup = () => {
    mainContainer.current.style.overflowY = 'hidden';
    setPopupOpen(true);
  }

  const showCareersPopup = () => {
    mainContainer.current.style.overflowY = 'hidden';
  }

  const getBlur = () => {
    switch (currentStep) {
      case 5: return 10;
      case 10: return 5;
      case 11: return 5;
      default: return 15;
    }
  }

  const menuHandler = (flag) => setMenuOpen(flag);

  const getNextStep = (nextStep) => {

    if (isPopupOpen) return;
    if (screens[currentStep].locked && nextStep > currentStep || window.animation && !window.animation.completed) {
      return;
    }
    if (nextStep === screens.length && nextStep > currentStep) return;
    if (nextStep < currentStep && currentStep === 0) return;

    if (currentStep === 12 && nextStep < currentStep) {
      const progressSvgArray = document.querySelectorAll(`.styledProgress_${currentStep}`);
      getNextStepFromForm(nextStep, currentStep, progressSvgArray);
    }

    window.animation.way = 'back';
    screens[currentStep].isFooterShow && getFadeOutFormTen('.footer', 0, () => null);
    const progressSvgArray = document.querySelectorAll(`.styledProgress_${currentStep}`);
    const progressBorderDefault = document.querySelector(`.progressBorderDefault__${currentStep}`);
    getFadeOutProgressSvg([...progressSvgArray, progressBorderDefault], () => {
    })
    getStandardNextStep(nextStep);
  }

  const touchstartHandler = (e) => {
    const firstTouch = e.touches[0];
    if (firstTouch) {
      setTouchStart({
        x1: firstTouch.clientX,
        y1: firstTouch.clientY,
      })
    }
  }

  const touchmoveHandler = (e) => {
    if (!touchStart.x1 || !touchStart.y1) return;

    const x2 = e.touches[0].clientX;
    const y2 = e.touches[0].clientY;
    const xDiff = x2 - touchStart.x1;
    const yDiff = y2 - touchStart.y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //right-left
      if (xDiff > 0) {
        getNextStep(currentStep - 1);//swipe right
      } else {
        getNextStep(currentStep + 1);//swipe left
      }
    } //else {
      //top - bottom
      // if (yDiff > 0) {
      //   console.log('down')
      // } else {
      //   console.log('top')
      // }
    // }
  }

  const wheelHandler = e => {
    // e.preventDefault();              // this one is the key
    e.stopPropagation();

    if (e.deltaY > 0) {
      getNextStep(currentStep + 1);
    } else if (e.deltaY < 0) {
      getNextStep(currentStep - 1);
    }
  }

  const getOverflow = () => {
    switch (currentStep) {
      case 6: case 7: case 8: case 9: case 11: case 12: return 'auto';
      default: return 'hidden';
    }
  }

  const popupManager = () => {
    switch (activePopup) {
      case 'schedule':
        return <SchedulePopup closeHandler={closeSchedulePopup} />
      case 'careers':
        return <CareersPopup closeHandler={closeSchedulePopup} />
      case 'services':
        return <ServicesPopup closeHandler={closeSchedulePopup} />
      default:
        break;
    }
  }

  if (isLandscape && isMobileOnly ) {
    return (
      <Container
        id='app'
        ref={mainContainer}
        $step={currentStep}
        $isMenuOpen={isMenuOpen}
        className="mainContainer"
      >
          <MobPlug
            $step={currentStep}
            $color={screens[currentStep].textColor}
          >
            <PluggedLogo/>
            <p>Please rotate your device to portrait mode.</p>
          </MobPlug>
      </Container>
    )
  }

    return (
        <Container
          id='app'
          ref={mainContainer}
          $step={currentStep}
          $isMenuOpen={isMenuOpen}
          className="mainContainer"
          onClick={stopAnimation}
          onTouchStart={touchstartHandler}
          onTouchMove={touchmoveHandler}
          onWheel={wheelHandler}
          $overflow={getOverflow()}
        >
            {activePopup && popupManager()}
            <Menu
              showPopup={setActivePopup}
              menuHandler={menuHandler}
            />
            <ProgressBar/>
            <MainText/>
            <Footer/>
          {isBgBlur && <BlurredBackground
            ref={blurredBackground}
            className="blurredBackground"
            $blur={getBlur()}
          />}
            <HotspotsContainer/>
        </Container>
    )
}

const Container = styled.div`
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
    overflow-y: ${({$isMenuOpen, $overflow}) => $isMenuOpen ? 'hidden' : $overflow};
    touch-action: pan-y;
`
const BlurredBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    backdrop-filter: blur(${({$blur}) => $blur}px);
`
const PluggedLogo = styled(PlugLogo)`
    position: absolute;
    top: 24px;
    width: 124px;
    height: 24px;
`

const MobPlug = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  
    ${PluggedLogo} {
      fill: ${({$color}) => $color}
    }
  
    p {
      font-family: Archia, sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 150%;
      text-align: center;
      letter-spacing: 0.1em;
      color: ${({$color}) => $color}
    }
`