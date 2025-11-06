const inputEmail = '#ap_email'
const inputPassword = '#ap_password'
const buttonSubmit = '//input[@id=\'signInSubmit\']'
const label_AccountName = '//span[contains(@class,\'imdb-header__account-toggle--logged-in\')]'
const dropdown_sortyBy_options = '#lister-sort-by-options > option'
const dropdown_sortyBy = '#lister-sort-by-options'
const link_title = '.lister-list a:nth-child(1)'

export const loginPage = {
  enterEmail (args) {
    cy.get(inputEmail)
      .clear()
      .type(args)
  },
  enterPassword (args) {
    cy.get(inputPassword)
      .clear()
      .type(args)
  },
  clickSubmit () {
    cy.xpath(buttonSubmit)
      .click()
  },
  signIn () {
    cy.fixture('testdata').then((data) => {
      this.enterEmail(data.validemail)
      this.enterPassword(data.password)
      this.clickSubmit()
    })
  },
   randomlink() {
    cy.wait(10000); 
 cy.get('a.ipc-title-link-wrapper h3').then($elements => {
  const randomIndex = Math.floor(Math.random() * $elements.length);
  cy.wrap($elements[randomIndex]).click();
 })
  },
    
 alphabeticalorderlink() {
  cy.wait(10000); 
   cy.get('#sort-by-selector').select('Alphabetical');
   cy.wait(2000);
},

clicksignInlink() {
   cy.wait(10000);
  cy.get('div.sc-d42a4215-0.hcycrt.nav__userMenu a span').first().click();
  cy.wait(5000);
  cy.xpath('//div[@class="flex flex-col gap-xs"]//button//span').click();

},

signInVerification() {
   cy.get("div.a-box-inner.a-padding-extra-large h1")
        .should("be.visible")
    .and("contain.text", "Sign in");
},

signinWithIMDB() {
  cy.wait(5000);
  cy.get('div.mt-xxs a span.ipc-btn__text').first().click();
},


  verifyAccountNameDisplayed () {
    cy.fixture('testdata').then((data) => {
      cy.xpath(label_AccountName)
        .invoke('text')
        .should('contain', data.username)
    })
  },
  selectRandomSortBy () {
    //selectRandomDropdownValue(dropdown_sortyBy, dropdown_sortyBy_options)
  },
  clickRandomTitle () {
   // clickRandomElementByIndex(link_title)
  },
   }
  

