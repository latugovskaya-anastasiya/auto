const { expect } = require('@playwright/test');
exports.ForumPage = class ForumPage{
    constructor(page){
        this.page = page;
        this.forumLink = page.locator('a', {hasText: 'Forum'});
    }
        async clickToForumLink(){
            await this.forumLink.click()
        }


    }
