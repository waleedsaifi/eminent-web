import {
    isDev
} from '../../helpers/dev.helpers';
import {
    ACTIONS
} from '../constants/constants';


const currentStep = isDev ? 1 : 0

const initState = {
    loader: true,
    currentStep: 0,
    locked: true, 
    name: null,
    scheduleFormData: null,
    stepsTextData: null,
    menuData: null
    
}

const state = (state = initState, action) => {
    const {type, loader, currentStep, locked, name, scheduleFormData, stepsTextData, menuData} = action;

    switch (type) {
        case ACTIONS.SET_PROGRESS:
            if(window.engine.ready) {
                if(currentStep !== state.currentStep) {
                    window.engine.setCurrentStep(currentStep )
                    window.gradient.setStep(currentStep === 0 ? -1 : currentStep)
                }
            }
        
            return {
                ...state, 
                currentStep
            }
        case ACTIONS.TOGGLE_LOADER:
            return {
                ...state, 
                loader
            }
        case ACTIONS.SET_LOCKED:
            return {
                ...state, 
                locked
            }
        case ACTIONS.SET_NAME:
            return {
                ...state, 
                name
            }
        case ACTIONS.SET_SCHEDULE_DATA:
            return {
                ...state,
                scheduleFormData
            }
        case ACTIONS.SET_STEPS_TEXT_DATA:
            return {
                ...state,
                stepsTextData
            }
            case ACTIONS.SET_MENU_DATA:
            return {
                ...state,
                menuData
            }
        default:
            return state
    }
}

export default state;