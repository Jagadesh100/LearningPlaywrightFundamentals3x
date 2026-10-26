/**
 * Navigate to Flipkart : https://www.flipkart.com/
Search DSLR Camera
Navigate all the pages by clicking on Next till last page (until Next is not visible) and print names of all camera and it’s price
 */

import { Locator, test } from "@playwright/test";

test(`WebTable Test`, async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  await page.locator("span[role='button']").click();

  await page.locator("input[name='q']").first().fill("DSLR");

  //await page.keyboard.press("Enter");
  await page.getByRole('button', { name: 'Search for Products, Brands' }).click();

  const cameraTitle: Locator = page.locator(".RG5Slk");
  const count = await cameraTitle.count();
  console.log(count);
  

  for (let i = 0; i < count; i++) {
    const title = await cameraTitle.nth(i).innerText();
    console.log(title);
  }

  await page.pause();
});
