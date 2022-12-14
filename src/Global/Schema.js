import * as yup from "yup";

export const PizzaFormSchema = yup.object().shape({
  name: yup.string().min(2, `name must be at least 2 characters`).required(`You must enter your name.`),
});
