import {expect, Locator, test} from "@playwright/test";


const URL="https://app.thetestingacademy.com/playwright/widgets/scroll";

test.describe(`Scroll test`, async()=>{
    test.beforeEach(`Navigation`, async({page})=>{
        await page.goto(URL);
    });

    test('Scroll', async({page})=>{
        //await page.locator("#deep-anchor").scrollIntoViewIfNeeded();

        //evaluate
        //await page.evaluate(()=>window.scrollBy(0,1000));

        // Jump to bottom
        await page.evaluate(()=>window.scrollTo(0, document.body.scrollHeight));

        // Bottom to top
        await page.evaluate(()=> window.scrollBy(0,0));
        await page.pause();
    });

    test(`Lazy Scroll`, async({page})=>{
        await page.locator("#section-lazy").scrollIntoViewIfNeeded();
        await page.locator("#lazy-list").scrollIntoViewIfNeeded();
        const items : Locator = page.locator("#lazy-list").locator("li");
  

        await items.last().scrollIntoViewIfNeeded();
        const intialCount : number = await items.count();
        console.log(`initial Count: ${intialCount}`);

        await expect.poll(async()=> items.count(), {
            message: "excpet items.count > 10",
            timeout: 10000
        }).toBeGreaterThan(intialCount);

        const finalCount : number = await items.count();
        console.log(`Final Count: ${finalCount}`);

        await page.waitForTimeout(5000);
        
    })
})