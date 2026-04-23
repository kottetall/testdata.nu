import { randomFromArray } from "@kottetall/random";
import { ORGANIZATIONNAMES } from "../constants/organizations.constant.js";

export function getOrganizationName(): string {
  return randomFromArray([...ORGANIZATIONNAMES]);
}
