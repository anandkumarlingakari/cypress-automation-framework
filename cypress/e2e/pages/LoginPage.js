class LoginPage {
  visit() {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  }

  enterUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]').click();
  }

  verifyDashboard() {
    cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("be.visible")
  }

  verifyMessage(message) {
    //cy.contains(message).should("be.visible");
    cy.url().should("include", "dashboard");
  cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("be.visible")
    .and("contain.text", "Dashboard");
  }
}

export default new LoginPage();