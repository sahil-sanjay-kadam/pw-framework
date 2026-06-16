import { Locator, Page } from '@playwright/test'

export class CartPage {
    private readonly page: Page
    private readonly checkoutButton: Locator
    private readonly continueShoppingButton: Locator

    constructor(page: Page) {
        this.page = page
        this.checkoutButton = page.getByRole('button', {name: 'Checkout'})
        this.continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'})
    }

    async goToCheckout() {
        await this.checkoutButton.click()
    }
    
    async goToProductsPage() {
        await this.continueShoppingButton.click()
    }
}