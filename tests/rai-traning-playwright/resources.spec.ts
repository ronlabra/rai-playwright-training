import { test, expect, } from '@playwright/test';
import { Login } from '../../page-objects/login';

test.describe(`Project page`, ()=>{
    test.beforeEach(async({page})=>{
      const login = new Login(page);
      await login.userLogin();   
    })
});

test('User checks Resources tab', async ({ page }) => {
    await page.getByText(`Resources`).click();
 });

test('User Search Resources', async ({page}) => {
    await page.getByPlaceholder(`Search Resource`).fill("Camella{enter}");
    await page.getByText(`Camella Caren`).click();
});

test('User checks the Add Resource page', async ({page}) => {
    await page.getByText(`Add Resource`).click();
    await page.getByText(`Back`).click();
    await page.getByText(`Leave`).click();
});

test('User Export Resource data', async ({page})=> {
    await page.getByText(`Export Resource Data`)
              .click();
});