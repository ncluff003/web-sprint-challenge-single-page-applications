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
`;
