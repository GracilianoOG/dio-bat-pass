import { OptionTypes } from "../types/optionTypes";
import * as Pass from "../constants/passwordPatterns";

const generatePassword = (options: OptionTypes) => {
  let pattern: string = "";

  if (options.uppercase) {
    pattern += Pass.UPPERCASE_LETTERS;
  }
  if (options.lowercase) {
    pattern += Pass.LOWERCASE_LETTERS;
  }
  if (options.numeric) {
    pattern += Pass.NUMERIC_CHARACTERS;
  }
  if (options.special) {
    pattern += Pass.SPECIAL_CHARACTERS;
  }

  const password: string[] = [];
  const PASS_LENGTH: number = 8;

  for (let i = 0; i < PASS_LENGTH; i++) {
    password.push(pattern.charAt(Math.floor(Math.random() * pattern.length)));
  }

  return password.join("");
};

export default generatePassword;
