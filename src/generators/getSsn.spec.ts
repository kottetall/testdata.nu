import { describe, expect, test } from "vitest";
import { getSsn } from "./getSsn.js";

describe("getSsn", () => {
  test("", () => {
    expect(getSsn()).toBeTruthy();
    expect(typeof getSsn() === "string").toBe(true);
    expect(getSsn()).toMatch(/^\d{12}$/);
  });
});
