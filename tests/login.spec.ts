import { test, expect } from '@playwright/test';

test.describe('User login to Demobank', () => {
    test('successful login with correct credentials', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        // await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('majortom');
        // await page.getByTestId('password-input').click();
        await page.getByTestId('password-input').fill('12345678');
        await page.getByTestId('login-button').click();

        await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy')
    });

    test('unsuccesful login with incorrect credentials (username too short)', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        // await page.getByTestId('login-input').click();
        await page.getByTestId('login-input').fill('major');
        await page.getByTestId('login-input').blur();

        await expect(page.getByTestId('error-login-id')).toHaveText('identyfikator ma min. 8 znaków')
    });

    test('unsuccesful login with incorrect credentials (password too short)', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        // await page.getByTestId('password-input').click();
        await page.getByTestId('password-input').fill('12345');
        await page.getByTestId('password-input').blur();

        await expect(page.getByTestId('error-login-password')).toHaveText('hasło ma min. 8 znaków')
    });

});