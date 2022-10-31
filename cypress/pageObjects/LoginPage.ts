class LoginPage {
  elements = {
    codeFreshLoginButton: () => cy.get(".js-btn-login-codefresh"),
    userNameInput: () => cy.get("input[name='userName']"),
    passwordInput: () => cy.get("input[type='password']"),
    signInButton: () => cy.get("button[type='submit']"),
    cancelSelectProvider: () => cy.get("#create-pipeline-modal__footer__cancel-btn")
  };
}

module.exports = new LoginPage();
