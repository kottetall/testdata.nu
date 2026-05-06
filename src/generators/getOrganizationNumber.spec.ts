import { describe, test, expect } from "vitest";
import { getOrganizationNumber } from "./getOrganizationNumber.js";
import { ORGANIZATIONNUMBER } from "../constants/organizations.constant.js";

describe("getOrganizationNumber", () => {
  test("Valid outputs", () => {
    expect(getOrganizationNumber()).toBeTruthy();
    expect(ORGANIZATIONNUMBER.includes(getOrganizationNumber())).toBe(true);
  });
});
