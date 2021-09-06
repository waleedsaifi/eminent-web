import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants/constants";
import { ReactComponent as CrossSvg } from "../../assets/images/cross.svg";


const ServicesPopupContent = ({ closeHandler }) => {

 const closeHandlerPopup = () => {
    closeHandler();
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
          <h2> OUR FOCUS AREAS </h2>{" "}
          <CloseCross onClick={closeHandlerPopup}>
            <Cross $color={currentTheme?.schedulePopupTextColor} />{" "}
          </CloseCross>{" "}
        </Header>
         <FocusAreaText className="capabilitySection"
                $color={currentTheme.textColor}
                $top={getTopMainText(currentStep)}
                $step={currentStep}
                $fontSize={getFontSize(currentStep)}
                $left={getLeft(currentStep)}
                $letterSpacing={getLetterSpacing(currentStep)}
                $boxMaxWidth={getBoxMaxWidth(currentStep)}>
              <FocusAreaItem>Product Strategy</FocusAreaItem>
               <FocusAreaItem>Brand Strategy</FocusAreaItem>
                <FocusAreaItem>Research & Analysis</FocusAreaItem>
                 <FocusAreaItem>Service Design</FocusAreaItem>
				 <FocusAreaItem>Content Strategy</FocusAreaItem>
            </FocusAreaText>
      </PopupContainer>
    </Wrapper>
  );
};

export default ServicesPopupContent;


const FocusAreaText = styled.div`
  opacity: 0;
  position: fixed;
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
  }
`;

// const  = styled(MainText)`
// opacity: 1 ;
// font-size: 16px;
// top: 55%;
// `;

const FocusAreaItem = styled.div``;

//anime top 30%