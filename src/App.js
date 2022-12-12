import React, { useState, useEffect } from "react";
import { Container } from "./Global/Container";
import { HeroContainer } from "./Home/Hero";
import { Header, SubHeader } from "./Global/Header";
import { FormInnerSection, FormSection } from "./Global/Section";
import { Button, SearchButton } from "./Global/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Form } from "./Global/Form";
import { Label } from "./Global/Label";
import { Input } from "./Global/Input";

const App = () => {
  return (
    <Container>
      <HeroContainer>
        <Header>Bloomtech Eats</Header>
        <SubHeader>Delivering Food To Coders Everywhere...</SubHeader>
        <Form>
          <FormSection>
            <FormInnerSection>
              <Input id="address" name="address" className="address" placeholder="Enter Your Address" />
              <Label htmlFor="address">Address</Label>
            </FormInnerSection>
            <SearchButton type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchButton>
          </FormSection>
        </Form>
      </HeroContainer>
    </Container>
  );
};
export default App;
