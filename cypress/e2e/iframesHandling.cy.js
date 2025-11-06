import 'cypress-iframe';
import 'cypress-wait-until';


describe("handling iframes", () => {
  it("test guru99 demo site using cypress-iframe module", () => {
    cy.visit("https://demo.guru99.com/test/guru99home/");
    cy.frameLoaded("iframe[name='a077aa5e']");
    cy.iframe("iframe[name='a077aa5e']").within(() => {
      cy.get("a").should("be.visible").click();
    });
    cy.url().should("include", "guru99");
  });

 it("types text inside TinyMCE editor", () => {
  cy.visit("https://the-internet.herokuapp.com/iframe");
  cy.switchToIframe("#mce_0_ifr").clear().type("Hello Cypress!");
  cy.switchToIframe("#mce_0_ifr").should("contain.text", "Hello Cypress!");
});
});