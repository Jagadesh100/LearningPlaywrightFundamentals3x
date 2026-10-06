import {Page, test} from "@playwright/test";

test(`Custom Dropdown Example 2`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/dropdowns");

    await selectValue(page, "Choose your preferred programming language", "TypeScript");
    await selectValue(page, "Choose your preferred web framework", "React");
    await selectValue(page, "Select your experience level", "Mid-level (4-6 years)");
})

async function selectValue(page:Page,dropdownLabel: string, value:string){
    await page.locator("button.select-trigger").locator(`//span[text()='${dropdownLabel}']`).click();
    await page.getByText(value, {exact:true}).last().click();
}