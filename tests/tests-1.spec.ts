import { test } from '@playwright/test'

test('login to saucedemo', async ({ page }) => {
    await page.goto('')
    // login
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()
})