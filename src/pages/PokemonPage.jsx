import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokemonByName } from "../Api";

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getPokemonByName(name)
      .then((pokemonResponse) => setPokemon(pokemonResponse))
      .catch((error) => console.log("[get pokemon by name]:", error));
  }, []);

  if (!pokemon.name) {
    return (
      <main className="w-screen h-screen flex items-center justify-center font-bold text-red-700">
        POKEMON NOT FOUND
      </main>
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto flex flex-col justify-center items-center p-3 border rounded-lg h-[22rem] w-[22rem] bg-white mt-20">
      <div className="border border-black w-full flex justify-center hover:bg-slate-400">
        <img
          src={pokemon.sprites?.other["official-artwork"]?.front_default}
          alt={name}
          className="h-52 w-52 "
        />
      </div>
      <div className="flex flex-col text-center text-gray-600 ml-3 font-semibold">
        <h1 className="mb-2 text-lg">{name}</h1>
        <div className="flex flex-col justify-evenly">
          <div className="space-x-8">
            {pokemon.types?.map((type) => {
              return (
                <span className="text-gray-600" key={type.slot}>
                  {type?.type?.name}
                </span>
              );
            })}
          </div>

          <div className="space-x-8">
            <span className="">{pokemon.height} m</span>
            <span>{pokemon.weight} kg</span>
          </div>
        </div>
      </div>
    </main>
  );
}
