import{Page,Locator} from '@playwright/test';

export default class BasePage{

    readonly page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async b_navigateTo(url:string){
        await this.page.goto(url);
    }

    async b_waitForElementVisible(element:Locator, maxTimeout?:number){
        await element.waitFor({state:'visible',timeout:maxTimeout})
    }

    async b_clickElement(element:Locator){
       await this.b_waitForElementVisible(element);
       await element.click();

    }

    async b_fillFiel(element:Locator, value:string){
        await this.b_waitForElementVisible(element);
        await element.fill(value);
    }
}