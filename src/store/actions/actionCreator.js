import { ACTIONS } from '../constants/constants';

export const toggleLoader = loader => {
    return {
        type: ACTIONS.TOGGLE_LOADER,
        loader
    }
}
export const setProgress = currentStep => {
    return {
        type: ACTIONS.SET_PROGRESS,
        currentStep
    }
}
export const setLocked = locked => {
    return {
        type: ACTIONS.SET_LOCKED,
        locked
    }
}
export const setName = name => {
    return {
        type: ACTIONS.SET_NAME,
        name
    }
}
export const setScheduleData = scheduleFormData => {
    return {
        type: ACTIONS.SET_SCHEDULE_DATA,
        scheduleFormData
    }
}
export const setStepsTextData = stepsTextData => {
    return {
        type: ACTIONS.SET_STEPS_TEXT_DATA,
        stepsTextData
    }
}
export const setMenuData = menuData => {
    return {
        type: ACTIONS.SET_MENU_DATA,
        menuData
    }
}

export const setCurrentThemeData = themeData => {
    return {
        type: ACTIONS.SET_CURRENT_THEME_DATA,
        themeData
    }
} 

export const setLightThemeData = lightThemeData => {
    return {
        type: ACTIONS.SET_LIGHT_THEME_DATA,
        lightThemeData
    }
} 



export const setDarkThemeData = darkThemeData => {
    return {
        type: ACTIONS.SET_DARK_THEME_DATA,
        darkThemeData
    }
} 

export const setCurrentSection = currentSection => {
    return {
        type: ACTIONS.SET_CURRENT_SECTION,
        currentSection
    }
}
export const setCurrentSectionTitle = currentSectionTitle => {
    return {
        type: ACTIONS.SET_CURRENT_SECTION_TITLE,
        currentSectionTitle
    }
}

export const setHomeSection = homeSection => {
    return {
        type: ACTIONS.SET_HOME_SECTION,
        homeSection
    }
}

export const setApproachSection = approachSection => {
    return {
        type: ACTIONS.SET_APPROACH_SECTION,
        approachSection
    }
}

export const setWorkSection = workSection => {
    return {
        type: ACTIONS.SET_WORK_SECTION,
        workSection
    }
}