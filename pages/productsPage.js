class ProductsPage {
    constructor(page) {
        this.page = page;
        this.productsTitle = page.getByText('Products');
        this.backpackAddButton = page.locator(
            '[data-test="add-to-cart-sauce-labs-backpack"]'
        );
        this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.shoppingCartBadge = page.locator('.shopping_cart_badge');
        this.cart = page.locator('.shopping_cart_link');
    }

    async waitForPage() {
        await this.productsTitle.waitFor();
    }
    
    async addBackpackToCart() {
        await this.backpackAddButton.click();
    }

        async goToCart() {
        await this.cart.click();
    }
}

module.exports = { ProductsPage };    