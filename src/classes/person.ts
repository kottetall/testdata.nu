import { getName } from "../generators/getName.js";
import { getSsn } from "../generators/getSsn.js";
import { Gender } from "../types/person.model.js";
import { Ssn } from "./ssn.js";

export class Person {
  ssn: string;
  birthday: string;
  gender: Gender;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;

  constructor(baseSsn?: string) {
    const ssnUtil = new Ssn(baseSsn);
    this.ssn = ssnUtil.ssn;
    this.birthday = `${ssnUtil.year}-${ssnUtil.month}-${ssnUtil.date}`;
    this.gender = ssnUtil.gender;
    this.firstName = getName({ type: "first", gender: this.gender });
    this.lastName = getName({ type: "last" });
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.age = Person.getAge(ssnUtil.year);
  }

  static getAge(year: string) {
    const yearAsNumber = Number.parseInt(year);
    const currentYear = new Date().getFullYear();
    return currentYear - yearAsNumber;
  }
}
