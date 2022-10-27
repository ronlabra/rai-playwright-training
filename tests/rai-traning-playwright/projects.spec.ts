import { test, expect } from '@playwright/test';
import { Login } from '../../page-objects/login';

test.describe(`Project page`, ()=>{
  test.beforeEach(async({page})=>{
    const login = new Login(page);
    await login.userLogin();
    
  });

  test('getting started should contain table of contents', async ({ page }) => {
    await expect(page).toHaveURL(/.*projects/);
  });
});





