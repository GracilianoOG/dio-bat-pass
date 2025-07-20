const generatePassword = () => {
  const pattern: string = "Gx7#pL9@kQ8!zT2&mV4#sR6dW1";
  const password: string[] = [];
  const PASS_LENGTH: number = 8;

  for (let i = 0; i < PASS_LENGTH; i++) {
    password.push(pattern.charAt(Math.floor(Math.random() * pattern.length)));
  }

  return password.join("");
};

export default generatePassword;
