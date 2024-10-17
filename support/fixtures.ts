import { test as base } from '@playwright/test';
import LoginPage from '../pages/loginPage'
import InventoryPage from '../pages/inventoryPage'

type PageObjects = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
}

export const test = base.extend<PageObjects>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage)
    },
    inventoryPage: async ({ page }, use) => {
        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    }
})

export { expect } from '@playwright/test';