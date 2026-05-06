import { randomFromArray } from "@kottetall/random";
import { ORGANIZATIONFORM } from "../constants/organizations.constant.js";

export function getOrganizationForm() {
  return randomFromArray([...ORGANIZATIONFORM]);
}
