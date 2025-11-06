import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// ✅ Custom command wrapper for snapshot compare
Cypress.Commands.add("compareSnapshot", (name) => {
  cy.wait(500); // give UI time to settle
  cy.matchImageSnapshot(name);
});

Given("I open Internet herokuapp page", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.wait(1000);
});

Then('I capture snapshot and compare {string}', (snapshotName) => {
  cy.compareSnapshot(snapshotName);
});

When('I click on {string}', (menuItem) => {
  cy.contains("a", menuItem).click({ force: true });
  cy.wait(1000);
});

Then('I press button {string}', (btnName) => {
  cy.contains(btnName).click({ force: true });
  cy.wait(1000);
});
