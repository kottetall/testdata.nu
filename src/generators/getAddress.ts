import {
  randomBoolean,
  randomFromArray,
  randomIntBetween,
} from "@kottetall/random";
import { MUNICIPALITY } from "../constants/municipalitys.constant.js";
import { STREETADDRESSES } from "../constants/addresses.constant.js";
import { ALPHABET } from "../constants/alphabet.constant.js";

export function getAdress() {
  return {
    street: getStreet(),
    zip: getZip(),
    municipality: getMunicipality(),
  };
}

export function getStreet() {
  const street = randomFromArray([...STREETADDRESSES]);
  const streetNumber = randomIntBetween(1, 99);
  const streetLetter = randomBoolean() ? randomFromArray([...ALPHABET]) : "";
  return `${street} ${streetNumber}${streetLetter}`;
}

export function getZip() {
  return `${randomIntBetween(11111, 99999)}`;
}

export function getMunicipality() {
  return randomFromArray([...MUNICIPALITY]);
}
