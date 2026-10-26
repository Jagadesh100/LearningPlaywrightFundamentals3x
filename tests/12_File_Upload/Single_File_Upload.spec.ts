import {test} from "@playwright/test";
import path from "path";

test(`Single File Upload Test`, async({page})=>{
    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";
    await page.goto(URL);

    const filePath = path.join(__dirname, "upload.txt")
    await page.locator("#single-upload").setInputFiles(filePath);
})