import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getOriginalPokemonList, getPokemonStats } from "@/lib/pokeAPI";
import { formatName } from "@/utils/helper";

import PreviousButton from "@/components/PreviousButton";
import PokemonStatBar from "@/components/PokemonStatBar";
import SkillList from "@/components/SkillList";

interface PokemonProps {
  params: { pokemonName: string }
}

// generate dynamic Metadata
export async function generateMetadata(
  { params }: PokemonProps
): Promise<Metadata> {
  return {
    title: `${formatName(params.pokemonName)}`
  }
}
// statically generate routes at build time instead of on-demand at request time.
export async function generateStaticParams() {
  const pokemonlist = await getOriginalPokemonList(9);
  const paths = pokemonlist.results.map((pokemon) => {
    return { pokemonName: pokemon.name }
  })
  return paths;
}


export default async function PokemonPage({
  params,
}: PokemonProps
) {
  const { pokemonName } = params;
  // fetch data on the server component
  const pokemonStat = await getPokemonStats(pokemonName);

  // if pokemonStat is null, will trigger the notFound page
  if (!pokemonStat) {
    notFound();
  }

  const imageUrl =
    pokemonStat.sprites.other?.home.front_default ??
    pokemonStat.sprites.front_default;

  return (
    <div className="flex flex-col items-center mt-6 p-6">
      <PreviousButton />
      <h1 className="text-5xl font-medium text-gold text-center">
        {formatName(pokemonStat.name)}
      </h1>
      <div className="flex flex-col w-full lg:flex-row lg:justify-center lg:gap-x-4">
        <div>
          <Image
            className="mx-auto w-60 sm:w-[300px] aspect-square"
            src={imageUrl}
            alt={`${pokemonName} picture`}
            width={300}
            height={300}
            priority
          />
          <p className="text-xl p-6 text-gold text-center">
            {`Weight: ${pokemonStat.weight}`}
          </p>
        </div>
        <div className="flex flex-col max-w-[500px] w-full p-6 mx-auto lg:mx-0 lg:justify-center">
          {pokemonStat.stats.map((elem) => {
            return (
              <div
                key={elem.stat.name}
                className="flex items-center justify-between gap-4 text-slate-50 p-1.5"
              >
                <h3 className="sm:text-lg w-1/2">
                  {`${elem.stat.name}: ${elem.base_stat}`}
                </h3>
                {/* client component to delay animation */}
                <PokemonStatBar
                  stats={elem.base_stat >= 150 ? 150 : elem.base_stat}
                  type={pokemonStat.types[0].type.name}
                />
              </div>
            );
          })}
        </div>
      </div>
      <SkillList
        skillNames={pokemonStat.abilities}
        type={pokemonStat.types[0].type.name}
      />
    </div>
  );
}
