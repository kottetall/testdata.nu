import { randomFromArray } from "@kottetall/random";
import { PROFESSIONS } from "../constants/professions.constant.js";

export function getProfession(): string {
  return randomFromArray([...PROFESSIONS]);
}
