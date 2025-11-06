import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from '../pages/LoginPage.js';

Given("I open the url", () => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
});

When("I enter username", () => {
  LoginPage.enterUsername("Admin");
});

When("I enter password", () => {
  LoginPage.enterPassword("admin123");
});

Then("User clicks login button", () => {
  LoginPage.clickLogin();
});

Then("I should see dashboard", () => {
  LoginPage.verifyDashboard();
});

When("I type username as {string}", (username) => {
  LoginPage.enterUsername(username);
});

When("I type password as {string}", (password) => {
  LoginPage.enterPassword(password);
});

Then("I should see {string}", (message) => {
  LoginPage.verifyMessage(message);
});

Then("I should see textlabel {string}", (message) => {
  LoginPage.verifyMessage(message);
});

When("I enter username and password", (dataTable) => {
  dataTable.hashes().forEach((row) => {
    LoginPage.enterUsername(row.username);
    LoginPage.enterPassword(row.password);
  });
});