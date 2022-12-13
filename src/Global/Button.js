import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  height: 6rem;
  width: max-content;
  padding: 1rem;
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
  }
`;

export const SearchButton = styled(Button)`
  min-height: 6rem;
  width: 10%;
  border: 0.2rem solid #ff4b00cc;
  background-color: #ff4b0040;
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  font-size: 2.6rem;
  color: #fefefecc;
  &:hover {
    background-color: #ff4b00;
    border-color: #ff4b00;
    color: #fefefecc;
  }
`;

export const OrderButton = styled(Button)`
  height: max-content;
  min-height: 6rem;
  display: flex;
  flex-flow: row nowrap;
  padding: 2rem;
  background-color: transparent;
  border: 0.2rem solid #fefefecc;
  border-radius: 5rem;
  font-size: 2rem;
  color: #fefefecc;
  margin-top: 0rem;

  &:hover {
    border-color: #ff4b00;
    color: #ff4b00;
  }

  &:active {
    background-color: #ff4b00;
    color: #fefefe;
  }
`;

export const QuantityButton = styled.button`
  position: relative;
  height: 50%;
  width: 100%;
  background-color: #222222cc;
  border: 0.2rem solid ${(props) => `${props.borderColor}CC`};
  &:first-of-type {
    border-top-right-radius: 0.5rem;
  }
  &:last-of-type {
    border-bottom-right-radius: 0.5rem;
  }

  &:hover {
    cursor: pointer;
    border-color: ${(props) => props.borderColor};
    background-color: ${(props) => props.borderColor};
    transition: border 0.5s, background-color 0.5s, color 0.5s;
  }
`;
