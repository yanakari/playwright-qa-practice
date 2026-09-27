import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/loginPage.js';

let loginPage;
test.beforeEach(async ({page})=> {
    loginPage = new LoginPage(page)
    await loginPage.open();
});

test('login works', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
});

test('login fails with invalid credentials', async ({page}) => {
    await loginPage.login('test', 'test');

    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface')
});

test('user can add product to cart', async ({page}) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await page.getByRole('button', { name: 'Add to cart' }).first().click();
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');
});