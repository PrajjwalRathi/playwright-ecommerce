import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('Cart persists across navigation', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();

  await productPage.addFirstProductToCart();
  await productPage.navigateToCart();

  const cartItems = await page.locator('.cart_item').count();
  expect(cartItems).toBeGreaterThan(0);
});
