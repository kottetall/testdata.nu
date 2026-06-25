import { describe, expect, test } from "vitest";
import { Person } from "./person.js";
import { GENDER } from "../constants/person.constant.js";

describe("Person", () => {
  test("Has expected fields", () => {
    expect(new Person().ssn).toBeTruthy();
    expect(new Person().birthday).toBeTruthy();
    expect(new Person("195007312589").birthday).toBe("1950-07-31");
    expect(new Person().gender).toBeTruthy();
    expect(new Person("195007312589").gender).toBe(GENDER.FEMALE);
    expect(new Person().firstName).toBeTruthy();
    expect(new Person().lastName).toBeTruthy();
    expect(new Person().fullName).toBeTruthy();
    expect(new Person().age).toBeTruthy();
  });

  test("getAge", () => {
    const today = new Date();
    expect(Person.getAge(today.toLocaleDateString("sv-SE"))).toBe(0);

    if (today.getMonth() > 0) {
      const lastMonth = new Date(today);
      lastMonth.setMonth(today.getMonth() - 1);
      lastMonth.setFullYear(today.getFullYear() - 1);
      console.log(lastMonth.toLocaleDateString("sv-SE"));
      expect(Person.getAge(lastMonth.toLocaleDateString("sv-SE"))).toBe(1);
    }

    if (today.getMonth() < 12) {
      const nextMonth = new Date(today);
      nextMonth.setMonth(today.getMonth() + 1);
      nextMonth.setFullYear(today.getFullYear() - 1);
      console.log(nextMonth.toLocaleDateString("sv-SE"));
      expect(Person.getAge(nextMonth.toLocaleDateString("sv-SE"))).toBe(0);
    }
  });
});
