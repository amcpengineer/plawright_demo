import {test,expect} from '@playwright/test';

test('This is the 1st test',async({page})=>{
await page.goto('https://www.saucedemo.com/');
await expect(page).toHaveTitle('Swag Labs');

})