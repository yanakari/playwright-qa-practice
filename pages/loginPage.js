class LoginPage {
    constructor(page) {
    this.page = page;
    this.usernameInput = page.getByLabel('username'); 
    this.passwordInput = page.getByLabel('password'); 
    this.loginButton = page.getByRole('button', {name:'Login'});
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        if (password !== undefined) {
        await this.passwordInput.fill(password);
    }
    
        await this.loginButton.click();
    }
}
module.exports = { LoginPage };
