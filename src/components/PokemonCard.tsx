import Image from "next/image";
import Link from "next/link";

import { POKEMON_TYPE } from "@/constants/typeVariant";
import { formatName } from "@/utils/helper";

interface PokemonCardProps {
  id: number;
  name: string;
  image: string;
  type: string;
  type2?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  id,
  name,
  image,
  type,
  type2,
}) => {
  const pokemonName = formatName(name);

  return (
    <Link
      href={`/${name}`}
      className={`${POKEMON_TYPE[type].color} relative flex flex-col items-center justify-center rounded-lg shadow-custom transition duration-300 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none`}
    >
      <h3 className="pt-2">{`#0${id}`}</h3>
      <div className="relative aspect-square w-full h-auto">
        <Image
          className="p-6 md:p-8"
          src={image}
          alt="pokemon pic"
          fill
          sizes="(max-width: 250px) 100vw"
        />
      </div>
      <div className="flex flex-col flex-1 items-start w-full pt-0 p-4 gap-y-1">
        <h2 className="font-semibold text-lg w-full text-center">
          {pokemonName}
        </h2>
        <p className="w-full text-center">
          {`type: ${type} ${type2 ? type2 : ""}`}
        </p>
      </div>
    </Link>
  );
};

export default PokemonCard;
