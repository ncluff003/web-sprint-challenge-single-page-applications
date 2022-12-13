import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { Container, FoodContainer, FormContainer, FormContainerClose } from "./Global/Container";
import { HeroContainer, FoodInfoContainer } from "./Home/Hero";
import { AssistantHeader, AssistantSubHeader, Header, SubHeader } from "./Global/Header";
import { FormInnerSection, FormSection } from "./Global/Section";
import { OrderButton, SearchButton } from "./Global/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Form, OrderForm } from "./Global/Form";
import { Label } from "./Global/Label";
import { Input } from "./Global/Input";
import { TagLine } from "./Global/Paragraph";
import { Restaurant } from "./Home/Restaurant";
import { handleChange } from "./Global/ChangeHandler";
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
    activeMenu: {
      meat: false,
      veggies: false,
    },
    chosenToppings: [],
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
  const [quantity, setQuantity] = useState(0);

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
          <OrderForm setFormValues={setFormValues} formValues={formValues} handleChange={handleChange} quantity={quantity} setQuantity={setQuantity} />
        </FormContainer>
      </Route>
      <HeroContainer>
        <Header weight="bold" color="#fefefe">
          Bloomtech Eats
        </Header>
        <SubHeader color="#fefefe">Delivering Food To Coders Everywhere...</SubHeader>
        <Form marginTop="3rem">
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
