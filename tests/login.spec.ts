import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Functionality (POM)', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await loginPage.expectSuccessfulLogin();
  });

  test('Login with invalid credentials should show error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('invalid_user', 'wrong_pass');
    await loginPage.expectErrorMessage(/Username and password do not match/);
  });

  test('Login with locked out user should show locked error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectErrorMessage(/Sorry, this user has been locked out/);
  });
});
