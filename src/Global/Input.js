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
  &::placeholder {
    opacity: 0;
  }
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
  const { handleChange, setFormValues, formValues } = props;
  return (
    <StyledSelect id="size-dropdown" onChange={(e) => handleChange(e, setFormValues, formValues)}>
      <StyledOption className="option" data-value={0}>
        -- Select Size --
      </StyledOption>
      <StyledOption className="option" data-value={7.5}>
        Personal
      </StyledOption>
      <StyledOption className="option" data-value={9}>
        Small
      </StyledOption>
      <StyledOption className="option" data-value={11}>
        Medium
      </StyledOption>
      <StyledOption className="option" data-value={13.5}>
        Large
      </StyledOption>
      <StyledOption className="option" data-value={15}>
        Extra Large
      </StyledOption>
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

export const InvisibleCheckBox = styled(CheckBoxInput)`
  appearance: none;
  -webkit-appearance: none;
  display: none;

  & + .checked {
    background-color: #ff4b00;
    color: #fefefe;
  }
`;

export const TextArea = styled.textarea`
  position: relative;
  height: 25rem;
  width: 90%;
  resize: none;
  background-color: #fefefe40;
  border: ${(props) => props.border};
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 1.6rem;
  color: ${(props) => props.color};

  &:focus {
    outline: none;
    border-color: ${(props) => props.borderFocus};
    background-color: #fefefe;
    color: ${(props) => props.borderFocus};
  }
`;

export const QuantityInput = styled(Input)`
  height: 6rem;
`;
