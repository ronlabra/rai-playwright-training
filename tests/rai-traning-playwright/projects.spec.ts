import { test, expect } from '@playwright/test';
import { Login } from '../../page-objects/login';

test.describe(``, ()=>{
  test.beforeEach(async({page})=>{
    const login = new Login(page);
    await login.userLogin();
    
  });

  test('getting started should contain table of contents', async ({ page }) => {
    //await expect(page).toHaveURL('/https://gv2a2y28w8xy4.a9ni7d1ff3m0e.ap-southeast-1.cs.amazonlightsail.com/projects');
    await expect(page).toHaveURL(/.*projects/);
  });
});





