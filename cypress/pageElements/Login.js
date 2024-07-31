import Global from "./Global";

class Login {
  elements = {
    emailInput: () => cy.getByTestId("email-input"),
    passwordInput: () => cy.getByTestId("password-input").should("be.visible"),
    signInButton: () => cy.getByTestId("sign-in-button").click(),
  };
  fillEmail(email) {
    this.elements.passwordInput().clear().type(email);
  }
  fillPassword(password) {
    this.elements.passwordInput().clear().type(password);
  }
}
export default new Login();
