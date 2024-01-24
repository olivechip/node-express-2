const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
  test('midnight and noon', ()=> {
    expect(timeWord("12:00")).toBe("noon");
    expect(timeWord("00:00")).toBe("midnight");
  });
  test('am', () => {
    expect(timeWord(`${Math.floor(Math.random()*12)}:${Math.floor(Math.random()*60)}`)).toMatch(/(am)/i)
  });
  test("o'clock", () => {
    expect(timeWord(`${Math.floor(Math.random()*25)}:00`)).toMatch(/(o'clock|noon|midnight)/i)
  });
});