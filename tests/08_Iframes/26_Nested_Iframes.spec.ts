import {FrameLocator, test} from "@playwright/test";

test("Nested Iframe test", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/nested-iframes");

    const parentFrame : FrameLocator = page.frameLocator("#pact1");
    const childFrame : FrameLocator = parentFrame.frameLocator("#pact2"); 
    const innerFrame : FrameLocator = childFrame.frameLocator("#pact3");

    await parentFrame.locator("#inp_val").fill("Testing");
    await childFrame.locator("#jex").fill("Playwright");
    await innerFrame.locator("#glaf").fill("Typescript");
})