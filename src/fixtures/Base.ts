import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.page'
import { ProductsPage } from '../pages/ProductsPage.page'
import { CartPage } from '../pages/CartPage.page'
import { CheckouInformationPage } from '../pages/CheckoutInformationPage.page'
import { OrderInformationPage } from '../pages/OrderInformation.page'
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage.page'

export type PageFixtures = {
    loginPage: LoginPage,
    productsPage: ProductsPage,
    cartPage: CartPage,
    checkoutInformationPage: CheckouInformationPage,
    orderInformationPage: OrderInformationPage,
    orderConfirmationPage: OrderConfirmationPage
}

export const test = base.extend<PageFixtures>({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page)

        await use(loginPage)
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page)

        await use(productsPage)
    },

    cartPage: async ({ page }, use) => {
        const cartPage = new CartPage(page)

        await use(cartPage)
    },

    checkoutInformationPage: async ({ page }, use) => {
        const checkoutInformationPage = new CheckouInformationPage(page)

        await use(checkoutInformationPage)
    },

    orderInformationPage: async ({ page }, use) => {
        const orderInformationPage = new OrderInformationPage(page)

        await use(orderInformationPage)
    },

    orderConfirmationPage: async ({ page }, use) => {
        const orderConfirmationPage = new OrderConfirmationPage(page)

        await use(orderConfirmationPage)
    }
})

export { expect } from '@playwright/test'