const multipleMessages = (callback: (message: string) => void): void => {
  callback("First message");
  callback("Second message");
  callback("Third message");
};

multipleMessages((message) => {
  console.log(message);
});
