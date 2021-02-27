const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    (true) ? resolve("hey!") : reject("ups");
  });
};

somethingWillHappen().then(console.log).catch(console.error);

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve("true");
      }, 2000);
    } else {
      const error = new Error("Whoooops!");
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((resolve) => console.log(resolve))
  .catch((err) => console.log(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => {
    console.log("Array de resultados", response);
  })
  .catch((err) => {
    console.err(err);
  });
