class loginPage{
    constructor(page, apiRequest) {
        this.page = page;
        this.apiRequest = apiRequest;
        this.usernameInput = page.locator('username');
        this.passwordInput = page.locator('password');
        this.loginButton = page.locator('button:has-text("Login")');
    }

    async navigateToLogin() {
        await this.page.goto('https://example.com/login');
    }

    async loginApi(username, password) {
        const response = await this.apiRequest.post('https://example.com/api/login', {
            data: {
                username: username,
                password: password
            }
        });
        
        if (response.status() !== 200) {
            throw new Error('login API failed with status ${response.status()}');
        }

        const responseBody = await response.json();
        if(!responseBody.token) {
            throw new Error('Login API response does not contain token');
        }

        console.log('login API Succeeded')
        return responseBody.token;
    }

    async login(username, password) {
        const token = await this.loginApi(username, password);

        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        console.log('Login Button Clicked!');
        return token;

    }
}

module.exports = { loginPage };