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
