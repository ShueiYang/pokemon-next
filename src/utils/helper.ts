import { Species } from "@/data.types";

//format first letter to uppercase
export function formatName(name: string) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

export function generateTypeList(typeList: Species[]) {
  return typeList.map((type) => type.name);
}
