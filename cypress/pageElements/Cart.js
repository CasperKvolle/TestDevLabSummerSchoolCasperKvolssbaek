import Global from "./Global";

class Cart {
  elements = {
    //validate on cart side that info is :
    // - Cart empty - Icon is visuable - TODO
    labelForEmtyCart: () => cy.get(".font-medium").should("be.visible"),

    //blue icon for mobile
    cart_Icon_Exist: () => cy.get(".bg-ui-tag-blue-bg").should("be.visible"),
    cart_Icon_Click: () => cy.get(".bg-ui-tag-blue-bg").click(),

    //Validate that header is log and main object to confirm the order
    /// Main title --- must be moved to Global.cs
    headerLink: () =>
      cy
        .getByTestId("nav-store-link")
        .should("have.text", "Store of Excellence"),
    // subtitle
    subtitle_1: () => cy.get(".pb-3 > .font-sans").should("have.text", "Cart"),

    //Validate-text item : Mug
    //Title:  Medusa Coffee Mug Variant: One Size
    productTitle: () =>
      cy.getByTestId("product-title").should("have.text", "Medusa Coffee Mug"),

    productVariant: () =>
      cy
        .getByTestId("product-variant")
        .should("have.text", "Variant: One Size"),

    productPrice: () =>
      cy.getByTestId("product-price").should("have.text", "$12.00$12.00"),

    subtitle_2: () =>
      cy.get(".gap-y-4 > .font-medium").should("have.text", "Summary"),
    // Validation that item Summery is ok - mug
    //Price
    subTotal: () =>
      cy
        .get(":nth-child(4) > .flex-col > :nth-child(1) > .flex")
        .should("have.text", "Subtotal"),
    subTotalPrice: () =>
      cy
        .get(
          ':nth-child(4) > .flex-col > :nth-child(1) > [data-testid="cart-subtotal"]',
        )
        .should("have.text", "$12.00"),

    //Shipping
    subShipping: () =>
      cy
        .get(":nth-child(4) > .flex-col > :nth-child(2) > :nth-child(1)")
        .should("have.text", "Shipping"),
    subShippingPrice: () =>
      cy.get('[data-testid="cart-shipping"]').should("have.text", "$0.00"),

    ///Validate taxes
    subTaxes: () =>
      cy.get(".flex-col > :nth-child(3) > .flex").should("have.text", "Taxes"),
    subTaxesPrice: () =>
      cy.get('[data-testid="cart-taxes"]').should("have.text", "$0.00"),

    ///Go to check out
    Checkout_Btn_Exists: () =>
      cy.getByTestId("checkout-button").should("be.visible"),
    Checkout_Btn_Click: () => cy.getByTestId("checkout-button").click(),
  };
}
export default new Cart();
