import { Selector, t } from "testcafe";

class homePage{

    constructor(){
        this.loginButton = Selector('#loginButton');
    }

    async clickLoginButton(){
        await t
            .click(this.loginButton);
    }
}

export default new homePage();