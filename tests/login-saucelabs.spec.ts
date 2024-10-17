import { test, expect } from '../support/fixtures'
test.describe('Login', () => {
    test('should login with valid credentials', async ({ loginPage, inventoryPage }) => {
        await loginPage.visit();
        await loginPage.login('standard_user', 'secret_sauce');
    
        await expect(inventoryPage.invetoryContainer).toBeVisible()
    })
})
