import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('User can add and remove items from the cart', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();

  // Add first item
  await productPage.addFirstProductToCart();
  expect(await productPage.getCartCount()).toBe(1);

  // Remove item
  await productPage.removeFirstProductFromCart();
  expect(await productPage.getCartCount()).toBe(0);
});
