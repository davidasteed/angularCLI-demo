import { AngularCLIDemoPage } from './app.po';

describe('angular-cli-demo App', function() {
  let page: AngularCLIDemoPage;

  beforeEach(() => {
    page = new AngularCLIDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
