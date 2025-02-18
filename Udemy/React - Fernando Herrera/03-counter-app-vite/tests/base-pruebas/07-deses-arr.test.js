import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en 07-deses-arr", () => {
  test("Debe retornar un string y un número", () => {
    const [letter, number] = retornaArreglo();

    expect(letter).toBe("ABC");
    expect(number).toBe(123);

    expect(typeof letter).toBe("string");
    expect(typeof number).toBe("number");
  });
});
