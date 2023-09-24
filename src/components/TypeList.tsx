import { POKEMON_TYPE } from "@/constants/typeVariant";
import { Badge } from "@/components/ui/badge";

interface TypeListProps {
  typeNames: string[];
}

const TypeList = ({ typeNames }: TypeListProps) => {
  return (
    <>
      {!typeNames.length ? (
        <span className="text-gold md:text-lg">N/A</span>
      ) : (
        <ul className="flex flex-wrap gap-x-2 gap-y-1.5">
          {typeNames.map((typeName) => (
            <li key={typeName}>
              <Badge
                className={`${POKEMON_TYPE[typeName].color} md:text-base text-zinc-800 hover:text-zinc-100`}
              >
                {typeName}
              </Badge>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default TypeList;
