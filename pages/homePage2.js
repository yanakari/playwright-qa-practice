class HomePage {
    constructor(page) {
        this.page = page;
        this.docsLink = page.getByRole('link', {name: 'Docs'});
        this.searchInput = page.getByLabel('Search');
    }
    async open() {
        await this.page.goto('https://playwright.dev/');
    }

    async goToDocs() {
        await this.docsLink.click();
    }

    async search(text) {
        await this.page.getByLabel('Search').click();
        const input = this.page.locator('#docsearch-input');
        await input.waitFor();
        await input.fill(text);
    }
}

module.exports = {HomePage};