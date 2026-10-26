import { test } from "@playwright/test";

test(`File Download Test`, async ({ page }) => {
    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
    await page.goto(URL);

    const [staticDownloadPromise] = await Promise.all([
        page.waitForEvent("download"),
        page.getByTestId("download-text").click(),
    ]);

    await staticDownloadPromise.saveAs('output/'+staticDownloadPromise.suggestedFilename());
});
