import { Random, randomFromArray } from "@kottetall/random";
import { SSN, SSNFORMAT } from "../constants/ssn.constant.js";
import { Ssnformat } from "../types/ssn.model.js";
import { formatSsn } from "../utils/formatSsn.js";

export function getSsn(options?: { format?: Ssnformat }): string {
  options ??= {
    format: SSNFORMAT.YYYYMMDDNNNN,
  };

  let result = randomFromArray([...SSN]);

  const { format } = options;

  return formatSsn(result, format || SSNFORMAT.YYYYMMDDNNNN);
}
