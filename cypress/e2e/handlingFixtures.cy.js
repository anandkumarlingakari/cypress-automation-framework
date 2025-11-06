/// <reference types="cypress" />

describe("handling fixtures", () => {
  beforeEach(function () {
    cy.visit("http://links.giveawayoftheday.com/demo.guru99.com/");
    cy.fixture("staging").then(function (data) {
      this.data = data;
    });
  });

  it("test guru99 demo site using fixtures data", function () {
    //cy.frameLoaded()
     cy.iframe('#site_iframe')
      .find('.dropdown-toggle', { timeout: 20000 })
      .should('exist')
      .first()
      .trigger('mouseover')
      .trigger('click');
    cy.waitUntil(() =>
      cy
        .iframe("#site_iframe")
        .contains("Already registered?")
        .should("be.visible")
    );

    // login
    cy.iframe("#site_iframe").find("#email").clear().type(this.data.email);
    cy.iframe("#site_iframe").find("#passwd").clear().type(this.data.password);
    cy.iframe("#site_iframe").find("#SubmitLogin").click();
    //cy.wait(10000);
    cy.waitUntil(() =>
      cy
        .iframe("#site_iframe")
        .find("h3", { timeout: 30000 })
        .should("contain", "Successfully Logged in...")
    );
  });
});
