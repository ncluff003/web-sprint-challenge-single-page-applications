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
