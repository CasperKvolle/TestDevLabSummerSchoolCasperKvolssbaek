// https://tdlschool.atlassian.net/browse/TSS22N-173

import Global from "../../pageElements/Global";
import DashBoard from "../../pageElements/DashBoard";
import ProductInforPage from  "../../pageElements/ProductInfoPage";
// for burger icon

it('log in to the webstore - Succesful', () => {
    const email = 'casper@kvolle.com';
    const password = 'Denver2341!!'
    cy.login(email, password)
    cy.dashboard_store() 
    //validates the page is visuable 
    DashBoard.elements.headerLink()
    DashBoard.elements.pageTitle()
    DashBoard.elements.pickItemAndGoToSinglePage() 
    
    // DashBoard.elements.viewItemsButtom(); ???? 
    // Different view - not sunshine scenario

    //Single Product  -- in our scenario Coffee mug if else sentence for rest?

    ProductInforPage.elements.headerLink()
    ProductInforPage.elements.breadcrumb()
    // ProductInforPage.elements.productTitle()


   

    //#region 
    

    // cy.contains('[Price Low -> High]').click()    // Click on first el containing 'Welcome'
    // cy.get('button[role="combobox"]').click();
    // cy.trigger('[Price Low -> High]').click()
    // cy.get('select').select(1) // Select the 'user-1' option
    // cy.get('button[role="combobox"]').should('contains', 'Price: Low -> High').click();
    // cy.get('button[role="combobox"]').trigger('keydown').click();
    // cy.get('button[role="combobox"]').type('downArrow')    
    // cy.get('button[role="combobox"]').type('enter'); 
    // cy.get('button[role="combobox"]').type('[Price Low -> High]',1) // Select the 'user-1' option      
    // cy.get('button[role="combobox"]').type('downarrow')
    // cy.get('button[role="combobox"]').type('downarrow')
    // cy.get('button[role="combobox"]').type('enter');
    // cy.get('button[role="combobox"]').type('{downarrow}').click();
    // cy.get('button[role="combobox"]').type('{enter}');
    
      //#endregion
    

    // cy.dashboard_home() 
    // cy.dashboard_logout()   
});