import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: max-content;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: center;
  & a {
    text-decoration: none;
  }
`;

export const FoodContainer = styled.section`
  position: relative;
  height: max-content;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 3rem;
  overflow-y: auto;
`;

export const FormContainerClose = styled.div`
  position: fixed;
  height: 2rem;
  width: 2rem;
  top: 2rem;
  right: 5rem;
  z-index: 15;
  font-size: 4rem;
  color: #ff4b00cc;

  &:hover {
    cursor: pointer;
    color: #ff4b00;
    transition: color 0.5s;
  }
`;

export const FormContainer = styled(Container)`
  position: fixed;
  justify-content: flex-start;
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: #222222f2;
  z-index: 10;
  overflow-y: auto;
`;

export const SauceInputContainer = styled.div`
  position: relative;
  width: 95%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  &:first-of-type {
    height: 33%;
    background-color: #11111144;
  }
  &:last-of-type {
    height: 67%;
  }
`;
