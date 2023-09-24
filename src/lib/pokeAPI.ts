import {
  Pokemon,
  PokemonData,
  PokemonType,
  PokemonTypeData,
  PokemonTypeUrl,
} from "@/data.types";


export async function getOriginalPokemonList(limit: number) {
  try {
    const response = await fetch(
      `${process.env.POKE_API}/pokemon?limit=${limit}&offset=0`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data: PokemonData = await response.json();
    return data;
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
}

export async function getPokemonDetail(data: PokemonData): Promise<Pokemon[]> {
  try {
    const pokemonData: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon data");
        }
        return response.json();
      }),
    );
    return pokemonData;
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
}

export async function getOriginalPokemonType(
  typeId: number,
): Promise<PokemonTypeData | null> {
  try {
    const response = await fetch(`${process.env.POKE_API}/type/${typeId}`);
    if (response.ok) {
      const data: PokemonType = await response.json();

      // filter the data to only return the specific type within the first 151 pokemons.
      const filteredData = data.pokemon.filter((pokemonData) => {
        const urlParts = pokemonData.pokemon.url.split("/");
        const pokemonNumber = parseInt(urlParts[6]);
        return pokemonNumber <= 151;
      });
      // return the data shape as PokemonTypeData
      return {
        typeName: data.name,
        typeRelation: data.damage_relations,
        pokemons: filteredData,
      };
    } else if (response.status === 404) {
      return null;
    }
    throw new Error("Network error or something went wrong...");
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
}

export async function getPokemonTypeDetail(
  datas: PokemonTypeUrl[],
): Promise<Pokemon[]> {
  try {
    const pokemonData: Pokemon[] = await Promise.all(
      datas.map(async (data) => {
        const response = await fetch(data.pokemon.url);
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon data");
        }
        return response.json();
      }),
    );
    return pokemonData;
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
}

export async function getPokemonStats(
  pokemonName: string,
): Promise<Pokemon | null> {
  try {
    const response = await fetch(`${process.env.POKE_API}/pokemon/${pokemonName}`);
    if (response.ok) {
      return response.json();
    } else if (response.status === 404) {
      return null;
    }
    throw new Error("Network error or something went wrong...");
  } catch (err) {
    if (err instanceof Error) {
      throw err.message;
    }
    throw err;
  }
}
