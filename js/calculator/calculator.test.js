const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
//Task 1: Implementing the calculator tests
test('divide 10 / 2 to equal 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

describe('Testing divide funcion', () => {
    test('divide by zero should return Infinity', () => {
        expect(calculator.divide(10, 0)).toBe(Infinity);
    })
    test('divide 0 by any number should return 0', () => {
        expect(calculator.divide(0, 5)).toBe(0);
    })
})

test('multiply 4 * 5 to equal 20', () => {
    expect(calculator.multiply(4, 5)).toBe(20);
})

describe('Testing multiply function', () => {
    test('multiply any number by 0 should return 0', () => {
        expect(calculator.multiply(4, 0)).toBe(0);
    });
    test('multiply any number by 1 should return the same number', () => {
        expect(calculator.multiply(7, 1)).toBe(7);
    });
})