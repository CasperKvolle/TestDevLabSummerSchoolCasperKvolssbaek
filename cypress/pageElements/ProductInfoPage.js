import Global from "./Global";

class ProductInforPage {
    elements = { 
        headerLink: () => cy.getByTestId('nav-store-link')
        .should('have.text', 'Store of Excellence'),  
        ///lavels to verify page 
        //cy.get('.text-lg')
        //subtitle --- mugs
        breadcrumb: () =>cy.get('.text-lg')
        .should('have.text', 'Merch').should('be.visible'),

        //Title of product
        productTitle: () => cy.get('.mx-auto')
        .should('have.text', 'Medusa Coffee Mug').should('be.visible'),

        //Product description
        productDesc: () => cy.getByTestId('product-description')
        .should('have.text',
             '').should('be.visible'),
        //cy.get('[data-testid="product-description"]')
        ///Page drop


        


      
    };    
    
}
export default new ProductInforPage();