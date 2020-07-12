export const add = (a: number, b: number): number => {
  return a + b;
};

export const copyArr = (arr: Array<Number>): Array<Number> => {
  return [...arr];
};

console.log(add(1, 1));
