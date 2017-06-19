import { NgWorkersPage } from './app.po';

describe('ng-workers App', () => {
  let page: NgWorkersPage;

  beforeEach(() => {
    page = new NgWorkersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
