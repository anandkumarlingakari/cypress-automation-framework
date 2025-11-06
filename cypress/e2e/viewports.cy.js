const port = "iphone-xr";
describe(`first test ${port}`, () => {
  beforeEach(() => {
    cy.visit("https://en.wikipedia.org");
    cy.viewport("samsung-s10");
    cy.log("execute beforeEach");
    cy.wait(5000);
  });

  it("test wikipedia", () => {
    cy.title().should("eq", "Wikipedia");
    cy.get("#searchInput").clear().type("cypress{enter}");
    cy.url().should("include", "/wiki/Cypress");
    cy.get("h1").should("have.text", "Cypress");
  });

  it.only("test wikipedia - getText()", { browser: "firefox" }, () => {
    cy.title().should("eq", "Wikipedia");
    cy.get("#searchInput").clear().type("cypress{enter}");
    cy.url().should("include", "/wiki/Cypress");
    cy.get("h1fgdfgf").should(($el) => {
      const text = $el.text();
      expect(text).to.eq("Cypress");
      // updates 2
    });
  });

  it("test wikipedia - getText() using invoke function", () => {
    cy.title().should("eq", "Wikipedia");
    cy.get("#searchInput").clear().type("cypress{enter}");
    cy.url().should("include", "/wiki/Cypress");
    cy.get("h1")
      .invoke("text")
      .then((text) => {
        expect(text).to.eq("Cypress");
      });
  });
});
