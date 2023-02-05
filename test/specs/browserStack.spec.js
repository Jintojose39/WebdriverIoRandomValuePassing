import login from '../pageobjects/login.page.js';
import { generateRandomPassword } from 'random-password-generator-2022';
const password = generateRandomPassword({
    passwordLength: 6,
    withNumbers: true, withCharacters: true,
});
import randomEmail from "random-email"

describe('Automation of passing random value to the login page', () => {
    it('should login with valid credentials and must be pass random values', async () => {
        await browser.maximizeWindow();
        await login.openHomepage('https://www.browserstack.com/users/sign_in');
        await expect(browser).toHaveUrl('https://www.browserstack.com/users/sign_in')
        await login.loginActions(randomEmail(), password);
        console.log("Random password is" + ":" + password)
        await browser.pause(10000);

    });





});


