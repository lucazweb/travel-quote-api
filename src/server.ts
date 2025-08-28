import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { AppDataSource } from "./database";
const PORT = 8080;

AppDataSource.initialize()
  .then(() => {
    const app = express();

    app.use(
      cors({
        origin: "http://localhost:5173",
      })
    );
    app.use(express.json());
    app.use(routes);

    app.listen(PORT, () => {
      console.log(`running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
