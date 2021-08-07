import { isDev } from "../../helpers/dev.helpers";
import { ACTIONS } from "../constants/constants";
import { darkTheme, lightTheme } from "../../constants/constants";

const currentStep = isDev ? 1 : 0;
const currentSectionTitle = "home";


const initState = {
  loader: true,
  currentStep: 0,
  currentTheme: darkTheme,
  currentSection: {
    active: true,
    fields: [
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "UjKR6VpJg5baltMzekveI",
          type: "Entry",
        },
      },
      {
        fields: {
          id: 1,
          active: "0",
          title: "Slide 2",
          mainText: "We drive government innovation and societal change ",
          isFooterShow: true,
          locked: true,
          blurBackground: false,
          section: {
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "jSrucrywU8hKFYwWu012q",
          type: "Entry",
        },
      },
      {
        fields: {
          id: 2,
          active: "0",
          title: "Slide 3",
          mainText: "Connecting the dots in ways others miss",
          isFooterShow: true,
          locked: false,
          blurBackground: false,
          section: {
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "7n867WyVrCvNaNyHTGwnPo",
          type: "Entry",
        },
      },
      {
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "73rcFp2TBUa3WwC5dRuPJL",
          type: "Entry",
        },
      },
      {
        fields: {
          id: 4,
          active: "0",
          title: "Slide 5",
          mainText:
            "Pioneering creative and powerful experiences with energy, passion, and enthusiasm",
          subText: "No matter how complex or high-pressure the environment",
          isFooterShow: true,
          locked: false,
          blurBackground: true,
          section: {
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "5ridaRwAafgUDnjZ0sHq5T",
          type: "Entry",
        },
      },
      {
        fields: {
          id: 5,
          active: "0",
          title: "Slide 6",
          mainText: "Let's enhance the way you deliver services",
          isFooterShow: true,
          locked: false,
          blurBackground: true,
          section: {
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
              id: "1eYjwaTrLeIGNNHo6UWMDO",
              type: "Entry",
              createdAt: "2021-07-30T14:42:25.006Z",
              updatedAt: "2021-07-30T14:51:52.103Z",
              environment: {
                sys: {
                  id: "master",
                  type: "Link",
                  linkType: "Environment",
                },
              },
              revision: 2,
              contentType: {
                sys: {
                  type: "Link",
                  linkType: "ContentType",
                  id: "sections",
                },
              },
              locale: "en-US",
            },
            fields: {
              title: "Home",
              theme: "Dark",
            },
          },
        },
        sys: {
          id: "7tJDK64wtWPJLuEU3ozpkb",
          type: "Entry",
        },
      },
    ],
    title: "home",
    theme: "dark",
  },
  currentSectionTitle: "home",
  locked: true,
  name: null,
  scheduleFormData: null,
  stepsTextData: null,
  menuData: null,
  lightThemeData: lightTheme,
  darkThemeData: darkTheme,
  homeSection: null,
  approachSection: null,
  workSection: null,
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
    currentSectionTitle,
    lightThemeData,
    darkThemeData,
    homeSection,
    approachSection,
    workSection,
  } = action;

  
  switch (type) {
    case ACTIONS.SET_PROGRESS:
      if (window.engine?.ready) {
        if (
          currentStep !== state.currentStep &&
          currentSectionTitle === "home"
        ) {
          window.engine.setCurrentStep(currentStep);
          window.gradient.setStep(
            currentStep === 0 ? -1 : currentStep,
            currentSectionTitle
          );
        } else {
          window.engine.setCurrentStep(currentStep,currentSectionTitle );
          window.gradient.setStep(0,currentSectionTitle );
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
    case ACTIONS.SET_CURRENT_THEME_DATA:
      return {
        ...state,
        currentTheme,
      };
    case ACTIONS.SET_CURRENT_SECTION:
      return {
        ...state,
        currentSection,
      };
    case ACTIONS.SET_CURRENT_SECTION_TITLE:
      return {
        ...state,
        currentSectionTitle,
      };
    case ACTIONS.SET_HOME_SECTION:
      return {
        ...state,
        homeSection,
      };
    case ACTIONS.SET_APPROACH_SECTION:
      return {
        ...state,
        approachSection,
      };
    case ACTIONS.SET_WORK_SECTION:
      return {
        ...state,
        workSection,
      };
    default:
      return state;
  }
};

export default state;
