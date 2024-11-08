import { Page } from '@playwright/test';
import MatchesElements from '../elements/MatchesElements';
import BasePage from './BasePage';

export default class MatchesPage extends BasePage {
  readonly matchesElements: MatchesElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.matchesElements = new MatchesElements(page);
  }

  async goToFirstMatchPage(): Promise<void> {
    this.matchesElements.getFirstMatchRow().click();
  }

  async getMatchEvent(): Promise<void> {
    this.matchesElements.getMatchEvent().click();
  }
}
