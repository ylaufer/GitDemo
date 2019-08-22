Feature: login to Interviews
  Scenario: Do login
    Given I go to "http://localhost:3001/"
    When I enter username "rrhh@endava.com"
    And I enter password "123456"
    And I click on login
    Then I am able to login to homepage

    Scenario: Do not login
      Given I go to "http://localhost:3001/"
      When I enter username "rrhh@endava.com"
      And I enter password "fruta"
      And I click on login
      Then I am not able to login to homepage
