import Global from "../../pageElements/Global";
import Login from "../../pageElements/Login";
import Home from "../../pageElements/Home";

describe('login functionality', () => {    
    beforeEach(() => {
        cy.visit('/');
});


it('Open webstore page', () => {
    cy.get('h1').should('have.text', 'Welcome back');            
    });   


it('log in to the webstore', () => {
    Login.elements.emailInput().type('casper@kvolle.com');
    Login.elements.passwordInput().type('Denver2341!!');
    Login.elements.signInButton();
    Home.elements.headerLink();
    Home.elements.productWrapper();

    });
});

