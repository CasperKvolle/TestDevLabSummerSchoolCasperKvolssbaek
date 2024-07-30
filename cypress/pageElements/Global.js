// Class that contain overall functions

class Global {
    elements = { 
        sideBarBurger: () => cy.getByTestId('nav-menu-button'),
        sideBarLinks : (pageName) => 
            cy.getByTestId('nav-menu-popup'),
        // Buttons in dashboard
        homeButton: () => cy.getByTestId('home-link').click(),  
        storeButton: () => cy.getByTestId('store-link').click(),  
        signOutButton: () => cy.getByTestId('logout-button').click(),         
    };
    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger();
            this.elements.sideBarLinks(pageName).click();
        }
    }
}
export default new Global();