/// <reference types="cypress" />

describe("Bloomtech Eats | Order Pizza", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const orderPizzaButton = () => cy.get("[data-cy=order-pizza]");
  const nameLabel = () => cy.get("[data-cy=name-label]");
  const nameInput = () => cy.get("[data-cy=name-input]");
  const sizeSelect = () => cy.get("[data-cy=size-dropdown");
  const newYorkCrust = () => cy.get("[data-cy=new-york]");
  const wholeSauce = () => cy.get("[data-cy=whole]");
  const bbqSauce = () => cy.get("[data-cy=BBQ]");
  const meatLabel = () => cy.get("[data-cy=meat]");
  const veggieLabel = () => cy.get("[data-cy=veggies]");
  const italianSausage = () => cy.get("[data-cy=italian-sausage]");
  const bacon = () => cy.get("[data-cy=bacon]");
  const grilledChicken = () => cy.get("[data-cy=grilled-chicken]");
  const bananaPeppers = () => cy.get("[data-cy=banana-peppers]");
  const specialInstructions = () => cy.get("[data-cy=special-message]");
  const quantityUp = () => cy.get("[data-cy=up]");
  const quantityDown = () => cy.get("[data-cy=down]");
  const submitOrder = () => cy.get("[data-cy=submit-order]");

  it(`Opens the pizza order form.`, () => {
    orderPizzaButton().should("exist");
    orderPizzaButton().click();
  });

  it(`Selects multiple toppings`, () => {
    orderPizzaButton().should("exist");
    orderPizzaButton().click();

    meatLabel().should("exist").click();
    italianSausage().should("exist").click();
    bacon().should("exist").click();
    grilledChicken().should("exist").click();

    veggieLabel().should("exist").click();
    bananaPeppers().should("exist").click();
  });

  it(`Opens and fills out the pizza order form.`, () => {
    orderPizzaButton().should("exist").click();

    nameLabel().should("exist").click();
    nameInput().should("exist").type("Jonathan Smith", { force: true }).should("have.value", "Jonathan Smith");

    sizeSelect().should("exist").select("Personal");

    newYorkCrust().should("exist").click();

    wholeSauce().should("exist").click();

    bbqSauce().should("exist").click();

    meatLabel().should("exist").click();
    italianSausage().should("exist").click();
    bacon().should("exist").click();
    grilledChicken().should("exist").click();

    veggieLabel().should("exist").click();
    bananaPeppers().should("exist").click();

    specialInstructions().should("exist").type("Here are some special instructions.  Burn it to a crisp.");

    quantityUp().should("exist").click().click().click();
    quantityDown().should("exist").click();
    submitOrder().should("exist").click();
  });
});
