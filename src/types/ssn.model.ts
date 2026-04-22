import { SSNFORMAT } from "../constants/ssn.constant.js";

export type Ssnformat = (typeof SSNFORMAT)[keyof typeof SSNFORMAT];
