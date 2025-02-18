import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Prueba en 08-imp-exp", () => {
  //   test("getHeroeById debe retornar un heroe por ID", () => {
  //     const id = 1;
  //     const heroe = getHeroeById(id);
  //     console.log(heroe);

  //     expect(heroe).toStrictEqual({ id: 1, name: "Batman", owner: "DC" });
  //   });

  //   test("getHeroeById debe retornar undefined si no existe ID", () => {
  //     const id = 100;
  //     const heroe = getHeroeById(id);
  //     console.log(heroe);

  //     expect(heroe).toStrictEqual(undefined);
  //     expect(heroe).toBeFalsy();
  //   });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    expect(heroes).toStrictEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);

    // Verifica la longitud del arreglo
    expect(heroes).toHaveLength(3);
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);
    console.log(heroes);
    // Verifica la longitud del arreglo
    expect(heroes).toHaveLength(2);
  });
});
