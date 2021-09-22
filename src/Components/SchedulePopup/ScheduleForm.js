import validator from "validator";
import _ from "lodash";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { CustomSelect } from "../CustomSelect/CustomSelect";
import { BREAKPOINTS, schedulePopup } from "../../constants/constants";
import { setScheduleData } from "../../store/actions/actionCreator";
import { sendEmail } from "../../helpers/http.api";
import { setScheduleForm } from "../../helpers/content";

const ScheduleFormContent = ({
  closeHandlerPopup = null,
  color,
  background,
  focus = `0 0 23px 2px rgba(70,94,79,0.5)`,
  validateData,
  inputFocusHandler,
  inputOnfocusoutHandler,
  bgScheduleBtn,
}) => {
  const scheduleForm = useRef(null);
  const dispatch = useDispatch();
  // const {scheduleFormData} = useSelector(state => state.state);
  const [data, setData] = useState({
    name: "",
    organization: "",
    jobTitle: "",
    phone: "",
    email: "",
    process: "",
    team: "",
    message: "",
  });
  const [isDataValid, setIsDataValid] = useState({
    name: true,
    organization: true,
    jobTitle: true,
    phone: true,
    email: true,
    process: true,
    team: true,
    message: true,
  });

  const onInputHandler = (e) => {
    setIsDataValid((state) => {
      return {
        ...state,
        [e.target.name]: true,
      };
    });
  };

  const setOptionHandler = (optionText) => {
    setData((state) => ({ ...state, team: optionText }));
  };

  const validateFormData = ({
    name,
    organization,
    jobTitle,
    phone,
    email,
    process,
    team,
    message,
  }) => {
    let result = {
      name: validator.isLength(name, {
        min: 2,
        max: 24,
      }),
      organization: validator.isLength(organization, {
        min: 2,
        max: 24,
      }),
      jobTitle: validator.isLength(jobTitle, {
        min: 2,
        max: 24,
      }),
      phone: validator.isMobilePhone(phone.replaceAll("-", "")),
      email: validator.isEmail(email),
      process: validator.isLength(process, {
        min: 2,
        max: 24,
      }),
      team: validator.isLength(team, {
        min: 2,
        max: 30,
      }),
      message: validator.isLength(message, {
        min: 2,
        max: undefined,
      }),
    };
    return {
      isValid: _.every(result, Boolean),
      result,
    };
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();

    const newData = {
      name: e.target.name.value.trim(),
      organization: e.target.organization.value.trim(),
      jobTitle: e.target.jobTitle.value.trim(),
      phone: e.target.phone.value.trim(),
      email: e.target.email.value.trim(),
      process: e.target.process.value.trim(),
      team: data.team,
      message: e.target.message.value.trim(),
    };

    const isDataValid = validateFormData(newData);

    if (!isDataValid.isValid) {
      setIsDataValid(isDataValid.result);
      validateData && validateData(isDataValid.isValid);
      return;
    }

    if (isDataValid.isValid) {
      setData((oldState) => ({
        ...oldState,
        ...newData,
      }));

      dispatch(
        setScheduleData({
          ...data,
          ...newData,
        })
      );
      validateData && validateData(isDataValid.isValid);

      sendEmail(newData);
      setScheduleForm(newData);
    }

    if (closeHandlerPopup) {
      closeHandlerPopup();
    } else {
      document.querySelectorAll("[data-id='2']")[0].click();
    }
  };
  return (
    <>
      <ScheduleForm
        ref={scheduleForm}
        onSubmit={onFormSubmitHandler}
        $color={color}
        $bg={background}
      >
        <FormRow>
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Name <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.name}
              name="name"
              type="text"
            />{" "}
            {!isDataValid.name && (
              <ErrorTextHolder $color={color}>
                {" "}
                This field is required{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Organization <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.organization}
              name="organization"
              type="text"
            />{" "}
            {!isDataValid.organization && (
              <ErrorTextHolder $color={color}>
                {" "}
                This field is required{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
        </FormRow>{" "}
        <FormRow>
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Job Title <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.jobTitle}
              name="jobTitle"
              type="text"
            />{" "}
            {!isDataValid.jobTitle && (
              <ErrorTextHolder $color={color}>
                {" "}
                This field is required{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Phone <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.phone}
              name="phone"
              type="text"
            />{" "}
            {!isDataValid.phone && (
              <ErrorTextHolder $color={color}>
                {" "}
                Please enter a correct phone{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
        </FormRow>{" "}
        <FormRow>
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Email <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.email}
              name="email"
              type="text"
            />{" "}
            {!isDataValid.email && (
              <ErrorTextHolder $color={color}>
                {" "}
                Please enter a correct email{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
        </FormRow>{" "}
        <FormRow>
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              What can we help you make better? <span> * </span>
            </TextHolder>
            <StyledInput
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.process}
              name="process"
              type="text"
            />{" "}
            {!isDataValid.process && (
              <ErrorTextHolder $color={color}>
                {" "}
                This field is required{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Do you have a implementation team for this project ?{" "}
              <span> * </span>
            </TextHolder>
            <CustomSelect
              color={color}
              bg={background}
              focus={focus}
              setOptionHandler={setOptionHandler}
              options={schedulePopup.options}
            />{" "}
          </StyledLabel>{" "}
        </FormRow>{" "}
        <FormRow>
          <StyledLabel $color={color}>
            <TextHolder>
              {" "}
              Message <span> * </span>
            </TextHolder>
            <StyledTextarea
              onInput={onInputHandler}
              onFocus={inputFocusHandler}
              onBlur={inputOnfocusoutHandler}
              $color={color}
              $bg={background}
              $focus={focus}
              $valid={isDataValid.message}
              name="message"
            />{" "}
            {!isDataValid.message && (
              <ErrorTextHolder $color={color}>
                {" "}
                This field is required{" "}
              </ErrorTextHolder>
            )}{" "}
          </StyledLabel>{" "}
        </FormRow>{" "}
        <ScheduleSubmitBtn $color={color} $bg={bgScheduleBtn} type="submit">
          Submit{" "}
        </ScheduleSubmitBtn>{" "}
      </ScheduleForm>{" "}
    </>
  );
};

export default ScheduleFormContent;

const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  min-width: 295px;
  display: block;
  margin: 0 20px 0 0;
  font-weight: normal;
  font-size: 16px;
  letter-spacing: 0.07em;
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    //max-width: 50vmin;
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    margin: 0 0 26px 0;
    width: 90vmin;
    max-width: 500px;
  }
`;
const TextHolder = styled.div`
  margin-bottom: 0.813rem;
  max-width: 95%;
`;
const ErrorTextHolder = styled.div`
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  position: absolute;
  bottom: -18px;
  left: 1rem;
  font-size: 12px;
  padding: 2px 8px;
  transition: 0.4s ease;
`;
const StyledInput = styled.input`
  font-family: "Archia", serif;
  width: 100%;
  min-width: 295px;
  height: 48px;
  ${'' /* background: ${({ $bg }) => ($bg ? $bg : "var(--popup-bg1)")}; */}
  background: transparent;
  border: 1px solid
    ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  box-sizing: border-box;
  border-radius: 3px;
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  padding: 0 1rem;
  transition: 0.4s ease-in-out;
  box-shadow: ${({ $valid }) =>
    $valid ? "none" : "0 0 23px 2px rgba(255,255,255,0.15)"};
  //safari-fix
  -webkit-appearance: none !important;
  -webkit-box-shadow: ${({ $valid }) =>
    $valid ? "none" : "0 0 23px 2px rgba(255,255,255,0.15)"} !important;

  &:focus {
    outline: none;
    box-shadow: ${({ $focus }) => ($focus ? $focus : "none")};
  }
`;
const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: ${BREAKPOINTS.mob}px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
const StyledTextarea = styled.textarea`
  font-family: "Archia", serif;
  width: 100%;
  height: 84px;
  ${'' /* background: ${({ $bg }) => ($bg ? $bg : "var(--popup-bg1)")}; */}
  background: transparent;
  border: 1px solid
    ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  box-sizing: border-box;
  border-radius: 3px;
  ${
    "" /* color: ${({ $color }) => ($color ? $color : "var(--block1-text-primary)")}; */
  }
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  resize: none;
  transition: 0.4s ease-in-out;
  box-shadow: ${({ $valid }) =>
    $valid ? "none" : "0 0 23px 2px rgba(255,255,255,0.15)"};
  //safari-fix
  -webkit-appearance: none !important;
  -webkit-box-shadow: ${({ $valid }) =>
    $valid ? "none" : "0 0 23px 2px rgba(255,255,255,0.15)"} !important;

  &:focus {
    outline: none;
    //border-color: var(--popup-border1);
    box-shadow: ${({ $focus }) => ($focus ? $focus : "none")};
  }

  @media (max-width: ${BREAKPOINTS.tablet}px) {
    height: 110px;
  }
`;
const ScheduleSubmitBtn = styled.button`
  position: relative;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  cursor: pointer;
  background: ${({ $bg }) => ($bg ? $bg : "var(--popup-bg1)")};
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  text-align: center;
  letter-spacing: 0.15em;
  top: -5px;
  left: 50%;
  transform: translate(-50%);
  margin-bottom: 1rem;
  padding: 10px 20px;
  border-radius: 67px;
  text-transform: uppercase;

  ${
    "" /* &:after {
    position: absolute;
    content: "";
    width: 97%;
    height: 1px;
    left: 0;
    bottom: 4px;
    background: ${({ $color }) =>
      $color ? $color : "var(--block1-text-primary)"};
    transition: 0.5s ease;
    opacity: 1;
  } */
  }

  &:focus {
    outline: none;
  }

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      &:after {
        width: 0;
        opacity: 0;
      }
    }
  }
`;
const ScheduleForm = styled.form`
  //--webkit browsers style Autofill text--
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid
      ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
    color: ${({ $color }) =>
      $color ? $color : "var(--block1-text-secondary)"};
    -webkit-text-fill-color: ${({ $color }) =>
      $color ? $color : "var(--block1-text-secondary)"};
    background: ${({ $bg }) => ($bg ? $bg[0] : "var(--popup-bg1)")};
    transition: background-color 5000s ease-in-out 0s;
    box-sizing: border-box;
    border-radius: 3px;
    caret-color: ${({ $color }) =>
      $color ? $color : "var(--block1-text-secondary)"};
  }

  @media (max-width: ${BREAKPOINTS.mob}px) {
    width: 100%;
    margin-top: 40px;
  }
`;
