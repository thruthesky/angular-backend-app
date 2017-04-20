import { CommunityAppAlphaPage } from './app.po';

describe('community-app-alpha App', () => {
  let page: CommunityAppAlphaPage;

  beforeEach(() => {
    page = new CommunityAppAlphaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
