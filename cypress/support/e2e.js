import "cypress-xpath";
import "@4tw/cypress-drag-drop";
import "cypress-iframe";
import "cypress-wait-until";
import "./commands";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath');

Cypress.on("uncaught:exception", () => {
  return false;
});