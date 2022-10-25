import { test, expect } from '@playwright/test';

//Scenario: Invalid Email
test.describe(`Login Feature`, () => {

  test.beforeEach(async ({page})=>{
    await page.goto('https://gv2a2y28w8xy4.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/login');
  });

  test(`Invalid Email Error Validation`, async ({ page }) => {
    await page.locator(`id=emailAddress`).fill(`randomEmail`);
    await page.getByText(`Sign In`).click();
    await expect(page.locator(`id=emailAddress-feedback`), 'Please enter a valid email address.').toBeVisible();
  });

  test(`Empty Email Error Validation`, async ({ page }) => {
    await page.getByText(`Sign In`).click();
    await expect(page.locator(`id=emailAddress-feedback`), 'Email is required.').toBeVisible();
  
  });

  test(`Valid Email Address Validation`, async ({ page }) => {
    await page.locator(`id=emailAddress`).fill(`ronlabra.official@gmail.com`);
    await page.getByText(`Sign In`).click();
    await expect(page.locator(`id=chakra-toast-manager-top`), 'OTP code was sent successfully.').toBeVisible();
    for(let i:number = 0; i<6; i++){
      await page.locator(`id=pin-input-:r1:-${i}`).fill(`0`);
    }
    await expect(page.locator(`id=chakra-toast-manager-top`), 'Login successfully.').toBeVisible();
  });
});

