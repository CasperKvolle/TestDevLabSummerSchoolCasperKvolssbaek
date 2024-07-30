import Login from "../pageElements/Login";
import Home from "../pageElements/Home";
import Global from "../pageElements/Global";
import Registration from "../pageElements/Registration";


Cypress.Commands.add('login', (email, password) => {
    cy.visit('/');
    cy.get('h1').should('have.text', 'Welcome back');   
    Login.elements.emailInput().type(email);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton();
    Home.elements.headerLink(); 
})
Cypress.Commands.add('reg_new_user', (firstName, lastname, email, password) => {
    cy.visit('/'); 
    cy.get('[data-testid="register-button"]').click()
    Registration.elements.firstNameInput().type(firstName);
    Registration.elements.lastNameInput().type(lastname);
    Registration.elements.emailInput().type(email);
    Registration.elements.passwordInput().type(password);
    Registration.elements.CreateUser_JoinButton();

})

//Dashboard Home
Cypress.Commands.add('dashboard_profile', () => {
    Global.elements.sideBarBurger().click();
    Global.elements.accountIcon()
})
//Dashboard Home
Cypress.Commands.add('dashboard_home', () => {
    Global.elements.sideBarBurger().click();
    Global.navigateSideBar.openPage('Home');
    Global.elements.homeButton();
})
//Dashboard Store
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
//Todo
// This comman cleans out the basket from previus order to be sure the test data is correct
Cypress.Commands.add('clean_Basket', () => {
    Global.elements.sideBarBurger().click();
    Global.navigateSideBar.openPage('Cart');
    Global.elements.cartButton();
});
// -- Scroll to Button of Page --
Cypress.Commands.add('ScrollToButtomOfPage', () => {
    cy.scrollTo('bottom');
});
// -- This is a dual command --
Cypress.Commands.add('getByTestId', (id) => {
    cy.get(`[data-testid=${id}]`);
});
