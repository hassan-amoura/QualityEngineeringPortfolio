const { loginPage } = require("./loginAPI");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name=username]');
        this.passwordInput = page.locator('input[name=password]');
        this.loginButton = page.locator('button:has-text("login")');
    }

    async navigateToLogin() {
        return this.page.goto('https://example.com/login');
    }

    async login(username, password) {
        return this.usernameInput
            .fill(username)
            .then(() => {
                console.log('Username filled!');
                return this.passwordInput.fill(password);
            })
            .then(() => {
                console.log('Password filled!');
                return this.loginButton.click();
            })
            .then(() => {
                console.log('Login button clicked!');
            })

    }
}

module.exports = loginPage;
