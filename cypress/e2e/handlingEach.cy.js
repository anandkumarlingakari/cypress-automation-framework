const data = require("../fixtures/staging.json");

describe("handling each function", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
  });

  it("check dashboard list of elements", () => {
    cy.userLogin();

    // ✅ Confirm dashboard loaded
    cy.get(".oxd-topbar-header-breadcrumb > h6", { timeout: 20000 })
      .should("contain.text", "Dashboard");

    // ✅ Wait for Quick Launch section to appear
    cy.get(".orangehrm-quick-launch", { timeout: 20000 }).should("be.visible");

    // ✅ Now fetch titles
    cy.get("(//div[@class='orangehrm-dashboard-widget-header']//div//p[@class='oxd-text oxd-text--p'])[3]", { timeout: 20000 })
     // .should("have.length.greaterThan", 0)
      .each(($el, index) => {
        const text = $el.text().trim();
        cy.log(`Quick Launch Item ${index + 1}: ${text}`);
        expect(text).to.match(/^[A-Za-z\s]+$/);
      });
  });

  it("check dashboard list of elements using regular expression", () => {
    cy.userLogin();

    cy.get(".quickLinkText", {timeout:10000}).each(($el) => {
      const text = $el.text().trim();
      cy.log(`Text: ${text}`);
      expect(text).to.match(/^[A-Za-z\s]+$/);
    });
  });
});