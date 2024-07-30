import Global from "./Global";

class ProductInforPage {
    elements = { 
        headerLink: () => cy.getByTestId('nav-store-link')
        .should('have.text', 'Store of Excellence'),  
        ///lavels to verify page        
        //subtitle --- mugs
        breadcrumb: () =>cy.get('.text-lg')
        .should('have.text', 'Merch').should('be.visible'),
        //Title of product
        productTitle: () => cy.get('.mx-auto') /// Class 
        .should('have.text', 'Medusa Coffee Mug').should('be.visible'),
        //Product description -- TODO -- need to be taking from Desc.
        productDesc: () => cy.getByTestId('product-description')
        .should('have.text',
             '').should('be.visible'),
        //Check add btn exists
        AddButtonExists: () => cy.getByTestId('mobile-cart-button').should('be.visible'),
        //Add the item to basket
        ClickAddItemToBasket: () => cy.getByTestId('mobile-cart-button').click()
    };    
}
export default new ProductInforPage();