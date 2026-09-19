import { test, expect, Locator } from "@playwright/test";

test("Task 15 => Automate Katalon  Cura Website", async ({ page }) => {
  // Navigate to URL
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Click on Make Appointment
  const appointmentButton: Locator = page.locator("#btn-make-appointment");
  await appointmentButton.click();

  // Fill UserName and Password
  const userName: Locator = page.locator("#txt-username");
  const password: Locator = page.locator("#txt-password");

  await userName.fill("John Doe");
  await password.fill("ThisIsNotAPassword");

  const loginButton: Locator = page.locator("//button[@id='btn-login']");
  await loginButton.click();


  // Verify Make Appointment appears
  const actualHeadingContent : Locator = page.locator("//h2[text()='Make Appointment']");
  console.log(await actualHeadingContent.textContent());
  
  expect(await actualHeadingContent.textContent()).toBe("Make Appointment");
});
