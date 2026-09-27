// @ts-check
import { test, expect } from '@playwright/test';

const {HomePage} = require('../pages/homePage');

test('docs link', async ({ page }) => {
  const home =  new HomePage(page);
  
  await home.open();
  await home.goToDocs();

  await expect(page).toHaveURL(/docs/);
});

test('search works', async ({page}) => {
  const home = new HomePage(page);

  await home.open();
  await home.search('test');

  await expect(page.locator('#docsearch-input')).toHaveValue('test');
  await expect(page.locator('.DocSearch-Hit').first()).toBeVisible();
});