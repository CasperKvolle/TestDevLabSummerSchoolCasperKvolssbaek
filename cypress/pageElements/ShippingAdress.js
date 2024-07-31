import Global from "./Global";

class ShippingAdress {
    elements = { 

        // Validates that top labels exist
        backLabel: () => cy.getByTestId('back-to-cart-link'),
        title: () => cy.get(':nth-child(1) > .bg-white > .mb-6 > .font-sans')
        .should('have.text', 'Shipping Address'),    

        inputFirstName: () => cy.getByTestId('shipping-first-name-input').should('be.visible'),
        inputLastName: () => cy.getByTestId('shipping-last-name-input').should('be.visible'),
        inputAddress: () => cy.getByTestId('shipping-address-input').should('be.visible'),
        inputCompany: () => cy.getByTestId('shipping-company-input').should('be.visible'),
        inputPostalCode: () => cy.getByTestId('shipping-postal-code-input').should('be.visible'),
        inputCity: () => cy.getByTestId('shipping-city-input').should('be.visible'),
        selectCanada:  () => cy.getByTestId('shipping-country-select').select('lv'),
        inputStateProvince: () => cy.getByTestId('shipping-province-input').should('be.visible'),
        inputPhone: () => cy.getByTestId('shipping-phone-input').should('be.visible'),

        //Shipping - Delivery section 
        checkout_visible: () => cy.getByTestId('submit-address-button').should('be.visible'),
        checkout_click:  () => cy.getByTestId('submit-address-button').click(),
        //Label and option for Delivery
        title: () => cy.get(':nth-child(2) > .bg-white > .mb-6 > .font-sans')
        .should('have.text', 'Delivery'), 
        title_FakeEx_Standard: () => cy.getByTestId('delivery-option-radio').contains('span', 'FakeEx Standard').click(),
        title_FakeEx_Express: () => cy.getByTestId('delivery-option-radio').contains('span', 'FakeEx Express').click(),

        // Cont_Payment
        payment_visible: () => cy.getByTestId('submit-delivery-option-button').should('be.visible'),
        payment_click:  () => cy.getByTestId('submit-delivery-option-button').click(),
       
        // Label and payment methods
        title_payment: () => cy.get(':nth-child(3) > .bg-white > .mb-6 > .font-sans')
        .should('have.text', 'Payment'), 
        //verify that rdb is checked TODO 
        contToReview_visible: () => cy.getByTestId('submit-payment-button').should('be.visible'),
        contToReview_click:  () => cy.getByTestId('submit-payment-button').click(),

        //Review labels and full text 
        title_review: () => cy.get(':nth-child(4) > .bg-white > .mb-6 > .font-sans')
        .should('have.text', 'Review'), 

        Review_full: () => cy.get('.items-start > .w-full > .font-normal')
        .should('have.text', "By clicking the Place Order button, you confirm that you have read, understand and accept our Terms of Use, Terms of Sale and Returns Policy and acknowledge that you have read Medusa Store's Privacy Policy.") ,
        
        placeOrder_visible: () => cy.getByTestId('submit-order-button').should('be.visible'),
        placeOrder_click:  () => cy.getByTestId('submit-order-button').click(),


       

        
                
   
        



        

    };


    fillfirstName(firstName){
        this.elements.inputFirstName().clear().type(firstName);
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