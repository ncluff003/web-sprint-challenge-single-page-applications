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

export const OrderFormSection = styled.section`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

export const InnerOrderFormSection = styled.section`
  position: relative;
  height: max-content;
  max-height: 35rem;
  width: 100%;
  display: flex;
  flex-flow: ${(props) => props.flow};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  padding: 3rem 0;
  background-color: #fefefe40;

  ${(props) => (props.active === true ? "display: flex" : "display: none")}
`;
