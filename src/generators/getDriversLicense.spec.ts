import { describe, test, expect } from "vitest";
import { getDriversLicense } from "./getDriversLicense.js";
import { DRIVERSLICENCES } from "../constants/driverslicense.constant.js";

describe("getDriversLicense", () => {
  test("Valid outputs", () => {
    expect(getDriversLicense()).toBeTruthy();
    const resultToTest = getDriversLicense();
    for (const result of resultToTest) {
      expect(DRIVERSLICENCES.includes(result)).toBe(true);
    }
  });
});
