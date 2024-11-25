export const getNounWithDeclension = (
  length: number,
  one: string,
  fromTwoToFive: string,
  zeroAndFiveAndMore: string,
) => {
  let lengthForCompare = Number(String(length).slice(-2));

  if (lengthForCompare > 20) {
    lengthForCompare = Number(String(length).slice(-1));
  }

  switch (true) {
    case lengthForCompare === 1:
      return one;
    case [2, 3, 4].includes(lengthForCompare):
      return fromTwoToFive;
    default:
      return zeroAndFiveAndMore;
  }
};

export const prettifyPhone = (phone: string) => {
  if (!phone) return phone;
  let cleaned = phone.replace(/\D/g, '');

  if (cleaned.startsWith('9')) {
    cleaned = `7${cleaned}`;
  } else if (cleaned.startsWith('8')) {
    cleaned = `7${cleaned.slice(1)}`;
  }

  const match = cleaned.match(/^7(\d{3})(\d{2})(\d{2})(\d{3})$/);

  if (match) {
    return `+7 (${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
  }

  return phone;
};

export const unprettifyPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, '');
  return digits.slice(0, 11);
};

export const formatPhoneNumberInput = (number: string) => {
  let cleaned = number.replace(/[^\d+]/g, '');

  if (cleaned.startsWith('9')) {
    cleaned = `+7${cleaned}`;
  } else if (cleaned.startsWith('8')) {
    cleaned = `+7${cleaned.slice(1)}`;
  } else if (cleaned.startsWith('7')) {
    cleaned = `+${cleaned}`;
  }

  return cleaned;
};
