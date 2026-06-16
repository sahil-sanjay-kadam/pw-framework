import { test } from '@playwright/test'
import { LoginPage } from '../src/pages/LoginPage.page'
import { ProductsPage } from '../src/pages/ProductsPage.page'
import { CartPage } from '../src/pages/CartPage.page'
import { CheckouInformationPage } from '../src/pages/CheckoutInformationPage.page'
import { OrderInformationPage } from '../src/pages/OrderInformation.page'
import { OrderConfirmationPage } from '../src/pages/OrderConfirmationPage.page'

let loginPage: LoginPage
let productsPage: ProductsPage
let cartPage: CartPage
let checkoutInformationPage: CheckouInformationPage
let orderInformationPage: OrderInformationPage
let orderConfirmationPage: OrderConfirmationPage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    productsPage = new ProductsPage(page)
    cartPage = new CartPage(page)
    checkoutInformationPage = new CheckouInformationPage(page)
    orderInformationPage = new OrderInformationPage(page)
    orderConfirmationPage = new OrderConfirmationPage(page)
    await page.goto('')
})

test('should successfully complete the checkout journey for an item in the catalog', async ({ page }) => {
    // 1. login POM
    await loginPage.login('standard_user', 'secret_sauce')
    // 2. product POM
    await productsPage.addToCart('Sauce Labs Bolt T-Shirt')
    await productsPage.goToCart()
    // 3. cart POM
    await cartPage.goToCheckout()
    // 4. checkout POM
    await checkoutInformationPage.fillInformation('Demo', 'User', '202606')
    await checkoutInformationPage.goToOrderPage()
    // 5. order information POM
    await orderInformationPage.placeOrder()
    // 6. order confirmation POM
    await orderConfirmationPage.confirmOrder()
})