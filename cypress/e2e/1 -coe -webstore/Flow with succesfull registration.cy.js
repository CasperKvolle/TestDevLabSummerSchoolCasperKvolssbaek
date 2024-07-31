// https://tdlschool.atlassian.net/browse/TSS22N-173

import Account from "../../pageElements/Account";

it('log in to the webstore - and delete user with email casper@kvolle.com', () => {
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const email = `testname${id}` + '@test99.com'
    // const email = 'testname${id}@test99.com';
    const password = 'Denver2341!!'

    const firstName = 'Casper';
    const lastname = 'Langkilde';
    
    cy.regNewUser(firstName, lastname, email, password)

    cy.dashboard_profile()
    Account.elements.profile
    Account.elements.profile_click()

    cy.ScrollToButtomOfPage()
    Account.elements.profile_delete_click()

    //Pop delete
    Account.elements.profile_delete_popup_visible()
    Account.elements.profile_delete_popup_click()

    //Verify that user is deleted
    cy.login(email, password)


   


});