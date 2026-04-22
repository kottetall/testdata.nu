import { describe, expect, test } from "vitest";
import { formatSsn } from "./formatSsn.js";
import { SSNFORMAT } from "../constants/ssn.constant.js";

describe("formatSsn", () => {
  test("Gives valid formats", () => {
    expect(formatSsn("000000000000", SSNFORMAT.YYYYMMDDNNNN)).toBe(
      "000000000000",
    );
    expect(formatSsn("000000000000", SSNFORMAT.YYMMDDNNNN)).toBe("0000000000");
    expect(formatSsn("000000000000", SSNFORMAT.YYYYMMDD_NNNN)).toBe(
      "00000000-0000",
    );
    expect(formatSsn("000000000000", SSNFORMAT.YYMMDD_NNNN)).toBe(
      "000000-0000",
    );
    expect(formatSsn("000000000000", SSNFORMAT.YYYY_MM_DD_NNNN)).toBe(
      "0000-00-00-0000",
    );
    expect(formatSsn("000000000000", SSNFORMAT.YY_MM_DD_NNNN)).toBe(
      "00-00-00-0000",
    );
    expect(formatSsn("000000000000", SSNFORMAT.YYYY_MM_DD)).toBe("0000-00-00");
    expect(formatSsn("000000000000", SSNFORMAT.YY_MM_DD)).toBe("00-00-00");
  });
});
