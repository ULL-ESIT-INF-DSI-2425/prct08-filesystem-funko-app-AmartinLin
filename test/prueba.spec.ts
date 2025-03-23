import { describe, expect, test } from "vitest";
import { add, sub, mult, div, prod, conj, abs, complejo } from "../src/prueba.js";

describe("numeros complejos", () => {
  let complejo1 : complejo = [12, 5];
  let complejo2 : complejo = [5, 12];
  test("función add", () => {
    expect(add(complejo1, complejo2)).toStrictEqual([17, 17]);
  });

  test("función sub", () => {
    expect(sub(complejo1, complejo2)).toStrictEqual([7, -7]);
    expect(sub(complejo1, complejo1)).toStrictEqual([0, 0]);
  });

  test("función mult", () => {
    expect(mult([3, 4], [2, -5])).toStrictEqual([26, -7]);
    expect(mult([1, -1], [2, -3])).toStrictEqual([-1, -5]);
  });

  test("función div", () => {
    expect(div([4, 3], [2, 1])).toStrictEqual([11/5, 2/5]);
    expect(div([1, -1], [2, -3])).toStrictEqual([5/13, 1/13]);
  });

  test("función prod", () => {
    expect(prod([4, 3], 2)).toStrictEqual([8, 6]);
    expect(prod([1, -1], 4)).toStrictEqual([4, -4]);
  });

  test("función conj", () => {
    expect(conj(complejo1)).toStrictEqual([12, -5]);
    expect(conj(complejo2)).toStrictEqual([5, -12]);
  });

  test("función abs", () => {
    expect(abs(complejo1)).toStrictEqual(13);
    expect(abs(complejo2)).toStrictEqual(13);
  });
});
