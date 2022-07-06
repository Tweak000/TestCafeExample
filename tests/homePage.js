import { Selector, t, ClientFunction } from "testcafe"; 
import homePage from "../POM/homePagePOM";
import loginModal from "../POM/modalPOM";

const url = '../index.html'

fixture('Home Page')
    .page(url)



test('Click HomePage Login Button', async t => {

    homePage.clickLoginButton();
    await t
        .expect(Selector(loginModal.loginModal).visible).ok();
});