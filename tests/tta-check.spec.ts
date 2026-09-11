import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('testuser');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('testpassword');
  await page.locator('[data-test="login-button"]').click();
});
