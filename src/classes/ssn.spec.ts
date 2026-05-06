import { describe, expect, test } from "vitest";
import { Ssn } from "./ssn.js";
import { GENDER } from "../constants/person.constant.js";

describe("Ssn", () => {
  test("Has expected fields", () => {
    expect(new Ssn().ssn).toBeTruthy();
    expect(new Ssn().year).toBeTruthy();
    expect(new Ssn("195007312589").year).toBe("1950");
    expect(new Ssn().month).toBeTruthy();
    expect(new Ssn("195007312589").month).toBe("07");
    expect(new Ssn().date).toBeTruthy();
    expect(new Ssn("195007312589").date).toBe("31");
    expect(new Ssn().gender).toBeTruthy();
    expect(new Ssn("195007312589").gender).toBe(GENDER.FEMALE);
  });
  test("getYear", () => {
    expect(Ssn.getYear("195007312589")).toBe("1950");
  });
  test("getMonth", () => {
    expect(Ssn.getMonth("195007312589")).toBe("07");
  });
  test("getDate", () => {
    expect(Ssn.getDate("195007312589")).toBe("31");
  });
  test("getGender", () => {
    expect(Ssn.getGender("195007312589")).toBe(GENDER.FEMALE);
    expect(Ssn.getGender("195008072307")).toBe(GENDER.FEMALE);
    expect(Ssn.getGender("195110121695")).toBe(GENDER.MALE);
  });
});
