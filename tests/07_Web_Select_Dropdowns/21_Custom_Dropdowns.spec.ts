import {Locator, test} from "@playwright/test";

test(`Custom Dropdown Test`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    // Open the dropdown
    await page.locator("#lang-trigger").click();

    // select by text or role
    const options : Locator = page.locator(".select-option");
    const optionsCount : number = await options.count();
    const selectOption : string = "TypeScript";

    for(let i=0;i<optionsCount;i++){
        const optionsText : string = await options.nth(i).innerText();
        if(optionsText === selectOption){
            options.nth(i).click();
        }
    }
    await page.pause();
})