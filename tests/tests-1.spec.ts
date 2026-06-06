import { test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('')
    // login
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

})

test('saucedemo test 1', async ({ page }) => {
    // add to cart
    await page.locator('.inventory_item')
    .filter({ hasText: "Sauce Labs Backpack"})
    .getByRole('button', { name: 'Add to cart'})
    .click()

    
})