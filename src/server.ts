import express from "express";
import cors from "cors";
import { routes } from "./routes";

const PORT = 8080;
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
