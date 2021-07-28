import {getFadeOutCustomText, getFadeOutFormTen, getFadeOutMainText, getFadeOutProgressSvg} from "./animations";
import {setProgress} from "../store/actions/actionCreator";
import store from "../store/store";


export const getNextStepFromForm = (nextStep, currentStep, progressSvgArray) => {
    getFadeOutProgressSvg(progressSvgArray, () => {
        getFadeOutFormTen(['.footer'], 0, () => null);
        getFadeOutFormTen(['.formTen'], 100, () => {
            setTimeout(() => store.dispatch(setProgress(nextStep)), 500);
        });
    });
}

export const getStandardNextStep = (nextStep) => {
    window.animation._name === 'anime' && getFadeOutMainText(() => {
        setTimeout(() => store.dispatch(setProgress(nextStep)), 100);
    });
    window.animation._name === 'custom_anime' && getFadeOutCustomText(() => {
        setTimeout(() => store.dispatch(setProgress(nextStep)), 100);
    });
}