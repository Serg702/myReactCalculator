import Big from "big.js";

const operations = (first, second, operation) => {
  const one = Big(first || "0");
  const two = Big(second || "0");
  if (operation === "+") {
    return one.plus(two).toString();
  }
  if (operation === "-") {
    return one.minus(two).toString();
  }
  if (operation === "x") {
    return one.times(two).toString();
  }
  if (operation === "÷") {
    return one.div(two).toString();
  }
  throw Error("Undefined operation " + operation);
};

export default operations;
