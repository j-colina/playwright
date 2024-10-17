import { type Page, type Locator } from '@playwright/test';

class InventoryPage {

    private page: Page;
    readonly invetoryContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.invetoryContainer = page.locator('[data-test="inventory-container1"]');
    }
}
export default InventoryPage