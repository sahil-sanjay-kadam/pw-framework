import { Locator, Page} from '@playwright/test'
import { expect } from '@playwright/test'

export class OrderConfirmationPage {
    private readonly page: Page
    
    constructor(page: Page) {
        this.page = page
    }

    async confirmOrder() {
        await expect(this.page.getByText('Thank you for your order!')).toBeVisible()
    }
}