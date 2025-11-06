describe("first test", () => {
  
  it("test wiki pedia", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.title().should("eq", "Wikipedia");
    cy.get("#searchInput").clear().type("cypress{enter}");
    
    // Handle the redirected origin (en.wikipedia.org)
    cy.origin('https://en.wikipedia.org', () => {
      cy.url().should("include", "/wiki/Cypress");
      cy.get('h1#firstHeading span.mw-page-title-main').should('have.text', 'Cypress');
    });
  });

  it("test wiki pedia - getText()", () => {
    cy.visit("https://www.wikipedia.org/");
    cy.title().should("eq", "Wikipedia");
    cy.get("#searchInput").clear().type("cypress{enter}");

    // Use cy.origin to handle new origin
    cy.origin('https://en.wikipedia.org', () => {
      cy.url().should("include", "/wiki/Cypress");
      cy.get('h1#firstHeading span.mw-page-title-main').then(($el) => {
        const text = $el.text();
        expect(text).to.eq("Cypress");
      });
    });
  });

  
  
  it("test wiki pedia - getText() using invoke function", () => {
  cy.visit("https://www.wikipedia.org/");
  cy.title().should("eq", "Wikipedia");
  cy.get("#searchInput").clear().type("cypress{enter}");

  // Handle new origin after search
  cy.origin('https://en.wikipedia.org', () => {
    cy.url().should("include", "/wiki/Cypress");
    cy.get("h1#firstHeading span.mw-page-title-main")
      .invoke("text")
      .should((text) => {
        expect(text.trim()).to.eq("Cypress");
      });
  });
   });
    });
  