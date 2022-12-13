import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Container, FoodContainer, FormContainer, FormContainerClose, InvisibleCheckboxContainer, SauceInputContainer } from "./Global/Container";
import { HeroContainer, FoodInfoContainer } from "./Home/Hero";
import { AssistantHeader, AssistantSubHeader, FormHeader, FormMainHeader, FormSubHeader, Header, SubHeader } from "./Global/Header";
import { FormInnerSection, FormSection, InnerOrderFormSection, OrderFormSection } from "./Global/Section";
import { Button, OrderButton, SearchButton } from "./Global/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Form, OrderForm } from "./Global/Form";
import { InvisibleCheckBoxLabel, CheckBoxLabel, Label, OrderFormLabel, RadioLabel } from "./Global/Label";
import { CheckBoxInput, Input, InvisibleCheckBox, OrderFormInput, RadioContainer, RadioInput, Select } from "./Global/Input";
import { FormMainHeaderText, TagLine } from "./Global/Paragraph";
import { Restaurant } from "./Home/Restaurant";
import axios from "axios";

const RestaurantData = [
  {
    name: `Chick-Fil-A`,
    image: "./../../src/Chick-Fil-A.jpeg",
    categories: [`Chicken`, `American`, `Comfort Food`],
    deliveryTime: `Delivery Time: 15 - 20 minutes`,
    deliveryFee: `Delivery Fee: $2.50`,
    expenseLevel: `$$`,
    style: "mixed",
  },
  {
    name: `Panda Express`,
    image: "./../../src/Panda-Express.jpeg",
    categories: [`Chinese`, `Comfort Food`, `Chicken`],
    deliveryTime: `Delivery Time: 20 - 25 minutes`,
    deliveryFee: `Delivery Fee: $2.00`,
    expenseLevel: "$",
    style: "dark",
  },
  {
    name: `Cafe Rio`,
    image: "./../../src/Cafe-Rio",
    categories: [`Mexican`, `Burritos`, `Healthy`],
    deliveryTime: `Delivery Time: 25 - 30 minutes`,
    deliveryFee: `Delivery Fee: $3.00`,
    expenseLevel: "$",
    style: "dark",
  },
  {
    name: `Cafe Zupas`,
    image: "./../../src/Zupas",
    categories: [`American`, `Sandwiches`, `Soup`],
    deliveryTime: `Delivery Time: 20 - 25 minutes`,
    deliveryFee: `Delivery Fee: $3.00`,
    expenseLevel: "$$",
    style: "light",
  },
  {
    name: `Jimmy John's`,
    image: "./../../src/Jimmy-Johns",
    categories: [`American`, `Fast Food`, `Sandwiches`],
    deliveryTime: `Delivery Time: 10 - 15 minutes`,
    deliveryFee: `Delivery Fee: $2.00`,
    expenseLevel: "$",
    style: "dark",
  },
  {
    name: `Kneaders`,
    image: "./../../src/Kneaders",
    categories: [`Cafe`, `Dessert`, `Breakfast`],
    deliveryTime: `Delivery Time: 25 - 30 minutes`,
    deliveryFee: `Delivery Fee: $4.00`,
    expenseLevel: `$$$`,
    style: "dark",
  },
];

const initialFormValues = {
  name: "",
  size: "",
  crust: "",
  sauce: {
    amount: "",
    sauces: [],
  },
  toppings: {
    meat: {
      meatball: false,
      beef: false,
      pepperoni: false,
      sausage: false,
      canadianBacon: false,
      spicyItalianSausage: false,
      bacon: false,
      grilledChicken: false,
      salami: false,
      phillySteak: false,
    },
    veggies: {
      onions: false,
      jalapenoPeppers: false,
      greenPeppers: false,
      romaTomatoes: false,
      mushrooms: false,
      blackOlives: false,
      freshSpinach: false,
      bananaPeppers: false,
      pineapple: false,
    },
  },
  specialInstructions: "",
  quantity: 0,
  total: 0,
};

const App = () => {
  const [restaurants, setRestaurants] = useState([...RestaurantData]);
  const [location, setLocation] = useState("");
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log(formValues);

  const activateMenu = (event) => {
    const clicked = event.target;
    // const checkbox = clicked.closest("label").previousElementSibling;
    const clickedLabel = clicked.closest("label");
    const labels = document.querySelectorAll(".topping-label");
    labels.forEach((label) => {
      if (label === clickedLabel) {
        label.classList.add("checked");
      } else {
        label.classList.remove("checked");
      }
    });
    const checkboxes = document.querySelectorAll(".topping-menu");
  };

  const handleChange = (event) => {
    if (event.target.type !== `radio` && event.target.type !== `checkbox`) {
      event.preventDefault();
    }
    const { type, name, value, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : type === "radio" ? checked : value;
    console.log(type, name, value, valueToUse);
    if (name === `name-input`) {
      setFormValues({ ...formValues, ["name"]: value });
    } else if (type === "select-one") {
      if (value === `-- Select Size --`) {
        setFormValues({ ...formValues, ["size"]: "" });
      } else if (value !== `-- Select Size --`) {
        setFormValues({ ...formValues, ["size"]: valueToUse });
      }
    } else if (name === "crust") {
      setFormValues({ ...formValues, [name]: event.target.closest("label").textContent });
    } else if (name === "sauceAmount") {
      setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["amount"]: value, ["sauces"]: [] } });
    } else if (name === "sauce") {
      if (formValues.sauce.amount === `Half`) {
        if (formValues.sauce.sauces.length === 2 && !formValues.sauce.sauces.includes(value)) {
          return;
        } else if (formValues.sauce.sauces.length === 2 && formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
        } else if (formValues.sauce.sauces.length < 2 && formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
        } else if (formValues.sauce.sauces.length < 2 && !formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: [...formValues.sauce.sauces, value] } });
        }
      } else if (formValues.sauce.amount === `Whole`) {
        if (formValues.sauce.sauces.length === 1 && !formValues.sauce.sauces.includes(value)) {
          return;
        } else if (formValues.sauce.sauces.length === 1 && formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
        } else if (formValues.sauce.sauces.length < 1 && formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
        } else if (formValues.sauce.sauces.length < 1 && !formValues.sauce.sauces.includes(value)) {
          setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: [...formValues.sauce.sauces, value] } });
        }
      }
    }
  };

  const getLocation = (event) => {
    event.preventDefault();
    const clicked = event.target.closest("button");
    const inputValue = clicked.previousElementSibling.firstChild.value;
    try {
      let APIKey = `cc239c0562bc4569b68f63b4b01edd12`;
      const locationGetter = async () => {
        const response = await axios({
          method: "GET",
          url: `https://api.geoapify.com/v1/geocode/search?text=${inputValue}&apiKey=${APIKey}`,
        });
        let responseLocation = response.data.features[0].properties;
        let address = `${responseLocation.city} ${responseLocation.state}`;
        setLocation(address);
      };
      locationGetter();
    } catch (error) {
      console.log(error);
    }
  };

  const hideFavorite = (event) => {
    event.preventDefault();
    const button = document.querySelector("#order-pizza");
    button.textContent = `Our Favorite:`;
  };

  const revealFavorite = (event) => {
    event.preventDefault();
    const button = document.querySelector("#order-pizza");
    button.textContent = `Our Favorite: Pizza`;
  };

  return (
    <Container>
      <Route path="/pizza">
        <Link to="/">
          <FormContainerClose>
            <FontAwesomeIcon icon={faWindowClose} />
          </FormContainerClose>
        </Link>
        <FormContainer>
          <OrderForm id="pizza-form">
            <FormMainHeader bgColor="#FF4B00">
              <FormMainHeaderText>Build Your Own Pizza</FormMainHeaderText>
            </FormMainHeader>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Customer Information</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection flow="column nowrap" justify="space-evenly" align="center">
                <OrderFormInput id="name-input" name="name-input" placeholder="Enter Full Name" onChange={(e) => handleChange(e)} />
                <OrderFormLabel htmlFor="name-input">Customer Name</OrderFormLabel>
              </InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Choice Of Size</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection flow="column nowrap" justify="space-evenly" align="center">
                <Select handleChange={handleChange} />
              </InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Choice Of Crust</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection flow="column wrap" justify="space-evenly" align="center">
                <RadioLabel width="30%">
                  <RadioInput name="crust" type="radio" value="Regular" onChange={(e) => handleChange(e)} checked={formValues.crust === `Regular`} />
                  Regular
                </RadioLabel>
                <RadioLabel width="30%">
                  <RadioInput name="crust" type="radio" value="Thin" onChange={(e) => handleChange(e)} checked={formValues.crust === `Thin`} />
                  Thin
                </RadioLabel>
                <RadioLabel width="30%">
                  <RadioInput name="crust" type="radio" value="New York" onChange={(e) => handleChange(e)} checked={formValues.crust === `New York`} />
                  New York
                </RadioLabel>
                <RadioLabel width="30%">
                  <RadioInput name="crust" type="radio" value="Deep Dish" onChange={(e) => handleChange(e)} checked={formValues.crust === `Deep Dish`} />
                  Deep Dish
                </RadioLabel>
                <RadioLabel width="30%">
                  <RadioInput name="crust" type="radio" value="Stuffed" onChange={(e) => handleChange(e)} checked={formValues.crust === `Stuffed`} />
                  Stuffed
                </RadioLabel>
              </InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Choice Of Sauce</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection flow="column nowrap" justify="space-evenly" align="center">
                <SauceInputContainer>
                  <RadioLabel width="30%">
                    <RadioInput name="sauceAmount" type="radio" value="Half" onChange={(e) => handleChange(e)} checked={formValues.sauce.amount === `Half`} />
                    Half 'n Half
                  </RadioLabel>
                  <RadioLabel width="30%">
                    <RadioInput name="sauceAmount" type="radio" value="Whole" onChange={(e) => handleChange(e)} checked={formValues.sauce.amount === `Whole`} />
                    Whole
                  </RadioLabel>
                </SauceInputContainer>
                <SauceInputContainer>
                  <CheckBoxLabel width="30%">
                    <CheckBoxInput type="checkbox" name="sauce" value="Original" checked={formValues.sauce.sauces.includes("Original")} onChange={(e) => handleChange(e)} />
                    Original
                  </CheckBoxLabel>
                  <CheckBoxLabel width="30%">
                    <CheckBoxInput type="checkbox" name="sauce" value="BBQ" checked={formValues.sauce.sauces.includes("BBQ")} onChange={(e) => handleChange(e)} />
                    BBQ
                  </CheckBoxLabel>
                  <CheckBoxLabel width="30%">
                    <CheckBoxInput type="checkbox" name="sauce" value="Ranch" checked={formValues.sauce.sauces.includes("Ranch")} onChange={(e) => handleChange(e)} />
                    Ranch
                  </CheckBoxLabel>
                  <CheckBoxLabel width="30%">
                    <CheckBoxInput type="checkbox" name="sauce" value="Buffalo" checked={formValues.sauce.sauces.includes("Buffalo")} onChange={(e) => handleChange(e)} />
                    Buffalo
                  </CheckBoxLabel>
                  <CheckBoxLabel width="30%">
                    <CheckBoxInput type="checkbox" name="sauce" value="Alfredo" checked={formValues.sauce.sauces.includes("Alfredo")} onChange={(e) => handleChange(e)} />
                    Alfredo
                  </CheckBoxLabel>
                </SauceInputContainer>
              </InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Choice Of Toppings</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection flow="column nowrap" justify="space-evenly" align="center">
                <InvisibleCheckboxContainer>
                  <InvisibleCheckBox className="topping-menu" id="meat" name="meat" type="checkbox" />
                  <InvisibleCheckBoxLabel
                    htmlFor="meat"
                    width="50%"
                    className="topping-label"
                    onClick={(e) => {
                      activateMenu(e);
                    }}
                  >
                    Meat
                  </InvisibleCheckBoxLabel>
                  <InvisibleCheckBox className="topping-menu" id="veggies" name="veggies" type="checkbox" />
                  <InvisibleCheckBoxLabel
                    htmlFor="veggies"
                    width="50%"
                    className="topping-label"
                    onClick={(e) => {
                      activateMenu(e);
                    }}
                  >
                    Veggies
                  </InvisibleCheckBoxLabel>
                </InvisibleCheckboxContainer>
              </InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Special Instructions</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection></InnerOrderFormSection>
            </OrderFormSection>
            <OrderFormSection>
              <FormHeader bgColor="#FF4b00cc">
                <FormSubHeader>Quantity / Add To Order</FormSubHeader>
              </FormHeader>
              <InnerOrderFormSection></InnerOrderFormSection>
            </OrderFormSection>
          </OrderForm>
        </FormContainer>
      </Route>
      <HeroContainer>
        <Header weight="bold" color="#fefefe">
          Bloomtech Eats
        </Header>
        <SubHeader color="#fefefe">Delivering Food To Coders Everywhere...</SubHeader>
        <Form>
          <FormSection>
            <FormInnerSection>
              <Input id="address" name="address" className="address" placeholder="ie - 1234 Example St City, State, Zipcode" />
              <Label htmlFor="address">Full Address</Label>
            </FormInnerSection>
            <SearchButton type="submit" onClick={(e) => getLocation(e)}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </SearchButton>
          </FormSection>
        </Form>
        <Link to="/pizza">
          <OrderButton id="order-pizza" onMouseOver={revealFavorite} onMouseLeave={hideFavorite}>
            Our Favorite:
          </OrderButton>
        </Link>
        <TagLine>*Hover To See Our Favorite | Click To Order</TagLine>
      </HeroContainer>
      <FoodInfoContainer>
        <AssistantHeader weight="normal" color="#ff4b00">
          Not Our Favorite, But Great Food Nonetheless
        </AssistantHeader>
        <AssistantSubHeader>Food Delivered To {location ? location : `You`}:</AssistantSubHeader>
        <FoodContainer>
          {restaurants &&
            restaurants.map((restaurant, index) => {
              return <Restaurant restaurant={restaurant} key={index} />;
            })}
        </FoodContainer>
      </FoodInfoContainer>
    </Container>
  );
};
export default App;
