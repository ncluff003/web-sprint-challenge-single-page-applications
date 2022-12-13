import styled from "styled-components";

export const Label = styled.label`
  position: absolute;
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
  transition: transform 0.5s, background-color 0.25s, border 0.25s, color 0.25s;

  &:hover {
    cursor: pointer;
  }
`;

export const OrderFormLabel = styled(Label)`
  width: 90%;
  margin: ${(props) => props.margin};
`;

export const RadioLabel = styled.label`
  position: relative;
  height: max-content;
  width: ${(props) => props.width};
  padding: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  color: #fefefecc;
`;

export const CheckBoxLabel = styled(RadioLabel)`
  font-size: 1.6rem;
  text-align: center;
  padding: 2rem 1rem;
`;

export const InvisibleCheckBoxLabel = styled(CheckBoxLabel)`
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe20;
  border: 0.2rem solid #ff4b00cc;
  color: #ff4b00cc;

  &:last-of-type {
    border-left: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
