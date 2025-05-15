import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('Product detail page matches list page info', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();

  // Get product info from list view
  const listInfo = await productPage.getFirstProductInfoFromList();

  // Click on the product
  await productPage.clickProductByName(listInfo.title!.trim());

  // Get product info from detail page
  const detailInfo = await productPage.getProductInfoFromDetailPage();

  // Assert all values match
  expect(detailInfo.title?.trim()).toBe(listInfo.title?.trim());
  expect(detailInfo.description?.trim()).toBe(listInfo.description?.trim());
  expect(detailInfo.price?.trim()).toBe(listInfo.price?.trim());
});
