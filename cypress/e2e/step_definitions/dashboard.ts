import {
    Then
} from "@badeball/cypress-cucumber-preprocessor";

const dashboardPage = require("../../pageObjects/DashboardPage");

Then("User should see {string} welcome message", (welcomeMessage: string) => {
    dashboardPage.elements.welcomeMessage().contains(welcomeMessage);
});

Then("User should switch to {string} company", (companyName: string) => {
    dashboardPage.elements.userButton().click();
    dashboardPage.elements.companiesList().contains(companyName).click();
    dashboardPage.elements.userButton().should("contain", companyName);
});
