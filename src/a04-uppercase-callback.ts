type displayDataFunction = (data: string) => void;

const toUpperCase = (displayData: displayDataFunction): void => {
  console.log("Hello world!");
  setTimeout(() => {
    const data: string = "Today is monday!";
    displayData(data);
  }, 2000);
};
const displayData = (data: string) => {
  console.log(data);
};

toUpperCase(displayData);
