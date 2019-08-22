Feature: create Systems user
  Scenario: Do create systems user
    Given I am in "http://localhost:3001/candidates/allCandidates"
    When I click on add candidate
    And I enter first name "candAutoFN"
    And I enter last name "candAutoLN"
    And I enter email "candauto@candauto.com"
    And I enter mobile number "123456789"
    And I enter work experience "this is my work experience"
    And I select profile tag "Junior"
    And I click on add applicant button
    Then I get a success dialog box