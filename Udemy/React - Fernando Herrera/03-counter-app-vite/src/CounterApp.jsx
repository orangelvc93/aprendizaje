import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handlerAdd = (event) => setCounter(counter + 1);

  const handlerDelete = (event) => setCounter(counter - 1);

  const handlerReset = (event) => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      <button onClick={handlerAdd}> +1 </button>
      <button onClick={handlerDelete}> -1 </button>
      <button aria-label="btn-reset" onClick={handlerReset}>
        {" "}
        Reset{" "}
      </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
