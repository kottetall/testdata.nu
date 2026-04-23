import { randomFromArray, randomIntBetween } from "@kottetall/random";
import { PHONENUMBERRANGES } from "../constants/phonenumber.constant.js";
import { PhonenumberRange } from "../types/phonenumber.model.js";

export function getPhonenumber(options?: {
  type?: "cellphone" | "landline" | "all";
}): string {
  options ??= {
    type: "all",
  };

  let { type } = options;

  type ??= "all";

  const seedPool: PhonenumberRange[] = PHONENUMBERRANGES.filter(
    (range) => type === "all" || range.type === type,
  );
  const randomRange = randomFromArray(seedPool);

  // TODO: Add format option
  const generatedPhonenumber = `${randomRange.prefix}${randomIntBetween(randomRange.min, randomRange.max)}`;
  return generatedPhonenumber;
}
