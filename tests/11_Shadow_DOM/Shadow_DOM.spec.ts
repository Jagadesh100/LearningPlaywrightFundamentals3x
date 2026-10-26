/**
 * Navigate to URL : https://selectorshub.com/xpath-practice-page/
Fill the fields UserName, Pizza Name, Concept Test . 
Also try to automate Password which is shadow-dom(closed) and see if you are able to fill it.
Explore few more websites and practice Shadow DOM if possible and share the URL.
 */

import {test} from "@playwright/test";

test(`Shadow DOM`, async({page})=>{
    await page.goto("https://selectorshub.com/xpath-practice-page/");

    // #shadow-root open
    await page.locator("#kils").fill("TestName");

    // #shadow-root open
    await page.locator("#pizza").fill("Margherita");

    // #shadow-root closed
    await page.locator("input#training").fill("Xpath"); // will not fetch since dom is closed
});