import Global from "./Global";

class ShippingAdress {
    elements = { 

        // Validates that top labels exist
       
        backLabel: () => cy.getByTestId('back-to-cart-link'),

        //cy.get(':nth-child(1) > .bg-white > .mb-6 > .font-sans')
        title: () => cy.get(':nth-child(1) > .bg-white > .mb-6 > .font-sans')
        .should('have.text', 'Shipping Address'),    

        firstNameInput: () => cy.getByTestId('shipping-first-name-input').should('be.visible'),
        lastNameInput: () => cy.getByTestId('shipping-last-name-input').should('be.visible'),
        addressInput: () => cy.getByTestId('shipping-address-input').should('be.visible'),
        companyInput: () => cy.getByTestId('shipping-company-input').should('be.visible'),
        postalCodeInput: () => cy.getByTestId('shipping-postal-code-input').should('be.visible'),
        cityInput: () => cy.getByTestId('shipping-city-input').should('be.visible'),
        selectCanada:  () => cy.getByTestId('shipping-country-select').select('ca'),
        stateProvinceInput: () => cy.getByTestId('shipping-province-input').should('be.visible'),
    };
    fillfirstName(firstName){
        this.elements.firstNameInput().clear().type(firstName);
    }
    fillEmail(email){
        this.elements.passwordInput().clear().type(email);
    }
    fillEmail(email){
        this.elements.passwordInput().clear().type(email);
    }
    fillEmail(email){
        this.elements.passwordInput().clear().type(email);
    }
    fillEmail(email){
        this.elements.passwordInput().clear().type(email);
    }

   
}
export default new ShippingAdress();