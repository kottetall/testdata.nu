import { GenderHtbq, RelationshipStatus } from "../types/person.model.js";

export const GENDER = {
  MALE: "male",
  FEMALE: "female",
} as const;

export const GENDERHTBQ = {
  ...GENDER,
  TRANS_MTF: "trans_mtf",
  TRANS_FTM: "trans_ftm",
  NONBINARY: "nonbinary",
} as const;

export const GENDERDICTIONARY: Record<GenderHtbq, string> = {
  [GENDERHTBQ.MALE]: "man",
  [GENDERHTBQ.FEMALE]: "kvinna",
  [GENDERHTBQ.TRANS_MTF]: "transsexuell (mtf)",
  [GENDERHTBQ.TRANS_FTM]: "transsexuell (ftm)",
  [GENDERHTBQ.NONBINARY]: "ickebinär",
} as const;

export const RELATIONSHIPSTATUS = {
  MARRIED: "married",
  SINGLE: "single",
  WIDOW: "widow",
  COHABITANT: "cohabitant",
} as const;

export const RELATIONSHIPSTATUSDICTIONARY: Record<RelationshipStatus, string> =
  {
    [RELATIONSHIPSTATUS.MARRIED]: "gift",
    [RELATIONSHIPSTATUS.SINGLE]: "singel",
    [RELATIONSHIPSTATUS.WIDOW]: "änka/änkling",
    [RELATIONSHIPSTATUS.COHABITANT]: "sambo",
  } as const;
