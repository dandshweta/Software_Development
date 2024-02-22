export const getFile = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("my file path");
    }, 10000);
  });
};
