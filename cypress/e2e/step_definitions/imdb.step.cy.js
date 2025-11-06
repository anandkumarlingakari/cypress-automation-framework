import { loginPage } from '../pages/IMDB_PageObjects.js'
import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

Given('I open IMDB homepage', () => {
    cy.visit('https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250');
});
Given('I open Internet herokuapp page', () => {
    cy.visit('https://the-internet.herokuapp.com/');
});
When('I SignIn as user', () => {
    loginPage.signIn();
});

When('I click on Sign In', () => {
    loginPage.clicksignInlink();
});


  When('I press button Sign in with IMDb', () => {
  loginPage.signinWithIMDB();
});

//When('I select random sortBy Alphabetical', () => {
  //   loginPage.alphabeticalorder();
  // Wait for the dropdown to appear and interact with it
//});

When("I select random sortBy Alphabetical", () => {
    loginPage.alphabeticalorderlink();
});

When('I click random link', () => {
        
   loginPage.randomlink();

});


Then('The account name should be displayed', () => {
    loginPage.verifyAccountNameDisplayed()
})

Then('I select random sortBy value', () => {
    loginPage.selectRandomSortBy();
})
//Then('I click random link', () => {
  //  loginPage.clickRandomTitle();
//})
Then('I should see Sign in text displayed', () => {
       
   loginPage.signInVerification();
})
