const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegex = /^[0-9\s()+-]*$/;

const numbersRegex = /^\d*$/;

const checkEmailValid = (email: string) => emailRegEx.test(email);

const checkPhoneNumberValid = (phone: string) => phoneRegex.test(phone);

export const checkIsOnlyNumbers = (input: string) => numbersRegex.test(input);

export const isPhoneNumberValid = (phone: string) => {
  const isValid = phone.length ? checkPhoneNumberValid(phone) : true;

  return isValid;
};

export const isEmailValid = (email: string): boolean => {
  const isValid = email.length ? checkEmailValid(email) : true;

  return isValid;
};

export const isConfirmationCodeValid = (code: string) => {
  const checkIsCodeValid = code?.length ? checkIsOnlyNumbers(code) : false;

  return checkIsCodeValid;
};
