import express from "express";
import cors from "cors";
import { routes } from "../routes";
import swaggerUI from "swagger-ui-express";
import swaggerDocs from "../../../../swagger.json";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(routes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

export { app };
