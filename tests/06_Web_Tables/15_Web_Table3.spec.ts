import {Locator, test} from "@playwright/test";

test(`Web Table test`, async({page})=>{
    await page.goto("https://app.thetestingacademy.com/playwright/webtable");

    //tbody[@id='employee-body']/tr[3]/td[1]

    const firstPart : string = "//tbody[@id='employee-body']/tr[";
    const secondPart : string = "]/td["
    const thirdPart : string = "]";


    const rows : Locator = page.locator("//tbody[@id='employee-body']/tr");
    const rowsCount : number= await rows.count();

    for(let row=1;row<=rowsCount;row++){
        //console.log(await rows.allInnerTexts());
        const columnLocator : Locator = page.locator("//tbody[@id='employee-body']/tr[3]/td");
        const colCount : number = await columnLocator.count();
        for(let col=1;col<=colCount;col++){
            const dynamicXpath : string = `${firstPart}${row}${secondPart}${col}${thirdPart}`;
            const dynamicLocator : Locator = page.locator(dynamicXpath);
            const data : string[] =await dynamicLocator.allInnerTexts();
            //console.log(data);
            if(data.includes("Rohan.Mehta")){
                console.log(data);
                await page.locator(`${dynamicXpath}/preceding-sibling::td`).click();   
            }
        }
    }
    await page.pause();
})