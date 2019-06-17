test('adds 1 + 2 to equal 3 in TScript', () => {
    const sum = require('./index.ts').default; // require('../index.js'); for js files
    expect(sum(1, 2)).toBe(3);
});
