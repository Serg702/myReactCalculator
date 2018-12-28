const verifyNumber = buttonValue => {
  return !isNaN(parseInt(buttonValue)) ? buttonValue : "";
};

export default verifyNumber;
