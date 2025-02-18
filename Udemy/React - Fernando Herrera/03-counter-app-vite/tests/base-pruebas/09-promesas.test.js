import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas a 09-promesas", () => {
  test("getHeroeByIdAsync Debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toStrictEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  });

  test("getHeroeByIdAsync Debe retornar un error", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
      done();
    });
  });
});
