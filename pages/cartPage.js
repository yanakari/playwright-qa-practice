class CartPage {
    constructor(page) {
        this.page = page;
        this.itemName = page.locator('.inventory_item_name');
        this.checkout = page.getByRole('button', {name:'Checkout'});
    }

    async goToCheckout() {
        await this.checkout.click();
    }


}
module.exports = {CartPage}