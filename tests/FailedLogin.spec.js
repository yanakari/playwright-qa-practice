const {test, expect} = require('@playwright/test');
test('Failed login', async({page}) => {
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
await page.getByLabel('username').fill('standard_user');
await page.getByLabel('password').fill('wrong_password');
await page.getByRole('button', {name:'Login'}).click();
await expect(page.getByRole('button', {name:'Dismiss error'})).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
await page.pause();
})
