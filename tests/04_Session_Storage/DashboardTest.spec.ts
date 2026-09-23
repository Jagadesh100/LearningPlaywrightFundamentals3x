import { test, expect, Locator } from "@playwright/test";

// Load the saved session
test.use({
  storageState: "./user-session.json",
});

test("dashboard test", async ({ page }) => {
  await page.goto("https://app.wingify.com/#/dashboard?accountId=1282042");
  const heading: Locator = page.locator("//h4[@data-qa='page-heading']");
  expect(await heading.textContent()).toBe("Dashboard");
});
