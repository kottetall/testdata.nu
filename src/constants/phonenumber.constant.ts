import { PhonenumberRange } from "../types/phonenumber.model.js";

export const PHONENUMBERRANGES: PhonenumberRange[] = [
  {
    prefix: "070",
    min: 1740605,
    max: 1740699,
    type: "cellphone",
  },
  {
    prefix: "031",
    min: 3900600,
    max: 3900699,
    type: "landline",
  },
  {
    prefix: "040",
    min: 6280400,
    max: 6280499,
    type: "landline",
  },
  {
    prefix: "08",
    min: 46500400,
    max: 46500499,
    type: "landline",
  },
  {
    prefix: "0980",
    min: 319200,
    max: 319299,
    type: "landline",
  },
] as const;
