import { DnD5eCharacterMakerPage } from './app.po';

describe('dn-d5e-character-maker App', function() {
  let page: DnD5eCharacterMakerPage;

  beforeEach(() => {
    page = new DnD5eCharacterMakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
