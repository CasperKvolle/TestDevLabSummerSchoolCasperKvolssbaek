import Global from "./Global";

class Login {
    elements = { 
        emailInput: () => cy.getByTestId('email-input'),
        passwordInput: () => cy.getByTestId('password-input').should('be.visible'),
        signInButton: () => cy.getByTestId('sign-in-button').click()
    }
}
export default new Login();