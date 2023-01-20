beforeEach(() => {
  cy.visit("http://localhost:3000/#/api/inventory");
});

describe("Game Form", () => {
  it("adds a game to the database", () => {
    // Image URL and button can not be seen unless height is 900px
    cy.viewport(1000, 900);
    cy.get("[data-test-btn='add-game-btn']").click();

    cy.get("input[name=title]").type("The Witcher 3: Wild Hunt");
    cy.get("input[name=copies]").type("29");
    cy.get("input[name=releaseDate]").type("2015-05-18");
    cy.get("input[name=imgUrl]").type(
      "https://image.api.playstation.com/vulcan/ap/rnd/202211/0711/kh4MUIuMmHlktOHar3lVl6rY.png"
    );
    // data-test-btn="form-add-game"
    cy.get("[data-test-btn='form-add-game']").click();
    cy.contains("The Witcher 3: Wild Hunt");
  });
});
