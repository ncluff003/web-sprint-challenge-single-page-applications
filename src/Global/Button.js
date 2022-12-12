import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  height: max-content;
  width: max-content;
  padding: 2rem;
  &:hover {
    cursor: pointer;
    transition: background-color 0.5s, border 0.5s, color 0.5s;
  }
`;

export const SearchButton = styled(Button)`
  min-height: 8rem;
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
