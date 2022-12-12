import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  height: max-content;
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
`;

export const OrderForm = styled(Form)`
  margin-top: 10rem;
`;
