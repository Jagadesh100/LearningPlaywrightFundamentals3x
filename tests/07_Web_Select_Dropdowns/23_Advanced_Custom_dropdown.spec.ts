import {test} from "@playwright/test";

test("Advanced Drop down test", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/select-boxes");

    // Single — searchable
    await page.locator("#rs-single").click();
    await page.getByRole('option', {name:'Playwright', exact:true}).click();

    // Multi -chips Removable
    await page.locator("#rs-multi").click();
    await page.getByRole('option', {name:'Pytest', exact:true}).click();
    await page.getByRole('option', {name:'Cucumber', exact:true}).click();
    await page.getByRole('option', {name:'Mocha', exact:true}).click();
    await page.keyboard.press("Escape");

    // Creatable multi — type and Enter
    await page.locator("#rs-creatable").click();
    await page.getByTestId("rs-creatable-input").fill("e2e-testing");
    await page.keyboard.press("Enter");
    await page.getByTestId("rs-creatable-input").fill("ui-testing");
    await page.keyboard.press("Enter");
    await page.getByTestId("rs-creatable-input").fill("QA Automation");
    await page.keyboard.press("Enter");

    //  Async — fetched on type
    await page.locator("#rs-async").click();
    await page.getByTestId("rs-async-input").fill("Ch");
    await page.getByRole('option', {name:'Chennai', exact:true}).click();
    await page.keyboard.press("Enter");

});