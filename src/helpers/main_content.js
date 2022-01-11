import { BREAKPOINTS } from "../constants/constants";

export const onScheduleClickHandler = (e) => {
 // document.getElementById("ScheduleBtn").click();
};
export const onServicesPopUpHandler = (history) => {
  // toggleElementsforPopup("hide");
  // showPopup("services");
  history.push("/services");
};

export const onProjectsPopUpHandler = (history) => {
  // toggleElementsforPopup("hide");
  // showPopup("projects");
  history.push("/projects");
};

export const onEminentAppsHandler = (history) => {
  // window.location="/"
  // toggleElementsforPopup("hide");
  // showPopup("eminentApps");
  history.push("/eminent-apps");
};

export const getBoxMaxWidth = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return {
            deskXl: { t1: "550px" },
            deskM: { t1: "550px" },
            tablet: { t1: "550px" },
            mob: { t1: "255px" },
          };
        case 1:
          return {
            deskXl: { t1: "1100px" },
            deskM: { t1: "1100px", t2: "1100px" },
            tablet: { t1: "580px", t2: "580px" },
            mob: { t1: "270px", t2: "325px" },
          };
        case 2:
          return {
            deskXl: { t1: "1200px" },
            deskM: { t1: "1200px" },
            tablet: { t1: "700px" },
            mob: { t1: "265px" },
          };
        case 3:
          return {
            deskXl: { t1: "770px", t2: "770px" },
            deskM: { t1: "575px", t2: "575px" },
            tablet: { t1: "580px", t2: "580px" },
            mob: { t1: "325px", t2: "325px" },
          };
        case 4:
          return {
            deskXl: { t1: "805px", t2: "770px" },
            deskM: { t1: "630px", t2: "630px" },
            tablet: { t1: "595px", t2: "560px" },
            mob: { t1: "304px", t2: "335px" },
          };
        case 5:
          return {
            deskXl: { t1: "730px" },
            deskM: { t1: "570px" },
            tablet: { t1: "570px" },
            mob: { t1: "314px" },
          };
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 4:
          return {
            deskXl: { t1: "710px", t2: "770px" },
            deskM: { t1: "620px", t2: "620px" },
            tablet: { t1: "490px", t2: "510px" },
            mob: { t1: "314px", t2: "314px" },
          };
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 1:
          return {
            deskXl: { t1: "1200px" },
            deskM: { t1: "1200px", t2: "1200px" },
            tablet: { t1: "580px", t2: "580px" },
            mob: { t1: "255px" },
          };
        default:
          return {
            deskXl: { t1: "1200px" },
            deskM: { t1: "1200px", t2: "1200px" },
            tablet: { t1: "580px", t2: "580px" },
            mob: { t1: "325px", t2: "325px" },
          };
      }
    }
    default:
      return;
  }
};

export const getTopMainText = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return ["55%", "40%", "65%"];
        //return window.innerWidth < BREAKPOINTS.tablet ? ["20%"] : ["30%"];
        case 1:
          return ["35%", "40%", "29%"];
        //return window.innerWidth < BREAKPOINTS.tablet ? ["30%"] : ["35%"];
        case 2:
          return ["20%", "20%", "20%"];
        //return window.innerWidth < BREAKPOINTS.tablet ? ["20%"] : ["20%"];
        case 3:
          return ["15%", "15%", "15%"];
        case 4:
          return ["5%", "15%", "15%"];
        case 5:
          return ["30%", "40%", "28%"];
        // return window.innerWidth < BREAKPOINTS.tablet ? ["22%"] : ["30%"];
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
          return ["50%", "50%", "50%"];
        case 1:
          return ["50%", "50%", "50%"];
        case 2:
          return ["50%", "50%", "50%"];
        case 3:
          return ["50%", "50%", "50%"];
        case 4:
          return ["35%", "35%", "35%"];
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 0:
          return ["21%", "21%", "12%"];
        case 1:
          return ["135px", "135px", "135px"];
        case 2:
          return ["18%", "18%", "18%"];
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const getTopSecondText = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return window.innerWidth < BREAKPOINTS.tablet ? ["75%"] : ["75%"];
        case 1:
          return window.innerWidth < BREAKPOINTS.tablet ? ["40%"] : ["46%"];
        case 3:
        case 4:
          return ["75%"];
        case 5:
          return window.innerWidth < BREAKPOINTS.tablet ? ["45%"] : ["48%"];
        default:
          return ["40%"];
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
          return ["50%;"];
        case 1:
          return ["50%"];
        case 2:
          return ["50%;"];
        case 3:
          return ["50%"];
        case 4:
          return ["28%"];
        default:
          return ["40%"];
      }
    }
    case "work": {
      switch (currentStep) {
        case 0:
          return ["21%", "12%"];
        case 1:
          return ["135px"];
        case 2:
          return ["18%"];
        default:
          return ["40%"];
      }
    }
    default:
      return;
  }
};

export const getTopContinueBtn = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return window.innerWidth < BREAKPOINTS.tablet ? ["55%"] : ["15%"];
        case 1:
          return window.innerWidth < BREAKPOINTS.tablet ? ["55%"] : ["15%"];
        case 2:
          return window.innerWidth < BREAKPOINTS.tablet ? ["70%"] : ["35%"];
        case 3:
        case 4:
          return window.innerWidth < BREAKPOINTS.tablet ? ["82%"] : ["35%"];
        case 5:
          return window.innerWidth < BREAKPOINTS.tablet ? ["64%"] : ["20%"];
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
          return ["70%;"];
        case 1:
          return ["70%"];
        case 2:
          return ["70%;"];
        case 3:
          return ["70%"];
        case 4:
          return ["55%"];
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 11:
          return ["41%", "32%"];
        case 12:
          return ["235px"];
        case 13:
          return ["38%"];
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const getMobGridColumns = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 0:
          return { tablet: "465px" };
        case 1:
          return { tablet: "555px" };
        case 2:
          return { tablet: "555px" };
        case 3:
          return { tablet: "470px" };
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const getMaxWidthCustomBlock = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 0:
          return "500px";
        case 1:
          return "500px";
        case 2:
          return "500px";
        case 3:
          return "500px";
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const getTopCustomBlock = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 0:
          return ["50%"];
        case 1:
          return ["52%"];
        case 2:
          return ["56%", "57"];
        case 3:
          return ["47%", "50%"];
        default:
          return ["50%"];
      }
    }
    default:
      return ["50%"];
  }
};
export const getLeft = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return "18%";
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
        case 2:
          return "15%";
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 0:
          return "15%";
        default:
          return;
      }
    }
    default:
      return;
  }
};
export const getRight = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 1:
        case 3:
          return "15%";
        default:
          return;
      }
    }
    default:
      return;
  }
};
export const getFontSize = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return ["70px", "36px", "2rem"];
        case 1:
        case 2:
        case 5:
          return ["36px", "28px", "18px"];
        case 3:
        case 4:
          return ["28px", "21px", "18px"];
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
        case 1:
        case 2:
        case 3:
          return ["100px"];
        case 4:
          return ["32px", "28px", "18px"];
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 0:
          return {
            title: ["64px", "45px"],
            text: ["24px", "18px"],
            itemText: ["28px", "21px"],
            numText: ["48px", "36px"],
          };
        case 1:
          return ["100px"];
        case 2:
          return ["32px", "28px", "18px"];
        default:
          return;
      }
    }
    default:
      return;
  }
};
export const getSecondFontSize = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
          return ["26px", "26px", "1.125rem"];
        case 1:
          return ["26px", "28px", "18px"];
        case 2:
          return ["36px", "28px", "18px"];
        case 5:
          return ["34px", "26px", "18px"];
        case 3:
        case 4:
          return ["28px", "21px", "18px"];
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 0:
        case 1:
        case 2:
        case 3:
          return ["100px"];
        case 4:
          return ["32px", "28px", "18px"];
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 0:
          return {
            title: ["64px", "45px"],
            text: ["24px", "18px"],
            itemText: ["28px", "21px"],
            numText: ["48px", "36px"],
          };
        case 1:
          return ["100px"];
        case 2:
          return ["32px", "28px", "18px"];
        default:
          return;
      }
    }
    default:
      return;
  }
};
export const getLetterSpacing = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "home": {
      switch (currentStep) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
          return "0em";
        case 5:
          return "0em";
        default:
          return;
      }
    }
    case "approach": {
      switch (currentStep) {
        case 4:
          return "0em";
        default:
          return;
      }
    }
    case "work": {
      switch (currentStep) {
        case 1:
          return "0em";
        default:
          return;
      }
    }
    default:
      return;
  }
};
export const getBackground = (currentStep) => {
  switch (currentStep) {
    default:
      return ["rgba(184, 197, 201, 0.68)", "rgba(184, 197, 201, 1)"];
  }
};
export const getFocus = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "work": {
      switch (currentStep) {
        case 1:
          return "0 0 23px 2px rgba(255,255,255,0.5)";
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const getMarginId = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 0:
          return { desk: "25px 0", tablet: "0 0 10px 0" };
        case 1:
        case 2:
        case 3:
          return { desk: "25px 0", tablet: "0 0 10px 0" };
        default:
          return { desk: "25px 0", tablet: "25px 0" };
      }
    }
    default:
      return { desk: "25px 0", tablet: "25px 0" };
  }
};

export const getMarginCustomText = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "approach": {
      switch (currentStep) {
        case 0:
        case 1:
        case 2:
        case 3:
          return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
        default:
          return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
      }
    }
    default:
      return { desk: "25px 0 10px 0", tablet: "20px 0 0 0" };
  }
};

export const getTextAlign = (currentStep, currentSectionTitle) => {
  switch (currentSectionTitle) {
    case "work": {
      switch (currentStep) {
        case 0:
          return ["left"];
        default:
          return;
      }
    }
    default:
      return;
  }
};

export const inputFocusHandler = (e) => {
  if (window.innerWidth > BREAKPOINTS.tablet - 1) return;

  const footerBlurredBlock = document.querySelector(".blurredFooterBlock");
  const progressBarEl = document.querySelector(".progressBar");
  if (footerBlurredBlock) {
    footerBlurredBlock.style.opacity = 0;
  }
  if (progressBarEl) {
    progressBarEl.style.opacity = 0;
  }
};

export const inputOnfocusoutHandler = (e) => {
  if (window.innerWidth > BREAKPOINTS.tablet - 1) return;

  const footerBlurredBlock = document.querySelector(".blurredFooterBlock");
  const progressBarEl = document.querySelector(".progressBar");
  if (footerBlurredBlock) {
    footerBlurredBlock.style.opacity = 1;
  }
  if (progressBarEl) {
    progressBarEl.style.opacity = 1;
  }
};
