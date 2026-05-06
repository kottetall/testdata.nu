import { randomFromArray } from "@kottetall/random";
import { ORGANIZATIONNUMBER } from "../constants/organizations.constant.js";

export function getOrganizationNumber() {
  return randomFromArray([...ORGANIZATIONNUMBER]);
}
