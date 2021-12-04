import styled from "styled-components";
import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../../constants/constants";
import { useSelector } from "react-redux";

export const CustomSelect = ({
  options,
  setOptionHandler,
  color,
  bg,
  focus = `0 0 23px 2px rgba(255,255,255,0.5)`,
}) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setOptionHandler(selected);
  }, [selected]);

  const selectClickHandler = () => {
    setIsOpen((state) => !state);
  };

  const optionClickHandler = (optionId) => {
    setSelected(options[optionId]);
    setIsOpen((state) => !state);
  };

  return (
    <SelectWrapper $color={color} $bg={bg} $focus={focus} $open={isOpen}>
      <Selected $color={color} onClick={selectClickHandler}>
        <p> {selected} </p> <Chevron $color={color} $open={isOpen} />{" "}
      </Selected>{" "}
      <Options $open={isOpen} $color={color} $bg={bg}>
        {" "}
        {options.map((option, index) => {
          return (
            <Option
              $color={color}
              key={option}
              onClick={() => optionClickHandler(index)}
            >
              {option}{" "}
            </Option>
          );
        })}{" "}
      </Options>{" "}
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  position: relative;
  font-family: "Archia", serif;
  width: 100%;
  min-width: 295px;
  height: 48px;
  background: ${({ $bg }) => ($bg ? $bg[0] : "var(--popup-bg1)")};
  border: 1px solid
    ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  box-sizing: border-box;
  border-radius: 3px;
  ${"" /* color: var(--block1-text-primary); */}
  color:  ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};;
  font-style: normal;
  font-weight: normal;
  font-size: 1.125rem;
  padding: 0 1rem;
  margin: 0;
  cursor: pointer;
  box-shadow: ${({ $open, $focus }) => ($open ? $focus : "none")};
  transition: 0.4s ease-in-out;

  &:focus {
    border-color: var(--popup-border1);
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
const Selected = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    color: ${({ $color }) =>
      $color ? $color : "var(--block1-text-secondary)"};
  }
`;
const Chevron = styled("https://eminent-web.s3.amazonaws.com/images/approach/Chevron.svg")`
  display: inline-block;
  position: absolute;
  right: 0.5rem;
  top: 0.8rem;
  width: 20px;
  height: 20px;
  cursor: pointer;
  stroke: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  transform: rotate(${({ $open }) => ($open ? "180deg" : 0)});
  transition: 0.2s ease;
`;
const Options = styled.div`
  position: absolute;
  width: calc(100% + 2px);
  left: -1px;
  top: 3.5rem;
  background: ${({ $bg }) => ($bg ? "#0b1e28" : "var(--popup-bg1)")};
  border: 1px solid
    ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};
  box-sizing: border-box;
  border-radius: 3px;
  visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
  height: ${({ $open }) => ($open ? "auto" : 0)};
  box-shadow: ${({ $open, $focus }) => ($open ? $focus : "none")};
  z-index: 1;
`;
const Option = styled.p`
  margin: 0 1rem;
  padding: 0.8rem 0;
  color: ${({ $color }) => ($color ? $color : "var(--block1-text-secondary)")};

  &:not(:last-of-type) {
    border-bottom: 1px solid
      ${({ $color }) => ($color ? $color : "var(--popup-border2)")};
  }

  @media (min-width: ${BREAKPOINTS.tablet + 1}px) {
    &:hover {
      opacity: 0.7;
    }
  }
`;
