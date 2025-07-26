import { OptionTypes } from "../types/optionTypes";

const generatePassword = (options: OptionTypes) => {
  const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
  const NUMERIC_CHARACTERS = "0123456789";
  const SPECIAL_CHARACTERS = "!@#$%&*";

  let pattern: string = "";

  if (options.uppercase) {
    pattern += UPPERCASE_LETTERS;
  }
  if (options.lowercase) {
    pattern += LOWERCASE_LETTERS;
  }
  if (options.numeric) {
    pattern += NUMERIC_CHARACTERS;
  }
  if (options.special) {
    pattern += SPECIAL_CHARACTERS;
  }

  const password: string[] = [];
  const PASS_LENGTH: number = 8;

  for (let i = 0; i < PASS_LENGTH; i++) {
    password.push(pattern.charAt(Math.floor(Math.random() * pattern.length)));
  }

  return password.join("");
};

export default generatePassword;
