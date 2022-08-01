import express from "express";
import { BOXS_DIRECTORY_PATH, PORT } from "./config";
import getDirSizes from "./lib/getDirSizes";
import path from "path";

(async () => {
  const app = express();

  // check environments
  if (!process.env.SECURITY_KEY) {
    throw new Error("SECURITY_KEY is not defined");
  }

  app.get("/*", (req, res) => {
    // check if bearer is correct
    if (req.headers.authorization !== process.env.SECURITY_KEY) {
      res.status(401).send("Unauthorized");
      return;
    }

    // get directory in query
    const directory = req.path.split("/")[1];

    // get directory size
    try {
      const size = getDirSizes(path.join(BOXS_DIRECTORY_PATH, directory));

      res.json(size);
    } catch (e) {
      res.json([]);
    }
  });

  app.listen(PORT, () => {
    console.info(`Server is listening on port http://localhost:${PORT}/.`);
  });
})();
