import { Selector, t } from "testcafe";

class loginPage{

    constructor(){
        this.usernameInput = Selector('#username');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('button').withText('Login');

        this.invalidUsername = Selector('div').withText('Your username is invalid!');
        this.validUsername = Selector('div').withText('You logged into a secure area!');
    }


    async setUsername(username){
        await t
            .typeText(this.usernameInput, username);
    }

    async setPassword(password){
        await t
            .typeText(this.passwordInput, password);
    }

    async clickLoginButton(){
        await t
            .click(this.loginButton);
    }

}

export default new loginPage();