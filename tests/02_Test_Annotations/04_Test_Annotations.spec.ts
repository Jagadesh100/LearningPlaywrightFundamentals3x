import { test } from "@playwright/test";

test.skip("Skip test", async () => {
  console.log("Skip Test");
});

test.fixme("Fixme", async () => {
  console.log(`Fix me`);
});

test(`Test`, async ({page}) => {
  console.log(`test`);
    await page.goto("https:/playwright.dev")
});
