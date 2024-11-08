import { expect, test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Basic navigation', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let homePage: HomePage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
  });

  test('Go to matches page', async ({ page }) => {
    await homePage.goToMatchesPage();
    await expect(page).toHaveURL(`${BASE_URL}/matches`);
  });

  test('Go to forum page', async ({ page }) => {
    await homePage.goToForumPage();
    await expect(page).toHaveURL(`${BASE_URL}/threads`);
  });

  test('Return to home page', async ({ page }) => {
    await homePage.returnToHomePage();
    await expect(page).toHaveURL(`${BASE_URL}`);
  });

  test('Search for a player name', async ({ page }) => {
    const playerName = 'Saadhak';
    await homePage.searchFor(playerName);
    await expect(page).toHaveURL(`${BASE_URL}/search/?q=${playerName}`);
  });
});
