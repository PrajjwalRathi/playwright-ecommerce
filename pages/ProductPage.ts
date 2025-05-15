import { Page, Locator, expect } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly sortDropdown: Locator;
    readonly productTitles: Locator;
    readonly productPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productTitles = page.locator('.inventory_item_name');
        this.productPrices = page.locator('.inventory_item_price');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
        await this.page.fill('[data-test="username"]', 'standard_user');
        await this.page.fill('[data-test="password"]', 'secret_sauce');
        await this.page.click('[data-test="login-button"]');
        await expect(this.page).toHaveURL(/.*inventory/);
    }

    async sortBy(option: 'az' | 'za' | 'lohi' | 'hilo') {
        const map = {
            az: 'Name (A to Z)',
            za: 'Name (Z to A)',
            lohi: 'Price (low to high)',
            hilo: 'Price (high to low)'
        };
        await this.sortDropdown.selectOption({ label: map[option] });
    }

    async getProductTitles(): Promise<string[]> {
        return await this.productTitles.allTextContents();
    }

    async getProductPrices(): Promise<number[]> {
        const prices = await this.productPrices.allTextContents();
        return prices.map(p => parseFloat(p.replace('$', '')));
    }

    async clickProductByName(name: string) {
        await this.page.click(`.inventory_item_name:text("${name}")`);
    }

    async getFirstProductInfoFromList() {
        const title = await this.page.locator('.inventory_item_name').first().textContent();
        const description = await this.page.locator('.inventory_item_desc').first().textContent();
        const price = await this.page.locator('.inventory_item_price').first().textContent();
        return { title, description, price };
    }

    async getProductInfoFromDetailPage() {
        const title = await this.page.locator('.inventory_details_name').textContent();
        const description = await this.page.locator('.inventory_details_desc').textContent();
        const price = await this.page.locator('.inventory_details_price').textContent();
        return { title, description, price };
    }

    async getAllProductImages() {
        return this.page.locator('.inventory_item_img img');
    }

    async addFirstProductToCart() {
        const firstAddToCartBtn = this.page.locator('[data-test^="add-to-cart"]').first();
        await firstAddToCartBtn.click();
    }

    async removeFirstProductFromCart() {
        const firstRemoveBtn = this.page.locator('[data-test^="remove"]').first();
        await firstRemoveBtn.click();
    }

    async getCartCount() {
        const cartBadge = this.page.locator('.shopping_cart_badge');
        return await cartBadge.count() > 0
            ? parseInt(await cartBadge.textContent() || '0')
            : 0;
    }

    async navigateToCart() {
        await this.page.click('.shopping_cart_link');
    }


}
