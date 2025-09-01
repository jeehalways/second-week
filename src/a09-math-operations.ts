type Operation = "add" | "subtract" | "multiply" | "divide";

const calculate = (
  a: number,
  b: number,
  operation: Operation,
  callback: (result: number | string) => void
): void => {
  let result: number | string;
  switch (operation) {
    case "add":
      result = a + b;
      break;
    case "subtract":
      result = a - b;
      break;
    case "multiply":
      result = a * b;
      break;
    case "divide":
      result = b !== 0 ? a / b : "Error: division by zero";
      break;
    default:
      result = "Unknown operation";
  }
  callback(result);
};

calculate(10, 5, "multiply", (res) => {
  console.log("Result:", res);
});
