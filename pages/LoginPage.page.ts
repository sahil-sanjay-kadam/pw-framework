import { Locator, Page } from "@playwright/test"

export class LoginPage {
    private readonly page: Page
    private readonly emailInput: Locator
    private readonly passwordInput: Locator
    private readonly loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.emailInput = page.getByRole('textbox', { name: 'Username' })
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login '})
    }

    async navigateTo() {
        await this.page.goto('')
    }

    async login(email: string, password: string) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}