require('../src');

const addOne = (n) => n + 1;
const double = (n) => n * 2;
const sqrt = (n) => n * n;

describe('api.basic test', () => {
  test('nx.pipe multiple pipe', function () {
    const pipeFn1 = nx.pipe(addOne, double, sqrt);
    const pipeFn2 = nx.pipe(double, sqrt, addOne);
    expect(pipeFn1(10)).toBe(484);
    expect(pipeFn2(10)).toBe(401);
  });
});
