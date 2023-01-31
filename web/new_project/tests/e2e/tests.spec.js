// @ts-check
const { test, expect } = require('@playwright/test');
const { ForumPage } = require('../e2e/pages/forum_page');
const {  HomePage } = require('../e2e/pages/home_page');


test('first test', async ({ page }) => {
    const playwrightDev = new HomePage(page);
    await playwrightDev.page.goto('http://localhost:8080/')
    await playwrightDev.clickToCoreDocs()
    await playwrightDev.ValidationTitle()
  });

  test('second test', async ({ page }) => {
    const forumPage = new ForumPage(page);
    await forumPage.page.goto('http://localhost:8080/')
    await forumPage.clickToForumLink()
  //  await forumPage.makeScreenshotForum()
  });
