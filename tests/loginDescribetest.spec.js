const {test} = require ('../fixtures/testFixtures.js');
const {expect} = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { ProductsPage } = require('../pages/productsPage');
const { CartPage } = require('../pages/cartPage');
const {users, checkoutData} = require('../test-data/testData.js')

test.describe('Login', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://www.saucedemo.com/?utm_source=chatgpt.com');
    });
    test.afterEach(async ()=>{
        console.log('Test finished');
    });


test('Successful login', async({loginPage, productsPage, cartPage, checkoutPage, page}) => {
    //console.log('username:', users.standard.username);
    //console.log('password exists:', users.standard.password !== undefined);
await loginPage.login(users.standard.username, users.standard.password);
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
await productsPage.waitForPage();
await productsPage.addBackpackToCart();
await expect(productsPage.backpackRemoveButton).toBeVisible();
await expect(productsPage.shoppingCartBadge).toHaveText('1');
await productsPage.goToCart();
await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');
await cartPage.goToCheckout();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
await checkoutPage.fillInformation(checkoutData.firstName, checkoutData.lastName, checkoutData.postalCode)
await checkoutPage.clickContinueButton();
await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');
});


test('Failed login', async({page}) => {
const loginPage = new LoginPage(page);
await loginPage.login(users.invalid.username, users.invalid.password);
await expect(page.getByRole('button', {name:'Dismiss error'})).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');
});

test('Login with empty password', async({page}) => {
const loginPage = new LoginPage(page);
await loginPage.login('standard_user')
await expect(page.getByRole('button', {name:'Dismiss error'})).toBeVisible();
await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Password is required');
await page.pause();
});
})