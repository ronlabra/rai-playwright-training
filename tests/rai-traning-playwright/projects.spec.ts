import { test, expect } from '@playwright/test';


//Scenario: User Login to RAI
test.describe(`Valid Email Address`, () => {
    test(`Valid Email Address Validation`, async ({ page }) => {
      await page.goto('https://gv2a2y28w8xy4.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/login');
      await page.locator(`id=emailAddress`).fill(`ronlabra.official@gmail.com`);
      await page.getByText(`Sign In`).click();
      await expect(page.locator(`id=chakra-toast-manager-top`), 'OTP code was sent successfully.').toBeVisible();
      await page.locator(`id=pin-input-:r1:-0`).fill(`0`);
      await page.locator(`id=pin-input-:r1:-1`).fill(`0`);
      await page.locator(`id=pin-input-:r1:-2`).fill(`0`);
      await page.locator(`id=pin-input-:r1:-3`).fill(`0`);
      await page.locator(`id=pin-input-:r1:-4`).fill(`0`);
      await page.locator(`id=pin-input-:r1:-5`).fill(`0`);
      await expect(page.locator(`id=chakra-toast-manager-top`), 'Login successfully.').toBeVisible();
  });
});



//Scenario: User Refresh the Contribution Stream
test.describe(`Projects Contribution Stream`, ()=>{
    test(`User Clicks the Refresh Button`, async ({page}) => {
       // await page.getByRole('button', { name: 'Refresh'}).click();
       // await page.getByText(`Refresh`).click();
    });
});