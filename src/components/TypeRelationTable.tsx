import { DamageRelations } from "@/data.types";
import { generateTypeList } from "@/utils/helper";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TypeList from "@/components/TypeList";

interface TypeRelationProps {
  typeRelation: DamageRelations;
}

export default function TypeRelationTable({ typeRelation }: TypeRelationProps) {
  const {
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_from,
    no_damage_to,
  } = typeRelation;

  const doubleDamageFrom = generateTypeList(double_damage_from);
  const doubleDamageTo = generateTypeList(double_damage_to);
  const halfDamageFrom = generateTypeList(half_damage_from);
  const halfDamageTo = generateTypeList(half_damage_to);
  const noDamageFrom = generateTypeList(no_damage_from);
  const noDamageTo = generateTypeList(no_damage_to);

  // spread type name into each category
  const strenghtArray = [...doubleDamageTo];
  const weaknessArray = [...halfDamageTo, ...noDamageTo];
  const resistantArray = [...halfDamageFrom, ...noDamageFrom];
  const vulnerableArray = [...doubleDamageFrom];

  // create an array for the table...
  const damageRelationsArray = [
    {
      category: "Strenght",
      description: "inflicts Double damage",
      Typelist: strenghtArray,
    },
    {
      category: "Weakness",
      description: "inflicts Half or Zero damage",
      Typelist: weaknessArray,
    },
    {
      category: "Resistant",
      description: "takes Half or Zero damage",
      Typelist: resistantArray,
    },
    {
      category: "Vulnerable",
      description: "takes Double damage",
      Typelist: vulnerableArray,
    },
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[15%] text-slate-300">Category</TableHead>
          <TableHead className="w-[25%] text-slate-300">
            Effect description
          </TableHead>
          <TableHead className="text-slate-300">Typelist</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {damageRelationsArray.map((obj) => (
          <TableRow key={obj.category}>
            <TableCell className="font-medium text-slate-50 md:text-lg">
              {obj.category}
            </TableCell>
            <TableCell className="text-slate-50 md:text-lg">
              {obj.description}
            </TableCell>
            <TableCell>
              <TypeList typeNames={obj.Typelist} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
