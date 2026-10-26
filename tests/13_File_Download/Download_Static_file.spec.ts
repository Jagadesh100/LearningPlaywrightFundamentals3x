import {test} from "@playwright/test";

test(`Download Statis File Test`, async({page})=>{
    const URL="https://app.thetestingacademy.com/playwright/widgets/upload-download";
    await page.goto(URL);

    const [staticDownload] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#dl-static").click()
    ]);

    await staticDownload.saveAs("output/"+staticDownload.suggestedFilename());
})