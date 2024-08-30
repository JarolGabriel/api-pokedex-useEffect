import { useEffect, useState } from "react";
import { getPokemonByName } from "../Api";
import { useNavigate } from "react-router-dom";

export default function Pokemons({ name }) {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemonByName(name)
      .then((jsonResponse) => {
        setPokemon(jsonResponse);
      })
      .catch((error) => {
        console.log("fetch pokemons error:", error);
      });
  }, []);

  return (
    <article
      onClick={() => {
        navigate(`pokemon/${name}`);
      }}
    >
      <div className="bg-white rounded-lg p-3 hover:bg-gray-300  border hover:border-red-600">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt={pokemon.name}
          className="w-full h-auto rounded-t-lg"
        />
        <h2 className="mt-2 text-gray-600 font-semibold hover:text-red-600">
          {name}
        </h2>
        <a className="capitalize">{name}</a>
      </div>
    </article>
  );
}
