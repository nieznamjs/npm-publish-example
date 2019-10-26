export const addAllArrayElements = (array: number[]) => array.reduce((prevValue: number, currValue: number) => {
  return prevValue + currValue;
});
