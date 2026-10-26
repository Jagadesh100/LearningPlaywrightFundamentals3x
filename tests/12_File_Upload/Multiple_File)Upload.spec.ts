import {Locator, test} from "@playwright/test";
import path from "path";

test(`Multiple File Upload Test`, async({page})=>{
    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
    await page.goto(URL);

    const filePath1 = path.join(__dirname, "upload.txt");
    const filePath2 = path.join(__dirname, "upload2.txt");

    const fileUploadLocator : Locator = page.locator("#multi-upload");
    // Uploads 2 file 2 times, so total 4 files
    await fileUploadLocator.setInputFiles([filePath1,filePath2, filePath1, filePath2]);
})