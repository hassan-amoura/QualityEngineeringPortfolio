const { test, expect } = require('@playwright/test');
const { loginPage } = require('../pages/loginpage');
const { loginPage, loginPage } = require('../../pages/loginAPI');

test.describe('Login Tests', () => {
    test('Successful Login', ({ page }) => {
        const loginPage = new loginPage(page);

       
        loginPage.navigateToLogin()
            .then(() => loginPage.login('testUser', 'securePassword'))
            .then(() => {
                
                return expect(page).toHaveURL('https://example.com/dashboard');
            })
            .catch(err => {
                console.error('Test failed: ', err);
            });
    });
});

module.exports = loginPage