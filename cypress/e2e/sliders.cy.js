describe("UI Slider Handling Suite", () => {

  // -------------------------------
  // 1️⃣ Basic single slider
  // -------------------------------
  it("should handle a simple horizontal slider", () => {
    cy.visit("http://demo.automationtesting.in/Slider.html");

    // Interact with slider by sending arrow keys
    cy.get("#slider input[type='range']")
      .invoke("val", 80)
      .trigger("input")
      .trigger("change");

    cy.get("#slider input[type='range']")
      .should("have.value", "80");
  });


  // -------------------------------
  // 2️⃣ Price range slider (Angular)
  // -------------------------------
  it("should handle Angular price range slider via drag", () => {
    cy.visit("https://angular-slider.github.io/ngx-slider/home", {
      failOnStatusCode: false,
    });

    // Drag left handle towards right
    cy.get("ngx-slider span.ngx-slider-pointer-min")
      .first()
      .drag(".ngx-slider-pointer-max", { force: true });

    cy.get("ngx-slider span.ngx-slider-pointer-min")
      .should("have.attr", "aria-valuenow")
      .then((val) => {
        const newValue = parseInt(val);
        expect(newValue).to.be.greaterThan(50);
      });
  });


  // -------------------------------
  // 3️⃣ Price range using invoke
  // -------------------------------
  it("should update slider via JS property change", () => {
    cy.visit("https://angular-slider.github.io/ngx-slider/home", {
      failOnStatusCode: false,
    });

    cy.get("ngx-slider span.ngx-slider-pointer-min")
      .invoke("attr", "aria-valuenow", "75")
      .should("have.attr", "aria-valuenow", "75");
  });


  // -------------------------------
  // 4️⃣ Vertical slider
  // -------------------------------
  it("should interact with vertical slider", () => {
    cy.visit("https://angular-slider.github.io/ngx-slider/home", {
      failOnStatusCode: false,
    });

    cy.get("ngx-slider.vertical .ngx-slider-pointer-min")
      .should("be.visible")
      .then(($el) => {
        cy.wrap($el)
          .trigger("mousedown", { which: 1 })
          .trigger("mousemove", { clientY: 100 })
          .trigger("mouseup");
      });

    cy.get("ngx-slider.vertical .ngx-slider-pointer-min")
      .should("have.attr", "aria-valuenow")
      .then((val) => {
        expect(Number(val)).to.be.greaterThan(5);
      });
  });


  // -------------------------------
  // 5️⃣ Ticks slider
  // -------------------------------
  it("should handle tick-marked slider", () => {
    cy.visit("https://angular-slider.github.io/ngx-slider/home", {
      failOnStatusCode: false,
    });

    cy.get("ngx-slider span.ngx-slider-tick").eq(5).click({ force: true });

    cy.get("ngx-slider span.ngx-slider-pointer-min")
      .should("have.attr", "aria-valuenow")
      .then((val) => {
        expect(Number(val)).to.be.closeTo(50, 10);
      });
  });
});