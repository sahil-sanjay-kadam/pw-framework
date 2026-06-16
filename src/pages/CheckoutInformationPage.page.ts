import { Locator, Page } from '@playwright/test'

export class CheckoutInformationPage {
    private readonly page: Page
    private readonly firstNameInput: Locator
    private readonly lastNameInput: Locator
    private readonly postalCodeInput: Locator
    private readonly continueToOrderPage: Locator   

    constructor(page: Page) {
        this.page = page
        this.firstNameInput = page.getByRole('textbox', { name: 'First Name'})
        this.lastNameInput = page.getByRole('textbox', { name: 'Last Name'})
        this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code'})
        this.continueToOrderPage = page.getByRole('button', {name: 'Continue'})
    }

    async fillInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
    }

    async goToOrderPage() {
        await this.continueToOrderPage.click()
    }
}