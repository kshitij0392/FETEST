import { FETESTPage } from './app.po';

describe('fetest App', () => {
  let page: FETESTPage;

  beforeEach(() => {
    page = new FETESTPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
