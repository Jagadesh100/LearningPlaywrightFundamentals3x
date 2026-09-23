import { Browser, BrowserContext, chromium, Page } from "playwright";

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

const wingifyAppUserName = requiredEnv("SS_USER_NAME");
const wingifyAppPassword = requiredEnv("SS_PASSWORD");

async function saveSession() {
  const browser: Browser = await chromium.launch({ headless: false });
  const browserContext: BrowserContext = await browser.newContext();
  const page: Page = await browserContext.newPage();

  await page.goto("https://app.wingify.com/#/login");
  await page.locator("#login-username").fill(wingifyAppUserName);
  await page.locator("#login-password").fill(wingifyAppPassword);

  await page.getByRole("button", { name: "Sign in" }).first().click();
  await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });

  await browserContext.storageState({ path: "./user-session.json" });

  await browser.close();
}

saveSession();
