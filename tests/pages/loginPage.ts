import {Page,Locator} from "@playwright/test";
import BasePage from './basePage'

export class LoginPage extends BasePage{
    private readonly userNameTextbox:Locator;
    private readonly passwordTextbox:Locator;
    private readonly loginButton:Locator;

    constructor(page:Page){
        super(page);
        this.userNameTextbox = page.locator('#user-name');
        this.passwordTextbox = page.locator('#password');
        this.loginButton = page.locator("#login-button");

    }

    //actions we wanna do with each locator
    async fillUserName(userNameText:string){
        await this.b_fillFiel(this.userNameTextbox,userNameText);

    }

    async fillPassword(passwordText:string){
        await this.b_fillFiel(this.passwordTextbox,passwordText);
   }

    async clickLogin(){
       await this.b_clickElement(this.loginButton);
    }

}
