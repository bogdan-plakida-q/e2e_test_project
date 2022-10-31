import {
    Given
} from "@badeball/cypress-cucumber-preprocessor";

Given("User open login page and login with valid data", () => {
    cy.login();
});