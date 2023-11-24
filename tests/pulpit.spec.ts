import { test, expect } from '@playwright/test';

test.describe('Pulpit tests', () => {
    test('quick payment with correct data', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/');
        await page.getByTestId('login-input').fill('majortom');
        await page.getByTestId('password-input').fill('12345678');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        // await page.locator('#widget_1_transfer_amount').click();
        await page.locator('#widget_1_transfer_amount').fill('159');
        // await page.locator('#widget_1_transfer_title').click();
        await page.locator('#widget_1_transfer_title').fill('zwrot środków');

        await page.getByRole('button', { name: 'wykonaj' }).click();
        // await page.locator('#execute_btn').click();
        await page.getByTestId('close-button').click();
        // await page.getByRole('link', { name: 'Przelew wykonany! Chuck Demobankowy - 159,00PLN - zwrot środków' }).click();

        // flaky on some browsers ? to be verified
        // await expect(page.locator('#show_messages')).toHaveText('Przelew wykonany! Chuck Demobankowy - 159,00PLN - zwrot środków');

        await expect(page.getByTestId('message-text')).toHaveText('Przelew wykonany! Chuck Demobankowy - 159,00PLN - zwrot środków');
    });
});