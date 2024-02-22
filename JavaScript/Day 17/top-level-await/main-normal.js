import { getFile } from "./file.js";

let file = null(async () => {
  file = await getFile();
  console.log({ myFile });
})();
