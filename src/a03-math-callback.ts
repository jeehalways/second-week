type callbackFunction = (result: number) => void;

const addNumbers = (a: number, b: number, callback: callbackFunction) => {
  const result = a + b;
  callback(result);
};

const callback = (result: number) => {
  console.log("The result is:", result);
};

addNumbers(36, 22, callback);
