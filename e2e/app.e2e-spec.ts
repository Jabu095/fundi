import { FundiPage } from './app.po';

describe('fundi App', () => {
  let page: FundiPage;

  beforeEach(() => {
    page = new FundiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
