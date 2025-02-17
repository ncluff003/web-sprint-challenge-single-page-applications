import * as yup from "yup";

export const handleChange = (event, setFormValues, formValues, schema, errors, setErrors) => {
  if (event.target.type !== `radio` && event.target.type !== `checkbox`) {
    event.preventDefault();
  }
  const clicked = event.target;
  const { type, name, value, checked } = clicked;
  const valueToUse = type === "checkbox" ? checked : type === "radio" ? checked : value;
  if (name === `name-input`) {
    yup
      .reach(schema, ["name"])
      .validate(value)
      .then(() => {
        setErrors({ ...errors, ["name"]: "" });
        setFormValues({ ...formValues, ["name"]: value });
      })
      .catch((error) => setErrors({ ...errors, ["name"]: error.errors[0] }));
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
      } else if ((formValues.sauce.sauces.length === 2 && formValues.sauce.sauces.includes(value)) || (formValues.sauce.sauces.length < 2 && formValues.sauce.sauces.includes(value))) {
        setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
      } else if (formValues.sauce.sauces.length < 2 && !formValues.sauce.sauces.includes(value)) {
        setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: [...formValues.sauce.sauces, value] } });
      }
    } else if (formValues.sauce.amount === `Whole`) {
      if (formValues.sauce.sauces.length === 1 && !formValues.sauce.sauces.includes(value)) {
        return;
      } else if (formValues.sauce.sauces.length === 1 && formValues.sauce.sauces.includes(value)) {
        setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: formValues.sauce.sauces.filter((sauce) => sauce !== value) } });
      } else if (formValues.sauce.sauces.length < 1 && !formValues.sauce.sauces.includes(value)) {
        setFormValues({ ...formValues, ["sauce"]: { ...formValues.sauce, ["sauces"]: [...formValues.sauce.sauces, value] } });
      }
    }
  } else if (clicked.classList.contains("topping-label")) {
    if (clicked.closest("label").textContent === "Meat") {
      if (clicked.closest("label").nextElementSibling.nextElementSibling.classList.contains("checked")) {
        clicked.closest("label").nextElementSibling.nextElementSibling.classList.remove("checked");
      }
      clicked.closest("label").classList.add("checked");
      setFormValues({
        ...formValues,
        ["toppings"]: { ...formValues.toppings, ["activeMenu"]: { ...formValues.toppings.activeMenu, [clicked.closest("label").textContent.toLowerCase()]: true, ["veggies"]: false } },
      });
    } else if (clicked.closest("label").textContent === "Veggies") {
      if (clicked.closest("label").previousElementSibling.previousElementSibling.classList.contains("checked")) {
        clicked.closest("label").previousElementSibling.previousElementSibling.classList.remove("checked");
      }
      clicked.closest("label").classList.add("checked");
      setFormValues({
        ...formValues,
        ["toppings"]: { ...formValues.toppings, ["activeMenu"]: { ...formValues.toppings.activeMenu, [clicked.closest("label").textContent.toLowerCase()]: true, ["meat"]: false } },
      });
    }
  } else if (name === `meatTopping`) {
    if (formValues.toppings.chosenToppings.length === 10 && !formValues.toppings.chosenToppings.includes(value)) {
      return;
    } else if (
      (formValues.toppings.chosenToppings.length === 10 && formValues.toppings.chosenToppings.includes(value)) ||
      (formValues.toppings.chosenToppings.length < 10 && formValues.toppings.chosenToppings.includes(value))
    ) {
      setFormValues({
        ...formValues,
        ["toppings"]: {
          ...formValues.toppings,
          ["chosenToppings"]: formValues.toppings.chosenToppings.filter((topping) => topping !== value),
          ["meat"]: { ...formValues.toppings.meat, [value]: false },
        },
      });
    } else if (formValues.toppings.chosenToppings.length < 10 && !formValues.toppings.chosenToppings.includes(value)) {
      setFormValues({
        ...formValues,
        ["toppings"]: {
          ...formValues.toppings,
          ["chosenToppings"]: [...formValues.toppings.chosenToppings, value],
          ["meat"]: { ...formValues.toppings.meat, [value]: true },
        },
      });
    }
  } else if (name === `veggieTopping`) {
    if (formValues.toppings.chosenToppings.length === 10 && !formValues.toppings.chosenToppings.includes(value)) {
      return;
    } else if (
      (formValues.toppings.chosenToppings.length === 10 && formValues.toppings.chosenToppings.includes(value)) ||
      (formValues.toppings.chosenToppings.length < 10 && formValues.toppings.chosenToppings.includes(value))
    ) {
      setFormValues({
        ...formValues,
        ["toppings"]: {
          ...formValues.toppings,
          ["chosenToppings"]: formValues.toppings.chosenToppings.filter((topping) => topping !== value),
          ["veggies"]: { ...formValues.toppings.veggies, [value]: false },
        },
      });
    } else if (formValues.toppings.chosenToppings.length < 10 && !formValues.toppings.chosenToppings.includes(value)) {
      setFormValues({
        ...formValues,
        ["toppings"]: {
          ...formValues.toppings,
          ["chosenToppings"]: [...formValues.toppings.chosenToppings, value],
          ["veggies"]: { ...formValues.toppings.veggies, [value]: true },
        },
      });
    }
  } else if (type === `textarea`) {
    setFormValues({ ...formValues, [name]: value });
  }
};
