class Home {
    elements = { 

        headerLink: () => cy.getByTestId('nav-store-link')
        .should('have.text', 'Store of Excellence'),
        
        productWrapper: () => cygetByTestId('product-wrapper').should('have.length', 4)
       

    }



}

export default new Home();