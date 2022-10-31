// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from '../pageObjects/LoginPage';

const creds = Cypress.config();

Cypress.Commands.add('login', (userName = creds.username, password = creds.password) => {
    cy.visit(creds.baseUrl);
    cy.url().should('include', '/');
    loginPage.elements.codeFreshLoginButton().click();
    loginPage.elements.userNameInput().type(userName);
    loginPage.elements.passwordInput().type(password);
    loginPage.elements.signInButton().click();
    loginPage.elements.cancelSelectProvider().click();
    cy.url().should('include', '/projects');
});
