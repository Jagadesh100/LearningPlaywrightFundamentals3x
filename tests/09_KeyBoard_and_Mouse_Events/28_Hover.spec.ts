import {expect, Locator, test} from "@playwright/test";

test("Mouse Drag Test", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");

    const addOn : Locator = page.getByTestId("nav-add-ons");
    await addOn.hover();

    await page.getByTestId("test-id-Wifi").click();

    const output : string = await page.locator("#output").innerText();
    console.log(output);
    
    expect(output).toContain("Wi-Fi");
})