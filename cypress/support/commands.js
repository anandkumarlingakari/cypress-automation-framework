//import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

// ✅ Initialize plugin
//addMatchImageSnapshotCommand();
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("switchToIframe", (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap)
    .invoke("attr", "contenteditable", "true");
});


import 'cypress-downloadfile/lib/downloadFileCommand';
//const fs = require("fs");
//const XLSX = require("xlsx");

// ✅ Optional: any of your existing custom commands
// Cypress.Commands.add("yourCommand", () => { ... });

// ✅ Handle optional visual regression plugins safely


Cypress.Commands.add('readExcel', (filePath) => {
  return cy.task('parseXlsx', filePath);
});
Cypress.Commands.add("userLogin", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  cy.get('input[name="username"]').type("Admin");
  cy.get('input[name="password"]').type("admin123");
  cy.get('button[type="submit"]').click();
   cy.url().should("include", "/dashboard");
  cy.get("header.oxd-topbar", { timeout: 20000 }).should("be.visible"); // dashboard header
});
Cypress.Commands.add("dragNDrop", (sourceSelector, targetSelector) => {
  const dataTransfer = new DataTransfer();

  cy.get(sourceSelector, { timeout: 10000 })
    .should("exist")
    .and("be.visible")
    .trigger("dragstart", { dataTransfer });

  cy.get(targetSelector, { timeout: 10000 })
    .should("exist")
    .and("be.visible")
    .trigger("drop", { dataTransfer })
    .trigger("dragend", { dataTransfer });
});
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command';

addMatchImageSnapshotCommand();

//Cypress.Commands.add("alphabeticalorder", () => {
  //cy.get('//select[@id="sort-by-selector"]').select("Alphabetical");
//});
//const compareSnapshotCommand = require('cypress-visual-regression/dist/command')
//import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

Cypress.Commands.add('check_URL_ResponseStatus', (args) => {
  cy.get(args)
        .each(($a) => {
          const href = $a.prop('href')

          cy.request(href)
                .its('body')
                .should('include', '<title>')
                .should('include', '<html>')
          cy.request(href)
            .then(function (resp) {
              expect(resp.status).to.eq(200)
            })
        })
})

/*compareSnapshotCommand()
addMatchImageSnapshotCommand({
  failureThreshold: 0.00,
  failureThresholdType: 'percent',
  customDiffConfig: { threshold: 0.0 },
  capture: 'fullPage',
  timeout: '60000',
})*/
