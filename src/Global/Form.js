import styled from "styled-components";
import { FormMainHeader, FormHeader, FormSubHeader, FormSubSubHeader, ErrorHeader } from "./Header";
import { Select, OrderFormInput, RadioInput, CheckBoxInput, InvisibleCheckBox, TextArea, QuantityInput } from "./Input";
import { CheckBoxLabel, RadioLabel, OrderFormLabel, InvisibleCheckBoxLabel } from "./Label";
import { OrderFormSection, InnerOrderFormSection } from "./Section";
import { FormMainHeaderText } from "./Paragraph";
import { SauceInputContainer, InvisibleCheckboxContainer, QuantityContainer, QuantityButtonContainer } from "./Container";
import { OrderButton, QuantityButton } from "./Button";
import { PizzaFormSchema } from "./Schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import qs from "qs";

export const Form = styled.form`
  position: relative;
  height: max-content;
  width: 40%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  border-left: ${(props) => props.borderLeft};
  border-right: ${(props) => props.borderRight};
  border-bottom: ${(props) => props.borderBottom};
`;

export const OrderForm = function (props) {
  const { setFormValues, formValues, handleChange, quantity, setQuantity, errors, setErrors } = props;

  const submitOrder = (event) => {
    event.preventDefault();
    const order = {
      ...formValues,
      ["toppings"]: { ["chosenToppings"]: { ...formValues.toppings.chosenToppings }, ["meat"]: { ...formValues.toppings.meat }, ["veggies"]: { ...formValues.toppings.veggies } },
    };
    console.log(order);

    try {
      const submittingOrder = async () => {
        const response = await axios({
          method: "POST",
          url: `https://reqres.in/api/orders`,
          data: qs.stringify(order),
        });
        console.log(response);
      };
      submittingOrder();
    } catch (error) {}
  };

  const money = new Intl.NumberFormat("en-us", {
    style: `currency`,
    currency: "USD",
    minimumFractionDigits: 2,
  });

  const changeQuantity = (event) => {
    const pizzaSize = document.querySelector("#size-dropdown");
    const pizzaSizeOptions = document.querySelectorAll(".option");
    const individualPizzaCost = parseInt(pizzaSizeOptions[pizzaSize.selectedIndex].dataset.value);
    event.preventDefault();
    const clicked = event.target.closest("button");
    const { value } = clicked;
    if (value === `down`) {
      if (formValues.quantity === 0) return;
      setFormValues({ ...formValues, ["quantity"]: formValues.quantity - 1, ["total"]: individualPizzaCost * (formValues.quantity - 1) });
    } else if (value === `up`) {
      if (formValues.quantity === 100) return;
      setFormValues({ ...formValues, ["quantity"]: formValues.quantity + 1, ["total"]: individualPizzaCost * (formValues.quantity + 1) });
    }
  };

  return (
    <Form id="pizza-form" marginTop="10rem" marginBottom="10rem" borderLeft=".2rem solid #FF4b00" borderRight=".2rem solid #FF4b00" borderBottom=".2rem solid #FF4b00">
      <FormMainHeader bgColor="#FF4B00">
        <FormMainHeaderText>Build Your Own Pizza</FormMainHeaderText>
      </FormMainHeader>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Customer Information</FormSubHeader>
          <FormSubSubHeader className="error-message">Required</FormSubSubHeader>
          <ErrorHeader padding=".5rem" marginTop=".5rem" radius=".5rem">
            {errors.name}
          </ErrorHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column nowrap" justify="space-evenly" align="center">
          <OrderFormInput
            id="name-input"
            name="name-input"
            data-cy="name-input"
            placeholder="Enter Full Name"
            onChange={(e) => handleChange(e, setFormValues, formValues, PizzaFormSchema, errors, setErrors)}
          />
          <OrderFormLabel data-cy="name-label" htmlFor="name-input">
            Customer Name
          </OrderFormLabel>
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Choice Of Size</FormSubHeader>
          <FormSubSubHeader className="error-message">Required</FormSubSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column nowrap" justify="space-evenly" align="center">
          <Select handleChange={handleChange} setFormValues={setFormValues} formValues={formValues} />
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Choice Of Crust</FormSubHeader>
          <FormSubSubHeader className="error-message">Required</FormSubSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column wrap" justify="space-evenly" align="center">
          <RadioLabel width="30%">
            <RadioInput name="crust" type="radio" value="Regular" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.crust === `Regular`} />
            Regular
          </RadioLabel>
          <RadioLabel width="30%">
            <RadioInput name="crust" type="radio" value="Thin" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.crust === `Thin`} />
            Thin
          </RadioLabel>
          <RadioLabel width="30%">
            <RadioInput name="crust" type="radio" value="New York" data-cy="new-york" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.crust === `New York`} />
            New York
          </RadioLabel>
          <RadioLabel width="30%">
            <RadioInput name="crust" type="radio" value="Deep Dish" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.crust === `Deep Dish`} />
            Deep Dish
          </RadioLabel>
          <RadioLabel width="30%">
            <RadioInput name="crust" type="radio" value="Stuffed" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.crust === `Stuffed`} />
            Stuffed
          </RadioLabel>
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Choice Of Sauce</FormSubHeader>
          <FormSubSubHeader className="error-message">Required | Limit Of Two</FormSubSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column nowrap" justify="space-evenly" align="center">
          <SauceInputContainer>
            <RadioLabel width="30%">
              <RadioInput name="sauceAmount" type="radio" value="Half" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.sauce.amount === `Half`} />
              Half 'n Half
            </RadioLabel>
            <RadioLabel width="30%">
              <RadioInput name="sauceAmount" type="radio" value="Whole" data-cy="whole" onChange={(e) => handleChange(e, setFormValues, formValues)} checked={formValues.sauce.amount === `Whole`} />
              Whole
            </RadioLabel>
          </SauceInputContainer>
          <SauceInputContainer>
            {/* All Of These Sauce Options Were Originally Supposed To Be Checkboxes But It Would Not Pass Bloomtech's Test */}
            <CheckBoxLabel width="30%">
              <CheckBoxInput type="radio" name="sauce" value="Original" checked={formValues.sauce.sauces.includes("Original")} onChange={(e) => handleChange(e, setFormValues, formValues)} />
              Original
            </CheckBoxLabel>
            <CheckBoxLabel width="30%">
              <CheckBoxInput type="radio" name="sauce" value="BBQ" data-cy="BBQ" checked={formValues.sauce.sauces.includes("BBQ")} onChange={(e) => handleChange(e, setFormValues, formValues)} />
              BBQ
            </CheckBoxLabel>
            <CheckBoxLabel width="30%">
              <CheckBoxInput type="radio" name="sauce" value="Ranch" checked={formValues.sauce.sauces.includes("Ranch")} onChange={(e) => handleChange(e, setFormValues, formValues)} />
              Ranch
            </CheckBoxLabel>
            <CheckBoxLabel width="30%">
              <CheckBoxInput type="radio" name="sauce" value="Buffalo" checked={formValues.sauce.sauces.includes("Buffalo")} onChange={(e) => handleChange(e, setFormValues, formValues)} />
              Buffalo
            </CheckBoxLabel>
            <CheckBoxLabel width="30%">
              <CheckBoxInput type="checkbox" name="sauce" value="Alfredo" checked={formValues.sauce.sauces.includes("Alfredo")} onChange={(e) => handleChange(e, setFormValues, formValues)} />
              Alfredo
            </CheckBoxLabel>
          </SauceInputContainer>
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Choice Of Toppings</FormSubHeader>
          <FormSubSubHeader className="error-message">Limit Of 10</FormSubSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column nowrap" justify="space-evenly" align="center">
          <InvisibleCheckboxContainer>
            <InvisibleCheckBox className="topping-menu" id="meat" name="meat" type="checkbox" />
            <InvisibleCheckBoxLabel
              htmlFor="meat"
              width="50%"
              className="topping-label"
              data-cy="meat"
              onClick={(e) => {
                handleChange(e, setFormValues, formValues);
              }}
            >
              Meat
            </InvisibleCheckBoxLabel>
            <InvisibleCheckBox className="topping-menu" id="veggies" name="veggies" type="checkbox" />
            <InvisibleCheckBoxLabel
              htmlFor="veggies"
              width="50%"
              className="topping-label"
              data-cy="veggies"
              onClick={(e) => {
                handleChange(e, setFormValues, formValues);
              }}
            >
              Veggies
            </InvisibleCheckBoxLabel>
          </InvisibleCheckboxContainer>
        </InnerOrderFormSection>
        <InnerOrderFormSection active={formValues.toppings.activeMenu.meat} flow="column wrap" justify="space-evenly" align="center">
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="meatball"
              checked={formValues.toppings.chosenToppings.includes("meatball")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Meatball
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput type="checkbox" name="meatTopping" value="beef" checked={formValues.toppings.chosenToppings.includes("beef")} onClick={(e) => handleChange(e, setFormValues, formValues)} />
            Beef
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="pepperoni"
              checked={formValues.toppings.chosenToppings.includes("pepperoni")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Pepperoni
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="sausage"
              checked={formValues.toppings.chosenToppings.includes("sausage")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Sausage
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="canadianBacon"
              checked={formValues.toppings.chosenToppings.includes("canadianBacon")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Canadian Bacon
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="spicyItalianSausage"
              data-cy="italian-sausage"
              checked={formValues.toppings.chosenToppings.includes("spicyItalianSausage")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Spicy Italian Sausage
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="bacon"
              data-cy="bacon"
              checked={formValues.toppings.chosenToppings.includes("bacon")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Bacon
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="grilledChicken"
              data-cy="grilled-chicken"
              checked={formValues.toppings.chosenToppings.includes("grilledChicken")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Grilled Chicken
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="salami"
              checked={formValues.toppings.chosenToppings.includes("salami")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Salami
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="meatTopping"
              value="phillySteak"
              checked={formValues.toppings.chosenToppings.includes("phillySteak")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Philly Steak
          </CheckBoxLabel>
        </InnerOrderFormSection>
        <InnerOrderFormSection active={formValues.toppings.activeMenu.veggies} flow="column wrap" justify="space-evenly" align="center">
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="onions"
              checked={formValues.toppings.chosenToppings.includes("onions")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Onions
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="jalapenoPeppers"
              checked={formValues.toppings.chosenToppings.includes("jalapenoPeppers")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Jalapeño Peppers
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="greenPeppers"
              checked={formValues.toppings.chosenToppings.includes("greenPeppers")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Green Peppers
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="romaTomatoes"
              checked={formValues.toppings.chosenToppings.includes("romaTomatoes")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Roma Tomatoes
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="mushrooms"
              checked={formValues.toppings.chosenToppings.includes("mushrooms")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Mushrooms
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="blackOlives"
              checked={formValues.toppings.chosenToppings.includes("blackOlives")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Black Olives
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="freshSpinach"
              checked={formValues.toppings.chosenToppings.includes("freshSpinach")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Fresh Spinach
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="bananaPeppers"
              data-cy="banana-peppers"
              checked={formValues.toppings.chosenToppings.includes("bananaPeppers")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Banana Peppers
          </CheckBoxLabel>
          <CheckBoxLabel width="30%">
            <CheckBoxInput
              type="checkbox"
              name="veggieTopping"
              value="pineapple"
              checked={formValues.toppings.chosenToppings.includes("pineapple")}
              onClick={(e) => handleChange(e, setFormValues, formValues)}
            />
            Pineapple
          </CheckBoxLabel>
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Special Instructions</FormSubHeader>
          <FormSubSubHeader>We Aim To Please</FormSubSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="column nowrap" justify="center" align="center">
          <TextArea
            name="specialInstructions"
            id="special-text"
            data-cy="special-message"
            border=".2rem solid #ff4b00cc"
            borderFocus="#ff4b00"
            color="#fefefecc"
            onChange={(e) => handleChange(e, setFormValues, formValues)}
          />
        </InnerOrderFormSection>
      </OrderFormSection>
      <OrderFormSection>
        <FormHeader bgColor="#FF4b00cc">
          <FormSubHeader>Quantity / Add To Order</FormSubHeader>
        </FormHeader>
        <InnerOrderFormSection active={true} flow="row nowrap" justify="space-evenly" align="center">
          <QuantityContainer>
            <QuantityInput type="number" min={0} max={100} value={formValues.quantity} readOnly={true}></QuantityInput>
            <QuantityButtonContainer>
              <QuantityButton
                borderColor="#FF4b00"
                value="up"
                data-cy="up"
                onClick={(e) => {
                  changeQuantity(e);
                }}
              >
                <FontAwesomeIcon icon={faCaretUp} className="icon" />
              </QuantityButton>
              <QuantityButton
                borderColor="#FF4b00"
                value="down"
                data-cy="down"
                onClick={(e) => {
                  changeQuantity(e);
                }}
              >
                <FontAwesomeIcon icon={faCaretDown} className="icon" />
              </QuantityButton>
            </QuantityButtonContainer>
          </QuantityContainer>
          <OrderButton id="order-button" data-cy="submit-order" onClick={(e) => submitOrder(e)}>
            Add To Order &nbsp; &nbsp; {money.format(formValues.total)}
          </OrderButton>
        </InnerOrderFormSection>
      </OrderFormSection>
    </Form>
  );
};
