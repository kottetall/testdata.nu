import {
  GENDER,
  GENDERHTBQ,
  RELATIONSHIPSTATUS,
} from "../constants/person.constant.js";

export type Gender = (typeof GENDER)[keyof typeof GENDER];

export type GenderHtbq = (typeof GENDERHTBQ)[keyof typeof GENDERHTBQ];

export type RelationshipStatus =
  (typeof RELATIONSHIPSTATUS)[keyof typeof RELATIONSHIPSTATUS];
