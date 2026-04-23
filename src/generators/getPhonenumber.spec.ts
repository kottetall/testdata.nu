import { describe, test, expect } from "vitest";
import { getPhonenumber } from "./getPhonenumber.js";

describe("getPhonenumber", () => {
  test("Valid outputs", () => {
    expect(getPhonenumber()).toBeTruthy();
    expect(getPhonenumber({ type: "cellphone" })).toMatch(/^070\d{7}$/);
    expect(getPhonenumber({ type: "landline" })).toMatch(
      /^(031|040|08|0980)\d{6,8}$/,
    );
    expect(getPhonenumber({ type: "all" })).toMatch(
      /^(070|031|040|08|0980)\d{6,8}$/,
    );
    expect(getPhonenumber({})).toMatch(/^(070|031|040|08|0980)\d{6,8}$/);
    expect(getPhonenumber()).toMatch(/^(070|031|040|08|0980)\d{6,8}$/);
  });
});
