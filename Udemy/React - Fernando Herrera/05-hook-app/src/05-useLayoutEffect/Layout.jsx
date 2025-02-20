import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";
import { useCounter, useFetch } from "../hooks";

export const Layout = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );
  return (
    <>
      <h1>Información del pokemon:</h1>
      <hr />
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={data.id}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      <button
        onClick={counter > 1 ? () => decrement() : null}
        className="btn btn-primary mt-2"
      >
        Anteriores
      </button>
      <button onClick={() => increment()} className="btn btn-primary mt-2">
        Siguientes
      </button>
    </>
  );
};
