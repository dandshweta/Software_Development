export const changeToF = (val = 0) => {
  return (parseFloat(val) * 9) / 5 + 32;
};

export const changeToC = (val = 0) => {
  return ((parseFloat(val) - 32) * 5) / 9;
};
