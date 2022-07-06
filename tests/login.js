import { Selector, t, ClientFunction } from "testcafe"; 
import homePage from "../POM/loginPOM";

const url = 'https://the-internet.herokuapp.com/login'

fixture('Home Page')
    .page(url)



test('Click HomePage Login Button', async t => {

    homePage.clickLoginButton();
    await t
        .expect(Selector(homePage.invalidUsername).visible).ok();
});