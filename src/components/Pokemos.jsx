import { useEffect, useState } from "react";

export default function Pokemons({ name }) {
  const [pokemon, setPokemon] = useState({});
  console.log("pokemons", pokemon);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.log("fetch pokemons error:", error);
      });
  }, []);

  return (
    <article>
      <div className="bg-white rounded-lg p-3">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt={pokemon.name}
          className="w-full h-auto rounded-t-lg"
        />
        <h2 className="mt-2 text-gray-600 font-semibold">{name}</h2>
      </div>
    </article>
  );
}
