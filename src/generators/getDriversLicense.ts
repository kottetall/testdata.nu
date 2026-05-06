import { randomSampleFromArray } from "@kottetall/random";
import { DRIVERSLICENCES } from "../constants/driverslicense.constant.js";

export function getDriversLicense() {
  return randomSampleFromArray([...DRIVERSLICENCES]);
}
