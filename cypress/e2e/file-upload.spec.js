describe("handling file uplaods", () => {
  it("upload image file", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("Screenshot.png");
    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain", "Screenshot.png");

    // db verification
  });

  it("upload multiple image files", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile(["sample.pdf", "Screenshot.png"]);
    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain", "Screenshot.png");

    // db verification
  });

  it.only("upload image file with upload button", () => {
    cy.visit("https://xndev.com/display-image/");
    cy.get('[type="file"]').attachFile("Screenshot.png");
    cy.wait(2000);
    cy.get("#blah").then(($el) => {
      const url = $el.prop("src");
      cy.log(url);

      cy.request(url).then((res) => {
        expect(res).to.eq(200);
      });
    });
  });

  it("upload image file & checking successful uplaod to server", () => {
    cy.visit(
      "https://www.iproperty.com.my/property/bukit-jalil/the-park-sky-residence/rent-100993613/"
    );
    // cy.get('[type="file"]').attachFile('Screenshot.png')
    // cy.wait(2000)
    cy.get('[data-test-id="ImageCoverageWrapper"]  img').then(($el) => {
      const url = $el.prop("src");
      cy.log(url);

      cy.request(url).then((res) => {
        expect(res.status).to.eq(200);
      });
    });
  });
});
