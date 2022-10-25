// playwright-dev-page.ts
import { expect, Locator, Page } from '@playwright/test';

export class Login {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;

  }

  async userLogin() {
    await this.page.goto('https://gv2a2y28w8xy4.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/login');
    await this.page.locator(`id=emailAddress`).fill(`ronlabra.official@gmail.com`);
    await this.page.getByText(`Sign In`).click();
    await expect(this.page.locator(`id=chakra-toast-manager-top`), 'OTP code was sent successfully.').toBeVisible();
    for(let i:number = 0; i<6; i++){
      await this.page.locator(`id=pin-input-:r1:-${i}`).fill(`0`);
    }
    await expect(this.page.locator(`id=chakra-toast-manager-top`), 'Login successfully.').toBeVisible();
  }

}