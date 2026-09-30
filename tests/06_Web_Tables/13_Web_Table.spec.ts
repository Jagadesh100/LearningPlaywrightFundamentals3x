import {Locator, test} from "@playwright/test";

test(`Web Table`, async({page})=>{
    await page.goto("https://awesomeqa.com/webtable.html");

    //table[@id='customers']/tbody/tr[4]/td[3]

    const firstPart :string= "//table[@id='customers']/tbody/tr[";
    const secondPart : string = "]/td[";
    const thirdPart :string = "]";

    const tableRowLocator : Locator = page.locator("//table[@id='customers']/tbody/tr");
    const rowCount:number = await tableRowLocator.count();

    for(let row=2;row<=rowCount;row++){
        const tableColumnLocator : Locator = page.locator("//table[@id='customers']/tbody/tr[2]/td");
        const colCount : number = await tableColumnLocator.count();
        for(let col=1;col<=colCount;col++){
            const dynamicXpath = `${firstPart}${row}${secondPart}${col}${thirdPart}`;
            const data : string = await page.locator(dynamicXpath).innerText();
            //console.log(data);
            if(data.includes("Giovanni Rovelli")){
                const countryLocator = page.locator(`${dynamicXpath}/following-sibling::td`);
                const countryText : string = await countryLocator.innerText();
                console.log(countryText);
            }
        }
    }
})