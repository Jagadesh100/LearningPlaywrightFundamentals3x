import {Locator, test} from "@playwright/test";

test(`Pagination`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");

    const name: string ='Mia Hoffmann';
    let row;
    while(true){
        row = page.locator("#employees-tbody tr").filter({hasText:name});
        if(await row.count()){
            break;
        }
        const nextPage:Locator = page.locator("#next-page");
        if(await nextPage.isDisabled()){
            throw new Error("Row Not Found")
        }
        await nextPage.click()
    }

    const role : string = await row.locator("//td[@data-col='role']").innerText();
    const email:string = await row.locator("//td[@data-col='email']").innerText();
    const country:string = await row.locator("//td[@data-col='country']").innerText();
    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Email ID: ${email}`);
    console.log(`Country: ${country}`);
});