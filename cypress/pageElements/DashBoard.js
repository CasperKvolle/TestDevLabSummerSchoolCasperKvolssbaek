import Global from "./Global";

class DashBoard {
    elements = { 
        // validated that the text on main site is visuala and correct display in default language for use in ENG.
        //// Main title --- must be moved to Globval.
        headerLink: () => cy.getByTestId('nav-store-link')
        .should('have.text', 'Store of Excellence'),
        //subtitle 
        pageTitle: () => cy.getByTestId('store-page-title')
        .should('have.text', 'All products'),
        //button  that change display of items        
        // viewItemsButtom: () =>  cy.getByTestId('table-view-btn').should('be.visiable'),
        //Clicking 
        // viewItemsButtom: () =>  cy.getByTestId('table-view-btn').click()

        //select first product
        //TO DO Function that takes random item 
        //IN : Count numbers of items 
        //OUT: Takes a random number of the list
        //Hard code for the Last element in the list - in this case the Coffee mug will be chosen.
        pickItemAndGoToSinglePage: () => cy.getByTestId('product-wrapper').last().click({force: true})       
    }
}
export default new DashBoard();