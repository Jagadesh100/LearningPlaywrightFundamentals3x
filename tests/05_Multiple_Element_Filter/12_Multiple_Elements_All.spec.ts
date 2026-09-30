import {Locator, test} from "@playwright/test";

test(`Multiple Element Filter -ALL()`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    // all() - return array of locators pointoing to the element
    const accountNavigationLocators : Locator[] = await page.locator("a.list-group-item").all();
    for(const selector of accountNavigationLocators){
        console.log(await selector.getAttribute('href'));   
    }
})

test(`Multiple Element Filter -ALLTextContents()`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    // all() - return array of locators pointoing to the element
    const accountNavigationLocators : String[] = await page.locator("a.list-group-item").allTextContents();
    for(const selector of accountNavigationLocators){
        console.log(selector);   
    }
})