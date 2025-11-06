describe("handling tabs", () => {
  it("remove target blank for tabs", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get("#opentab").invoke("removeAttr", "target").click();

    // set attr
    //document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

    //cy.get('#opentab').setAttribute("class", "democlass")

    // same window
    cy.url().should("include", "/courses");
    cy.get("h1").contains("All Courses").should("be.visible");
  });

  it("fetch href attr for tabs", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get("#opentab").then(($el) => {
      const url = $el.prop("href");
      cy.log("tab url: ", url);
      cy.visit(url);

      // new tab
      //cy.contains("Complete Test Automation Bundle").should("be.visible");
      //cy.get('.dynamic-button.btn.btn-default.btn-lg.btn-enroll').click()

      // same window
      cy.url().should("include", "/courses");
      cy.get("h1").contains("All Courses").should("be.visible");
    });
  });

  it("fetch href attr for tabs and check status code", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get(".fa-facebook-square")
      .eq(0)
      .scrollIntoView()
      .then(($el) => {
        const url = $el.prop("href");

        cy.request({
          url: url,
        }).then((res) => {
          expect(res.status).to.equal(200);
        });
      });
  });

  it.only("fetch src attr and check status code", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.iframe("#courses-iframe")
      .find('[alt="course image"]')
      .each(($el) => {
        const url = $el.prop("src");

        cy.request({
          url: url,
        }).then((res) => {
          expect(res.status).to.equal(200);
        });
      });
  });

  it(" check 3rd party social-media link status code", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.scrollTo("bottom");
    cy.get(".dynamic-link-icon").each(($el) => {
      const url = $el.prop("href");

      cy.request({
        url: url,
      }).then((res) => {
        expect(res.status).to.equal(200);
      });
    });
  });

  it("handling redirects", () => {
    // create a single stub we will use
    // const stub = cy.stub().as('open')
    // cy.on('window:before:load', (win) => {
    //     cy.stub(win, 'open').callsFake(stub)
    // })

    // cy.visit('https://courses.letskodeit.com/practice', {
    //     onBeforeLoad(win){
    //         cy.stub(win, 'open').as('redirect')
    //     }
    // })

    cy.visit("https://courses.letskodeit.com/practice");
    cy.window().then((win) => {
      cy.spy(win, "open").as("open");
    });

    cy.get("#opentab").then(($el) => {
      cy.wrap($el).click();
    });

    cy.window().its("open").should("be.called");
    cy.get("@open").should("have.been.calledOnce");

    // cy.get('@redirect')
    //     .then(() => {
    //         cy.contains('All Courses').should('be.visible');
    //         cy.get('.dynamic-heading').contains('JavaScript for beginners').click()
    //     })
  });
});
