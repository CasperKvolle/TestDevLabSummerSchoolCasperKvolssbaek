import Global from "./Global";

class ConfirmedOrder {
    elements = { 

        headerLink: () => cy.getByTestId('nav-store-link').should('have.text', 'Store of Excellence'),  
        Confirmation_headline: () => cy.get('.h1-core')
        .should('have.text', "Thank you! Your order was placed successfully.") ,
        Validate_UserEmail:(email) =>  cy.get('[data-testid="order-email"]').should('have.text', email)
    };    
   
}
export default new ConfirmedOrder();