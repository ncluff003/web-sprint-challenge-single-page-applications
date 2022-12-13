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
