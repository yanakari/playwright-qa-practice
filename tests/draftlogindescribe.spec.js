const {test,expect} = require('@playwright/test');
test.describe('Login', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    });
    test.afterEach(async ()=>{
        console.log('Test finished');
    });


test('Successful login', async({page}) => {
await page.getByLabel('username').fill('standard_user');
await page.getByLabel('password').fill('secret_sauce');
await page.getByRole('button', {name:'Login'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('Failed login', async({page}) => {
await page.getByLabel('username').fill('standard_user');
await page.getByLabel('password').fill('wrong_password');
await page.getByRole('button', {name:'Login'}).click();
await expect(page.getByRole('button', {name:'Dismiss error'})).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login with empty password', async({page}) => {
await page.getByLabel('username').fill('standard_user');
await page.getByRole('button', {name:'Login'}).click();
await expect(page.getByRole('button', {name:'Dismiss error'})).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
await page.pause();
});
})