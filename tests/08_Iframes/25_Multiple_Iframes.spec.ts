import {FrameLocator, test} from "@playwright/test";

test("Multiple Frames Test",async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/frames/multi-frames");

    const sideFrame : FrameLocator = page.frameLocator("frame[name='side']");
    const mainFrame : FrameLocator = page.frameLocator("frame[name='main']");
    const footerFrame : FrameLocator = page.frameLocator("frame[name='footer']");

    const mainFrameTitle : string = await mainFrame.locator("#main-heading").innerText();
    console.log(`MainFrame Title: ${mainFrameTitle}`);
    
    await sideFrame.getByTestId("side-link-registration").click();

    const vehicleFormFrame : FrameLocator = mainFrame;
    await vehicleFormFrame.locator("#RESULT_TextField-1").fill("Swift");
    await vehicleFormFrame.locator("#RESULT_TextField-2").fill("Jagadesh");
    await vehicleFormFrame.locator("#RESULT_TextField-3").fill("TN-70-CM-2026");
    await vehicleFormFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
    await vehicleFormFrame.locator("#RESULT_TextField-4").fill("2019");
    await vehicleFormFrame.getByTestId("vehicle-submit").click();

    await page.pause()

});