import {test} from '@playwright/test';

test(`Xpath Functions`, async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/", {
        waitUntil: 'commit'
    });

    // text()
    const textFn : string | null = await page.locator("//a[text()='Make Appointment']").textContent();
    console.log(textFn);

    const containsFn : string | null = await page.locator("//a[contains(@id,'appointment')]").textContent();
    console.log(containsFn);
    
    const startswithFn : string | null = await page.locator("//a[starts-with(@id,'btn')]").textContent();
    console.log(startswithFn);
    
    const normalizeSpaceFn : string | null = await page.locator("//a[normalize-space()='Make Appointment']").textContent();
    console.log(normalizeSpaceFn);
    
});