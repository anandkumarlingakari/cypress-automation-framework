describe("drag-n-drop feature", () => {
  it("drag-n-drop using dataTransfer", () => {
    
    cy.visit("https://demo.seleniumeasy.com/drag-and-drop-demo.html");
    cy.dragNDrop("#todrag span:first-child", "#mydropzone");

    const sourceSelector = "#todrag span:first-child";
    const targetSelector = "#mydropzone";

    const dataTransfer = new DataTransfer();

    cy.get(sourceSelector, { timeout: 10000 })
      .should("be.visible")
      .trigger("dragstart", { dataTransfer });

    cy.get(targetSelector)
      .should("be.visible")
      .trigger("drop", { dataTransfer })
      .trigger("dragend", { dataTransfer });

    // ✅ Verify drop area
    cy.get("#droppedlist")
      .children()
      .should("have.length.greaterThan", 0);
  });

  
});