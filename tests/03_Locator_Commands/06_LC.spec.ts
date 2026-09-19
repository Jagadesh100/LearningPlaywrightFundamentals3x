import { test } from "@playwright/test";

test("Validate", async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright",
    {
      waitUntil: 'load',
    }, // load, commit, domcontentloaded, networkidle
  );

  const response = await page.goto("https://app.thetestingacademy.com/playwright/", {
    waitUntil: `load`,
    timeout: 2000,
    referer : 'https://app.thetestingacademy.com/'
  });
});
