import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('User can complete checkout flow', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();

  await productPage.addFirstProductToCart();
  await productPage.navigateToCart();

  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'John');
  await page.fill('[data-test="lastName"]', 'Doe');
  await page.fill('[data-test="postalCode"]', '12345');

  await page.click('[data-test="continue"]');
  await page.click('[data-test="finish"]');

  const confirmation = await page.locator('.complete-header').textContent();
  expect(confirmation).toContain('Thank you for your order!');
});
