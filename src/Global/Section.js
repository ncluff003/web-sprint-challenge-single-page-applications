import styled from "styled-components";

export const FormSection = styled.section`
  position: relative;
  height: 6rem;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const FormInnerSection = styled(FormSection)`
  flex-flow: column-reverse nowrap;
  justify-content: center;
  height: 100%;
  width: 90%;
`;
