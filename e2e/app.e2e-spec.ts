import { CafeNexusPage } from './app.po';

describe('cafe-nexus App', () => {
  let page: CafeNexusPage;

  beforeEach(() => {
    page = new CafeNexusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
