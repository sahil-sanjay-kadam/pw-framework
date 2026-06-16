import { Locator, Page } from '@playwright/test'

export class OrderInformationPage {
    private readonly page: Page
    private readonly placeOrderButton: Locator

    constructor(page: Page) {
        this.page = page
        this.placeOrderButton = page.getByRole('button', {name: 'Finish'})
    }

    async placeOrder() {
        await this.placeOrderButton.click()
    }
}