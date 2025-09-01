const sayHelloLater = () => {
  setTimeout(() => {
    console.log("Hi, I am late!");
  }, 2000);
};

sayHelloLater();
