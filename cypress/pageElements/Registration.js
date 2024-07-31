import Global from "./Global";
//cy.regNewUser(firstName, lastname, email, password)
class Registration {
    elements = { 
        firstNameInput: () => cy.getByTestId('first-name-input').should('be.visible'),
        lastNameInput: () => cy.getByTestId('last-name-input').should('be.visible'),
        emailInput: () => cy.getByTestId('email-input'),
        passwordInput: () => cy.getByTestId('password-input').should('be.visible'),
        CreateUser_JoinButton: () => cy.getByTestId('register-button').click()

    };
    fillFirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName);
    }    
    fillEmail(email){
        this.elements.passwordInput().clear().type(email);
    }
    fillPassword(password){
        this.elements.passwordInput().clear().type(password);
    }    
}
export default new Registration();