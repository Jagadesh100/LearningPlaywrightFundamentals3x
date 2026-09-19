import { test } from "@playwright/test";

test.describe("Login Test", async () => {
  test("valid credentials", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
  });
  
  test("invalid password", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/");
  });

  test.fixme("1checkout with PayPal", async ({ page }) => {
    // never executes
  });

  test.skip("checkout with PayPal", async ({ page }) => {
    // never executes
  });
});
