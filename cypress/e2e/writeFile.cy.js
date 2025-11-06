describe("write and read file", () => {
  it("write file scenario - json", () => {
    cy.writeFile("cypress/fixtures/testdata.json", {
      name: "David" + 123,
      city: "Vizag",
      phone: "913232322",
    });
  });

  it.only("fetch the cookies", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.userLogin();

    cy.getCookie("orangehrm").then((text) => {
      const cookie = text;

      cy.writeFile("cypress/fixtures/cookies.json", {
        cookie: cookie,
      });
    });
  });

  it("write file scenario - json", () => {
    cy.visit(Cypress.env("host"));
    cy.get(loc).type(Cypress.env("token"));
  });
});
