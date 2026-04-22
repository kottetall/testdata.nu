import { randomFromArray } from "@kottetall/random";
import {
  FIRSTNAMESFEMALE,
  FIRSTNAMESMALE,
  SURNAMES,
} from "../constants/names.constant.js";

export function getName(options?: {
  type?: "first" | "last" | "full";
  gender?: "male" | "female" | "all";
}): string {
  options ??= {
    type: "full",
    gender: "all",
  };

  let { type, gender } = options;
  type ??= "full";
  gender ??= "all";

  if (type === "last") return randomFromArray([...SURNAMES]);

  const firstNamePool: string[] = [];

  if (gender === "all" || gender === "male")
    firstNamePool.push(...FIRSTNAMESMALE);
  if (gender === "all" || gender === "female")
    firstNamePool.push(...FIRSTNAMESFEMALE);

  if (type === "first") return randomFromArray(firstNamePool);

  return `${randomFromArray(firstNamePool)} ${randomFromArray([...SURNAMES])}`;
}
