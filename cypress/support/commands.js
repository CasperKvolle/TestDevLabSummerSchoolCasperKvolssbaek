import Login from "../pageElements/Login";
import Home from "../pageElements/Home";
import Global from "../pageElements/Global";


Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Welcome back');   
    Login.elements.emailInput().type(email);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton();
    Home.elements.headerLink(); 
})
//Dashboard Home
Cypress.Commands.add('dashboard_home', () => {
    Global.elements.sideBarBurger().click();
    Global.navigateSideBar.openPage('Home');
    Global.elements.homeButton();
})

//Dashboard Home
Cypress.Commands.add('dashboard_store', () => {
    Global.elements.sideBarBurger().click();
    Global.navigateSideBar.openPage('Store');
    Global.elements.storeButton();
})

//Dashboard logout
Cypress.Commands.add('dashboard_logout', () => {
    Global.elements.sideBarBurger().click();
    Global.navigateSideBar.openPage('Log out');
    Global.elements.signOutButton();
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// -- This is a dual command --
Cypress.Commands.add('getByTestId', (id) => {
    cy.get(`[data-testid=${id}]`);
});