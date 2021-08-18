import {getFadeOutCustomText, getFadeOutFormTen, getFadeOutMainText, getFadeOutProgressSvg} from "./animations";
import {setProgress} from "../store/actions/actionCreator";


export const getNextStepFromForm = (nextStep, progressSvgArray, currentSectionTitle, dispatch) => {
    getFadeOutProgressSvg(progressSvgArray, () => {
        getFadeOutFormTen(['.footer'], 0, () => null);
        getFadeOutFormTen(['.formTen'], 100, () => {
            setTimeout(() => dispatch(setProgress(nextStep, currentSectionTitle)), 500);
        });
    });
}

export const getStandardNextStep = (nextStep, currentSectionTitle, dispatch) => {
    window.animation._name === 'anime' && getFadeOutMainText(() => {
        setTimeout(() => dispatch(setProgress(nextStep, currentSectionTitle)), 100);
    });
    window.animation._name === 'custom_anime' && getFadeOutCustomText(() => {
        setTimeout(() => dispatch(setProgress(nextStep, currentSectionTitle)), 100);
    });
}