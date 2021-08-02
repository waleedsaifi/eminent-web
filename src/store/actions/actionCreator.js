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
        type: ACTIONS.SET_SECTION,
        currentSection
    }
}