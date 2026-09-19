import { test, Browser, BrowserContext, Page, chromium } from "@playwright/test";

test("Browser, Context and Page hierarchy", async () => {
  // LEVEL 1: Launch browser — heaviest operation, do it once
  const browser: Browser = await chromium.launch({ headless: false });
  console.log("Browser Launched", browser);

  // LEVEL 2: Create context — fresh session, isolated cookies
  const context1: BrowserContext = await browser.newContext();
  console.log("Context created", context1);

  // LEVEL 3: Open page — a tab inside the context
  const page: Page = await context1.newPage();
  console.log("Page opened");

  // Cleanup - reverse order
  await page.close();
  await context1.close();
  await browser.close();
});
