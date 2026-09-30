import { test } from "@playwright/test";

test(`Multiple Element Filter`, async ({ page }) => {
  await page.goto(
    "https://app.thetestingacademy.com/playwright/multiple_element_filter",
  );

  // innerTexts() - return values present in the locator
  const accountNavigatePaneText: string[] = await page
    .locator("a.list-group-item")
    .allInnerTexts();

  console.log(accountNavigatePaneText.length);
  console.log(accountNavigatePaneText);

  for (const linkText of accountNavigatePaneText) {
    console.log(linkText);
  }

  for (const linkText of accountNavigatePaneText) {
    //console.log(linkText);

    if (linkText === "Login") {
      //await page.getByText(linkText).click();

      await page.getByRole("link", { name: linkText }).click();
    }
  }
});
