import { test, expect } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import MatchesPage from '../support/pages/MatchesPage';

test.describe('Match info', () => {
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  let matchesPage: MatchesPage;
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    matchesPage = new MatchesPage(page);
    await page.goto(`${BASE_URL}/matches`);
  });

  test('Go to a match page', async ({ page }) => {
    await matchesPage.goToFirstMatchPage();

    // Pode mudar dependendo do horário do teste, pois a próx. partida é a primeira da lista
    await expect(page).toHaveURL(
      `${BASE_URL}/420108/de-la-salle-university-vs-oasis-gaming-predator-league-2025-philippines-sf`
    );
  });

  test('Check match event', async ({ page }) => {
    await matchesPage.goToFirstMatchPage();

    await matchesPage.getMatchEvent();

    // Pode mudar dependendo da partida
    await expect(page).toHaveURL(
      `${BASE_URL}/event/2213/predator-league-2025-philippines/main-event`
    );
  });
});
