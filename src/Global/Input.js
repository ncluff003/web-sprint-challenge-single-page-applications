import styled from "styled-components";

export const Input = styled.input`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  font-family: MADE Tommy Soft;
  font-size: 2rem;
  font-weight: 400;
  color: #fefefecc;

  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
  border: none;
  background-color: #222222cc;
  border-top: 0.2rem solid #ff4b00cc;
  border-left: 0.2rem solid #ff4b00cc;
  border-bottom: 0.2rem solid #ff4b00cc;

  // Set opacity of placeholder to zero immediately.
  &::-webkit-input-placeholder,
  &::-moz-placeholder,
  &::placeholder {
    opacity: 0;
  }
  &:focus {
    &::-webkit-input-placeholder {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
    border-color: #ff4b00;
    background-color: #222222;
    &::-webkit-input-placeholder,
    &::-moz-placeholder,
    &::placeholder {
      opacity: 1;
    }
    &:valid {
      border: 0.2rem solid #38d927;
    }
    &:invalid {
      border: 0.2rem solid #cf352e;
    }
    /*
    height, min-height, width, min-width, font-size, and padding need to be set by a different component.
    */
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    transform: translate(-5rem, -4.75rem) scale(0.85);
  }
`;

export const OrderFormInput = styled(Input)`
  width: 90%;
  border-radius: 1.5rem;
  margin: ${(props) => props.margin};
`;

const StyledSelect = styled.select`
  position: relative;
  height: max-content;
  width: 90%;
  padding: 2rem;
  border: 0.2rem solid #ff4b00cc;
  border-radius: 1.5rem;
  background-color: #222222cc;
  font-size: 2rem;
  color: #fefefecc;
`;

const StyledOption = styled.option`
  position: relative;
  font-size: 2rem;
  color: #fefefecc;
`;

export const Select = function (props) {
  return (
    <StyledSelect id="size-dropdown">
      <StyledOption>Personal</StyledOption>
      <StyledOption>Small</StyledOption>
      <StyledOption>Medium</StyledOption>
      <StyledOption>Large</StyledOption>
      <StyledOption>Extra Large</StyledOption>
    </StyledSelect>
  );
};

export const RadioInput = styled.input`
  position: relative;
  height: 3rem;
  width: 3rem;
  &:checked {
    accent-color: #ff4b00;
  }
`;

export const CheckBoxInput = styled(RadioInput)`
  border-color: #ff4b00;
`;
