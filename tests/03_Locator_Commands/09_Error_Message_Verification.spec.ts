import {expect, Locator, test} from "@playwright/test";

test(`Verify the Error Message`, async({page})=>{
    await page.goto("https://wingify.com/free-trial/");

    const emailTextBox : Locator = page.getByRole('textbox', {name: 'email'});
    await emailTextBox.fill("test123");

    const consentCheckBox  : Locator= page.locator("//input[@data-qa='free-trial-step1-gdpr-consent-checkboxgdpr-consent-checkbox']");
    await consentCheckBox.click();  

    const createAccountButton : Locator = page.getByRole('button', {name:'Create a Free Trial Account'});
    await createAccountButton.click();

    const emailNameError : Locator = page.locator("//div[text()='The email address you entered is incorrect.']");
    expect(await emailNameError.textContent()).toBe("The email address you entered is incorrect.")
    //await page.pause();
});