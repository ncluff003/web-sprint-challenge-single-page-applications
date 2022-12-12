import React from "react";
import styled from "styled-components";

export const HeroContainer = styled.header`
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${require("../Pizza.jpg")});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const FoodInfoContainer = styled(HeroContainer)`
  background-image: none;
`;
