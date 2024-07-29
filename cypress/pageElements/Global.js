// Class that contain overall functions

class Global {
    elements = { 
        sideBarBurger: () => cy.getBytestId('nav-menu-buttom'),
        sidebarLink : (pageName) => 
            cy.getBytestId('nav-menu-popup').contains('a', pageName),

    };
    navigateSideBar = {
        openPage: (pageName) => {
            this.elements.sideBarBurger.click();
            this.elements.sideBarLinks(pageName);
        }
    }
}

export default new Global();