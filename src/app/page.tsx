import { getOriginalPokemonList, getPokemonDetail } from "@/lib/pokeAPI";
import PokedexContent from "@/components/PokedexContent";

// test force dynamically rendered
// export const revalidate = 0;


export default async function Home() {
  // fetch data on the server component
  const pokemonList = await getOriginalPokemonList(151);
  const pokemonDatas = await getPokemonDetail(pokemonList);

  return (
    <PokedexContent pokemonDatas={pokemonDatas} />
  );
}
