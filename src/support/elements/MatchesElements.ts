import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class MatchesElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getFirstMatchRow(): Locator {
    const firstCard = this.page.locator('.wf-card').nth(1);
    const firstModuleItem = firstCard.locator('.wf-module-item').first();

    return firstModuleItem;
  }

  getMatchEvent(): Locator {
    return this.page.locator('.match-header-event');
  }
}
