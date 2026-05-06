import { getSsn } from "../generators/getSsn.js";

import { GENDER } from "../constants/person.constant.js";
import { Gender } from "../types/person.model.js";

export class Ssn {
  ssn: string;
  year: string;
  month: string;
  date: string;
  gender: Gender;

  constructor(baseSsn?: string) {
    this.ssn = baseSsn || getSsn();
    this.year = Ssn.getYear(this.ssn);
    this.month = Ssn.getMonth(this.ssn);
    this.date = Ssn.getDate(this.ssn);
    this.gender = Ssn.getGender(this.ssn);
  }

  static getYear(ssn: string) {
    return ssn.slice(0, 4);
  }

  static getMonth(ssn: string) {
    return ssn.slice(4, 6);
  }

  static getDate(ssn: string) {
    return ssn.slice(6, 8);
  }

  static getGender(ssn: string) {
    const genderIndicator = ssn.slice(10, 11);
    return Number.parseInt(genderIndicator) % 2 === 0
      ? GENDER.FEMALE
      : GENDER.MALE;
  }
}
