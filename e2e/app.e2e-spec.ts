import { AnimalAngelsPage } from './app.po';

describe('animal-angels App', function() {
  let page: AnimalAngelsPage;

  beforeEach(() => {
    page = new AnimalAngelsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
