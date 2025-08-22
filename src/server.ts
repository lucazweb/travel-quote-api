import express from "express";
import { quotesRoutes } from "./routes/quotes.routes";

const PORT = 4005;
const app = express();

app.use(express.json());
app.use("/quotes", quotesRoutes);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
