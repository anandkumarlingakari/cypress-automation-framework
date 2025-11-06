describe("read file tests", () => {
  it.only("read the orangeHRM cookie", () => {
    cy.task("fileExists", "cypress/fixtures/cookies.json").then((exists) => {
      if (!exists) {
        cy.writeFile("cypress/fixtures/cookies.json", {
          cookie: {
            name: "orangehrm",
            value: "e8a81815da20be39b208b8d9e4a5de3d",
          },
        });
      }

      cy.readFile("cypress/fixtures/cookies.json").then((data) => {
        expect(data.cookie.name).to.eq("orangehrm");
        expect(data.cookie.value).to.eq("e8a81815da20be39b208b8d9e4a5de3d");
      });
    });
  });
});