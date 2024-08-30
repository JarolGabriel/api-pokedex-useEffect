const POKEAPI_URL = `https://pokeapi.co/api/v2/pokemon`;

export async function getPokemonList(limit = 100) {
  const response = await fetch(`${POKEAPI_URL}?limit=${limit}`);
  const responsejson = await response.json();

  return responsejson.results;
}

export async function getPokemonByName(name) {
  const response = await fetch(`${POKEAPI_URL}/${name}`);

  const responsejson = await response.json();

  return responsejson;
}
