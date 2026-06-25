import { getAdress } from "../generators/getAddress.js";
import { getName } from "../generators/getName.js";
import { Gender } from "../types/person.model.js";
import { Ssn } from "./ssn.js";
import { Address } from "../types/address.model.js";

export class Person {
  ssn: string;
  birthday: string;
  gender: Gender;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  address: Address;

  constructor(baseSsn?: string) {
    const ssnUtil = new Ssn(baseSsn);
    this.ssn = ssnUtil.ssn;
    this.birthday = `${ssnUtil.year}-${ssnUtil.month}-${ssnUtil.date}`;
    this.gender = ssnUtil.gender;
    this.firstName = getName({ type: "first", gender: this.gender });
    this.lastName = getName({ type: "last" });
    this.fullName = `${this.firstName} ${this.lastName}`;
    this.age = Person.getAge(this.birthday);
    this.address = getAdress();
  }

  get municipality() {
    return this.address.municipality;
  }

  get street() {
    return this.address.street;
  }

  get zip() {
    return this.address.zip;
  }

  static getAge(birthday: string): number {
    const [year, month, day] = birthday.split("-");
    const [currentYear, currentMonth, currentDay] = new Date()
      .toLocaleDateString("sv-SE")
      .split("-");

    if (currentYear === year) return 0;

    const approximateAge = Number.parseInt(currentYear) - Number.parseInt(year);
    let ageModifier = 0;
    if (Number.parseInt(currentMonth) < Number.parseInt(month)) {
      ageModifier = 1;
    }
    if (
      Number.parseInt(currentMonth) === Number.parseInt(month) &&
      Number.parseInt(currentDay) < Number.parseInt(day)
    ) {
      ageModifier = 1;
    }
    const exactAge = approximateAge - ageModifier;
    return exactAge;
  }
}
