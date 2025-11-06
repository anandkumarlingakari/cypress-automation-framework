Feature: Login feature

  Background: Open browser
    Given I open the url

  
  Scenario: Check valid login
    When I enter username
    And I enter password
    Then User clicks login button
    Then I should see dashboard

  
  Scenario: Check login with data args
    When I type username as "Admin"
    And I type password as "admin123"
    Then User clicks login button
    Then I should see "Dashboard"

  
  Scenario Outline: Check login with different sets of data
    When I type username as "<username>"
    And I type password as "<password>"
    Then User clicks login button
    Then I should see textlabel "<message>"

    Examples:
      | username | password | message             |
      | Admin    | admin123 | Dashboard           |
      | Admin    | admin124 | Invalid credentials |
      | Admin123 | admin123 | Invalid credentials |
      | Admin    | 12233    | Invalid credentials |

  
  Scenario: Check datatable
    When I enter username and password
      | username | password |
      | Admin    | admin123 |
    Then User clicks login button
    Then I should see textlabel "dashboard"