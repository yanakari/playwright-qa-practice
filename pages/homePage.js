class HomePage {
    constructor(page) {
        this.page = page;
    }
    async open() {
        await this.page.goto('https://playwright.dev/');
    }

    async goToDocs() {
        await this.page.getByRole('link', {name: 'Docs'}).click();
    }

    async search(text) {
        await this.page.getByLabel('Search').click();
        const input = this.page.locator('#docsearch-input');
        await input.waitFor();
        await input.fill(text);
    }
}

module.exports = {HomePage};