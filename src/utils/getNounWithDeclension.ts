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
