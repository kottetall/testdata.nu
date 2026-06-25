import { describe, test, expect } from "vitest";
import { getAdress, getMunicipality, getStreet, getZip } from "./getAddress.js";

describe("getAddress", () => {
  describe("getAdress", () => {
    test("Valid outputs", () => {
      expect(getAdress()).toBeTruthy();
      expect("street" in getAdress()).toBe(true);
      expect("zip" in getAdress()).toBe(true);
      expect("municipality" in getAdress()).toBe(true);
    });
  });

  describe("getStreet", () => {
    test("Valid outputs", () => {
      expect(getStreet()).toBeTruthy();
      expect(getStreet()).toMatch(/^[A-zåäöé\s]+\d{1,3}[A-zåäöé]?$/gi);
    });
  });

  describe("getZip", () => {
    test("Valid outputs", () => {
      expect(getZip()).toBeTruthy();
      expect(getZip()).toMatch(/^\d{5}$/gi);
    });
  });

  describe("getMunicipality", () => {
    test("Valid outputs", () => {
      expect(getMunicipality()).toBeTruthy();
      expect(getMunicipality()).toMatch(/^[A-zåäö]+$/gi);
    });
  });
});
