const {test:base} = require('@playwright/test');
const {LoginPage} = require('../pages/loginPage');
const {ProductsPage} = require('../pages/productsPage');
const {CartPage} = require('../pages/cartPage');
const {CheckoutPage} = require('../pages/checkoutPage')

const test = base.extend ({
    loginPage: async ({page},use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
    },

    productsPage: async ({page},use) => {
    const productsPage = new ProductsPage(page);
    await use(productsPage);
    },

    cartPage: async ({page},use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
    },

    checkoutPage: async({page},use) => {
        const checkoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }
})



module.exports = {test}