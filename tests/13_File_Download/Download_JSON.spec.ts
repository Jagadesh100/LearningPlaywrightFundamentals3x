import {test} from "@playwright/test";

test(`File Download JSON Test`, async({page})=>{
    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
    await page.goto(URL);

    const [downloadJson] = await Promise.all([
        page.waitForEvent('download'),
        page.getByTestId("download-json").click()
    ]);

    await downloadJson.saveAs("output/"+downloadJson.suggestedFilename());
})