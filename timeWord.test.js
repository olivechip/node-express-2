const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('midnight and noon', ()=> {
    expect(timeWord("12:00")).toBe("noon");
    expect(timeWord("00:00")).toBe("midnight");
  })
});