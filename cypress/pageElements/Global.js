// Class that contain overall functions

class Global {
    elements = { 
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarLinks : (pageName) => 
         cy.getByTestId('nav-menu-popup'),
        // Buttons in dashboard
        accountIcon: () => cy.getByTestId('nav-account-link').click(),
        homeButton: () => cy.getByTestId('home-link').click(),         
        cartButton: () => cy.getByTestId('cart-link').click(),
        storeButton: () => cy.getByTestId('store-link').click(),  
        signOutButton: () => cy.getByTestId('logout-button').click(),   
        
        ///Clean basket before shopping
        
    };
    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger();
            this.elements.sideBarLinks(pageName).click();
        }
    }
}
export default new Global();