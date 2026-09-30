import { Locator, test } from "@playwright/test";

test(`Web Table 2`, async ({ page }) => {
  await page.goto("https://awesomeqa.com/webtable1.html");

  const rows: Locator = page.locator("table[summary='Sample Table'] tbody tr");
  const rowsCount: number = await rows.count();


  for (let row = 0; row <= rowsCount-1; row++) {
    const rowHeader : string = await rows.nth(row).locator("th").innerText();

    const rowData : string[] = await rows.nth(row).locator("td").allInnerTexts();

    if(rowHeader.includes("Financial Center")){
        console.log(rowData);
        console.log(`Structure: ${rowHeader}`);
        console.log(`Country: ${rowData[0]}`);
        console.log(`City: ${rowData[1]}`);
        console.log(`Height: ${rowData[2]}`);
        console.log(`Built: ${rowData[3]}`);
        console.log(`Rank: ${rowData[4]}`);
    }

  }
});
