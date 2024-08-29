import { useState, useEffect } from "react";
import Pokemons from "./components/Pokemos";

export default function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        setPokemons(jsonResponse.results);
      })
      .catch((error) => {
        console.log("fetch pokemons error:", error);
      });
  }, []);

  return (
    <main className="">
      <header>
        <h1 className="text-center font-bold text-2xl pt-4 border border-white/5">
          Pokedex
        </h1>
      </header>
      <section className="container mx-auto p-4 cursor-pointer">
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center max-w-screen-lg mx-auto">
          {pokemons.map((pokemon) => {
            return <Pokemons key={pokemon.name} name={pokemon.name}></Pokemons>;
          })}
        </div>
      </section>
    </main>
  );
}
