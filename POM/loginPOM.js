import { Selector, t } from "testcafe";

class homePage{

    constructor(){
        this.usernameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('button').withText('Login');

        this.invalidUsername = Selector('div').withText('Your username is invalid!');
    }

    async clickLoginButton(){
        await t
            .click(this.loginButton);
    }
}

export default new homePage();