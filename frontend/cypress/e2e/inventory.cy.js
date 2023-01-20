beforeEach(() => {
  cy.visit("http://localhost:3000/#/api/inventory");
});

describe("Inventory page", () => {});

describe("Sidebar", () => {
  it("opens sidebar when button is pressed and renders all labels", () => {
    //data-test-btn='add-game-btn'
    cy.get("[data-test-btn='add-game-btn']").click();
    cy.contains("Add a new game");
    cy.contains("Game Title:");
    cy.contains("Number of Copies:");
    cy.contains("Release Date:");
    cy.contains("Add image url (optional):");
    cy.contains("Add Game");
  });
});

describe("Inventory page to Home page", () => {
  it("renders the home page once button is clicked", () => {
    // data-test-btn='home-btn'
    cy.get("[data-test-btn='home-btn']").click();
    cy.contains("Take control of your games, never misplace a title again.");
  });
});
