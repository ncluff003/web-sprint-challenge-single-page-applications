import styled from "styled-components";

export const TagLine = styled.p`
  position: relative;
  font-size: 1.6rem;
  color: #fefefe;
  margin: 1.5rem 0;
`;

export const RestaurantCornerText = styled.p`
  position: absolute;
  height: max-content;
  width: max-content;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  font-size: 1.6rem;
  /* color: ${(props) => props.color}; */
  z-index: 5;

  ${(props) => (props.bgStyle === "light" ? `color: #FF4B00CC` : null)}
  ${(props) => (props.bgStyle === "dark" ? `color: #FEFEFECC` : null)}
  ${(props) => (props.bgStyle === "mixed" ? `color: #222222CC` : null)}
`;

export const FormMainHeaderText = styled.p`
  font-size: 4rem;
  color: #fefefe;
`;
