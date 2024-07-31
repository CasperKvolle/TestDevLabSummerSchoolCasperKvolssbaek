import Global from "./Global";

class Account {
  elements = {
    profile_visible: () => cy.getByTestId("profile-link").should("be.visible"),
    profile_click: () =>
      cy.get(':nth-child(1) > [data-testid="profile-link"]').click(),

    //Account - Profile
    profile_delete_click: () => cy.get(".gap-2 > .transition-fg").click(),
    profile_delete_popup_visible: () =>
      cy.getByTestId("delete-button").should("be.visible"),
    profile_delete_popup_click: () => cy.getByTestId("delete-button").click(),
  };
}
export default new Account();
