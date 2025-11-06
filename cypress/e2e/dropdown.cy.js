describe("drag-n-drop feature", () => {
  it("drag-n-drop demo using jQueryUI", () => {
  cy.visit("https://jqueryui.com/droppable/");
  cy.frameLoaded(".demo-frame"); // waits for iframe to load

  // cy.iframe() already gives access to the iframe’s body
  cy.iframe().find("#draggable").should("be.visible");
  cy.iframe().find("#droppable").should("be.visible");

  // Perform drag and drop using plugin or custom command
  cy.iframe().find("#draggable").drag("#droppable", { force: true });
});

  it("drag-n-drop demo using jQueryUI", () => {
    cy.visit("https://jqueryui.com/droppable/");
    cy.frameLoaded(".demo-frame"); // if it’s inside an iframe
    cy.iframe().then(($iframe) => {
      const body = cy.wrap($iframe.contents().find("body"));
      body.dragNDrop("#draggable", "#droppable");
    });
  });
});