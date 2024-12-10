export const generateRandomPassword = (): string => {
  let randomPassword = "";
  const set =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&!?0123456789";
  const passwordLength = Math.floor(Math.random() * 22) + 8;

  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * set.length);
    randomPassword += set[randomNumber];
  }

  const isValidPassword =
    /^[A-Za-z\d@#$%&!?]{8,30}$/.test(randomPassword) &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%&!?]).*$/.test(randomPassword);

  if (!isValidPassword) {
    generateRandomPassword();
  }

  return randomPassword;
};
