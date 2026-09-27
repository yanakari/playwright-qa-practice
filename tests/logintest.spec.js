const {test,expect} = require('@playwright/test');
test('Successful login', async({page}) => {
await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');

await page.getByLabel('username').fill('standard_user');
await page.getByLabel('password').fill('secret_sauce');
await page.getByRole('button', {name:'Login'}).click();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await page.pause();
})