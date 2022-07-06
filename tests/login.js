import { Selector, t } from "testcafe"; 
import loginPage from "../POM/loginPOM";

const url = 'https://the-internet.herokuapp.com/login'

fixture('Login Page')
    .page(url)


const validUsername = 'tomsmith';
const validPassword = 'SuperSecretPassword!';



test('Invalid User Error Check', async t => {

    loginPage.clickLoginButton();
    await t
        .expect(Selector(loginPage.invalidUsername).visible).ok()
        .expect(Selector(loginPage.validUsername).visible).notOk();
});

test('Successful User Login', async t => {

    loginPage.setUsername(validUsername);
    loginPage.setPassword(validPassword);
    loginPage.clickLoginButton();
    await t
        .expect(Selector(loginPage.invalidUsername).visible).notOk()
        .expect(Selector(loginPage.validUsername).visible).ok();

});