Feature: Dashboard

  Scenario: Switch between the companies
    Given User open login page and login with valid data
    Then User should switch to "codefresh-v2-e2e-playground-dummy" company
    And User should switch to "codefresh-v2-e2e-managed-runtime-dummy" company