import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getOriginalPokemonType, getPokemonTypeDetail } from "@/lib/pokeAPI";
import { formatName } from "@/utils/helper";

import TypeRelationTable from "@/components/TypeRelationTable";
import PokemonList from "@/components/PokemonList";

interface ParamsProps {
  params: { pokemonType: number }
}

// generate dynamic Metadata
export async function generateMetadata(
  { params }: ParamsProps 
): Promise<Metadata> {
  const result = await getOriginalPokemonType(params.pokemonType);
  return {
    title: `${result?.typeName} - pokemon`
  }
}


export default async function PokemonTypePage({
  params,
}: ParamsProps
) {
  const { pokemonType } = params;
  // fetch data on the server component
  const results = await getOriginalPokemonType(pokemonType);

  // if results is null, will trigger the notFound page
  if (!results) {
    notFound();
  }
  const pokemonTypeList = await getPokemonTypeDetail(results.pokemons);

  return (
    <div className="mt-8">
      <h1 className="text-3xl text-gold text-center pb-4">
        {`${formatName(results.typeName)} pokemon list`}
      </h1>
      <TypeRelationTable typeRelation={results.typeRelation} />
      <PokemonList pokemonList={pokemonTypeList} />
    </div>
  );
}
