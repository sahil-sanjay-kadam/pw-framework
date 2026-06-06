import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('')
    // login
    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce')
    await page.getByRole('button', {name: 'Login'}).click()

})

test('should successfully complete the checkout journey for an item in the catalog', async ({ page }) => {
    // add to cart
    await page.locator('.inventory_item')
    .filter({ hasText: "Sauce Labs Onesie"})
    .getByRole('button', { name: 'Add to cart'})
    .click()

    // check cart
    await page.locator('.shopping_cart_link')
    .click()

    // Your Cart
    await page.getByRole('button', {name: 'Checkout'}).click()

    // checkout your information
    await page.getByRole('textbox', {name: 'First Name'}).fill('Test user first name')
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Test user last name')
    await page.getByRole('textbox', {name: 'Zip/Postal Code'}).fill('111111')
    await page.getByRole('button', {name: 'Continue'}).click()

    // Checkout: Overview
    await page.getByRole('button', {name: 'Finish'}).click()

    // Checkout: Complete!
    await expect(page.getByText('Thank you for your order!')).toBeVisible()
})