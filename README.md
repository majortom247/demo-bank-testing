# demo-bank-testing

This README is for mostly personal use to note and remember things on the fly as I learn.

I decided to write test agains a simple demo banking site to be able to use various scenarios.

The SUT is https://demo-bank.vercel.app/

The repo will be updated as I write more tests.

## Commands
- new project with Playwright  
`npm init playwright@latest`
- record tests for given site  
`npx playwright codegen https://demo-bank.vercel.app/`
- run tests without browser GUI  
`npx playwright test`
- run tests with browser GUI  
`npx playwright test --headed`
- run tests with browser GUI in debug mode (step by step testing for debugging) 
`npx playwright test --debug`
- view report  
`npx playwright show-report`

## Playwright Config modifications
- config file `playwright.config.ts`
- disable browsers when needed, i.e. disable Firefox (cmd + /)
    ```javascript
    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    ```
## Playwright snippets for quick use
- test:
    ```javascript
    test('test description', async ({ page }) => {
    
    });
    ```
- describe:
    ```javascript
     describe('Group description', () => {

     });
    ```
- running one test -> use `test.only`
