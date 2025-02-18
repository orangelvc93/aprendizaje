import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp/>", () => {
  const InitialValue = 100;
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={InitialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor inicial de 100 <CounterApp value={100}", () => {
    render(<CounterApp value={InitialValue} />);
    expect(screen.getByText(100)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      "100"
    );
  });

  test("debe incrementar con el boton +1", () => {
    render(<CounterApp value={InitialValue} />);

    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("101")).toBeTruthy();
  });

  test("debe decrementar con el boton -1", () => {
    render(<CounterApp value={InitialValue} />);

    fireEvent.click(screen.getByText("-1"));
    // screen.debug();
    expect(screen.getByText("99")).toBeTruthy();
  });

  test("debe funcionar el boton de reset", () => {
    render(<CounterApp value={InitialValue} />);
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    // fireEvent.click(screen.getByText("Reset"));
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));

    expect(screen.getByText(InitialValue)).toBeTruthy();
  });
});
