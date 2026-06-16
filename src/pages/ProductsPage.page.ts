import { Page } from '@playwright/test'

export class ProductsPage {
    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }

    async addToCart(productName: string) {
        await this.page.locator('.inventory_item')
        .filter({ hasText: productName })
        .getByRole('button', { name: 'Add to cart '})
        .click()
    }

    async goToCart() {
        await this.page.locator('.shopping_cart_link')
        .click()
    }
}