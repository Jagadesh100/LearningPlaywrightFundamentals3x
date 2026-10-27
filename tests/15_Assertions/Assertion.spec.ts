import { expect, Locator, test } from "@playwright/test";

const URL =
  "https://app.thetestingacademy.com/playwright/multiple_element_filter";

test.describe(`Assertion Test`, async () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

  test(`Assert the Login Form`, async ({ page }) => {
    const loginForm: Locator = page.locator(".login-card");
    const formHeading: Locator = page.locator("#login-heading");
    const emailInput: Locator = page.locator("#email");
    const passwordInput: Locator = page.locator("#password");
    const rememberCheckBox: Locator = page.getByRole("checkbox", {
      name: "remember",
    });
    const forgotPassword: Locator = page.getByTestId("form-forgot-password");
    const loginButton: Locator = page.getByTestId("login-button");

    const expectedTitle: string =
      "Multiple Element Filter Login — The Testing Academy";

    await test.step(`Verify the Page Title`, () => {
      expect(page, `Page has expected Title (${expectedTitle})`).toHaveTitle(
        expectedTitle,
      );
    });

    await test.step("Verify Login Form is visible", async () => {
      await expect(loginForm).toBeVisible();
    });

    await test.step(`Verify the Heading of Form Name`, async () => {
      await expect(formHeading).toHaveText("Student Login");
    });

    await test.step("Verify Email and Password fields", async () => {
      await expect(emailInput).toBeEditable();
      await expect(passwordInput).toBeEditable();
      await expect(emailInput).toHaveAttribute("type", "email");
      await expect(passwordInput).toHaveAttribute("type", "password");
    });

    await test.step("Verify Remember Me checkbox", async () => {
      await expect(rememberCheckBox).not.toBeChecked();
    });

    await test.step("Verify Forgot Password link", async () => {
      await expect(forgotPassword).toBeVisible();
    });

    await test.step("Verify Login button", async () => {
      await expect(loginButton).toBeVisible();
      await expect(loginButton).toHaveCSS(
        "background-color",
        "rgb(16, 163, 127)",
      );
      await expect(loginButton).toBeEnabled();
    });
  });
});
