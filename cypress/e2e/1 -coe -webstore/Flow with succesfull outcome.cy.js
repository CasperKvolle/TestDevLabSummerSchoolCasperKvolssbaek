// https://tdlschool.atlassian.net/browse/TSS22N-173

import Global from "../../pageElements/Global";
import DashBoard from "../../pageElements/DashBoard";
import ProductInforPage from  "../../pageElements/ProductInfoPage";
import Cart from  "../../pageElements/Cart";
import ShippingAdress from "../../pageElements/ShippingAdress";
// for burger icon

it('log in to the webstore - Succesful', () => {
    const email = 'casper@kvolle.com';
    const password = 'Denver2341!!'

    const firstName = 'Casper';
    const lastname = 'Langkilde';
    const address = 'Stabu Iela';
    const postalCode = 'LV-1010'
    const city = 'Riga';

    cy.login(email, password)

    // cy.clean_Basket()
    
    // if(Cart.labelForEmtyCart == true)
    // {
    //    cy.dashboard_store()
    // }
    // else
    // {
    //   // cy.dashboard_store()
    // }   
    cy.dashboard_store() 
    // //validates the page is visuable 
    DashBoard.elements.headerLink()
    DashBoard.elements.pageTitle()
    DashBoard.elements.pickItemAndGoToSinglePage() 
    
    //  // // DashBoard.elements.viewItemsButtom(); ???? 
    // // // Different view - not sunshine scenario

    //Single Product  -- in our scenario Coffee mug if else sentence for rest?

    ProductInforPage.elements.headerLink()
    ProductInforPage.elements.breadcrumb()
    // ProductInforPage.elements.productTitle()
    //  //ToDo - Check basket before adding that this is empty 

    // // //Checking if buttn exists
    ProductInforPage.elements.AddButtonExists()
    //  // // Click on button for adding item to basket
    ProductInforPage.elements.ClickAddItemToBasket()

    // // // //Cart
    Cart.elements.cart_Icon_Exist()
    // // // Add item to basket
    Cart.elements.cart_Icon_Click()

    Cart.elements.headerLink()
    Cart.elements.subtitle_1()
    Cart.elements.productTitle()
    Cart.elements.productVariant()
    Cart.elements.productPrice()
    
    Cart.elements.subtitle_2()

    Cart.elements.subTotal()
    Cart.elements.subTotalPrice()

    Cart.elements.subShipping()
    Cart.elements.subShippingPrice()

    Cart.elements.subTaxes()
    Cart.elements.subTaxesPrice()

    cy.scrollTo('bottom');

    Cart.elements.Checkout_Btn_Exists()
    Cart.elements.Checkout_Btn_Click()

    ///Shipping Adress
    ShippingAdress.elements.backLabel()
    // ShippingAdress.elements.title()   
 
  
    ShippingAdress.elements.firstNameInput().type(firstName)
    // ShippingAdress.elements.lastNameInput().type(lastname),
    // ShippingAdress.elements.addressInput().type(address),
    // ShippingAdress.elements.postalCodeInput().type(postalCode)
    // ShippingAdress.elements.cityInput().type(city),
    // ShippingAdress.elements.selectCanada()

    
    // cy.dashboard_home() 
    //  cy.dashboard_logout()   
});