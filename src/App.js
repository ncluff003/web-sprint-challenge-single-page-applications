import React, { useState, useEffect } from "react";
import { Container } from "./Global/Container";
import { HeroContainer } from "./Home/Hero";
import { Header } from "./Global/Header";

const App = () => {
  return (
    <Container>
      <HeroContainer>
        <Header>Bloomtech Eats</Header>
      </HeroContainer>
    </Container>
  );
};
export default App;
