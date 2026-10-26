import {test} from "@playwright/test";

test("keyboard press Test", async({page})=>{
    await page.goto("https://www.toptal.com/developers/keycode");

    await page.keyboard.press('A');
    await page.pause();

    await page.keyboard.press('ArrowLeft');
    await page.pause();

    await page.keyboard.press('Shift');
    await page.pause();

    await page.keyboard.press('Control+A');
    await page.pause();

    await page.keyboard.press('Digit1');
    await page.pause();

    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyO');
    await page.keyboard.up('Shift');
    await page.pause();
});