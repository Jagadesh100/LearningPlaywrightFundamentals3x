import { test, expect } from "@playwright/test";

test("Multiple Context", async ({ browser }) => {
  const adminContext = await browser.newContext();
  const userContext = await browser.newContext();
  const guestContext = await browser.newContext();

  const adminPage = await adminContext.newPage();
  const userPage = await userContext.newPage();
  const guestPage = await guestContext.newPage();

  adminPage.goto("https://google.com");
  userPage.goto("https://google.com");
  guestPage.goto("https://google.com");

  await guestPage.close();
  await userPage.close();
  await adminPage.close();

  await guestContext.close();
  await userContext.close();
  await adminContext.close();
});
