import { describe, test, expect } from "vitest";
import { getName } from "./getName.js";

describe("getSname", () => {
  test("Valid outputs", () => {
    expect(getName()).toBeTruthy();
    expect(typeof getName() === "string").toBe(true);
    expect(getName({ type: "first" })).toMatch(/^[a-zåäö]+$/gi);
    expect(getName({ type: "last" })).toMatch(/^[a-zåäö]+$/gi);
    expect(getName({ type: "full" })).toMatch(/^[a-zåäö]+\s[a-zåäö]+$/gi);
  });
});
