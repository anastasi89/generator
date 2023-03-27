import Character from '../character';

test.each([
  ['символы', 'КАКОЙ-ТО ТЕКСТ!', 656, 'Daemon'],
  ['один символ', 'текст', 'т', 'Bowman'],
  ['снова символы', 'текст', 'аепапвчарукп', 'Zombie'],
  ['текст', 'снова символы', 'aбвгд', 'JJJ'],
])('check class %s', (_, expected, paramName, paramType) => {
  expect(() => {
    const result = new Character(paramName, paramType);
    return result;
  }).toThrow(expected);
});
