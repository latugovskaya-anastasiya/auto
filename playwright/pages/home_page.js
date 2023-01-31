const { expect } = require('@playwright/test');
exports.HomePage = class HomePage {
    constructor(page){
        this.page = page;
        this.coreDocsLink = page.locator('a', {hasText: 'Core Docs'});
        this.title = page.locator(this.page.title)
    }

    async clickToCoreDocs(){
       await this.coreDocsLink.click()
    }

    async ValidationTitle(){
        await expect(this.page).toHaveTitle('new_project');
    }
    
}