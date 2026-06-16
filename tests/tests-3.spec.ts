import { expect, test } from '../src/fixtures/Base'

test('using fixtures', async ({ loginPage, productsPage, cartPage, checkoutInformationPage, orderInformationPage, orderConfirmationPage }) => {
    await loginPage.navigateTo()
    await loginPage.login('standard_user', 'secret_sauce')

    await productsPage.addToCart('Sauce Labs Bolt T-Shirt')
    await productsPage.goToCart()

    await cartPage.goToCheckout()

    await checkoutInformationPage.fillInformation('User', 'Fixture', '160626')
    await checkoutInformationPage.goToOrderPage()

    await orderInformationPage.placeOrder()
    
    await orderConfirmationPage.confirmOrder()
})