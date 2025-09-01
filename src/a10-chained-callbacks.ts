const step1 = (callback: () => void): void => {
  setTimeout(() => {
    console.log("Step 1 done");
    callback();
  }, 1000);
};

const step2 = (callback: () => void): void => {
  setTimeout(() => {
    console.log("Step 2 done");
    callback();
  }, 1000);
};

const step3 = (callback: () => void): void => {
  setTimeout(() => {
    console.log("Step 3 done");
    callback();
  }, 1000);
};


step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps complete!");
    });
  });
});
