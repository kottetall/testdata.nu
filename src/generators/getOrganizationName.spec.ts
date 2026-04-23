import { describe, test, expect } from "vitest";
import { getOrganizationName } from "./getOrganizationName";

describe("getOrganizationName", () => {
  test("Valid outputs", () => {
    console.log(getOrganizationName());
    expect(getOrganizationName()).toBeTruthy();
    expect(typeof getOrganizationName() === "string").toBe(true);
  });
});
