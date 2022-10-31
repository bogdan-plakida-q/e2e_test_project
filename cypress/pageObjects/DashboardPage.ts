class DashboardPage {
    elements = {
        welcomeMessage: () => cy.get(".pipelines-list__welcome-header"),
        companiesList: () => cy.get(".cf-account-name"),
        userButton: () => cy.get(".account-name")
    };
}

module.exports = new DashboardPage();
