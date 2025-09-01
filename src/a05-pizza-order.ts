type orderStatusFunction = (message: string) => void;

const orderPizza = (orderStatus: orderStatusFunction): void => {
  console.log("Placing order...");
  setTimeout(() => {
    const message = "Your order is ready!";
    orderStatus(message);
  }, 3000);
};

const orderStatus = (message: string): void => {
  console.log(message);
};

orderPizza(orderStatus);
