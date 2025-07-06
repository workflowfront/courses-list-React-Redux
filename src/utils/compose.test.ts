import compose from './compose';

describe('compose', () => {
  it('должен возвращать функцию, которая вызывает функции справа налево', () => {
    const double = (x: number) => x * 2;
    const square = (x: number) => x * x;
    const composed = compose(square, double);
    expect(composed(3)).toBe(36); // double(3) = 6, square(6) = 36
  });

  it('должен работать с одной функцией', () => {
    const inc = (x: number) => x + 1;
    const composed = compose(inc);
    expect(composed(5)).toBe(6);
  });

  it('должен возвращать исходный аргумент, если функций нет', () => {
    const composed = compose();
    expect(composed(10)).toBe(10);
  });
});
