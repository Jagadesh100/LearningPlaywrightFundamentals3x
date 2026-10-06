import { test } from "@playwright/test";

test(`Select Dropdown by label`, async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").click();
  await page.selectOption("#dropdown", { label: "Option 1" });
});

test(`Select Dropdown by Value`, async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").click();
  await page.selectOption("#dropdown", { value: "1" });
});

test(`Select Dropdown by index`, async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");
  await page.locator("#dropdown").click();
  await page.selectOption("#dropdown", { index: 2 });
});
