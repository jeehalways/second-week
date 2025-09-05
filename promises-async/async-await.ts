//Step 1

const rollingDice = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    let result = Math.random();
    if (result > 0.5) {
      resolve("You win!");
    } else {
      reject("You lose!");
    }
  });
};

const playRollingDice = async () => {
  try {
    const message = await rollingDice();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
};

rollingDice();

//Step 2

const fetchAdvice = async (): Promise<void> => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log("Here is some advice for you:", data.slip.advice);
  } catch (error) {
    console.log("Failed to fetch advice:", error);
  }
};

//Step 3

const playGame = async () => {
  try {
    const result = await rollingDice();
    console.log(result);

    if (result === "You win!") {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log("Here is some advice for you:", data.slip.advice);
    }
  } catch (error) {
    console.log(error);
  }
};

playGame();
