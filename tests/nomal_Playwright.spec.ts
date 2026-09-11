import { chromium, Browser, BrowserContext, Page } from "Playwright";

  let browser: Browser = await chromium.launch({headless:false});
  let context: BrowserContext = await browser.newContext();
  let page: Page = await context.newPage();

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  console.log(await page.title());

  await page.close();
  await context.close();
  await browser.close();

  /*
async function runTest() {
  let browser: Browser = await chromium.launch();
  let context: BrowserContext = await browser.newContext();
  let page: Page = await context.newPage();

  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  console.log(await page.title());

  await page.close();
  await context.close();
  await browser.close();
}

runTest();*/
