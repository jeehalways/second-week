const randomOperation = (
  successCallback: (msg: string) => void,
  errorCallback: (err: string) => void
): void => {
  if (Math.random() > 0.5) {
    successCallback("Operation succeeded!");
  } else {
    errorCallback("Operation failed!");
  }
};

randomOperation(
  (msg) => console.log("✅", msg),
  (err) => console.log("❌", err)
);
