import { Ability } from "@/data.types";
import { Badge } from "@/components/ui/badge";
import { POKEMON_TYPE } from "@/constants/typeVariant";

interface SkillListProps {
  skillNames: Ability[];
  type: string;
}

const SkillList: React.FC<SkillListProps> = ({ skillNames, type }) => {
  return (
    <div className="flex gap-x-4 w-full items-center md:text-xl p-6 max-w-[500px] lg:max-w-[816px]">
      <h3 className="text-gold">Skills:</h3>
      <ul className="flex flex-wrap gap-x-3 gap-y-2">
        {skillNames.map((skill) => (
          <li key={skill.ability.name}>
            <Badge
              className={`${POKEMON_TYPE[type].color} md:text-base text-zinc-800 hover:text-zinc-100`}
            >
              {skill.ability.name}
            </Badge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
