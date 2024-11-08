import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getMatchesButton(): Locator {
    return this.page.locator('a.mod-matches');
  }

  getForumButton(): Locator {
    return this.page.locator('a.mod-forums');
  }

  getHomeButton(): Locator {
    return this.page.locator('a.header-logo');
  }

  getSearchInput(): Locator {
    return this.page.locator('input.ui-autocomplete-input');
  }
}
