import{test,expect} from "@playwright/test";
import { LoginPage } from "./pages/loginPage";

test('', async({page}) => {
    await page.goto('https://www.saucedemo.com/');

    //syntax for object declaration
    //const objectName = new ClassName();
    const loginPage = new LoginPage(page); 
    await loginPage.fillUserName('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLogin();

} )