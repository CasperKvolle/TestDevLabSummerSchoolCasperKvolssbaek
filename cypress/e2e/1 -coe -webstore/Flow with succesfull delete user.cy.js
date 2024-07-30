// https://tdlschool.atlassian.net/browse/TSS22N-173

import Account from "../../pageElements/Account";

it('log in to the webstore - and delete user with email casper@kvolle.com', () => {
    const email = 'casper@kvolle.com';
    const password = 'Denver2341!!'

    
    cy.login(email, password)
    cy.dashboard_profile()
    Account.elements.profile
    Account.elements.profile_click()

    // cy.scrollTo('bottom');
    cy.ScrollToButtomOfPage()
    
    cy.dashboard_logout()   
});