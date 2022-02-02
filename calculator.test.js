const calculatePlates = require('./calculator');
const fc = require('fast-check');

test('no result if weight cannot be made', () =>  {
    expect(calculatePlates(100, [1, 2, 5])).toEqual([]);
})

// TODO: Extract sum function
// TODO: Calculate all possible sums from array and test each as desired weights
test.skip('plates should always sum to the desired weight', () => {
    fc.assert(
        fc.property(fc.array(fc.float()), (plates) => {
            let desiredWeight = plates.reduce((a, b) => a + b, 0);
            let answer = calculatePlates(desiredWeight, plates);
            expect(answer.reduce((a, b) => a + b, 0)).toEqual(desiredWeight);
        })
    )
})