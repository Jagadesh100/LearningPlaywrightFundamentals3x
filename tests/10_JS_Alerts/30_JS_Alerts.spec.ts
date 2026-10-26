import {expect, test} from "@playwright/test";

test.describe(`JS Alelrts`, async()=>{
    
    test.beforeEach(async({page})=>{
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    })

    test(`JS Alert 1`, async({page})=>{
        page.once('dialog', async dialog=>{
            console.log("Alert Type:", dialog.type());
            console.log("Alert message:",dialog.message());
            expect(dialog.message()).toBe("I am a JS Alert");
            await dialog.accept();
        });

        await page.getByRole('button', {name:'Click for JS Alert', exact:true}).click();
        //await page.pause();

        const result : string = await page.locator("#result").innerText();
        console.log(`Result: ${result}`);
    })

    test('JS Alert Confirm', async({page})=>{
        page.once('dialog', async dialog=>{
            console.log(`Alert Type: ${dialog.type()}`);
            console.log(`Alert Message: ${dialog.message()}`);
            expect(dialog.message()).toBe("I am a JS Confirm");
            await dialog.dismiss();
        });

        await page.getByRole('button', {name:'Click for JS Confirm', exact:true}).click();
        const result : string = await page.locator("#result").innerText();
        console.log(`Result: ${result}`);
    })

    test('JS Alert Prompt', async({page})=>{
        page.once('dialog', async dialog =>{
            console.log(`Alert Type: ${dialog.type()}`);
            console.log(`Alert Message: ${dialog.message()}`);
            expect(dialog.message()).toBe("I am a JS prompt");
            await dialog.accept("Prompt");
        });

        await page.getByRole('button', {name:'Click for JS Prompt', exact:true}).click();
        const result : string = await page.locator("#result").innerText();
        console.log(`Result: ${result}`);
        
    })
});