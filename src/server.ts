import express from "express";
import { routes } from "./routes";

const PORT = 4005;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
