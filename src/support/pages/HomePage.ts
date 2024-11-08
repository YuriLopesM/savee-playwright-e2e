import { Page } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async goToMatchesPage(): Promise<void> {
    await this.homeElements.getMatchesButton().click();
  }

  async goToForumPage(): Promise<void> {
    await this.homeElements.getForumButton().click();
  }

  async returnToHomePage(): Promise<void> {
    await this.homeElements.getHomeButton().click();
  }

  async searchFor(query: string): Promise<void> {
    await this.homeElements.getSearchInput().fill(query);
    await this.homeElements.getSearchInput().press('Enter');
  }
}
