import { add, copyArr } from "./app";

test("test add function in app.ts", () => {
  expect(add(1, 2)).toBe(3);
});

test("test copyArr function in app.ts", () => {
  const arr = [1, 2, 3, 4, 5];
  expect(copyArr(arr)).toEqual(arr);
  expect(copyArr(arr)).not.toBe(arr);
});
