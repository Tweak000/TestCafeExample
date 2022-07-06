import { Selector, t } from "testcafe";

class loginModal{

    constructor(){
        this.loginModal = Selector('#loginModal');
    }

    async clickLoginButton(){
        await t
            .click(this.loginButton);
    }
}

export default new loginModal();