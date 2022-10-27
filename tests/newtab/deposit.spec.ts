import { test, expect } from '@playwright/test';
import { Login } from '../../page-objects/login';


test.describe(`Project page`, ()=>{
  test.beforeEach(async({page})=>{
    const login = new Login(page);
    await login.walletLogin();
    
  });

  test('Deposit $10', async ({ page }) => {
    // await expect(page.getByText(`transact`)).toBeVisible();
    await page.getByTestId(`deposit-button`).click();
    await page.locator(`button[data-index="1"]`).click();
    await page.getByPlaceholder(`Amount`).fill(`10`);
    // await page.locator(`button[type=submit]`).click();


const [popup] = await Promise.all([
    // It is important to call waitForEvent before click to set up waiting.
    page.waitForEvent('popup'),
    // Opens popup.
    page.locator(`button[type=submit]`).click(),
  ]);
  await popup.waitForLoadState();
  console.log(await popup.title());
  await popup.getByPlaceholder(`CVC`).fill(`123`);
  await popup.locator(`input[name="commit"]`).click();

//   console.log(await popup.evaluate('location.href'));
  });
});


