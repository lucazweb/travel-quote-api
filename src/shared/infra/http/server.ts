import "reflect-metadata";
import "@shared/container";
import { AppDataSource } from "@datasource/index";
import { app } from "./app";

const PORT = 8080;
AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
