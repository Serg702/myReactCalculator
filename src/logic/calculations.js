import Big from "big.js";
import operations from "./operations";
import verifyNumber from "./verifyNumber";

const calculations = (obj, buttonValue) => {
  if (buttonValue === "AC") {
    return {
      total: null,
      current: null,
      operation: null
    };
  }

  if (verifyNumber(buttonValue)) {
    if (buttonValue === "0" && obj.current === "0") {
      return {};
    }

    if (obj.operation) {
      if (obj.current) {
        return { current: obj.current + buttonValue };
      }
      return { current: buttonValue };
    }

    if (obj.current) {
      return {
        current: obj.current + buttonValue,
        total: null
      };
    }
    return {
      current: buttonValue,
      total: null
    };
  }

  if (buttonValue === "%") {
    if (obj.operation && obj.current) {
      const result = operations(obj.total, obj.current, obj.operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        current: null,
        operation: null
      };
    }
    if (obj.current) {
      return {
        current: Big(obj.current)
          .div(Big("100"))
          .toString()
      };
    }
    return {};
  }

  if (buttonValue === ".") {
    if (obj.current) {
      if (obj.current.includes(".")) {
        return {};
      }
      return { current: obj.current + "." };
    }
    return { current: "0." };
  }

  if (buttonValue === "=") {
    if (obj.current && obj.operation) {
      return {
        total: operations(obj.total, obj.current, obj.operation),
        current: null,
        operation: null
      };
    } else {
      return {};
    }
  }

  if (buttonValue === "+/-") {
    if (obj.current) {
      return { current: (-1 * parseFloat(obj.current)).toString() };
    }
    if (obj.total) {
      return { total: (-1 * parseFloat(obj.total)).toString() };
    }
    return {};
  }

  if (obj.operation) {
    return {
      total: operations(obj.total, obj.current, obj.operation),
      current: null,
      operation: buttonValue
    };
  }

  if (!obj.current) {
    return { operation: buttonValue };
  }

  return {
    total: obj.current,
    current: null,
    operation: buttonValue
  };
};

export default calculations;
