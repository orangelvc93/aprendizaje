import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe retornar "Hola Orangel"', () => {
    const name = "Orangel";
    const message = getSaludo(name);

    expect(message).toBe(`Hola ${name}`);
  });
});
