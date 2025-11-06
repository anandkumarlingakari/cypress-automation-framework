describe("javascript alerts", () => {
  it("handling jS alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    //cy.pause();
    cy.contains("Click for JS Alert").click();

    cy.on("window:alert", (win) => {
      cy.on("window:confirm", () => true);
      expect(win).to.equal("I am a JS Alert");
    });

    cy.contains("You successfully clicked an alert").should("be.visible");
  });

  it("handling jS alert - click either OK or Cancel", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.contains("Click for JS Confirm").click();

    cy.on("window:confirm", (win) => {
      console.log("win obj", win);
      expect(win).to.equal("I am a JS Confirm");
    });

    cy.on("window:confirm", () => true);
    cy.contains("You clicked: Ok").should("be.visible");
  });

  it("handling jS prompt using cy.stub()", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      //cy.pause()
      cy.stub(win, "prompt").returns("test prompt alert");
      cy.contains("Click for JS Prompt").click();
    });

    cy.contains("You entered: test prompt alert").should("be.visible");

    //cy.get('#result').should('have.text', 'You entered: cypress test')
  });
});
