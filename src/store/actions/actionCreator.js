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