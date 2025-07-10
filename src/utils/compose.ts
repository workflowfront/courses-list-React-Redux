type Func<T> = (arg: T) => T;

const compose =
  <T>(...funcs: Func<T>[]) =>
  (comp: T): T => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
  };

export default compose;
