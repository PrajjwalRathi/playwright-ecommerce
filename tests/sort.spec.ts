import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test.describe('Product Sorting Functionality', () => {
  test('Sort by Price (Low to High)', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.sortBy('lohi');

    const prices = await productPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  test('Sort by Price (High to Low)', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.sortBy('hilo');

    const prices = await productPage.getProductPrices();
    const sorted = [...prices].sort((a, b) => b - a);
    expect(prices).toEqual(sorted);
  });

  test('Sort by Name (A to Z)', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.sortBy('az');

    const titles = await productPage.getProductTitles();
    const sorted = [...titles].sort((a, b) => a.localeCompare(b));
    expect(titles).toEqual(sorted);
  });

  test('Sort by Name (Z to A)', async ({ page }) => {
    const productPage = new ProductPage(page);
    await productPage.goto();
    await productPage.sortBy('za');

    const titles = await productPage.getProductTitles();
    const sorted = [...titles].sort((a, b) => b.localeCompare(a));
    expect(titles).toEqual(sorted);
  });
});
