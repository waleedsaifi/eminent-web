import {
  getFadeOutFormTen,
  getFadeOutProgressSvg,
} from "./animations";

export const getNextStepFromForm = (progressSvgArray) => {
  getFadeOutProgressSvg(progressSvgArray, () => {
    getFadeOutFormTen([".footer"], 0, () => null);
    getFadeOutFormTen([".formTen"], 100, () => null);
    // getFadeOutFormTen([".formTen"], 100, () => {
    //   setTimeout(
    //     () => store.dispatch(setProgress(nextStep, currentSectionTitle)),
    //     500
    //   );
    // });

    return;
  });
};

export const getStandardNextStep = (
  nextStep,
  currentSectionTitle,
  dispatch
) => {};
