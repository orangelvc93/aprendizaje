import { getImagen } from "../../src/base-pruebas/11-async-await";

describe("Prueba con 11-async-await", () => {
  test("getImagen debe devolver una url de la imagen", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
