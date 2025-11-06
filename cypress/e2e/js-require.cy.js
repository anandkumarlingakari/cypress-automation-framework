// <reference types="cypress" />
//var data = require("../../fixtures/text.js");
import 'cypress-iframe';
import 'cypress-wait-until';

describe("Handling fixtures - OrangeHRM Login", () => {
  let data; // ✅ Declare globally so all tests can access it

  before(() => {
    // ✅ Load fixture once before all tests
    cy.fixture("loginData").then((testData) => {
      data = testData;
    });
  });

  beforeEach(() => {
    // ✅ Visit page before every test
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("checks error message when username is empty", () => {
    // ✅ Click login button without entering credentials
    cy.get('button[type="submit"]').should("be.visible").click();

    // ✅ Verify both username and password error messages
    cy.get(".oxd-input-group .oxd-text.oxd-text--span").first()
      .should("have.text", "Required");

    cy.get(".oxd-input-group .oxd-text.oxd-text--span").last()
      .should("have.text", "Required");
  });


it("check error message", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  cy.get('button[type="submit"]').should("be.visible").click();

  // ✅ Verify both username and password error messages
  cy.get(".oxd-input-group .oxd-text.oxd-text--span")
    .should("have.length", 2)
    .and("contain.text", "Required");
});

  it("check error message", () => {
    cy.get('button[type="submit"]').should("be.visible").click();
      cy.log("Expected error:", data.text.label.loginBlankErrorMessage);

    // ✅ Verify both username and password required messages
    cy.get(".oxd-input-group .oxd-text.oxd-text--span")
      .should("have.length", 2)
      .and("contain.text", data.text.label.loginBlankErrorMessage);
  });
});

  it("test guru99 demo site using fixtures data", () => {
    cy.iframe("#site_iframe")
      .find(".dropdown-toggle")
      .first()
      .trigger("mouseover")
      .trigger("click")
      .next()
      .find("li")
      .contains("Login")
      .click();

    cy.waitUntil(() =>
      cy
        .iframe("#site_iframe")
        .contains("Already registered?")
        .should("be.visible")
    );

    // ✅ Use fixture data for login
    cy.iframe("#site_iframe").find("#email").clear().type(data.email);
    cy.iframe("#site_iframe").find("#passwd").clear().type(data.password);
    cy.iframe("#site_iframe").find("#SubmitLogin").click();

    // ✅ Verify successful login
    cy.waitUntil(() =>
      cy
        .iframe("#site_iframe")
        .find("h3", { timeout: 30000 })
        .should("contain", "Successfully Logged in...")
    );
  });

