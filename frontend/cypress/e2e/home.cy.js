beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Home page", () => {
  it("renders main text", () => {
    cy.contains("Take control of your games, never misplace a title again.");
  });

  it("renders button", () => {
    cy.get("a").should("contain", "Your Inventory");
  });
});

describe("Home page to Inventory page", () => {
  it("should render inventory page once button is clicked", () => {
    cy.get("[data-test-btn='inventory-btn']").click();
    cy.contains("My Games Collection");
  });
});
