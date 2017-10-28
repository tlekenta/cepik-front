import { CepikFrontPage } from './app.po';

describe('cepik-front App', () => {
  let page: CepikFrontPage;

  beforeEach(() => {
    page = new CepikFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
