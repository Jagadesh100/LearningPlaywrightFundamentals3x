/**
 * Task: Navigate to URL : https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
Login with 
Username : admin
Password : admin123

Add an employee 
Click PIM to view all employees again.
Search the same employee which is added by navigating to different pages and delete i
 */


import {expect, test, Locator, Page} from "@playwright/test";

async function findRowByName(page: Page, name: string) : Promise<Locator>{
    while(true){
        const row : Locator = page.locator(".oxd-table-card").filter({hasText: name});
        if(await row.count()){
            return row;
        }
        //const nextPage : Locator = page.locator(".oxd-pagination-page-item--previous-next").locator(".bi-chevron-right");
        const nextPage : Locator = page.locator(".bi-chevron-right");
        // if(await nextPage.isDisabled()){
        //     throw new Error("Rows not found");
        // }
        await nextPage.click();
    }
}


test(`Add and Delete a record in OrangeHRM`, async({page})=>{

    const firstName : string = "ATestUser111";
    const middleName: string = "ATestMiddleName";
    const lastName : string = "ATestLastName";
    // Navigate
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // Login
    await page.locator("[name='username']").fill("admin");
    await page.locator("[name='password']").fill("admin123");
    //await page.getByRole('button', {name:'submit'}).click();
    await page.locator(".orangehrm-login-button").click();

    // Navigate to PIM 
    await page.locator("//span[text()='PIM']").click();
    await page.getByRole('button', {name:'Add'}).click();

    // Add a record
    await page.locator("[name='firstName']").fill(firstName);
    await page.locator("[name='middleName']").fill(middleName);
    await page.locator("[name='lastName']").fill(lastName);
    await page.getByRole('button', {name:'Save'}).click();

    const employeeList : Locator = page.getByRole('link', {name: 'Employee List'});
    expect(employeeList).toBeVisible();

    // Verify Record Added
    const actualAccountName : string = await page.locator(".orangehrm-edit-employee-name h6").innerText();
    console.log(actualAccountName);
    
    //expect(actualAccountName).toBe(firstName+" "+lastName);

    // Navigate to PIM 
    await page.locator("//span[text()='PIM']").click();

    const findRow : Locator = await findRowByName(page,firstName+" "+middleName);

    await findRow.locator("//div[@role='cell']").nth(0).click();

    await findRow.locator("div[role='cell'] button").nth(1).click();

    await page.pause();
});