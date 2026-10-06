import {test, Page, Locator} from "@playwright/test";

async function findRowByName(page:Page, name:string) : Promise<Locator>{

    while(true){
        const row : Locator = page.locator("#employees-tbody tr").filter({hasText: name});
        if(await row.count()){
            return row;
        }
        const nextPage : Locator = page.locator("#next-page");

        if(await nextPage.isDisabled()){
            throw new Error("Row Not Found");
        }
        await nextPage.click()
    }
}

test(`Reusable Pagination Method Test`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const name : string = 'Felix Wagner';
    const findRow : Locator = await findRowByName(page,name);
    const role:string = await findRow.locator("//td[@data-col='role']").innerText();
    const email : string = await findRow.locator("//td[@data-col='email']").innerText();
    const country : string =  await findRow.locator("//td[@data-col='country']").innerText();

    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Email ID: ${email}`);
    console.log(`Country: ${country}`);
})