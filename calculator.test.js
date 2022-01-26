const calculatePlates = require('./calculator');

test('no result if weight cannot be made', () =>  {
    expect(calculatePlates(100, [1, 2, 5])).toEqual([]);
})