import DashBoard from "../../pageElements/DashBoard";
import ProductInforPage from "../../pageElements/ProductInfoPage";
import Cart from "../../pageElements/Cart";
import ShippingAdress from "../../pageElements/ShippingAdress";
import ConfirmedOrder from "../../pageElements/ConfirmedOrder";

const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const email = `testname${id}` + "@test99.com";
const password = "Denver2341!!";
const firstName = "Casper";
const lastName = "Langkilde";
const address = "Stabu Iela";
const postalCode = "LV-1010";
const city = "Riga";
const phone = +"37128015080";

describe("Flow - creating a user and placinging an order in shop.", () => {
  it("Create new user  - Succesful", () => {
    cy.regNewUser(firstName, lastName, email, password);
  });
  it("Login with newly create user  - Succesful", () => {
    cy.login(email, password);
  });
  it("Flow starts with creating an order and logging out afterwards", () => {
    cy.login(email, password);
    cy.dashboard_store();
    DashBoard.elements.headerLink();
    DashBoard.elements.pageTitle();
    DashBoard.elements.pickItemAndGoToSinglePage();
    ProductInforPage.elements.headerLink();
    ProductInforPage.elements.breadcrumb();
    ProductInforPage.elements.AddButtonExists();
    // Click on button for adding item to basket
    ProductInforPage.elements.ClickAddItemToBasket();

    //Cart
    Cart.elements.cart_Icon_Exist();
    // Add item to basket
    Cart.elements.cart_Icon_Click();

    Cart.elements.headerLink();
    Cart.elements.subtitle_1();
    Cart.elements.productTitle();
    Cart.elements.productVariant();
    Cart.elements.productPrice();

    Cart.elements.subtitle_2();

    Cart.elements.subTotal();
    Cart.elements.subTotalPrice();

    Cart.elements.subShipping();
    Cart.elements.subShippingPrice();

    Cart.elements.subTaxes();
    Cart.elements.subTaxesPrice();

    cy.ScrollToButtomOfPage();

    Cart.elements.Checkout_Btn_Exists();
    Cart.elements.Checkout_Btn_Click();

    ///Shipping Adress
    ShippingAdress.elements.backLabel();
    ShippingAdress.elements.title();

    ShippingAdress.elements.inputFirstName().type(firstName);
    ShippingAdress.elements.inputLastName().type(lastName),
      ShippingAdress.elements.inputAddress().type(address),
      ShippingAdress.elements.inputPostalCode().type(postalCode);
    ShippingAdress.elements.inputCity().type(city),
      ShippingAdress.elements.selectCanada();
    ShippingAdress.elements.inputPhone().type(phone);

    //navigates to Delivery - section and validates
    ShippingAdress.elements.checkout_visible();
    ShippingAdress.elements.checkout_click();

    ShippingAdress.elements.title();
    ShippingAdress.elements.title_FakeEx_Express();
    // To do - checking the value is correct.
    ShippingAdress.elements.payment_visible();
    ShippingAdress.elements.payment_click();
    //label and payment details
    ShippingAdress.elements.title_payment();
    //TODO - check the test payment is filled out correct
    ShippingAdress.elements.contToReview_visible();
    ShippingAdress.elements.contToReview_click();
    //Review
    ShippingAdress.elements.title_review();
    ShippingAdress.elements.Review_full();
    // Submit order
    ShippingAdress.elements.placeOrder_visible();
    ShippingAdress.elements.placeOrder_click();

    //Page of confirmed

    cy.ScrollToTopOfPage();
    ConfirmedOrder.elements.headerLink();
    ConfirmedOrder.elements.Validate_UserEmail(email);

    ///Log Out
  });
});
