import styled from "styled-components";

export const Header = styled.h1`
  position: relative;
  height: max-content;
  width: max-content;
  font-size: 12rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;

export const SubHeader = styled(Header)`
  font-size: 3rem;
  font-weight: 400;
  margin: 0 0 1rem 0;
`;

export const AssistantHeader = styled.h2`
  position: relative;
  height: max-content;
  width: 100%;
  font-size: 8rem;
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  text-align: center;
`;

export const AssistantSubHeader = styled(AssistantHeader)`
  width: 87.5%;
  font-size: 5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
`;

export const FormHeader = styled.header`
  position: relative;
  height: max-content;
  min-height: 6rem;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${(props) => props.bgColor};
`;

export const FormMainHeader = styled(FormHeader)`
  align-items: center;
`;

export const FormSubHeader = styled.h3`
  position: relative;
  font-size: 3rem;
  color: #fefefe;
`;

export const FormSubSubHeader = styled(FormSubHeader)`
  font-size: 1.6rem;
  margin: 0 0 0 2rem;
`;

export const ErrorHeader = styled(FormSubSubHeader)`
  color: orangered;
  background-color: #fefefe;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 0.5rem;
`;
