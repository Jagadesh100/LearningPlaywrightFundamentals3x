import { test } from "@playwright/test";

test("Context Options", async ({ browser }) => {
  let context = await browser.newContext({
    viewport: { width: 1260, height: 1000 },
    locale: "fr-FR",
    timezoneId: "Europe/Paris",
    geolocation: { latitude: 48.5, longitude: 2.7 },
    permissions: ["geolocation"],
  });

  const page = await context.newPage();
  await page.goto("https://app.vwo.com/#login");
  await context.close();
});

test("Mobile options", async({browser})=>{
    let mobileContext = await browser.newContext({
        viewport: { width: 335, height: 667},
        isMobile: true,
        hasTouch: true
    });

    const page = await mobileContext.newPage();
    await page.goto("https:/playwright.dev");
    await page.pause()
    await mobileContext.close();    
});
