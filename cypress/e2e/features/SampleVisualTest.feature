Feature: Internet herokuapp Visual Test


   Scenario: check Internet herokuapp visual test
      Given I open Internet herokuapp page
      And I capture snapshot and compare "homepage"
      When I click on "Disappearing Elements"
      And I capture snapshot and compare "Elements page"
      And I press button "Home"
      And I capture snapshot and compare "home page"