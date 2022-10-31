Feature: Login page

  Scenario: Login with valid data
    Given User open login page and login with valid data
    Then User should see "Welcome to your first Codefresh project" welcome message