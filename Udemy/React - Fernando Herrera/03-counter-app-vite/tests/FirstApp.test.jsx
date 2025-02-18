import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/>", () => {
  // test("Debe hacer match con el snapshot", () => {
  //   const title = "Hola, soy Goku";
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("debe mostrar el título en un h1", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toBe(title);
    expect(getByTestId("test-title").innerHTML).toBe(title);
  });

  test("debe mostrar el subtitulo mostrado por props", () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getByText, getAllByText } = render(
      <FirstApp title={title} subtitle={subTitle} />
    );
    expect(getByText(subTitle)).toBeTruthy();
    expect(getAllByText(subTitle).length).toBe(2);
  });
});
