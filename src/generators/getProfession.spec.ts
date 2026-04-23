import { describe, test, expect } from "vitest";
import { getProfession } from "./getProfession";

describe("getProfession", () => {
  test("Valid outputs", () => {
    expect(getProfession()).toBeTruthy();
    expect(typeof getProfession() === "string").toBe(true);
  });
});
