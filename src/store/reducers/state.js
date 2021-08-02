import { isDev } from "../../helpers/dev.helpers";
import { ACTIONS } from "../constants/constants";
import { darkTheme } from "../../constants/constants";

const currentStep = isDev ? 1 : 0;


const initState = {
  loader: true,
  currentStep: 0,
  currentTheme: darkTheme,
  currentSection: {
    title: "home",
    theme: "dark",
    steps: [
      {
        fields: {
          id: 0,
          active: "1",
          title: "Slide 1",
          mainText: "We are a product and innovation company",
          isFooterShow: true,
          footerTextDesktop: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: "Scroll and don't look back to the past",
                    nodeType: "text",
                  },
                ],
                nodeType: "paragraph",
              },
            ],
            nodeType: "document",
          },
          footerTextMobile: "Scroll right and don't look back into the past",
          locked: false,
          blurBackground: false,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "1cn68t2wnpi8",
            },
          },
          id: "jSrucrywU8hKFYwWu012q",
          type: "Entry",
          createdAt: "2021-07-26T23:13:02.025Z",
          updatedAt: "2021-07-30T16:54:39.951Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 10,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "homePage",
            },
          },
          locale: "en-US",
        },
        fields: {
          id: 1,
          active: "0",
          title: "Slide 2",
          mainText: "We drive government innovation and societal change ",
          isFooterShow: true,
          locked: true,
          blurBackground: false,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "1cn68t2wnpi8",
            },
          },
          id: "73rcFp2TBUa3WwC5dRuPJL",
          type: "Entry",
          createdAt: "2021-07-26T23:14:29.489Z",
          updatedAt: "2021-07-30T16:54:28.396Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 12,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "homePage",
            },
          },
          locale: "en-US",
        },
        fields: {
          id: 3,
          active: "0",
          title: "Slide 4",
          mainText: "We use human-centered strategy and design",
          subText: "To deliver compliant yet disruptive innovation",
          isFooterShow: true,
          locked: false,
          blurBackground: false,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "1cn68t2wnpi8",
            },
          },
          id: "7n867WyVrCvNaNyHTGwnPo",
          type: "Entry",
          createdAt: "2021-07-26T23:13:46.672Z",
          updatedAt: "2021-07-30T16:54:14.649Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 9,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "homePage",
            },
          },
          locale: "en-US",
        },
        fields: {
          id: 2,
          active: "0",
          title: "Slide 3",
          mainText: "Connecting the dots in ways others miss",
          isFooterShow: true,
          locked: false,
          blurBackground: false,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "1cn68t2wnpi8",
            },
          },
          id: "5ridaRwAafgUDnjZ0sHq5T",
          type: "Entry",
          createdAt: "2021-07-26T23:17:29.460Z",
          updatedAt: "2021-07-30T16:53:56.054Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 9,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "homePage",
            },
          },
          locale: "en-US",
        },
        fields: {
          id: 4,
          active: "0",
          title: "Slide 5",
          mainText:
            "Pioneering creative and powerful experiences with energy, passion, and enthusiasm",
          subText: "No matter how complex or high-pressure the environment",
          isFooterShow: true,
          locked: false,
          blurBackground: false,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      {
        metadata: {
          tags: [],
        },
        sys: {
          space: {
            sys: {
              type: "Link",
              linkType: "Space",
              id: "1cn68t2wnpi8",
            },
          },
          id: "7tJDK64wtWPJLuEU3ozpkb",
          type: "Entry",
          createdAt: "2021-07-26T23:17:58.240Z",
          updatedAt: "2021-07-30T16:53:43.338Z",
          environment: {
            sys: {
              id: "master",
              type: "Link",
              linkType: "Environment",
            },
          },
          revision: 9,
          contentType: {
            sys: {
              type: "Link",
              linkType: "ContentType",
              id: "homePage",
            },
          },
          locale: "en-US",
        },
        fields: {
          id: 5,
          active: "0",
          title: "Slide 6",
          mainText: "Let's enhance the way you deliver services",
          isFooterShow: true,
          locked: false,
          blurBackground: true,
          section: {
            sys: {
              type: "Link",
              linkType: "Entry",
              id: "1eYjwaTrLeIGNNHo6UWMDO",
            },
          },
        },
      },
      
    ],
  },
  locked: true,
  name: null,
  scheduleFormData: null,
  stepsTextData: null,
  menuData: null,
  lightThemeData: null,
  darkThemeData: null,
};

const state = (state = initState, action) => {
  const {
    type,
    loader,
    currentStep,
    locked,
    name,
    scheduleFormData,
    stepsTextData,
    menuData,
    currentTheme,
    currentSection,
    lightThemeData,
    darkThemeData,
  } = action;

  switch (type) {
    case ACTIONS.SET_PROGRESS:
      if (window.engine.ready) {
        if (currentStep !== state.currentStep) {
          window.engine.setCurrentStep(currentStep);
          window.gradient.setStep(currentStep === 0 ? -1 : currentStep);
        }
      }
      return {
        ...state,
        currentStep,
      };
    case ACTIONS.TOGGLE_LOADER:
      return {
        ...state,
        loader,
      };
    case ACTIONS.SET_LOCKED:
      return {
        ...state,
        locked,
      };
    case ACTIONS.SET_NAME:
      return {
        ...state,
        name,
      };
    case ACTIONS.SET_SCHEDULE_DATA:
      return {
        ...state,
        scheduleFormData,
      };
    case ACTIONS.SET_STEPS_TEXT_DATA:
      return {
        ...state,
        stepsTextData,
      };
    case ACTIONS.SET_MENU_DATA:
      return {
        ...state,
        menuData,
      };
    case ACTIONS.SET_DARK_THEME_DATA:
      return {
        ...state,
        darkThemeData,
      };
    case ACTIONS.SET_LIGHT_THEME_DATA:
      return {
        ...state,
        lightThemeData,
      };
    case ACTIONS.SET_CURRENT_THEME:
      return {
        ...state,
        currentTheme,
      };
    case ACTIONS.SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection,
      };
    default:
      return state;
  }
};

export default state;
