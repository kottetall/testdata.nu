import { describe, test, expect } from "vitest";
import { getOrganizationForm } from "./getOrganizationForm.js";
import { ORGANIZATIONFORM } from "../constants/organizations.constant.js";

describe("getOrganizationForm", () => {
  test("Valid outputs", () => {
    expect(getOrganizationForm()).toBeTruthy();
    expect(ORGANIZATIONFORM.includes(getOrganizationForm())).toBe(true);
  });
});
