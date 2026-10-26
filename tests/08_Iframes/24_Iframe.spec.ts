import {FrameLocator, test} from "@playwright/test";

test("Handle Iframe - Single Iframe", async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/");

    const vehicleFormFrame : FrameLocator = page.frameLocator("#frame-one");
    await vehicleFormFrame.locator("#RESULT_TextField-1").fill("Swift");
    await vehicleFormFrame.locator("#RESULT_TextField-2").fill("Jagadesh");
    await vehicleFormFrame.locator("#RESULT_TextField-3").fill("TN-70-CM-2026");
    await vehicleFormFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
    await vehicleFormFrame.locator("#RESULT_TextField-4").fill("2019");
    await vehicleFormFrame.getByTestId("vehicle-submit").click();

    await page.pause();
})