import { SSNFORMAT } from "../constants/ssn.constant.js";
import { Ssnformat } from "../types/ssn.model.js";

export function formatSsn(source: string, format: Ssnformat): string {
  const matches = source.match(/^(\d{4})(\d{2})(\d{2})(\d{4})$/);
  if (!matches) {
    throw new Error("Invalid source");
  }

  const [full, year, month, day, control] = [...matches];

  const shortYear = year.slice(2);

  switch (format) {
    case SSNFORMAT.YYYYMMDDNNNN:
      return `${year}${month}${day}${control}`;
    case SSNFORMAT.YYMMDDNNNN:
      return `${shortYear}${month}${day}${control}`;
    case SSNFORMAT.YYYYMMDD_NNNN:
      return `${year}${month}${day}-${control}`;
    case SSNFORMAT.YYMMDD_NNNN:
      return `${shortYear}${month}${day}-${control}`;
    case SSNFORMAT.YYYY_MM_DD_NNNN:
      return `${year}-${month}-${day}-${control}`;
    case SSNFORMAT.YY_MM_DD_NNNN:
      return `${shortYear}-${month}-${day}-${control}`;
    case SSNFORMAT.YYYY_MM_DD:
      return `${year}-${month}-${day}`;
    case SSNFORMAT.YY_MM_DD:
      return `${shortYear}-${month}-${day}`;
  }
}
