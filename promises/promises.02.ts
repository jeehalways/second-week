const flipCoinFunction = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
};

flipCoinFunction()
  .then((message) => {
    console.log(message);

    return fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        console.log("Here is some advise for you:", data.slip.advice);
      });
  })
  .catch((error) => {
    console.log(error);
  });
