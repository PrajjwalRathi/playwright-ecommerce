import { test, expect } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage';

test('All product images load correctly', async ({ page }) => {
  const productPage = new ProductPage(page);
  await productPage.goto();
  await page.waitForLoadState('networkidle');


  const images = await productPage.getAllProductImages();
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const loaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
    expect(loaded).toBeTruthy();
  }
});
